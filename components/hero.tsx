import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 md:px-6 md:pt-28 md:pb-32">
        {/* top label */}
        <div className="mb-10 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span>v04 — Now booking Q3 engagements</span>
        </div>

        {/* headline */}
        <h1 className="max-w-4xl text-pretty text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
          One-second load times,
          <br />
          <span className="text-muted-foreground">engineered for the </span>
          <span className="text-foreground">teams that ship.</span>
        </h1>

        {/* subhead */}
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          VeloceStack is a performance engineering studio. We rebuild front-ends from the bundle up — shaving p75 LCP
          to under 1.0&nbsp;s on real devices, real networks, real users.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="#contact"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Audit my site
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#work"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 font-mono text-sm text-foreground transition-colors hover:bg-accent"
          >
            See the work
          </Link>
        </div>

        {/* spec strip */}
        <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border/60 pt-10 md:grid-cols-4">
          {[
            { k: "p75 LCP target", v: "≤ 1.0s" },
            { k: "INP budget", v: "< 120ms" },
            { k: "JS shipped", v: "< 90kb" },
            { k: "Engagements", v: "47 shipped" },
          ].map((item) => (
            <div key={item.k} className="flex flex-col gap-1.5">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{item.k}</dt>
              <dd className="font-mono text-2xl tracking-tight text-foreground">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
