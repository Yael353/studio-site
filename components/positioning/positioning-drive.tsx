"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const milestones = [
  { label: "Synlighet", x: 102, y: 163 },
  { label: "Efterfrågan", x: 184, y: 126 },
  { label: "Tillväxt", x: 258, y: 77 },
];

export function PositioningDrive({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const reveal = (y: number) => ({
    initial: reducedMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.8, ease },
  });

  return (
    <div className="grid items-center gap-12 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-12 lg:gap-24">
      {/* tillväxt */}
      <motion.div
        {...reveal(25)}
        className="relative mx-auto w-full max-w-[460px]"
      >
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            En riktning framåt
          </span>
          <span className="h-px flex-1 bg-ink/15" />
        </div>

        <svg
          viewBox="0 0 340 235"
          className="w-full overflow-visible"
          role="img"
          aria-label="Illustration av ökad synlighet, efterfrågan och tillväxt"
        >
          <defs>
            <linearGradient id="growth-line" x1="0" y1="1" x2="1" y2="0">
              <stop stopColor="#C7AF90" />
              <stop offset="1" stopColor="#796043" />
            </linearGradient>

            <linearGradient id="growth-area" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#B99B70" stopOpacity="0.2" />
              <stop offset="1" stopColor="#B99B70" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* stödlinjer */}
          {[80, 120, 160, 200].map((y) => (
            <line
              key={y}
              x1="18"
              x2="325"
              y1={y}
              y2={y}
              stroke="#B9A68D"
              strokeOpacity="0.25"
              strokeDasharray="3 6"
            />
          ))}

          {/* kurva */}
          <motion.path
            d="M20 190 C55 189 75 177 102 163 S157 165 184 126 S229 117 258 77 S300 61 322 26 L322 210 L20 210Z"
            fill="url(#growth-area)"
            initial={reducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.path
            d="M20 190 C55 189 75 177 102 163 S157 165 184 126 S229 117 258 77 S300 61 322 26"
            fill="none"
            stroke="url(#growth-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={reducedMotion ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease }}
          />

          {/* milstolpar */}
          {milestones.map((point, index) => (
            <motion.circle
              key={point.label}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="#F3EEE6"
              stroke="#9D805A"
              strokeWidth="2"
              initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: reducedMotion ? 0 : 0.5 + index * 0.4,
              }}
            />
          ))}

          {/* slutpunkt */}
          <circle cx="322" cy="26" r="11" fill="#B99B70" fillOpacity="0.15" />
          <circle cx="322" cy="26" r="4" fill="#8D6E49" />

          <g
            fill="currentColor"
            className="text-ink-muted"
            fontSize="10"
            letterSpacing="1"
          >
            <text x="68" y="211">
              SYNLIGHET
            </text>
            <text x="172" y="155">
              EFTERFRÅGAN
            </text>
            <text x="236" y="16">
              TILLVÄXT
            </text>
          </g>
        </svg>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
            Digital närvaro
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
            Framåt ↗
          </span>
        </div>
      </motion.div>

      {/* drivkraft */}
      <div className="min-w-0 md:pl-4">
        <motion.span
          {...reveal(15)}
          className="mb-7 block font-sans text-xs font-medium uppercase tracking-[0.3em] text-ink-muted"
        >
          02 / Drivkraft
        </motion.span>

        <motion.h3
          {...reveal(35)}
          className="max-w-xl font-serif text-3xl leading-tight text-ink md:text-4xl lg:text-5xl"
        >
          Jag finner glädje i <span className="italic">din framgång.</span>
        </motion.h3>

        <div className="mt-8 max-w-xl space-y-5">
          <motion.p
            {...reveal(30)}
            className="font-sans text-lg leading-relaxed text-ink-muted md:text-xl"
          >
            För mig handlar ett projekt om mer än själva webbplatsen. Jag tycker
            om att sätta mig in i en verksamhet, förstå vad som behövs och hitta
            lösningar som faktiskt gör skillnad.
          </motion.p>

          <motion.p
            {...reveal(30)}
            transition={{
              duration: 0.8,
              delay: reducedMotion ? 0 : 0.25,
              ease,
            }}
            className="font-sans text-lg leading-relaxed text-ink-muted md:text-xl"
          >
            Jag lägger mycket av mig själv i det jag bygger. Därför betyder det
            också något för mig när kunden är nöjd, när fler hittar till
            företaget och när det jag skapat fortsätter att göra nytta.
          </motion.p>
        </div>

        <motion.div
          aria-hidden="true"
          initial={reducedMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="mt-10 h-px w-20 origin-left bg-ink/40"
        />
      </div>
    </div>
  );
}
