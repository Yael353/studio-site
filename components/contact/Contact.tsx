"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactIntro } from "./contact-intro";
import { ContactForm } from "./contact-form";
import { ContactSuccess } from "./contact-success";
import { useContactForm } from "./use-contact-form";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const reducedMotion = useReducedMotion() ?? false;
  const contact = useContactForm();

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-canvas px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-360">
        <div className="mb-16 flex items-center justify-between border-b border-line pb-6">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-ink-muted">
            05 / Kontakt
          </span>
          <span className="hidden font-mono text-xs tracking-widest text-ink-muted sm:block">
            NÄSTA STEG BÖRJAR HÄR
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-28">
          <ContactIntro />

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
            className="min-w-0"
          >
            {contact.status === "success" ? (
              <ContactSuccess onReset={contact.reset} />
            ) : (
              <ContactForm {...contact} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
