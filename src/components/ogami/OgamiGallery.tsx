import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useOgamiPage } from '../../contexts/OgamiLocaleContext';

const AUTO_MS = 2000;

const OgamiGallery = () => {
  const { copy, fontClass, locale } = useOgamiPage();
  const g = copy.gallery;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const isRtl = locale === 'ar';
  const slideCount = g.slides.length;

  useEffect(() => {
    if (paused || slideCount < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slideCount);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, slideCount, index]);

  const slide = g.slides[index];
  const goTo = (i: number) => setIndex(i);
  const goPrev = () => setIndex((i) => (i - 1 + slideCount) % slideCount);
  const goNext = () => setIndex((i) => (i + 1) % slideCount);
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <section id="ogami-gallery" className="bg-white px-6 py-16 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{g.eyebrow}</p>
          <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl`}>
            {g.title}
          </h2>
          <p className={`${fontClass} mt-4 text-sm leading-relaxed text-zinc-600 md:text-base`}>{g.lead}</p>
        </motion.div>

        <div
          className="relative mx-auto max-w-5xl overflow-hidden bg-stone-100 shadow-lg ring-1 ring-zinc-200"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="relative aspect-[16/10] w-full md:aspect-[16/9]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={slide.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={slide.src}
                  alt={slide.caption}
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5 md:p-8">
                  <p className={`${fontClass} text-sm font-semibold text-white md:text-base`}>{slide.caption}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            className={`absolute top-1/2 z-10 -translate-y-1/2 border border-white/30 bg-black/35 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/55 ${
              isRtl ? 'right-3 md:right-5' : 'left-3 md:left-5'
            }`}
          >
            <PrevIcon size={20} strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            className={`absolute top-1/2 z-10 -translate-y-1/2 border border-white/30 bg-black/35 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/55 ${
              isRtl ? 'left-3 md:left-5' : 'right-3 md:right-5'
            }`}
          >
            <NextIcon size={20} strokeWidth={2} />
          </button>

          <div
            className={`absolute bottom-3 z-10 flex gap-2 ${isRtl ? 'left-4 md:left-6' : 'right-4 md:right-6'} md:bottom-5`}
            role="tablist"
            aria-label={g.eyebrow}
          >
            {g.slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${i + 1} / ${slideCount}`}
                onClick={() => goTo(i)}
                className={`h-2.5 min-h-[10px] min-w-[10px] rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-x-0 top-0 z-10 h-0.5 bg-black/20">
            <motion.div
              key={`progress-${slide.id}-${paused}`}
              className="h-full bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: paused ? 0 : 1 }}
              transition={
                paused ? { duration: 0 } : { duration: AUTO_MS / 1000, ease: 'linear' }
              }
              style={{ transformOrigin: isRtl ? 'right' : 'left' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OgamiGallery;
