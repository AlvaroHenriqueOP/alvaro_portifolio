"use client"

import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
}

export default function LazySection({ 
  children, 
  fallback = <div className="min-h-[400px] bg-primary-dark animate-pulse" />,
  rootMargin = "100px",
  threshold = 0.1
}: LazySectionProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin,
    threshold
  })

  useEffect(() => {
    if (inView) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => setShouldLoad(true), 100)
      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <div ref={ref}>
      {shouldLoad ? children : fallback}
    </div>
  )
}