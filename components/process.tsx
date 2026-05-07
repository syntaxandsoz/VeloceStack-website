const STEPS = [
  {
    n: "01",
    title: "Audit",
    body: "We instrument your site with RUM, trace every long task, and map the critical path. You receive a written report — not a dashboard.",
  },
  {
    n: "02",
    title: "Architect",
    body: "Edge rendering strategy, bundle splitting, image pipeline, and a shipping plan benchmarked against a 1-second p75 LCP budget.",
  },
  {
    n: "03",
    title: "Engineer",
    body: "We embed a senior pair into your codebase — no contractors, no offshoring. Every PR is benchmarked before it merges.",
  },
  {
    n: "04",
    title: "Maintain",
    body: "Performance budgets enforced in CI. Monthly regression review. We stay on retainer until your team owns the discipline.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              [ 03 ] — Process
            </p>
            <h2 className="mt-4 text-pretty text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Four phases.
              <br />
              No surprises.
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
              Most performance work fails because it&apos;s reactive. We work in fixed phases against a single
              measurable target.
            </p>
          </div>

          <ol className="md:col-span-8 md:border-l md:border-border/60">
            {STEPS.map((step, idx) => (
              <li
                key={step.n}
                className={`grid grid-cols-[auto_1fr] gap-x-6 py-8 md:gap-x-10 md:pl-10 ${
                  idx !== STEPS.length - 1 ? "border-b border-border/60" : ""
                } ${idx === 0 ? "md:pt-0" : ""}`}
              >
                <span className="font-mono text-xs text-muted-foreground pt-1.5">{step.n}</span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-lg text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
