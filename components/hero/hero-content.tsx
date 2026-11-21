"use client";

import { motion, type MotionValue } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  reducedMotion: boolean;
};

export function HeroContent({ y, opacity, reducedMotion }: Props) {
  const reveal = (distance: number, delay: number, duration = 0.9) => ({
    initial: reducedMotion ? false : { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease },
  });

  return (
    <motion.div
      style={reducedMotion ? undefined : { y, opacity }}
      className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-32 text-center md:px-12"
    >
      {/* etikett */}
      <motion.div
        {...reveal(16, 0.1, 0.8)}
        className="mb-9 flex items-center justify-center gap-4"
      >
        <span className="h-px w-7 bg-canvas/50" />

        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-canvas/75 sm:text-xs">
          Strategi · Design · Utveckling
        </span>

        <span className="h-px w-7 bg-canvas/50" />
      </motion.div>

      {/* rubrik */}
      <motion.h1
        {...reveal(45, 0.2, 1)}
        className="max-w-4xl font-serif text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-canvas"
      >
        Komplexitet, <span className="italic font-normal">förenklad.</span>
      </motion.h1>

      {/* beskrivning */}
      <motion.p
        {...reveal(24, 0.45)}
        className="mt-8 max-w-xl font-sans text-base leading-relaxed text-canvas/85 md:text-lg"
      >
        Skräddarsydda webbplatser där varje detalj är medveten, från första
        pixel till sista interaktion.
      </motion.p>

      {/* länkar */}
      <motion.div
        {...reveal(24, 0.65)}
        className="mt-11 flex flex-wrap items-center justify-center gap-7"
      >
        <motion.a
          href="#projekt"
          whileHover={reducedMotion ? undefined : { y: -2 }}
          whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.25, ease }}
          className="inline-flex items-center justify-center gap-3 rounded-button bg-accent px-7 py-3.5 font-sans text-sm font-medium text-canvas transition-colors duration-300 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-canvas"
        >
          Se mina projekt
        </motion.a>

        <a
          href="#tjanster"
          className="group inline-flex items-center gap-2 font-sans text-sm text-canvas/90 transition-colors duration-300 hover:text-canvas focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-canvas"
        >
          <span className="border-b border-canvas/40 pb-1 transition-colors duration-300 group-hover:border-canvas">
            Tjänster
          </span>

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            ↗
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
}
