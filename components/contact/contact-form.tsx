"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fieldClass } from "./contact-data";
import { ContactFields } from "./contact-fields";
import { ContactServices } from "./contact-services";
import type { ContactFormState } from "./use-contact-form";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = Pick<
  ContactFormState,
  "form" | "status" | "error" | "updateField" | "toggleService" | "handleSubmit"
>;

export function ContactForm({
  form,
  status,
  error,
  updateField,
  toggleService,
  handleSubmit,
}: Props) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <form onSubmit={handleSubmit}>
      <ContactFields form={form} updateField={updateField} />
      <ContactServices form={form} toggleService={toggleService} />

      {/* meddelande */}
      <div className="mt-14 border-t border-line pt-7">
        <div className="mb-9 flex items-center justify-between">
          <h3 className="font-serif text-2xl text-ink">Berätta om din idé</h3>
          <span className="font-mono text-xs text-ink-muted/60">03 / 03</span>
        </div>

        <label htmlFor="contact-subject" className="font-sans text-sm text-ink">
          Rubrik *
        </label>
        <input
          id="contact-subject"
          required
          maxLength={150}
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          placeholder="Vad handlar ditt projekt om?"
          className={fieldClass}
        />

        <div className="mt-9">
          <label
            htmlFor="contact-message"
            className="font-sans text-sm text-ink"
          >
            Ditt meddelande *
          </label>
          <textarea
            id="contact-message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Berätta gärna om din verksamhet, vad du vill uppnå eller vad du behöver hjälp med..."
            className={`${fieldClass} mt-2 resize-y leading-relaxed`}
          />
          <div className="mt-2 text-right font-mono text-xs text-ink-muted/60">
            {form.message.length} / 5000
          </div>
        </div>
      </div>

      {/* spamfält */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Lämna detta fält tomt</label>
        <input
          id="contact-website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      {error && (
        <p role="alert" className="mt-8 font-sans text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="mt-10 flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <p className="max-w-md font-sans text-xs leading-relaxed text-ink-muted">
          När du skickar ett meddelande använder jag dina uppgifter för att
          besvara din förfrågan. Formuläret hanteras via Formspree, som tar emot
          och lagrar meddelandet. Vid frågor om dina uppgifter kan du kontakta
          mig via min angivna mejladress. Läs mer i{" "}
          <a
            href="https://formspree.io/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-ink"
          >
            Formsprees integritetspolicy
          </a>
          .
        </p>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={reducedMotion ? undefined : { y: -2 }}
          whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.25, ease }}
          className="group inline-flex items-center justify-between gap-10 rounded-button bg-ink px-7 py-4 font-sans text-sm font-medium text-canvas transition-colors duration-300 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Skickar..." : "Skicka förfrågan"}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            ↗
          </span>
        </motion.button>
      </div>
    </form>
  );
}
