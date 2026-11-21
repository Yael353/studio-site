import type { Service } from "./services-data";
import { ServiceVisual } from "./service-visuals";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <div>
      {/* illustration */}
      <div className="relative mb-9 overflow-hidden rounded-card border border-line bg-[#F0EBE3]">
        <div className="relative flex min-h-[260px] items-center justify-center px-6 py-12 sm:min-h-[320px]">
          <ServiceVisual number={service.number} />
          <span className="absolute bottom-5 left-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#746B60]">
            {service.keyword} / {service.number}
          </span>
        </div>
      </div>

      {/* text */}
      <div className="max-w-2xl">
        <h3 className="font-serif text-2xl leading-tight text-ink md:text-3xl">
          {service.tagline}
        </h3>
        <p className="mt-5 font-sans text-base leading-[1.85] text-ink-muted md:text-lg">
          {service.description}
        </p>
        <div className="mt-9 border-t border-line pt-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            Vad det betyder för dig
          </span>
          <ul className="mt-5 space-y-4">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-4 font-sans text-sm leading-relaxed text-ink md:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
