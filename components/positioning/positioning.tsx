"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { PositioningHeading } from "./positioning-heading";
import { PositioningProcess } from "./positioning-process";
import { PositioningDrive } from "./positioning-drive";

export default function Positioning() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ellipseY = useTransform(scrollYProgress, [0, 1], [-80, 110]);
  const ellipseRotate = useTransform(scrollYProgress, [0, 1], [-25, 15]);
  const secondY = useTransform(scrollYProgress, [0, 1], [40, -65]);
  const glowY = useTransform(scrollYProgress, [0, 1], [-40, 75]);

  return (
    <section
      ref={ref}
      id="positionering"
      className="relative isolate overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* bakgrundsljus */}
      <motion.div
        aria-hidden="true"
        style={{ y: reducedMotion ? 0 : glowY }}
        className="pointer-events-none absolute -right-[15%] top-[4%] -z-10 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(185,155,112,0.20)_0%,rgba(185,155,112,0.07)_45%,transparent_72%)] blur-3xl md:h-[850px] md:w-[850px]"
      />

      {/* ellipser */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-[6%] -z-10 hidden h-[520px] w-[650px] md:block lg:right-[-5%]"
      >
        <motion.div
          style={{
            y: reducedMotion ? 0 : ellipseY,
            rotate: reducedMotion ? -20 : ellipseRotate,
          }}
          className="absolute inset-0 rounded-[50%] border border-[#B99B70]/45"
        />

        <motion.div
          style={{ y: reducedMotion ? 0 : secondY }}
          className="absolute left-[8%] top-[18%] h-[70%] w-[85%] rotate-[28deg] rounded-[50%] border border-[#B99B70]/30"
        />

        <motion.div
          style={{ y: reducedMotion ? 0 : ellipseY }}
          className="absolute left-[25%] top-[-3%] h-[100%] w-[55%] rotate-[-24deg] rounded-[50%] border border-[#B99B70]/20"
        />

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B99B70]/50 shadow-[0_0_30px_rgba(185,155,112,0.35)]" />
      </div>

      {/* innehåll */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <PositioningHeading reducedMotion={reducedMotion} />

        <PositioningProcess reducedMotion={reducedMotion} />

        <PositioningDrive reducedMotion={reducedMotion} />
      </div>
    </section>
  );
}
