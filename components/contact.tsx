import { ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-36">
        <div className="grid gap-16 md:grid-cols-12">
          {/* left — pitch */}
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">[ 05 ] — Contact</p>
            <h2 className="mt-6 text-pretty text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              Got a slow site?
              <br />
              <span className="text-muted-foreground">Let&apos;s fix it.</span>
            </h2>
            <p className="mt-8 max-w-md text-base text-muted-foreground leading-relaxed">
              We take on a small number of engagements each quarter. Tell us about your stack, your traffic, and the
              metric that&apos;s costing you money.
            </p>
          </div>

          {/* right — channels */}
          <div className="md:col-span-5 md:border-l md:border-border/60 md:pl-12">
            <ul className="space-y-8">
              <ContactRow
                label="Email"
                href="mailto:hello@velocestack.dev"
                value="hello@velocestack.dev"
              />
              <ContactRow
                label="Schedule"
                href="#"
                value="cal.com/velocestack"
              />
              <ContactRow label="Press" href="mailto:press@velocestack.dev" value="press@velocestack.dev" />
              <ContactRow label="Office" href="#" value="Brooklyn, NY · Remote" />
            </ul>

            <a
              href="mailto:hello@velocestack.dev"
              className="mt-12 inline-flex h-12 w-full items-center justify-between rounded-full bg-primary px-6 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <li className="group">
      <a href={href} className="flex items-baseline justify-between gap-6 border-b border-border/60 pb-3">
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="flex items-center gap-2 font-mono text-sm text-foreground transition-colors group-hover:text-primary">
          {value}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </li>
  )
}
