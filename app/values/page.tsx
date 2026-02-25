"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Heart,
  Zap,
  Shield,
  Users,
  Gem,
  Handshake,
} from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Client Focused",
    description:
      "We have a proud history of working hand in hand with our clients, really understanding the data landscape and delivering consulting services that complement each client's unique needs.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Zap,
    title: "Innovative Technology",
    description:
      "We focus on designing the right blend of technology to achieve the right client solution. We don't shy away from bringing in new technology when the solution demands it.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Shield,
    title: "What Separates Us",
    description:
      "We prioritise delivering client-centric, actionable data-driven solutions. We are small enough to care and nimble enough to adapt, yet always remaining focused on long-term objectives.",
    color: "bg-red-50 text-[#EC3236]",
  },
  {
    icon: Gem,
    title: "Quality in Our DNA",
    description:
      "Our quality-centric approach provides a positive customer experience before and after delivery, driving repeat business, enhancing loyalty and improving growth.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "We believe in being around people who are good for your soul. Our culture fosters collaboration, continuous learning, and mutual respect across every project.",
    color: "bg-red-50 text-[#EC3236]",
  },
  {
    icon: Handshake,
    title: "Tailored Engagement",
    description:
      "We tailor each engagement to meet specific requirements, because we believe no two clients are the same. Every solution is crafted to fit your unique business context.",
    color: "bg-teal-50 text-teal-600",
  },
]

const principles = [
  {
    number: "01",
    title: "Listen First",
    description:
      "Before we build, we listen. Understanding your challenges deeply ensures we deliver solutions that truly matter.",
  },
  {
    number: "02",
    title: "Data-Driven Decisions",
    description:
      "Every recommendation we make is backed by thorough analysis. We let the data guide the conversation.",
  },
  {
    number: "03",
    title: "Long-Term Thinking",
    description:
      "We don't just solve today's problems. We architect solutions that scale and adapt to tomorrow's challenges.",
  },
  {
    number: "04",
    title: "Transparent Partnership",
    description:
      "Open communication, honest assessments, and shared accountability form the foundation of every client relationship.",
  },
]

export default function ValuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-[20%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground lg:text-6xl text-balance">
              What We Stand For
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Instead of waiting for a leader you can believe in, try this:
              Become a leader you can believe in. Our values guide everything we
              do.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <AnimatedSection
                key={value.title}
                animation="fade-up"
                delay={(i + 1) * 100}
              >
                <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${value.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Principles
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              How We Work
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {principles.map((principle, i) => (
              <AnimatedSection
                key={principle.number}
                animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                delay={100}
              >
                <div className="flex gap-6 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-bold">
                    {principle.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              Share Our Values?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              We are always looking for like-minded people to join our mission.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link href="/careers">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
