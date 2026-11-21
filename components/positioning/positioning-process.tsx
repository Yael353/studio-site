"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Förstå",
    description: "Dina behov, mål och visioner.",
  },
  {
    number: "02",
    title: "Skapa",
    description: "Design, funktion och utveckling.",
  },
  {
    number: "03",
    title: "Utveckla",
    description: "Förbättra, anpassa och växa.",
  },
];

export function PositioningProcess({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  return (
    <div className="relative my-20 md:my-28">
      <div className="mb-10 flex items-center gap-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
          Från idé till resultat
        </span>

        <span className="h-px flex-1 bg-ink/10" />
      </div>

      {/* process */}
      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: reducedMotion ? 0 : 0.7,
              delay: reducedMotion ? 0 : index * 0.12,
              ease,
            }}
            className="relative border-t border-ink/15 pt-7"
          >
            <span className="mb-5 block font-mono text-xs text-accent">
              {step.number}
            </span>

            <h3 className="font-serif text-2xl text-ink md:text-3xl">
              {step.title}
            </h3>

            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-ink-muted md:text-base">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* avdelare */}
      <div className="mt-16 h-px bg-ink/10">
        <motion.div
          aria-hidden="true"
          initial={reducedMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 1.4,
            ease,
          }}
          className="h-full w-full origin-left bg-accent/60"
        />
      </div>
    </div>
  );
}
