"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "Bespoke algorithms and cutting-edge ML technologies",
  "Natural Language Processing and spatial analysis",
  "Interactive applications, infographics and animations",
  "3D experiences for exhibits and events",
]

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Visual */}
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="rounded-2xl bg-card border border-border p-10 shadow-lg">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-lg bg-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-3/4 rounded-full bg-muted" />
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-muted" />
                    </div>
                  </div>
                  {/* Mini chart visualization */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Accuracy", value: 98 },
                      { label: "Speed", value: 85 },
                      { label: "Insights", value: 92 },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-muted/50 p-4 text-center"
                      >
                        <div className="relative mx-auto h-16 w-16">
                          <svg className="h-16 w-16 -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="oklch(0.92 0.005 255)"
                              strokeWidth="3"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="oklch(0.55 0.19 255)"
                              strokeWidth="3"
                              strokeDasharray={`${item.value}, 100`}
                              className="transition-all duration-1000"
                            />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
                            {item.value}%
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Progress bars */}
                  <div className="flex flex-col gap-3">
                    {["Data Mining", "Visualization", "ML Models"].map(
                      (label, i) => (
                        <div key={label}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">
                              {label}
                            </span>
                            <span className="text-xs font-medium text-foreground">
                              {[94, 88, 91][i]}%
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary transition-all duration-1000"
                              style={{ width: `${[94, 88, 91][i]}%` }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="slide-in-right">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Brillytics
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              Transforming Data Into Stories
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Brillytics is the company behind a powerful platform for analysing,
              visualising and storytelling with your data. We specialise in data
              visualisation and information design, providing engaging insight
              into data and complex information.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 group">
                <Link href="/about">
                  Discover More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
