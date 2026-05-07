const CLIENTS = [
  "FINCH",
  "MERIDIAN",
  "ORBIT/LABS",
  "HALCYON",
  "NORTH&CO",
  "PHASE",
  "ATLAS",
  "KILN",
  "SUPERFLUX",
  "ECHO",
]

export function ClientsMarquee() {
  return (
    <section
      aria-label="Selected clients"
      className="relative overflow-hidden border-b border-border/60 py-10"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max velocestack-marquee">
        {[...CLIENTS, ...CLIENTS].map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="mx-10 font-mono text-sm tracking-[0.2em] text-muted-foreground"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  )
}
