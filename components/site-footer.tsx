import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary text-primary-foreground"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                  <path
                    d="M2 3 L8 13 L14 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </span>
              <span className="font-mono text-sm tracking-tight">VeloceStack</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              A web performance engineering studio. Sub-second by default.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2 md:grid-cols-3">
            <FooterLink href="#work">Work</FooterLink>
            <FooterLink href="#process">Process</FooterLink>
            <FooterLink href="#metrics">Metrics</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">GitHub</FooterLink>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} VeloceStack Studio Ltd.</span>
          <span>Built in 142ms · 38kb shipped · 0 layout shifts</span>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  )
}
