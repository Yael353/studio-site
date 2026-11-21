"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { services } from "./services-data";
import { ServiceDetail } from "./service-detail";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServiceList() {
  const [active, setActive] = useState<number | null>(0);
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16 xl:gap-24">
        <div className="border-t border-line">
          {services.map((service, index) => (
            <button
              key={service.number}
              type="button"
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              className="group flex w-full items-center gap-5 border-b border-line py-8 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span
                className={`font-mono text-xs ${active === index ? "text-ink" : "text-ink-muted/60"}`}
              >
                {service.number}
              </span>
              <span
                className={`flex-1 font-serif text-2xl leading-tight transition-colors xl:text-3xl ${active === index ? "text-ink" : "text-ink-muted group-hover:text-ink"}`}
              >
                {service.label}
              </span>
              <ServiceIcon active={active === index} />
            </button>
          ))}
        </div>

        <div className="min-w-0" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            {active !== null && (
              <motion.div
                key={active}
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: reducedMotion ? 0 : 0.35, ease }}
              >
                <ServiceDetail service={services[active]} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* mobil */}
      <div className="border-t border-line lg:hidden">
        {services.map((service, index) => {
          const selected = active === index;
          return (
            <div key={service.number} className="border-b border-line">
              <h3>
                <button
                  type="button"
                  aria-expanded={selected}
                  aria-controls={`service-panel-${index}`}
                  id={`service-button-${index}`}
                  onClick={() => setActive(selected ? null : index)}
                  className="group flex w-full items-center gap-5 py-6 text-left focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <span
                    className={`font-mono text-xs ${selected ? "text-ink" : "text-ink-muted/60"}`}
                  >
                    {service.number}
                  </span>
                  <span
                    className={`flex-1 font-serif text-xl leading-tight sm:text-2xl ${selected ? "text-ink" : "text-ink-muted group-hover:text-ink"}`}
                  >
                    {service.label}
                  </span>
                  <ServiceIcon active={selected} />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {selected && (
                  <motion.div
                    key="panel"
                    id={`service-panel-${index}`}
                    role="region"
                    aria-labelledby={`service-button-${index}`}
                    initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={
                      reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: reducedMotion ? 0 : 0.35, ease }}
                    className="overflow-hidden"
                  >
                    <div className="pb-9 pt-2">
                      <ServiceDetail service={service} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
}

function ServiceIcon({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${active ? "rotate-45 border-ink bg-ink text-canvas" : "border-line text-ink-muted group-hover:border-ink"}`}
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
  );
}
