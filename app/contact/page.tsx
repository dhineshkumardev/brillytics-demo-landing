"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@brillytics.com",
    description: "We typically respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+44 (0) 203 143 4567",
    description: "Mon-Fri, 9am to 6pm GMT",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "London, United Kingdom",
    description: "By appointment only",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-[30%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground lg:text-6xl text-balance">
              Let{"'"}s Start a Conversation
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Whether you have a project in mind or just want to explore what
              data analytics can do for your business, we{"'"}d love to hear
              from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactInfo.map((info, i) => (
              <AnimatedSection
                key={info.title}
                animation="fade-up"
                delay={(i + 1) * 100}
              >
                <div className="group h-full rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {info.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {info.detail}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-12">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12 gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you for reaching out. We{"'"}ll get back to you
                    within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground">
                      Send Us a Message
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Fill out the form below and we{"'"}ll get back to you as
                      soon as possible.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or question..."
                        rows={5}
                        required
                        className="rounded-xl resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-full group self-start px-8"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
