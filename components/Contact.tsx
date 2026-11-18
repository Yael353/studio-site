"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  "Ny webbplats",
  "Förbättra befintlig webbplats",
  "SEO & synlighet",
  "Webbapp / speciallösning",
  "Annat",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  services: [] as string[],
  subject: "",
  message: "",
  website: "", // Spamfält, dolt för besökare
};

export default function Contact() {
  const reducedMotion = useReducedMotion();

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.services.length === 0) {
      setError("Välj minst en tjänst.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Kunde inte skicka meddelandet.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setError("Något gick fel. Försök igen lite senare.");
    }
  };

  const fieldClass = `
    w-full border-0 border-b border-line
    bg-transparent px-0 py-3
    font-sans text-base text-ink
    placeholder:text-ink-muted/45
    outline-none
    transition-colors duration-300
    focus:border-ink
  `;

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="
        relative overflow-hidden
        bg-canvas px-6 py-24
        md:px-12 md:py-32
        lg:px-20 lg:py-40
      "
    >
      <div className="mx-auto max-w-360">
        {/* Övre sektionsrad */}
        <div
          className="
            mb-16 flex items-center
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
            05 / Kontakt
          </span>

          <span
            className="
              hidden font-mono text-xs
              tracking-widest text-ink-muted
              sm:block
            "
          >
            NÄSTA STEG BÖRJAR HÄR
          </span>
        </div>

        <div
          className="
            grid gap-16
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20 xl:gap-28
          "
        >
          {/* VÄNSTER SIDA */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
            className="
              flex flex-col
              lg:sticky lg:top-28
              lg:self-start
            "
          >
            <span
              className="
                mb-7 font-mono text-xs
                uppercase tracking-[0.25em]
                text-ink-muted
              "
            >
              Från tanke till verklighet
            </span>

            <h2
              id="contact-heading"
              className="
                max-w-xl font-serif
                text-4xl leading-[1.12]
                tracking-[-0.025em]
                text-ink md:text-5xl
                xl:text-6xl
              "
            >
              Varje bra idé börjar med ett{" "}
              <span className="italic font-normal">samtal.</span>
            </h2>

            <p
              className="
                mt-8 max-w-md
                font-sans text-lg
                leading-relaxed text-ink-muted
              "
            >
              Har du en idé, en utmaning eller ett företag som behöver synas
              bättre? Berätta vad du har i tankarna.
            </p>

            <p
              className="
                mt-5 max-w-md
                font-sans text-lg
                leading-relaxed text-ink-muted
              "
            >
              Du behöver inte ha alla svar. Det räcker med en början, så hittar
              vi vägen framåt tillsammans.
            </p>

            {/* Dekorativ process */}
            <div
              className="
                mt-14 hidden max-w-sm
                border-t border-line
                pt-8 lg:block
              "
            >
              {[
                ["01", "Du berättar"],
                ["02", "Vi diskuterar"],
                ["03", "Vi skapar"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="
                    flex items-center gap-6
                    py-3
                  "
                >
                  <span
                    className="
                      font-mono text-xs
                      text-ink-muted/60
                    "
                  >
                    {number}
                  </span>

                  <span className="font-sans text-sm text-ink-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* HÖGER SIDA: FORMULÄR */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease,
            }}
            className="min-w-0"
          >
            {status === "success" ? (
              <div
                role="status"
                className="
                  flex min-h-105
                  flex-col items-start
                  justify-center
                  border-t border-line
                "
              >
                <div
                  className="
                    mb-8 flex h-14 w-14
                    items-center justify-center
                    rounded-full
                    border border-ink/20
                    text-ink
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-6 w-6"
                  >
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </div>

                <h3
                  className="
                    font-serif text-3xl
                    text-ink md:text-4xl
                  "
                >
                  Tack för ditt meddelande.
                </h3>

                <p
                  className="
                    mt-5 max-w-md
                    font-sans text-lg
                    leading-relaxed
                    text-ink-muted
                  "
                >
                  Din förfrågan har skickats. Jag återkommer så snart jag kan.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="
                    mt-9 border-b border-ink
                    pb-1 font-sans
                    text-sm text-ink
                  "
                >
                  Skicka ett nytt meddelande ↗
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* SEKTION 01 */}
                <div className="border-t border-line pt-7">
                  <div
                    className="
                      mb-9 flex items-center
                      justify-between
                    "
                  >
                    <h3
                      className="
                        font-serif text-2xl
                        text-ink
                      "
                    >
                      Dina uppgifter
                    </h3>

                    <span
                      className="
                        font-mono text-xs
                        text-ink-muted/60
                      "
                    >
                      01 / 03
                    </span>
                  </div>

                  <div
                    className="
                      grid gap-x-8 gap-y-7
                      sm:grid-cols-2
                    "
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="font-sans text-sm text-ink"
                      >
                        Namn *
                      </label>
                      <input
                        id="contact-name"
                        required
                        maxLength={100}
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Ditt namn"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="font-sans text-sm text-ink"
                      >
                        E-post *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={254}
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="namn@foretag.se"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="font-sans text-sm text-ink"
                      >
                        Telefonnummer
                        <span className="ml-2 text-ink-muted/60">
                          (valfritt)
                        </span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        maxLength={40}
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="070 000 00 00"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="font-sans text-sm text-ink"
                      >
                        Företagsnamn
                        <span className="ml-2 text-ink-muted/60">
                          (valfritt)
                        </span>
                      </label>
                      <input
                        id="contact-company"
                        maxLength={120}
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        placeholder="Ditt företag"
                        className={fieldClass}
                      />
                    </div>
                  </div>
                </div>

                {/* SEKTION 02 */}
                <div
                  className="
                    mt-14 border-t
                    border-line pt-7
                  "
                >
                  <div
                    className="
                      mb-5 flex items-center
                      justify-between
                    "
                  >
                    <h3
                      id="contact-services-label"
                      className="
                        font-serif text-2xl
                        text-ink
                      "
                    >
                      Vad behöver du hjälp med?
                    </h3>

                    <span
                      className="
                        font-mono text-xs
                        text-ink-muted/60
                      "
                    >
                      02 / 03
                    </span>
                  </div>

                  <p
                    className="
                      mb-7 font-sans text-sm
                      text-ink-muted
                    "
                  >
                    Välj ett eller flera alternativ.
                  </p>

                  <div
                    role="group"
                    aria-labelledby="contact-services-label"
                    className="flex flex-wrap gap-3"
                  >
                    {services.map((service) => {
                      const selected = form.services.includes(service);

                      return (
                        <label
                          key={service}
                          className={`
                            relative cursor-pointer
                            rounded-full border
                            px-5 py-3
                            font-sans text-sm
                            transition-colors duration-300
                            focus-within:outline
                            focus-within:outline-2
                            focus-within:outline-offset-2
                            focus-within:outline-accent
                            ${
                              selected
                                ? "border-ink bg-ink text-canvas"
                                : "border-line text-ink-muted hover:border-ink/40 hover:text-ink"
                            }
                          `}
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => toggleService(service)}
                            className="
                              absolute h-px w-px
                              overflow-hidden opacity-0
                            "
                          />

                          <span className="flex items-center gap-2">
                            {selected && <span aria-hidden="true">✓</span>}
                            {service}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* SEKTION 03 */}
                <div
                  className="
                    mt-14 border-t
                    border-line pt-7
                  "
                >
                  <div
                    className="
                      mb-9 flex items-center
                      justify-between
                    "
                  >
                    <h3
                      className="
                        font-serif text-2xl
                        text-ink
                      "
                    >
                      Berätta om din idé
                    </h3>

                    <span
                      className="
                        font-mono text-xs
                        text-ink-muted/60
                      "
                    >
                      03 / 03
                    </span>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="font-sans text-sm text-ink"
                    >
                      Rubrik *
                    </label>

                    <input
                      id="contact-subject"
                      required
                      maxLength={150}
                      value={form.subject}
                      onChange={(e) => updateField("subject", e.target.value)}
                      placeholder="Vad handlar ditt projekt om?"
                      className={fieldClass}
                    />
                  </div>

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
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Berätta gärna om din verksamhet, vad du vill uppnå eller vad du behöver hjälp med..."
                      className={`
                        ${fieldClass}
                        mt-2 resize-y
                        leading-relaxed
                      `}
                    />

                    <div
                      className="
                        mt-2 text-right
                        font-mono text-xs
                        text-ink-muted/60
                      "
                    >
                      {form.message.length} / 5000
                    </div>
                  </div>
                </div>

                {/* Honeypot mot enklare bot-spam */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="contact-website">Lämna detta fält tomt</label>
                  <input
                    id="contact-website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => updateField("website", e.target.value)}
                  />
                </div>

                {/* FELMEDDELANDE */}
                {error && (
                  <p
                    role="alert"
                    className="
                      mt-8 font-sans
                      text-sm text-red-700
                    "
                  >
                    {error}
                  </p>
                )}

                {/* SKICKA */}
                <div
                  className="
                    mt-10 flex flex-col
                    items-start justify-between
                    gap-7 sm:flex-row
                    sm:items-center
                  "
                >
                  <p
                    className="
                      max-w-xs font-sans
                      text-xs leading-relaxed
                      text-ink-muted
                    "
                  >
                    Dina uppgifter används för att besvara din förfrågan. Inget
                    bindande åtagande.
                  </p>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={reducedMotion ? undefined : { y: -2 }}
                    whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                    className="
                      group inline-flex
                      items-center justify-between
                      gap-10 rounded-button
                      bg-ink px-7 py-4
                      font-sans text-sm font-medium
                      text-canvas
                      transition-colors duration-300
                      hover:bg-accent
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-accent
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {status === "sending" ? "Skickar..." : "Skicka förfrågan"}

                    <span
                      aria-hidden="true"
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      ↗
                    </span>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
