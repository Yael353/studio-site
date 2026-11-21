export function ProjectsIntro({
  horizontal = false,
}: {
  horizontal?: boolean;
}) {
  if (horizontal) {
    return (
      <div className="flex h-full w-[38vw] shrink-0 flex-col justify-center pr-8">
        <span className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
          Portfolio / 2026
        </span>

        <h2 className="font-serif text-5xl leading-[1.1] text-ink lg:text-7xl">
          Ett urval
          <br />
          av <span className="italic font-normal">arbeten.</span>
        </h2>

        <p className="mt-8 max-w-sm font-sans text-lg leading-relaxed text-ink-muted">
          Från första idé till en färdig lösning. Ett urval av projekt där
          design, teknik och funktion möts.
        </p>

        <div className="mt-12 flex items-center gap-4 text-ink-muted">
          <span className="h-px w-12 bg-current opacity-40" />
          <span className="font-mono text-xs uppercase tracking-[0.2em]">
            Scrolla för att utforska
          </span>
        </div>
      </div>
    );
  }

  return (
    <header>
      <span className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-ink-muted">
        03 / Utvalda projekt
      </span>

      <h2 className="mt-8 font-serif text-4xl leading-tight text-ink md:text-5xl">
        Ett urval av <span className="italic">arbeten.</span>
      </h2>

      <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-ink-muted">
        Från första idé till färdig lösning. Projekt där design, teknik och
        funktion möts.
      </p>
    </header>
  );
}
