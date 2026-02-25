"use client"

import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { AboutPreview } from "@/components/home/about-preview"
import { StatsSection } from "@/components/home/stats-section"
import { PlatformsSection } from "@/components/home/platforms-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PlatformsSection />
      <ServicesPreview />
      <AboutPreview />
      <StatsSection />
      <CtaSection />
    </>
  )
}
