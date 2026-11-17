"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  easeIn,
  easeInOut,
  easeOut,
} from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [1.3, 1]);

  return (
    <section
      ref={ref}
      className="relative flex  min-h-screen items-center overflow-hidden bg-#faf7f2"
    >
      {/* Bild */}
      <motion.div
        style={shouldReduceMotion ? undefined : { scale }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-img.jpg"
          alt="En uppsättning för arbete"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center md:px-12"
      >
        <h1 className="font-serif text-4xl leading-tight text-canvas md:text-5xl lg:text-6xl">
          Komplexitet, förenklad.
        </h1>
        <p className="mt-6 max-w-xl font-sans text-lg text-canvas/80">
          Skräddarsydda webbplatser där varje detalj är medveten, från första
          pixel till sista interaktion.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            href="#projekt"
            className="rounded-button bg-accent px-6 py-3 font-sans text-sm font-medium text-canvas transition-opacity hover:opacity-90"
          >
            Se mina projekt
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            href="#kontakt"
            className="font-sans text-sm text-canvas underline-offset-4 hover:underline"
          >
            Tjänster
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
