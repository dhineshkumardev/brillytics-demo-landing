"use client"

import { AnimatedSection } from "@/components/animated-section"

const platforms = [
  "Power BI",
  "Tableau",
  "QlikView",
  "Google Analytics",
  "Microsoft Azure",
  "AWS",
  "Apache Spark",
  "R Studio",
]

export function PlatformsSection() {
  return (
    <section className="py-16 border-y border-border bg-muted/20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted Platforms We Work With
          </p>
        </AnimatedSection>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...platforms, ...platforms].map((platform, i) => (
            <div
              key={`${platform}-${i}`}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-primary/30"
            >
              <div className="h-2 w-2 rounded-full bg-primary/40" />
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
