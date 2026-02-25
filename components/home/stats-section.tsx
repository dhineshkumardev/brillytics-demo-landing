"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed", description: "Across diverse industries" },
  { value: 50, suffix: "+", label: "Enterprise Clients", description: "Global partnerships" },
  { value: 99, suffix: "%", label: "Client Satisfaction", description: "Consistent excellence" },
  { value: 10, suffix: "+", label: "Years of Experience", description: "Deep domain expertise" },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
            Our Track Record
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl text-balance">
            Numbers That Speak for Themselves
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} animation="scale-in" delay={(i + 1) * 100}>
              <div className="text-center">
                <div className="text-4xl font-bold lg:text-6xl">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm font-semibold">{stat.label}</p>
                <p className="mt-1 text-xs text-primary-foreground/50">
                  {stat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
