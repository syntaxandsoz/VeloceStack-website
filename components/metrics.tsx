const METRICS = [
  {
    figure: "0.8s",
    label: "Median p75 LCP across shipped engagements",
    sub: "Measured on real devices via Chrome UX Report.",
  },
  {
    figure: "+34%",
    label: "Average lift in conversion after launch",
    sub: "Aggregated across e-commerce + SaaS clients in 2024.",
  },
  {
    figure: "100/100",
    label: "Lighthouse performance — production",
    sub: "Score consistently maintained on the homepage of every shipped site.",
  },
]

export function Metrics() {
  return (
    <section id="metrics" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">[ 04 ] — Numbers</p>
        <h2 className="mt-4 max-w-2xl text-pretty text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          Performance is the product. The numbers prove it.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border/80 bg-border/80 md:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-background p-8 md:p-10">
              <div className="font-mono text-5xl tracking-tight text-primary md:text-6xl">{m.figure}</div>
              <p className="mt-6 max-w-xs text-pretty text-base text-foreground leading-snug">{m.label}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
