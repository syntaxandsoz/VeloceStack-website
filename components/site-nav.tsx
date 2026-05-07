import Link from "next/link"

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="VeloceStack home">
          <Logo />
          <span className="font-mono text-sm tracking-tight">VeloceStack</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <Link
            href="#work"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="#process"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Process
          </Link>
          <Link
            href="#metrics"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Metrics
          </Link>
          <Link
            href="#contact"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="#contact"
          className="inline-flex h-8 items-center rounded-full bg-primary px-3.5 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start a project
        </Link>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <span
      aria-hidden="true"
      className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary text-primary-foreground"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
        <path d="M2 3 L8 13 L14 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    </span>
  )
}
