import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Project = {
  client: string
  title: string
  category: string
  year: string
  image: string
  metric: { label: string; from: string; to: string }
}

const PROJECTS: Project[] = [
  {
    client: "Finch",
    title: "Rebuilt the analytics surface for a Series\u00A0C fintech.",
    category: "Web App · Performance",
    year: "2025",
    image: "/work-finch.jpg",
    metric: { label: "p75 LCP", from: "4.2s", to: "0.8s" },
  },
  {
    client: "Meridian",
    title: "A flagship storefront for a luxury watchmaker.",
    category: "E-Commerce · Headless",
    year: "2025",
    image: "/work-meridian.jpg",
    metric: { label: "p75 LCP", from: "3.6s", to: "0.9s" },
  },
  {
    client: "Orbit Labs",
    title: "Documentation and console for a developer platform.",
    category: "Docs · DX",
    year: "2024",
    image: "/work-orbit.jpg",
    metric: { label: "INP", from: "340ms", to: "84ms" },
  },
  {
    client: "Halcyon",
    title: "Marketing site and onboarding for a meditation app.",
    category: "Marketing · Mobile-first",
    year: "2024",
    image: "/work-halcyon.jpg",
    metric: { label: "JS shipped", from: "412kb", to: "76kb" },
  },
]

export function Work() {
  return (
    <section id="work" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        {/* heading row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              [ 02 ] — Selected Work
            </p>
            <h2 className="mt-4 text-pretty text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Engagements where every millisecond compounded into revenue.
            </h2>
          </div>
          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-1.5 font-mono text-sm text-foreground hover:text-primary"
          >
            View full archive
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* grid */}
        <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <li key={p.client} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href="#" className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border/80 bg-card">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.client} — ${project.category}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        {/* metric chip */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 backdrop-blur">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {project.metric.label}
          </span>
          <span className="font-mono text-xs text-muted-foreground line-through">
            {project.metric.from}
          </span>
          <span className="font-mono text-xs text-primary">→ {project.metric.to}</span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-xs text-muted-foreground">
            {project.category} · {project.year}
          </p>
          <h3 className="mt-2 max-w-md text-pretty text-lg font-medium leading-snug text-foreground">
            {project.client} — {project.title}
          </h3>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  )
}
