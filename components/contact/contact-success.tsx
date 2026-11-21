export function ContactSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div role="status" className="flex min-h-105 flex-col items-start justify-center border-t border-line">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-ink/20 text-ink">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
          <path d="m5 12 5 5L20 7" />
        </svg>
      </div>

      <h3 className="font-serif text-3xl text-ink md:text-4xl">Tack för ditt meddelande.</h3>
      <p className="mt-5 max-w-md font-sans text-lg leading-relaxed text-ink-muted">
        Din förfrågan har skickats. Jag återkommer så snart jag kan.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-9 border-b border-ink pb-1 font-sans text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        Skicka ett nytt meddelande ↗
      </button>
    </div>
  );
}
