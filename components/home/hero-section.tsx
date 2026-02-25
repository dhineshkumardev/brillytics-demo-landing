"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Rocket, TrendingUp, Database, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-[10%] h-[300px] w-[300px] rounded-full bg-primary/3 blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.55 0.19 255 / 0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Rocket className="h-4 w-4" />
              Brilliant Analytics, The Clever Way
            </div>

            <h1 className="animate-fade-up animation-delay-100 mt-6 text-5xl font-bold tracking-tight text-foreground leading-[1.1] lg:text-7xl text-balance">
              Data Will Talk{" "}
              <span className="text-primary">If You Listen</span>
            </h1>

            <p className="animate-fade-up animation-delay-200 mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              We process, clean, mine, crunch and analyse data of any size, from
              any source. Turning complex information into compelling insights
              that drive your business forward.
            </p>

            <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 group"
              >
                <Link href="/about">
                  <Play className="mr-2 h-4 w-4 text-primary" />
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-up animation-delay-400 mt-12 flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">150+</span>
                <span className="text-xs text-muted-foreground">Projects Delivered</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">50+</span>
                <span className="text-xs text-muted-foreground">Happy Clients</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">99%</span>
                <span className="text-xs text-muted-foreground">Client Retention</span>
              </div>
            </div>

            {/* Analytics UI preview (no image) */}
            <div className="animate-fade-up animation-delay-500 mx-auto mt-12 max-w-4xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Growth</p>
                      <p className="text-lg font-bold text-foreground">+47.2%</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Database className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Data Points</p>
                      <p className="text-lg font-bold text-foreground">2.4M</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Secure by Design</p>
                      <p className="text-lg font-bold text-foreground">Trusted</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Clean
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-primary/70" />
                  Model
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-primary/50" />
                  Visualise
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
