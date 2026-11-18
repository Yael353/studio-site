"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    number: "01",
    label: "Webbdesign & utveckling",
    tagline: "En webbplats som arbetar för dig.",
    description:
      "Din webbplats är ofta det första mötet mellan dig och en potentiell kund. Jag skapar skräddarsydda, användarvänliga webbplatser som speglar ditt företag, inger förtroende och gör det enkelt för besökaren att ta nästa steg.",
    benefits: [
      "Ett professionellt första intryck",
      "Anpassad för mobil, surfplatta och dator",
      "Tydliga vägar från besökare till kund",
    ],
    keyword: "Upplevelse",
  },
  {
    number: "02",
    label: "SEO & synlighet",
    tagline: "Bli hittad av rätt människor.",
    description:
      "SEO står för sökmotoroptimering. Det handlar om att göra din webbplats lättare för sökmotorer att förstå och för människor att hitta. Genom tydlig struktur, relevant innehåll och en genomtänkt teknisk grund förbättrar vi förutsättningarna att synas när kunder söker efter det du erbjuder.",
    benefits: [
      "Större möjlighet att synas i sökresultat",
      "Nå kunder som redan söker dina tjänster",
      "Bygg långsiktig synlighet utan att enbart förlita dig på annonser",
    ],
    keyword: "Synlighet",
  },
  {
    number: "03",
    label: "Teknik & vidareutveckling",
    tagline: "Byggt för idag. Redo för imorgon.",
    description:
      "En bra digital lösning ska inte bara se bra ut. Den ska fungera smidigt, vara säker och kunna utvecklas när behoven förändras. Jag hjälper dig med allt från teknisk optimering till skräddarsydda funktioner, integrationer och webbapplikationer.",
    benefits: [
      "Snabbare och smidigare användarupplevelse",
      "Funktioner anpassade efter verksamheten",
      "En teknisk grund som går att vidareutveckla",
    ],
    keyword: "Utveckling",
  },
] as const;

type ServiceIndex = 0 | 1 | 2;

