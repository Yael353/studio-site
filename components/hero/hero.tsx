"use client";

import { useRef } from "react";
import { useScroll, useTransform, useReducedMotion } from "framer-motion";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroScroll } from "./hero-scroll";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#111010]"
    >
      <HeroBackground scale={imageScale} reducedMotion={reducedMotion} />

      <HeroContent
        y={contentY}
        opacity={contentOpacity}
        reducedMotion={reducedMotion}
      />

      <HeroScroll reducedMotion={reducedMotion} />
    </section>
  );
}
