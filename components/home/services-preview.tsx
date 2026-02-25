"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Database,
  Rocket,
  LineChart,
  Workflow,
} from "lucide-react"

const services = [
  {
    icon: Database,
    title: "Data Warehouse",
    description:
      "We build robust data warehouses tailored to your specific business needs, from first-time implementations to enterprise-scale solutions.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Rocket,
    title: "Data Visualisation",
    description:
      "Transform your data into visually compelling business stories using world-class tools like Power BI, Tableau and QlikView.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Algorithms and analysis to convert raw big data into insightful analytics using specialist tools like R, Spark and Google Analytics.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Workflow,
    title: "Data Engineering",
    description:
      "Essential data engineering techniques to prepare Big Data for large-scale usage inside data warehouses or ML projects.",
    color: "bg-rose-50 text-rose-600",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
            Services That Drive Results
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From data warehousing to advanced analytics, we provide end-to-end
            solutions that turn your data into your greatest asset.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              animation="fade-up"
              delay={(i + 1) * 100}
            >
              <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80 group/link"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={600}>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 group">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