export default function Services() {
  const [active, setActive] = useState<ServiceIndex>(0);
  const reducedMotion = useReducedMotion();
  const service = services[active];

  return (
    <section
      id="tjanster"
      aria-labelledby="services-heading"
      className="
        relative isolate overflow-hidden
        bg-canvas px-6 py-24
        md:px-12 md:py-32
        lg:px-20 lg:py-40
      "
    >
      {/* Diskret bakgrundsljus */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-48 top-0 -z-10
          h-[650px] w-[650px]
          rounded-full
          bg-[radial-gradient(circle,rgba(178,145,108,0.08),transparent_70%)]
        "
      />

      <div className="mx-auto max-w-[1440px]">
        {/* Övre sektionsetikett */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="
            mb-14 flex items-center
            justify-between border-b
            border-line pb-6
          "
        >
          <span
            className="
              font-sans text-xs font-medium
              uppercase tracking-[0.3em]
              text-ink-muted
            "
          >
            04 / Tjänster
          </span>

          <span
            className="
              hidden font-mono text-xs
              tracking-widest text-ink-muted
              sm:block
            "
          >
            FRÅN IDÉ TILL DIGITAL NÄRVARO
          </span>
        </motion.div>

        {/* Huvudlayout */}
        <div
          className="
            grid gap-16
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
            xl:gap-28
          "
        >
          {/* VÄNSTER: INTRODUKTION */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{ duration: 0.9, ease }}
            >
              <span
                className="
                  mb-7 block
                  font-mono text-xs
                  uppercase tracking-[0.25em]
                  text-ink-muted
                "
              >
                Vad behöver ditt företag?
              </span>

              <h2
                id="services-heading"
                className="
                  max-w-xl font-serif
                  text-4xl leading-[1.12]
                  tracking-[-0.025em]
                  text-ink
                  md:text-5xl
                  xl:text-6xl
                "
              >
                En stark digital närvaro börjar med{" "}
                <span className="italic font-normal">rätt grund.</span>
              </h2>

              <p
                className="
                  mt-8 max-w-md font-sans
                  text-lg leading-relaxed
                  text-ink-muted
                "
              >
                Det räcker inte alltid att bara finnas på nätet. Du behöver en
                plats som representerar ditt företag, når rätt människor och
                skapar förtroende.
              </p>

              <p
                className="
                  mt-5 max-w-md font-sans
                  text-lg leading-relaxed
                  text-ink-muted
                "
              >
                Jag hjälper dig att ta fram en genomtänkt digital lösning, från
                första idé till färdig upplevelse.
              </p>
            </motion.div>

            {/* Liten dekorativ linje */}
            <motion.div
              initial={reducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                delay: 0.3,
                ease,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                mt-12 h-px w-24
                bg-ink/40
              "
            />

            <div
              className="
                mt-7 flex items-center gap-3
                font-mono text-[11px]
                uppercase tracking-[0.18em]
                text-ink-muted
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              En partner genom hela processen
            </div>
          </div>

          {/* HÖGER: INTERAKTIVA TJÄNSTER */}
          <div className="min-w-0">
            {/* Tjänstemeny */}
            <div className="border-t border-line">
              {services.map((item, index) => {
                const selected = active === index;

                return (
                  <button
                    key={item.number}
                    type="button"
                    aria-expanded={selected}
                    aria-controls="service-detail"
                    onClick={() => setActive(index as ServiceIndex)}
                    className="
                      group flex w-full
                      items-center gap-5
                      border-b border-line
                      py-6 text-left
                      transition-colors duration-300
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-[-2px]
                      focus-visible:outline-accent
                      md:gap-8 md:py-8
                    "
                  >
                    <span
                      className={`
                        font-mono text-xs
                        transition-colors duration-300
                        ${selected ? "text-ink" : "text-ink-muted/60"}
                      `}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`
                        flex-1 font-serif
                        text-xl leading-tight
                        transition-colors duration-300
                        md:text-2xl xl:text-3xl
                        ${
                          selected
                            ? "text-ink"
                            : "text-ink-muted group-hover:text-ink"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`
                        flex h-10 w-10
                        shrink-0 items-center
                        justify-center rounded-full
                        border transition-all duration-300
                        ${
                          selected
                            ? "rotate-45 border-ink bg-ink text-canvas"
                            : "border-line text-ink-muted group-hover:border-ink"
                        }
                      `}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-4 w-4"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Aktiv tjänst */}
            <div
              id="service-detail"
              role="region"
              aria-label={service.label}
              aria-live="polite"
              className="pt-10"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.35,
                    ease,
                  }}
                >
                  {/* Illustration */}
                  <div
                    className="
                      relative mb-9 overflow-hidden
                      rounded-card border
                      border-line bg-[#F0EBE3]
                    "
                  >
                    <div
                      className="
                        relative flex min-h-[260px]
                        items-center justify-center
                        px-6 py-12
                        sm:min-h-[320px]
                      "
                    >
                      {active === 0 && <WebsiteVisual />}
                      {active === 1 && <SeoVisual />}
                      {active === 2 && <TechVisual />}

                      <span
                        className="
                          absolute bottom-5 left-6
                          font-mono text-[10px]
                          uppercase tracking-[0.2em]
                          text-[#746B60]
                        "
                      >
                        {service.keyword} / {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="max-w-2xl">
                    <h3
                      className="
                        font-serif text-2xl
                        leading-tight text-ink
                        md:text-3xl
                      "
                    >
                      {service.tagline}
                    </h3>

                    <p
                      className="
                        mt-5 font-sans
                        text-base leading-[1.85]
                        text-ink-muted
                        md:text-lg
                      "
                    >
                      {service.description}
                    </p>

                    <div
                      className="
                        mt-9 border-t
                        border-line pt-7
                      "
                    >
                      <span
                        className="
                          font-mono text-[11px]
                          uppercase tracking-[0.2em]
                          text-ink-muted
                        "
                      >
                        Vad det betyder för dig
                      </span>

                      <ul className="mt-5 space-y-4">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="
                              flex items-start gap-4
                              font-sans text-sm
                              leading-relaxed text-ink
                              md:text-base
                            "
                          >
                            <span
                              aria-hidden="true"
                              className="
                                mt-[9px] h-1.5 w-1.5
                                shrink-0 rounded-full
                                bg-accent
                              "
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* AVSLUTANDE CTA */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{ duration: 0.8, ease }}
          className="
            mt-28 flex flex-col
            items-start justify-between
            gap-8 border-t border-line
            pt-12
            md:mt-36 md:flex-row
            md:items-center
          "
        >
          <div>
            <span
              className="
                font-mono text-[11px]
                uppercase tracking-[0.2em]
                text-ink-muted
              "
            >
              Nästa steg
            </span>

            <h3
              className="
                mt-4 font-serif
                text-3xl leading-tight
                text-ink md:text-4xl
              "
            >
              Har du en idé?
              <br />
              <span className="italic">Låt oss ge den liv.</span>
            </h3>
          </div>

          <a
            href="#kontakt"
            className="
              group inline-flex
              items-center gap-8
              rounded-button bg-ink
              px-7 py-4
              font-sans text-sm
              font-medium text-canvas
              transition-colors duration-300
              hover:bg-accent
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-accent
            "
          >
            Berätta om ditt projekt
            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
                motion-reduce:transition-none
              "
            >
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   VISUAL 01 – WEBBDESIGN
============================================ */

function WebsiteVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        relative w-full max-w-[390px]
        rotate-[-2deg]
        rounded-lg border border-[#D3C9BC]
        bg-white p-3
        shadow-[0_20px_60px_rgba(57,42,25,0.10)]
      "
    >
      {/* Browserfält */}
      <div className="mb-5 flex items-center gap-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-[#BCAFA0]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#D5CCC1]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#E9E2D9]" />

        <div
          className="
            ml-5 h-3 flex-1
            rounded-sm bg-[#F3F0EB]
          "
        />
      </div>

      {/* Webbplatsmockup */}
      <div className="bg-[#F5F1EB] p-5 sm:p-7">
        <div className="mb-8 flex items-center justify-between">
          <div className="font-serif text-sm text-[#34312C]">Studio.</div>

          <div className="flex gap-2">
            <div className="h-1 w-5 bg-[#C7BEB2]" />
            <div className="h-1 w-5 bg-[#C7BEB2]" />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-4">
          <div>
            <div className="font-serif text-xl leading-tight text-[#34312C] sm:text-2xl">
              Form möter funktion.
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-1 w-full bg-[#D6CFC5]" />
              <div className="h-1 w-4/5 bg-[#D6CFC5]" />
              <div className="h-1 w-3/5 bg-[#D6CFC5]" />
            </div>

            <div className="mt-5 h-5 w-20 bg-[#423D36]" />
          </div>

          <div
            className="
              flex aspect-[4/5]
              items-center justify-center
              bg-[#D9CCBD]
            "
          >
            <div
              className="
                h-2/3 w-2/3
                rotate-[-16deg]
                rounded-full
                border border-[#A48D76]
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   VISUAL 02 – SEO
============================================ */

function SeoVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        w-full max-w-[380px]
        rounded-xl border border-[#D8CEC1]
        bg-white p-5
        shadow-[0_20px_60px_rgba(57,42,25,0.09)]
        sm:p-7
      "
    >
      {/* Sökfält */}
      <div
        className="
          flex items-center gap-3
          rounded-full border
          border-[#E5DED5]
          px-4 py-3
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#837569"
          strokeWidth="1.7"
          className="h-4 w-4 shrink-0"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>

        <span className="truncate font-sans text-xs text-[#534B43]">
          företag nära mig
        </span>
      </div>

      {/* Sökresultatillustration */}
      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-[#E6D8C5]" />
            <div className="h-1.5 w-24 bg-[#D4C9BC]" />
          </div>

          <div className="font-sans text-sm font-semibold text-[#514837]">
            Ditt företag – Din lösning
          </div>

          <div className="mt-2 space-y-1.5">
            <div className="h-1 w-full bg-[#E2DCD4]" />
            <div className="h-1 w-4/5 bg-[#E2DCD4]" />
          </div>
        </div>

        <div className="border-t border-[#EFEAE3] pt-4 opacity-55">
          <div className="mb-3 h-1.5 w-24 bg-[#D6CBC0]" />
          <div className="h-2 w-3/4 bg-[#B8AB9B]" />
          <div className="mt-3 h-1 w-full bg-[#E2DCD4]" />
        </div>
      </div>

      <div
        className="
          mt-5 flex items-center
          justify-between rounded-md
          bg-[#F1ECE4] px-4 py-3
        "
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#706456]">
          Organisk synlighet
        </span>
        <span className="text-[#74614A]">↗</span>
      </div>
    </div>
  );
}

/* ============================================
   VISUAL 03 – TEKNIK & UTVECKLING
============================================ */

function TechVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        w-full max-w-[390px]
        rounded-lg border border-[#D7CEC2]
        bg-[#282622] p-5
        shadow-[0_20px_60px_rgba(57,42,25,0.14)]
        sm:p-7
      "
    >
      <div
        className="
          mb-6 flex items-center
          justify-between border-b
          border-white/10 pb-4
        "
      >
        <span className="font-mono text-xs text-[#ECE5DA]">
          System overview
        </span>
        <span className="h-2 w-2 rounded-full bg-[#A6B99C]" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Design", value: "01" },
          { label: "System", value: "02" },
          { label: "Growth", value: "03" },
        ].map((item) => (
          <div
            key={item.label}
            className="
              border border-white/10
              bg-white/5 p-3
            "
          >
            <div className="font-mono text-[9px] text-white/50">
              {item.label}
            </div>
            <div className="mt-3 font-serif text-xl text-[#E6D8C5]">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Dekorativ graf */}
      <svg
        viewBox="0 0 320 90"
        className="mt-6 w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 70 C45 65 55 76 95 48 S160 62 202 30 S270 43 320 10"
          fill="none"
          stroke="#C6AE8E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M0 70 C45 65 55 76 95 48 S160 62 202 30 S270 43 320 10 V90 H0 Z"
          fill="#C6AE8E"
          fillOpacity="0.08"
        />
      </svg>

      <div className="mt-4 flex justify-between font-mono text-[10px] text-white/40">
        <span>BUILD</span>
        <span>OPTIMIZE</span>
        <span>SCALE</span>
      </div>
    </div>
  );
}
