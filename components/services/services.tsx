"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceList } from "./service.list";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      id="tjanster"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-canvas px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40"
    >
      {/* bakgrundsljus */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-0 -z-10 h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(178,145,108,0.08),transparent_70%)]"
      />

      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 flex items-center justify-between border-b border-line pb-6"
        >
          <span className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-ink-muted">
            04 / Tjänster
          </span>
          <span className="hidden font-mono text-xs tracking-widest text-ink-muted sm:block">
            FRÅN IDÉ TILL DIGITAL NÄRVARO
          </span>
        </motion.div>

        {/* introduktion */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="mb-16 max-w-4xl lg:mb-24"
        >
          <span className="mb-7 block font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
            Vad behöver ditt företag?
          </span>
          <h2
            id="services-heading"
            className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-[-0.025em] text-ink md:text-5xl xl:text-6xl"
          >
            En stark digital närvaro börjar med{" "}
            <span className="italic font-normal">rätt grund.</span>
          </h2>
          <div className="mt-8 grid md:max-w-xl gap-5 md:gap-10">
            <p className="font-sans text-base leading-relaxed text-ink-muted md:text-lg">
              Det räcker inte alltid att bara finnas på nätet. Du behöver en
              plats som representerar ditt företag, når rätt människor och
              skapar förtroende.
            </p>
            <p className="font-sans text-base leading-relaxed text-ink-muted md:text-lg">
              Jag hjälper dig att ta fram en genomtänkt digital lösning, från
              första idé till färdig upplevelse.
            </p>
          </div>
          <div className="mt-10 h-px w-24 bg-ink/40" />
          <div className="mt-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            En partner genom hela processen
          </div>
        </motion.div>

        <ServiceList />

        {/* kontakt */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mt-28 flex flex-col items-start justify-between gap-8 border-t border-line pt-12 md:mt-36 md:flex-row md:items-center"
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              Nästa steg
            </span>
            <h3 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
              Har du en idé?
              <br />
              <span className="italic">Låt oss ge den liv.</span>
            </h3>
          </div>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-8 rounded-button bg-ink px-7 py-4 font-sans text-sm font-medium text-canvas transition-colors duration-300 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Berätta om ditt projekt
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
