"use client";

import Image from "next/image";
import { motion, type MotionValue } from "framer-motion";

type Props = {
  scale: MotionValue<number>;
  reducedMotion: boolean;
};

export function HeroBackground({ scale, reducedMotion }: Props) {
  return (
    <>
      {/* bild */}
      <motion.div
        style={reducedMotion ? undefined : { scale }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/images/heroimg.jpg"
          alt="Arbetsplats med datorskärmar, rött bakgrundsljus och anteckningar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Lager */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(12,10,10,0.76)_0%,rgba(12,10,10,0.55)_48%,rgba(12,10,10,0.35)_100%)]"
      />

      {/* övergång */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/20 via-transparent to-black/70"
      />
    </>
  );
}
