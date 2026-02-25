"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Globe,
} from "lucide-react"

const timeline = [
  {
    year: "2014",
    title: "Founded",
    description:
      "Brillytics was established with a vision to make data analytics accessible to businesses of all sizes.",
  },
  {
    year: "2016",
    title: "Expanded Services",
    description:
      "Added data visualisation and machine learning capabilities to our service portfolio.",
  },
  {
    year: "2019",
    title: "Global Reach",
    description:
      "Expanded operations internationally, serving clients across Europe and Asia.",
  },
  {
    year: "2022",
    title: "Innovation Hub",
    description:
      "Launched our AI and NLP division, bringing cutting-edge technology to enterprise clients.",
  },
  {
    year: "2025",
    title: "Industry Leader",
    description:
      "Recognised as a leading data analytics consultancy with 150+ successful project deliveries.",
  },
]

const team = [
  {
    name: "Data Scientists",
    count: 15,
    icon: Lightbulb,
    description: "Expert analysts turning raw data into gold",
  },
  {
    name: "Engineers",
    count: 20,
    icon: Rocket,
    description: "Building robust, scalable data pipelines",
  },
  {
    name: "Consultants",
    count: 10,
    icon: Target,
    description: "Strategic advisors who understand your business",
  },
  {
    name: "Designers",
    count: 8,
    icon: Award,
    description: "Creating beautiful data visualisations",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-[20%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground lg:text-6xl text-balance">
              The Story Behind Brillytics
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              We are a passionate team of data scientists, engineers, and
              designers dedicated to transforming how businesses understand and
              leverage their data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left">
              <div className="h-full rounded-2xl border border-border bg-card p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">
                  Our Mission
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To democratise data analytics by providing world-class
                  consulting services that empower businesses to make smarter,
                  data-driven decisions. We believe every organisation deserves
                  access to powerful analytics, regardless of their size.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right">
              <div className="h-full rounded-2xl border border-border bg-card p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">
                  Our Vision
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To be the most trusted name in data analytics consulting,
                  known for our innovative approach, deep expertise, and
                  unwavering commitment to client success. We envision a world
                  where data-driven insights are the foundation of every
                  business decision.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team composition */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Team
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              Experts in Every Discipline
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A multidisciplinary team united by a passion for data and a
              commitment to excellence.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <AnimatedSection
                key={member.name}
                animation="fade-up"
                delay={(i + 1) * 100}
              >
                <div className="group text-center rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <member.icon className="h-7 w-7" />
                  </div>
                  <div className="mt-4 text-3xl font-bold text-foreground">
                    <AnimatedCounter end={member.count} suffix="+" />
                  </div>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {member.name}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Journey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
              A Decade of Innovation
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-border lg:block" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <AnimatedSection
                  key={item.year}
                  animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                  delay={100}
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      i % 2 === 0 ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="rounded-2xl border border-border bg-card p-8 inline-block text-left transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                        <span className="text-sm font-bold text-primary">
                          {item.year}
                        </span>
                        <h3 className="mt-2 text-xl font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-4 border-primary bg-background" />
                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              Want to Be Part of Our Story?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              We are always looking for talented people to join our team.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link href="/careers">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
