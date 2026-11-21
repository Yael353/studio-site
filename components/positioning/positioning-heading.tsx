"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const headline =
  "Vill du synas? Jag hjälper dig lämna ett avtryck i marknaden.";

const words = headline.split(" ");

const letterAnimation = {
  hidden: { y: "110%", rotate: -6, opacity: 0 },
  visible: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.6, ease },
  },
};

export function PositioningHeading({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  return (
    <div className="relative max-w-4xl py-12 md:py-20">
      {/* bakgrundssiffra */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 -top-10 select-none font-serif text-[clamp(12rem,28vw,27rem)] leading-none tracking-tighter text-ink/[0.045] md:-left-12"
      >
        01
      </span>

      <div className="relative z-10">
        <motion.span
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-7 block font-sans text-xs font-medium uppercase tracking-[0.3em] text-ink-muted"
        >
          01 / Positionering
        </motion.span>

        {/* rubrik */}
        <motion.h2
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.025,
                delayChildren: 0.15,
              },
            },
          }}
          className="max-w-3xl font-serif text-3xl leading-tight text-ink md:text-4xl lg:text-5xl"
        >
          <span className="sr-only">{headline}</span>

          <span aria-hidden="true">
            {words.map((word, index) => (
              <span key={index}>
                <span className="inline-block whitespace-nowrap">
                  {word.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden align-bottom"
                    >
                      <motion.span
                        variants={letterAnimation}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    </span>
                  ))}
                </span>

                {index === 2 ? (
                  <br />
                ) : index < words.length - 1 ? (
                  <span className="inline-block">&nbsp;</span>
                ) : null}
              </span>
            ))}
          </span>
        </motion.h2>

        {/* beskrivning */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-8 max-w-xl space-y-5 font-sans text-lg leading-relaxed text-ink-muted md:text-xl"
        >
          <p>
            Jag bygger webbplatser som förmedlar vem du är, vad du står för och
            varför kunder ska välja just dig.
          </p>

          <p>
            Från enkel företagspresentation till datadrivna dashboards. Jag tar
            ansvar för hela vägen, från design och gränssnitt till server och
            drift.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
