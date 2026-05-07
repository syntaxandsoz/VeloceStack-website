import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { ClientsMarquee } from "@/components/clients-marquee"
import { Work } from "@/components/work"
import { Process } from "@/components/process"
import { Metrics } from "@/components/metrics"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <ClientsMarquee />
      <Work />
      <Process />
      <Metrics />
      <Contact />
      <SiteFooter />
    </main>
  )
}
