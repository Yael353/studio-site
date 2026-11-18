"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // parallax
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="
        relative isolate flex
        min-h-screen min-h-[100svh]
        items-center overflow-hidden
        bg-[#111010]
      "
    >
      {/* Bild */}
      <motion.div
        style={shouldReduceMotion ? undefined : { scale: imageScale }}
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

      {/* Bild lager*/}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-10
          bg-[radial-gradient(ellipse_at_center,rgba(12,10,10,0.76)_0%,rgba(12,10,10,0.55)_48%,rgba(12,10,10,0.35)_100%)]
        "
      />

      {/* Övergång */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-10
          bg-linear-to-b
          from-black/20 via-transparent
          to-black/70
        "
      />

      {/* Huvudinnehåll */}
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: contentY,
                opacity: contentOpacity,
              }
        }
        className="
          relative z-10 mx-auto
          flex w-full max-w-5xl
          flex-col items-center
          px-6 py-32 text-center
          md:px-12
        "
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease,
          }}
          className="
            mb-9 flex items-center
            justify-center gap-4
          "
        >
          <span
            className="
              h-px w-7
              bg-canvas/50
            "
          />

          <span
            className="
              font-sans text-[10px]
              font-medium uppercase
              tracking-[0.3em]
              text-canvas/75
              sm:text-xs
            "
          >
            Strategi · Design · Utveckling
          </span>

          <span
            className="
              h-px w-7
              bg-canvas/50
            "
          />
        </motion.div>

        {/* RUBRIK */}
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 45 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease,
          }}
          className="
            max-w-4xl
            font-serif font-medium
            text-[clamp(2.75rem,7vw,6.5rem)]
            leading-[1.08]
            tracking-[-0.035em]
            text-canvas
          "
        >
          Komplexitet, <span className="italic font-normal">förenklad.</span>
        </motion.h1>

        {/* UNDERRUBRIK */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.45,
            ease,
          }}
          className="
            mt-8 max-w-xl
            font-sans text-base
            leading-relaxed
            text-canvas/85
            md:text-lg
          "
        >
          Skräddarsydda webbplatser där varje detalj är medveten, från första
          pixel till sista interaktion.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.65,
            ease,
          }}
          className="
            mt-11 flex flex-wrap
            items-center justify-center
            gap-7
          "
        >
          {/* Primär knapp */}
          <motion.a
            href="#projekt"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            transition={{
              duration: 0.25,
              ease,
            }}
            className="
              group relative inline-flex
              items-center justify-center
              gap-3 overflow-hidden
              rounded-button
              bg-accent px-7 py-3.5
              font-sans text-sm font-medium
              text-canvas
              transition-colors duration-300
              hover:brightness-110
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-canvas
            "
          >
            <span className="relative z-10">Se mina projekt</span>
          </motion.a>

          {/* Tjänster */}
          <a
            href="#kontakt"
            className="
              group inline-flex
              items-center gap-2
              font-sans text-sm
              text-canvas/90
              transition-colors duration-300
              hover:text-canvas
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-canvas
            "
          >
            <span
              className="
                border-b border-canvas/40
                pb-1 transition-colors
                duration-300
                group-hover:border-canvas
              "
            >
              Tjänster
            </span>

            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="
          pointer-events-none
          absolute bottom-8 left-1/2
          z-10 flex -translate-x-1/2
          flex-col items-center gap-3
          md:bottom-10
        "
      >
        <span
          className="
            whitespace-nowrap
            font-sans text-[10px]
            uppercase tracking-[0.25em]
            text-canvas/65
          "
        >
          Scrolla för att utforska
        </span>

        <div
          className="
            relative h-10 w-px
            overflow-hidden
            bg-canvas/25
          "
        >
          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: ["-100%", "200%"],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute inset-x-0 top-0
              h-5 bg-canvas/90
            "
          />
        </div>
      </motion.div>
    </section>
  );
}
