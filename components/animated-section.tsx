"use client"

import { cn } from "@/lib/utils"
import { useIntersection } from "@/hooks/use-intersection"

type AnimationType = "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersection()

  const animationClass = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  }[animation]

  const delayClass = delay > 0 ? `animation-delay-${delay}` : ""

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animationClass,
        isVisible && delayClass,
        className
      )}
    >
      {children}
    </div>
  )
}
