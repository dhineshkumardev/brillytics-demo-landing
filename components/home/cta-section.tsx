"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="scale-in">
          <div className="relative overflow-hidden rounded-3xl text-foreground px-8 py-16 lg:px-16 lg:py-24 text-center">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute -top-24 -right-24 h-100 w-100 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-100 w-100 rounded-full bg-primary/30 blur-3xl" />
             {/* <div className="absolute top-0 -right-50 h-100 w-100 rounded-full bg-primary/40 blur-3xl" />
             <div className="absolute bottom-0 -left-50 h-100 w-100 rounded-full bg-primary/40 blur-3xl" /> */}

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/60 px-4 py-1.5 text-sm font-medium text-primary-foreground/80 mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Ready to Get Started?
              </div>
              <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance">
                Let&apos;s Transform Your Data Together
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/60">
                Whether you need a complete data warehouse or just better
                visualisations, our team is ready to help you unlock the full
                potential of your data.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-background/20 text-foreground hover:bg-background/10 hover:text-foreground"
                >
                  <Link href="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
