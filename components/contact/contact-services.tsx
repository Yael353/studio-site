import { services } from "./contact-data";
import type { ContactFormState } from "./use-contact-form";

type Props = Pick<ContactFormState, "form" | "toggleService">;

export function ContactServices({ form, toggleService }: Props) {
  return (
    <div className="mt-14 border-t border-line pt-7">
      <div className="mb-5 flex items-center justify-between">
        <h3 id="contact-services-label" className="font-serif text-2xl text-ink">
          Vad behöver du hjälp med?
        </h3>
        <span className="font-mono text-xs text-ink-muted/60">02 / 03</span>
      </div>

      <p className="mb-7 font-sans text-sm text-ink-muted">
        Välj ett eller flera alternativ.
      </p>

      <div role="group" aria-labelledby="contact-services-label" className="flex flex-wrap gap-3">
        {services.map((service) => {
          const selected = form.services.includes(service);

          return (
            <label
              key={service}
              className={`relative cursor-pointer rounded-full border px-5 py-3 font-sans text-sm transition-colors duration-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent ${
                selected
                  ? "border-ink bg-ink text-canvas"
                  : "border-line text-ink-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggleService(service)}
                className="absolute h-px w-px overflow-hidden opacity-0"
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
  );
}
