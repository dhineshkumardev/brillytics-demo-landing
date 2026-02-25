"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Zap,
  Users,
  GraduationCap,
  Globe,
  Coffee,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const perks = [
  {
    icon: Heart,
    title: "Health & Wellbeing",
    description:
      "Comprehensive health insurance, mental health support, and wellness programmes for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description:
      "Annual learning budget, conference tickets, and dedicated time for professional development.",
  },
  {
    icon: Globe,
    title: "Flexible Working",
    description:
      "Hybrid and remote options, flexible hours, and the freedom to work from anywhere.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "Generous holiday allowance, paid sabbaticals, and a culture that respects your time outside work.",
  },
  {
    icon: Users,
    title: "Team Culture",
    description:
      "Regular team events, hackathons, and social gatherings to build meaningful connections.",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description:
      "Top-of-the-line equipment, premium tools, and access to cutting-edge data platforms.",
  },
]

const jobs = [
  {
    id: 1,
    title: "Senior Data Engineer",
    department: "Engineering",
    location: "London, UK / Remote",
    type: "Full-time",
    description:
      "Join our engineering team to build and maintain scalable data pipelines. You will design ETL/ELT processes, optimise data infrastructure, and work closely with data scientists to deliver production-ready solutions.",
    requirements: [
      "5+ years of experience in data engineering",
      "Proficiency in Python, SQL, and Spark",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong understanding of data warehouse design patterns",
      "Excellent communication and collaboration skills",
    ],
  },
  {
    id: 2,
    title: "Data Visualisation Specialist",
    department: "Analytics",
    location: "London, UK",
    type: "Full-time",
    description:
      "Create stunning, insightful dashboards and visualisations for our clients using Power BI, Tableau, and custom solutions. Turn complex datasets into compelling data stories that drive business decisions.",
    requirements: [
      "3+ years in data visualisation or BI development",
      "Expert-level Power BI or Tableau skills",
      "Understanding of UX principles for data presentation",
      "Experience with SQL and data modelling",
      "Strong portfolio of previous data visualisation work",
    ],
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    description:
      "Develop and deploy machine learning models that solve real business problems. Work alongside data engineers and analysts to build end-to-end ML pipelines from experimentation to production.",
    requirements: [
      "4+ years in machine learning or data science",
      "Strong Python skills with ML libraries (scikit-learn, TensorFlow, PyTorch)",
      "Experience deploying models to production",
      "Understanding of NLP and computer vision techniques",
      "MSc or PhD in a relevant field preferred",
    ],
  },
  {
    id: 4,
    title: "Data Analytics Consultant",
    department: "Consulting",
    location: "London, UK / Hybrid",
    type: "Full-time",
    description:
      "Work directly with clients to understand their data challenges and deliver actionable insights. You will be the bridge between technical teams and business stakeholders, translating data into business impact.",
    requirements: [
      "3+ years in analytics consulting or similar role",
      "Strong analytical and problem-solving skills",
      "Experience with R, Python, or similar analytics tools",
      "Excellent presentation and stakeholder management skills",
      "Business acumen with industry-specific knowledge",
    ],
  },
  {
    id: 5,
    title: "Junior Data Analyst",
    department: "Analytics",
    location: "London, UK",
    type: "Full-time",
    description:
      "Start your data career with Brillytics. You will support the analytics team in data collection, cleaning, analysis, and reporting. A perfect role for graduates looking to grow in the world of data.",
    requirements: [
      "Degree in Mathematics, Statistics, Computer Science or related field",
      "Basic proficiency in SQL and Excel",
      "Familiarity with Python or R is a plus",
      "Strong attention to detail and analytical mindset",
      "Eager to learn and grow in a fast-paced environment",
    ],
  },
]

function JobCard({
  job,
}: {
  job: (typeof jobs)[0]
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/20 hover:shadow-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-start justify-between p-8 text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {job.department}
            </span>
            <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {job.type}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {job.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {job.type}
            </span>
          </div>
        </div>
        <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border px-8 py-6">
          <p className="text-muted-foreground leading-relaxed">
            {job.description}
          </p>
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-foreground">
              Requirements
            </h4>
            <ul className="mt-3 flex flex-col gap-2">
              {job.requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-6 group/btn"
            >
              <Link href="/contact">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-[40%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-[10%] h-[300px] w-[300px] rounded-full bg-primary/3 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Careers
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground lg:text-6xl text-balance">
              Build the Future of Data With Us
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Join a team of passionate data professionals who are transforming
              how businesses understand and leverage their data.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                {jobs.length} Open Positions
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                London & Remote
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                50+ Team Members
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Brillytics
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              More Than Just a Job
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe great work comes from great environments. Here{"'"}s what
              makes Brillytics special.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => (
              <AnimatedSection
                key={perk.title}
                animation="fade-up"
                delay={(i + 1) * 100}
              >
                <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <perk.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Open Positions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              Find Your Next Role
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our current openings and find the perfect fit for your
              skills and ambitions.
            </p>
          </AnimatedSection>

          <div className="mt-16 flex flex-col gap-4">
            {jobs.map((job, i) => (
              <AnimatedSection
                key={job.id}
                animation="fade-up"
                delay={(i + 1) * 80}
              >
                <JobCard job={job} />
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
              Don{"'"}t See the Right Role?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              We{"'"}re always looking for talented people. Send us your CV and
              we{"'"}ll keep you in mind for future opportunities.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 group"
              >
                <Link href="/contact">
                  Get in Touch
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
