"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Hero from "@/components/Hero";

const items = Array.from({ length: 12 }, (_, i) => i + 1);

export default function page() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <>
      <Hero />
      <section
        ref={ref}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        <motion.div
          style={shouldReduceMotion ? undefined : { y }}
          className="grid w-full max-w-4xl grid-cols-3 gap-4 md:grid-cols-4"
        >
          {items.map((n) => (
            <div
              key={n}
              className="flex aspect-square items-center justify-center rounded-card border border-line bg-canvas font-mono text-sm text-ink-muted"
            >
              {String(n).padStart(2, "0")}
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
