import Image from "next/image";
import type { Project } from "../../data/projects";

export default function ProjectCard({
  project,
  index,
  horizontal = false,
}: {
  project: Project;
  index: number;
  horizontal?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={
        horizontal ? "group w-[46vw] shrink-0" : "group min-w-0 w-full"
      }
    >
      {/* Bild */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Öppna ${project.title} – ${
          project.link.includes("github.com") ? "GitHub" : "Live demo"
        }`}
        className="
    group/image relative block
    overflow-hidden rounded-card
    md:aspect-[3/2] lg:aspect-[7/4]
    bg-line/40
    focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-accent
  "
      >
        <Image
          src={project.image}
          alt={`Förhandsvisning av ${project.title}`}
          fill
          sizes="46vw"
          className={`
  object-cover
  transition-all duration-700
  group-hover:scale-[1.035]
  ${project.title === "WorldScope" ? "brightness-250" : ""}
  ${project.title === "Hivify" ? "object-fill" : ""}
`}
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-black/10 via-transparent
            to-transparent
          "
        />

        {/* Projektnummer */}
        <div
          className="
            absolute left-5 top-5
            flex h-9 w-9
            items-center justify-center
            rounded-full
            border border-ink/10
            bg-canvas/90
            backdrop-blur-sm
          "
        >
          <span
            className="
              font-mono text-[11px]
              text-ink
            "
          >
            {number}
          </span>
        </div>
        <span
          className="
    absolute bottom-5 right-5
    flex items-center gap-2
    rounded-full bg-canvas/90
    px-4 py-2
    font-mono text-[11px]
    text-ink backdrop-blur-sm
    transition-transform duration-300
    group-hover/image:-translate-y-1
  "
        >
          {project.link.includes("github.com") ? "GitHub" : "Live demo"}

          <span aria-hidden="true">↗</span>
        </span>
      </a>

      {/* Projektinformation */}
      <div
        className="
          mt-6 flex items-start
          justify-between gap-5
        "
      >
        <div className="min-w-0">
          <span
            className="
              font-mono text-[11px]
              uppercase tracking-[0.2em]
              text-ink-muted
            "
          >
            {project.category}
          </span>

          <h3
            className="
              mt-2 font-serif
              text-2xl leading-tight
              text-ink lg:text-3xl
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-3 max-w-md
              font-sans text-sm
              leading-relaxed
              text-ink-muted lg:text-base
            "
          >
            {project.description}
          </p>
        </div>
      </div>
    </article>
  );
}
