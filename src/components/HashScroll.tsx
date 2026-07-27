import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET_PX = 88;
const RETRY_MS = 100;
const MAX_ATTEMPTS = 40;

/** Legacy hashes → current section ids (Ads / old campaigns). */
const HASH_ALIASES: Record<string, string> = {
  'ogami-units': 'units',
  'ogami-location': 'location',
  'ogami-masterplan': 'masterplan',
  'ogami-gallery': 'gallery',
  'ogami-faq': 'faq',
  'lead-form': 'brochure',
  'lead-form-bottom': 'brochure',
  'brochure-bottom': 'brochure',
};

function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const raw = hash.replace(/^#/, '');
  if (!raw) return false;
  const id = HASH_ALIASES[raw] ?? raw;
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/**
 * Scrolls to URL hash on load / hash change.
 * Retries briefly so lazy-loaded landing sections can mount first (Ads sitelinks).
 */
const HashScroll = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    let attempts = 0;
    let timer = 0;

    const tryScroll = (behavior: ScrollBehavior) => {
      if (scrollToHash(hash, behavior)) return;
      attempts += 1;
      if (attempts >= MAX_ATTEMPTS) return;
      timer = window.setTimeout(() => tryScroll(behavior), RETRY_MS);
    };

    // Instant first paint for Ads landings, then smooth if user changes hash later
    const behavior: ScrollBehavior = attempts === 0 ? 'auto' : 'smooth';
    timer = window.setTimeout(() => tryScroll(behavior), 0);

    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) scrollToHash(window.location.hash, 'smooth');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return null;
};

export default HashScroll;
