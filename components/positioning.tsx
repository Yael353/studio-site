"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const headline =
  "Vill du synas? Jag hjälper dig lämna ett avtryck i marknaden.";

const ease = [0.22, 1, 0.36, 1] as const;

const words = headline.split(" ");
const breakAfterWord = 2;

// Hela textblocket animeras gemensamt
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: 0.3 },
  },
};

// Animation bokstäver
const headlineContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.15,
    },
  },
};

const letterAnimation = {
  hidden: {
    y: "110%",
    rotate: -6,
    opacity: 0,
  },
  visible: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

export default function Positioning() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // parallaxdjup
  const ellipseY = useTransform(scrollYProgress, [0, 1], [-100, 130]);
  const ellipseRotate = useTransform(scrollYProgress, [0, 1], [-20, 15]);
  const glowY = useTransform(scrollYProgress, [0, 1], [-50, 80]);

  return (
    <section
      ref={sectionRef}
      id="positionering"
      className="
        relative isolate overflow-hidden
        py-24 md:px-12 md:py-32 lg:px-20
      "
    >
      {/* BAKGRUND */}
      <motion.div
        aria-hidden="true"
        style={{
          y: shouldReduceMotion ? 0 : glowY,
        }}
        className="
          pointer-events-none absolute
          right-[-15%] top-[0%] -z-10
          h-125 w-125
          rounded-full
          bg-[radial-gradient(circle,rgba(185,155,112,0.16)_0%,rgba(185,155,112,0.06)_45%,transparent_72%)]
          blur-3xl
          md:h-200 md:w-200
        "
      />

      {/* DEKORATIVA ELLIPSER */}
      <motion.div
        aria-hidden="true"
        style={{
          y: shouldReduceMotion ? 0 : ellipseY,
          rotate: shouldReduceMotion ? -20 : ellipseRotate,
        }}
        className="
          pointer-events-none absolute
          right-[-12%] top-[8%] -z-10
          hidden h-105 w-150
          rounded-[50%]
          border border-ink/15
          md:block
        "
      />

      <motion.div
        aria-hidden="true"
        style={{
          y: shouldReduceMotion ? 0 : ellipseY,
        }}
        className=" text-center
          pointer-events-none absolute
          right-[-3%] top-[14%] -z-10
          hidden h-77.5 w-120
          rotate-25
          rounded-[50%]
          border border-ink/10
          md:block
        "
      />

      {/* Innehåll */}
      <div className="relative z-10 grid w-full md:grid-rows-2">
        {/* block 1 - Positionering */}
        <div
          className="
            flex flex-col justify-center
            px-10 text-center
            md:max-w-[70%]
            md:items-start md:pl-30 md:pr-0
            md:text-start
          "
        >
          {/* sektionsetikett */}
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="
              mb-7 block
              font-sans text-xs font-medium
              uppercase tracking-[0.3em]
              text-ink-muted
            "
          >
            01 / Positionering
          </motion.span>

          {/* Huvudrubrik */}
          <motion.h2
            variants={headlineContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            className="
              font-serif
              text-3xl leading-tight
              text-ink
              md:text-4xl
              lg:text-5xl
            "
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex}>
                <span className="inline-block whitespace-nowrap">
                  {word.split("").map((char, charIndex) => (
                    <span
                      key={charIndex}
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

                {wordIndex === breakAfterWord ? (
                  <br />
                ) : wordIndex < words.length - 1 ? (
                  <span className="inline-block">&nbsp;</span>
                ) : null}
              </span>
            ))}
          </motion.h2>

          {/* Brödtext */}
          <motion.div
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              delay: 0.3,
            }}
            className="mt-8 max-w-xl"
          >
            <p
              className="
                font-sans text-lg leading-relaxed
                text-ink-muted
                md:text-xl
              "
            >
              Jag bygger webbplatser som förmedlar vem du är, vad du står för
              och varför kunder ska välja just dig.
            </p>

            <p
              className="
                mt-5 font-sans text-lg
                leading-relaxed text-ink-muted
                md:text-xl
              "
            >
              Från enkel företagspresentation till datadrivna dashboards. Jag
              tar ansvar för hela vägen, från design och gränssnitt till server
              och drift.
            </p>
          </motion.div>
        </div>

        {/* ANIMERAD AVDELARE */}
        <div
          aria-hidden="true"
          className="
            relative my-16 px-10
            md:absolute md:inset-x-0
            md:top-1/2 md:my-0
            md:px-0
          "
        >
          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.3,
              ease,
            }}
            style={{ transformOrigin: "left" }}
            className="
              h-px w-full
              bg-ink/15
            "
          />
        </div>

        {/* Block 02 - Drivkraft */}
        <div
          className="
            flex flex-col
            px-10 text-center
            md:ml-auto md:max-w-[75%]
            md:items-start
            md:py-20 md:pl-0 md:pr-30
            md:text-start
          "
        >
          {/* Liten sektionsetikett */}
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="
              mb-7 block
              font-sans text-xs font-medium
              uppercase tracking-[0.3em]
              text-ink-muted
            "
          >
            02 / Drivkraft
          </motion.span>

          {/* Rubrik */}
          <motion.h3
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            className="
              font-serif
              text-3xl leading-tight
              text-ink
              md:text-4xl
              lg:text-5xl
            "
          >
            Jag finner glädje i <span className="italic">din framgång.</span>
          </motion.h3>

          {/* Brödtext */}
          <motion.p
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-60px",
            }}
            className="
              mt-6 max-w-2xl
              font-sans text-lg leading-relaxed
              text-ink-muted
              md:text-xl
            "
          >
            Det som driver mig är inte bara koden, det är att få hjälpa ett
            företag växa för att deras webbplats äntligen speglar det de gör.
            Det är när någon tittar på det vi byggt och känner:{" "}
            <span className="italic">
              " Ja, precis så här vill jag att mitt företag ska uppfattas. "
            </span>{" "}
            Den känslan är värd mycket för mig.
          </motion.p>

          {/* Dekorativ signaturlinje */}
          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { width: 0, opacity: 0 }}
            whileInView={{
              width: 80,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease,
            }}
            className="
              mx-auto mt-10 h-px
              bg-ink/40
              md:mx-0
            "
          />
        </div>
      </div>
    </section>
  );
}
