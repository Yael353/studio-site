"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const steps = ["Du berättar", "Vi diskuterar", "Vi skapar"];

export function ContactIntro() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease }}
      className="flex flex-col lg:sticky lg:top-28 lg:self-start"
    >
      <span className="mb-7 font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
        Från tanke till verklighet
      </span>

      <h2
        id="contact-heading"
        className="max-w-xl font-serif text-4xl leading-[1.12] tracking-[-0.025em] text-ink md:text-5xl xl:text-6xl"
      >
        Varje bra idé börjar med ett <span className="italic font-normal">samtal.</span>
      </h2>

      <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-ink-muted">
        Har du en idé, en utmaning eller ett företag som behöver synas bättre?
        Berätta vad du har i tankarna.
      </p>
      <p className="mt-5 max-w-md font-sans text-lg leading-relaxed text-ink-muted">
        Du behöver inte ha alla svar. Det räcker med en början, så hittar vi
        vägen framåt tillsammans.
      </p>

      {/* processen */}
      <div className="mt-14 hidden max-w-sm border-t border-line pt-8 lg:block">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-6 py-3">
            <span className="font-mono text-xs text-ink-muted/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-sans text-sm text-ink-muted">{step}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
