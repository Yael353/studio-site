import type { Service } from "./services-data";

export function ServiceVisual({ number }: { number: Service["number"] }) {
  if (number === "01") return <WebsiteVisual />;
  if (number === "02") return <SeoVisual />;
  return <TechVisual />;
}

function WebsiteVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        relative w-full max-w-[390px]
        rotate-[-2deg]
        rounded-lg border border-[#D3C9BC]
        bg-white p-3
        shadow-[0_20px_60px_rgba(57,42,25,0.10)]
      "
    >
      {/* Browserfält */}
      <div className="mb-5 flex items-center gap-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-[#BCAFA0]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#D5CCC1]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#E9E2D9]" />

        <div
          className="
            ml-5 h-3 flex-1
            rounded-sm bg-[#F3F0EB]
          "
        />
      </div>

      {/* Webbplatsmockup */}
      <div className="bg-[#F5F1EB] p-5 sm:p-7">
        <div className="mb-8 flex items-center justify-between">
          <div className="font-serif text-sm text-[#34312C]">Studio.</div>

          <div className="flex gap-2">
            <div className="h-1 w-5 bg-[#C7BEB2]" />
            <div className="h-1 w-5 bg-[#C7BEB2]" />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-4">
          <div>
            <div className="font-serif text-xl leading-tight text-[#34312C] sm:text-2xl">
              Form möter funktion.
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-1 w-full bg-[#D6CFC5]" />
              <div className="h-1 w-4/5 bg-[#D6CFC5]" />
              <div className="h-1 w-3/5 bg-[#D6CFC5]" />
            </div>

            <div className="mt-5 h-5 w-20 bg-[#423D36]" />
          </div>

          <div
            className="
              flex aspect-[4/5]
              items-center justify-center
              bg-[#D9CCBD]
            "
          >
            <div
              className="
                h-2/3 w-2/3
                rotate-[-16deg]
                rounded-full
                border border-[#A48D76]
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SeoVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        w-full max-w-[380px]
        rounded-xl border border-[#D8CEC1]
        bg-white p-5
        shadow-[0_20px_60px_rgba(57,42,25,0.09)]
        sm:p-7
      "
    >
      {/* sökfält */}
      <div className="flex items-center gap-3 rounded-full border border-[#E5DED5] px-4 py-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#837569"
          strokeWidth="1.7"
          className="h-4 w-4 shrink-0"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>

        <span className="truncate font-sans text-xs text-[#534B43]">
          företag nära mig
        </span>
      </div>

      {/* sökresultat */}
      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-[#E6D8C5]" />
            <div className="h-1.5 w-24 bg-[#D4C9BC]" />
          </div>

          <div className="font-sans text-sm font-semibold text-[#514837]">
            Ditt företag – Din lösning
          </div>

          <div className="mt-2 space-y-1.5">
            <div className="h-1 w-full bg-[#E2DCD4]" />
            <div className="h-1 w-4/5 bg-[#E2DCD4]" />
          </div>
        </div>

        <div className="border-t border-[#EFEAE3] pt-4 opacity-55">
          <div className="mb-3 h-1.5 w-24 bg-[#D6CBC0]" />
          <div className="h-2 w-3/4 bg-[#B8AB9B]" />
          <div className="mt-3 h-1 w-full bg-[#E2DCD4]" />
        </div>
      </div>

      {/* synlighet */}
      <div className="mt-5 flex items-center justify-between rounded-md bg-[#F1ECE4] px-4 py-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#706456]">
          Organisk synlighet
        </span>

        <span className="text-[#74614A]">↗</span>
      </div>
    </div>
  );
}

function TechVisual() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-[390px] rounded-lg border border-[#D7CEC2] bg-[#282622] p-5 shadow-[0_20px_60px_rgba(57,42,25,0.14)] sm:p-7"
    >
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <span className="font-mono text-xs text-[#ECE5DA]">
          System overview
        </span>
        <span className="h-2 w-2 rounded-full bg-[#A6B99C]" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Design", value: "01" },
          { label: "System", value: "02" },
          { label: "Growth", value: "03" },
        ].map((item) => (
          <div
            key={item.label}
            className="border border-white/10 bg-white/5 p-3"
          >
            <div className="font-mono text-[9px] text-white/50">
              {item.label}
            </div>
            <div className="mt-3 font-serif text-xl text-[#E6D8C5]">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* graf */}
      <svg
        viewBox="0 0 320 90"
        className="mt-6 w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 70 C45 65 55 76 95 48 S160 62 202 30 S270 43 320 10"
          fill="none"
          stroke="#C6AE8E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M0 70 C45 65 55 76 95 48 S160 62 202 30 S270 43 320 10 V90 H0 Z"
          fill="#C6AE8E"
          fillOpacity="0.08"
        />
      </svg>

      <div className="mt-4 flex justify-between font-mono text-[10px] text-white/40">
        <span>BUILD</span>
        <span>OPTIMIZE</span>
        <span>SCALE</span>
      </div>
    </div>
  );
}
