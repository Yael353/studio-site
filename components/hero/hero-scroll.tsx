"use client";

import { motion } from "framer-motion";

export function HeroScroll({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: reducedMotion ? 0 : 1,
        delay: reducedMotion ? 0 : 1.2,
      }}
      className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-10"
    >
      <span className="whitespace-nowrap font-sans text-[10px] uppercase tracking-[0.25em] text-canvas/65">
        Scrolla för att utforska
      </span>

      <div className="relative h-10 w-px overflow-hidden bg-canvas/25">
        <motion.div
          aria-hidden="true"
          animate={reducedMotion ? undefined : { y: ["-100%", "200%"] }}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="absolute inset-x-0 top-0 h-5 bg-canvas/90"
        />
      </div>
    </motion.div>
  );
}
