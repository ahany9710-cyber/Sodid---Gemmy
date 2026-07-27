import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  agencyDisclaimerAr,
  agencyDisclaimerEn,
  privacyCopyAr,
  privacyCopyEn,
} from '../data/legalCopy';

type PrivacyLocale = 'en' | 'ar';

const PrivacyPolicy = ({ locale = 'en' }: { locale?: PrivacyLocale }) => {
  const isAr = locale === 'ar';
  const c = isAr ? privacyCopyAr : privacyCopyEn;
  const disclaimer = isAr ? agencyDisclaimerAr : agencyDisclaimerEn;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = c.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? null;
    metaDesc?.setAttribute('content', c.metaDescription);
    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) metaDesc?.setAttribute('content', prevDesc);
    };
  }, [c.metaDescription, c.metaTitle]);

  return (
    <main
      className={`bg-white px-6 py-16 md:px-16 md:py-24 ${isAr ? 'font-arabic' : ''}`}
      dir={isAr ? 'rtl' : 'ltr'}
      lang={isAr ? 'ar' : 'en'}
    >
      <article className="mx-auto max-w-3xl">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Link
            to={isAr ? '/ar' : '/'}
            className="text-sm font-semibold text-zinc-600 underline-offset-4 hover:text-black hover:underline"
          >
            {c.backHome}
          </Link>
          <span className="text-zinc-300">·</span>
          <Link
            to={c.langFlipTo}
            className="text-sm font-semibold text-zinc-600 underline-offset-4 hover:text-black hover:underline"
          >
            {c.langFlip}
          </Link>
        </div>

        <p className="text-[11px] font-semibold tracking-wider text-zinc-500">Flair Agency</p>
        <h1 className={`mt-3 text-3xl font-bold text-black md:text-5xl ${isAr ? '' : 'font-heading'}`}>
          {c.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500">{c.updated}</p>
        <p className="mt-6 text-sm leading-relaxed text-zinc-700 md:text-base">{c.intro}</p>

        <aside className="mt-8 border border-zinc-200 bg-stone-50 p-5 text-sm leading-relaxed text-zinc-700">
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">
            {isAr ? 'إخلاء مسؤولية' : 'Disclaimer'}
          </p>
          <p className="mt-2">{disclaimer}</p>
        </aside>

        <div className="mt-10 space-y-8">
          {c.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-lg font-bold text-black md:text-xl">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 md:text-base">{s.p}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicy;
