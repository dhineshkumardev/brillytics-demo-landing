"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Database,
  BarChart3,
  LineChart,
  Workflow,
  Check,
  Layers,
  BrainCircuit,
  Globe,
  Sparkles,
} from "lucide-react"

const services = [
  {
    icon: Database,
    title: "Data Warehouse",
    tagline: "Build the foundation for data-driven decisions",
    description:
      "Our clients often reach out to Brillytics asking for a data warehouse to be built. We work with companies who know exactly what they plan to achieve and many who are developing their first data warehouses. Our experience developing data warehouses in many companies across many industries is invaluable. We enjoy giving advice and support through the development of a data warehouse project.",
    features: [
      "Custom data warehouse architecture design",
      "First-time & enterprise-scale implementations",
      "Cross-industry best practices",
      "Migration & modernisation support",
      "Performance optimisation & tuning",
    ],
    color: "bg-blue-50 text-blue-600 border-blue-100",
    accentBg: "bg-blue-50/50",
  },
  {
    icon: BarChart3,
    title: "Data Visualisation",
    tagline: "Bring your data stories to life",
    description:
      "Data Visualisation helps to visually represent data providing visually compelling business stories with more than just numbers, often using charts, maps, infographics and business-related graphics. We are often asked how to choose the right visualisation to bring data to life. World class, market leading visualisation tools, such as Power BI, Tableau and QlikView provide an amazing array of features that can transform a business' view of analytics.",
    features: [
      "Interactive dashboards & reports",
      "Power BI, Tableau & QlikView expertise",
      "Custom infographics & data stories",
      "Real-time data monitoring",
      "Executive-level presentations",
    ],
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    accentBg: "bg-emerald-50/50",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    tagline: "Uncover hidden insights in your data",
    description:
      "Algorithms and analysis to convert raw big data into insightful analytics can help a business refine processes or focus on trends that otherwise would be overlooked. Although technology experts are involved in gathering and modelling data, increasingly the extraction and consumption of data can be passed over to business, once the correct framework is in place. Specialist analytic tools, such as R, Spark and Google Analytics go deeper than pure visualisation tools to discover trends and patterns that are inherent in the data.",
    features: [
      "Advanced statistical analysis",
      "R, Spark & Google Analytics",
      "Self-service analytics frameworks",
      "Predictive modelling & forecasting",
      "Trend & pattern discovery",
    ],
    color: "bg-amber-50 text-amber-600 border-amber-100",
    accentBg: "bg-amber-50/50",
  },
  {
    icon: Workflow,
    title: "Data Engineering",
    tagline: "Prepare your data for large-scale impact",
    description:
      "Data Engineering techniques are essential to prepare Big Data for large scale usage inside data warehouses or machine learning projects. Our Data Engineers make it their business to understand the detailed landscape of your company's data, to ensure collection, extraction and modelling covers your current and future needs. Data Engineers are used to perform the heavy lifting data pipelines between your constantly used business focused website and transactional systems to provide the starting point for a traditional data warehouse, analytics and data science projects.",
    features: [
      "ETL / ELT pipeline development",
      "Real-time data streaming",
      "Data lake & lakehouse architecture",
      "Multi-system data consolidation",
      "Scalable, future-proof infrastructure",
    ],
    color: "bg-rose-50 text-rose-600 border-rose-100",
    accentBg: "bg-rose-50/50",
  },
]

const platforms = [
  { name: "Power BI", icon: BarChart3 },
  { name: "Tableau", icon: Layers },
  { name: "QlikView", icon: Globe },
  { name: "Google Analytics", icon: LineChart },
  { name: "Microsoft Azure", icon: Database },
  { name: "AWS", icon: Sparkles },
  { name: "Apache Spark", icon: BrainCircuit },
  { name: "R Studio", icon: Workflow },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business goals, data landscape, and current challenges through in-depth workshops.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We design a tailored data strategy and architecture that aligns with your objectives and scales with your growth.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Our engineers build robust data solutions using industry best practices and cutting-edge technologies.",
  },
  {
    step: "04",
    title: "Delivery & Support",
    description:
      "We deliver actionable insights and provide ongoing support to ensure long-term success and adoption.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-[20%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-[10%] h-[300px] w-[300px] rounded-full bg-primary/3 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground lg:text-6xl text-balance">
              Service is one that you can{"'"}t buy or measure with money, but
              with sincerity
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              End-to-end data solutions that transform how you collect, analyse,
              and act on your business data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do intro */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              What We Do
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              From warehousing to engineering, we provide comprehensive data
              services. Each service is designed to solve real business challenges
              and unlock the full potential of your data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-24">
            {services.map((service, i) => (
              <AnimatedSection
                key={service.title}
                animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    i % 2 !== 0 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.color} border`}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-3xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-6 flex flex-col gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <div
                      className={`rounded-3xl ${service.accentBg} border border-border p-10 lg:p-14`}
                    >
                      <div className="flex flex-col items-center text-center gap-6">
                        <div
                          className={`flex h-20 w-20 items-center justify-center rounded-3xl ${service.color} border transition-transform duration-500 hover:scale-110`}
                        >
                          <service.icon className="h-10 w-10" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">
                            {service.title}
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {service.tagline}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                          {service.features.slice(0, 4).map((feature, fi) => (
                            <div
                              key={fi}
                              className="rounded-xl bg-card border border-border p-3 text-xs text-muted-foreground text-center transition-all duration-300 hover:border-primary/20 hover:shadow-sm"
                            >
                              {feature.split(" ").slice(0, 3).join(" ")}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven methodology that delivers results, every time.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <AnimatedSection
                key={item.step}
                animation="fade-up"
                delay={(i + 1) * 100}
              >
                <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">
                  <span className="text-5xl font-bold text-primary/10 transition-colors duration-300 group-hover:text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                      <ArrowRight className="h-5 w-5 text-primary/30" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Platforms
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              Technology We Trust
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We work with world-class, market-leading tools and platforms to
              deliver the best results for our clients.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {platforms.map((platform, i) => (
              <AnimatedSection
                key={platform.name}
                animation="scale-in"
                delay={(i + 1) * 80}
              >
                <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <platform.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {platform.name}
                  </p>
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
              Ready to Transform Your Data?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Let{"'"}s discuss how our services can help your business unlock the
              power of data analytics.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 group"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
