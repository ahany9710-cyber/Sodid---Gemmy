/**
 * Google Ads sitelink anchors for the Ogami / Bloom Island landing.
 *
 * Use on the live domain, e.g.:
 *   https://flair-sodic.com/#units
 *   https://flair-sodic.com/#brochure
 *   https://flair-sodic.com/en/#gallery
 */

export const OGAMI_ANCHORS = {
  hero: 'hero',
  units: 'units',
  brochure: 'brochure',
  offer: 'offer',
  location: 'location',
  masterplan: 'masterplan',
  gallery: 'gallery',
  faq: 'faq',
} as const;

export type OgamiAnchorId = (typeof OGAMI_ANCHORS)[keyof typeof OGAMI_ANCHORS];

/** Nav + Ads sitelink definitions (AR home is `/`, EN is `/en`). */
export const ogamiSitelinksAr = [
  { id: OGAMI_ANCHORS.units, label: 'الوحدات', href: '/#units' },
  { id: OGAMI_ANCHORS.location, label: 'الموقع', href: '/#location' },
  { id: OGAMI_ANCHORS.masterplan, label: 'الماستر بلان', href: '/#masterplan' },
  { id: OGAMI_ANCHORS.gallery, label: 'المعرض', href: '/#gallery' },
  { id: OGAMI_ANCHORS.faq, label: 'الأسئلة', href: '/#faq' },
  { id: OGAMI_ANCHORS.brochure, label: 'البروشور', href: '/#brochure' },
] as const;

export const ogamiSitelinksEn = [
  { id: OGAMI_ANCHORS.units, label: 'Homes', href: '/en/#units' },
  { id: OGAMI_ANCHORS.location, label: 'Location', href: '/en/#location' },
  { id: OGAMI_ANCHORS.masterplan, label: 'Masterplan', href: '/en/#masterplan' },
  { id: OGAMI_ANCHORS.gallery, label: 'Gallery', href: '/en/#gallery' },
  { id: OGAMI_ANCHORS.faq, label: 'FAQ', href: '/en/#faq' },
  { id: OGAMI_ANCHORS.brochure, label: 'Brochure', href: '/en/#brochure' },
] as const;

/** In-page hash links for headers (same page). */
export const ogamiSectionNavAr = [
  { href: `#${OGAMI_ANCHORS.units}`, label: 'الوحدات' },
  { href: `#${OGAMI_ANCHORS.location}`, label: 'الموقع' },
  { href: `#${OGAMI_ANCHORS.gallery}`, label: 'المعرض' },
  { href: `#${OGAMI_ANCHORS.brochure}`, label: 'البروشور' },
] as const;

export const ogamiSectionNavEn = [
  { href: `#${OGAMI_ANCHORS.units}`, label: 'Homes' },
  { href: `#${OGAMI_ANCHORS.location}`, label: 'Location' },
  { href: `#${OGAMI_ANCHORS.gallery}`, label: 'Gallery' },
  { href: `#${OGAMI_ANCHORS.brochure}`, label: 'Brochure' },
] as const;
