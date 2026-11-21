import { fieldClass } from "./contact-data";
import type { ContactFormState } from "./use-contact-form";

type Props = Pick<ContactFormState, "form" | "updateField">;

const fields = [
  { name: "name", label: "Namn", placeholder: "Ditt namn", required: true, maxLength: 100, autoComplete: "name" },
  { name: "email", label: "E-post", placeholder: "namn@foretag.se", required: true, maxLength: 254, autoComplete: "email", type: "email" },
  { name: "phone", label: "Telefonnummer", placeholder: "070 000 00 00", maxLength: 40, autoComplete: "tel", type: "tel" },
  { name: "company", label: "Företagsnamn", placeholder: "Ditt företag", maxLength: 120, autoComplete: "organization" },
] as const;

export function ContactFields({ form, updateField }: Props) {
  return (
    <div className="border-t border-line pt-7">
      <div className="mb-9 flex items-center justify-between">
        <h3 className="font-serif text-2xl text-ink">Dina uppgifter</h3>
        <span className="font-mono text-xs text-ink-muted/60">01 / 03</span>
      </div>

      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={`contact-${field.name}`} className="font-sans text-sm text-ink">
              {field.label}{"required" in field ? " *" : (
                <span className="ml-2 text-ink-muted/60">(valfritt)</span>
              )}
            </label>
            <input
              id={`contact-${field.name}`}
              type={"type" in field ? field.type : "text"}
              required={"required" in field}
              maxLength={field.maxLength}
              autoComplete={field.autoComplete}
              value={form[field.name]}
              onChange={(event) => updateField(field.name, event.target.value)}
              placeholder={field.placeholder}
              className={fieldClass}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
