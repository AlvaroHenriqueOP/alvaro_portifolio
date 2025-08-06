import { useMemo } from 'react'

// Configurações otimizadas para animações performáticas
export const useOptimizedAnimation = () => {
  
  const optimizedTransition = useMemo(() => ({
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier otimizado
    duration: 0.4,
  }), [])

  const springTransition = useMemo(() => ({
    type: "spring",
    damping: 25,
    stiffness: 120,
    mass: 1,
  }), [])

  const fastTransition = useMemo(() => ({
    type: "tween",
    ease: "easeOut",
    duration: 0.2,
  }), [])

  const slowTransition = useMemo(() => ({
    type: "tween", 
    ease: "easeInOut",
    duration: 0.8,
  }), [])

  // Variants otimizados que usam transform ao invés de outras propriedades
  const fadeInUp = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 20,
      transform: "translateZ(0)" // força aceleração de hardware
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transform: "translateZ(0)"
    }
  }), [])

  const fadeInScale = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      transform: "translateZ(0)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transform: "translateZ(0)"
    }
  }), [])

  const slideInLeft = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      x: -50,
      transform: "translateZ(0)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transform: "translateZ(0)"
    }
  }), [])

  const slideInRight = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      x: 50,
      transform: "translateZ(0)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transform: "translateZ(0)"
    }
  }), [])

  const staggerContainer = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ...optimizedTransition
      }
    }
  }), [optimizedTransition])

  const hoverScale = useMemo(() => ({
    scale: 1.05,
    transition: fastTransition
  }), [fastTransition])

  const tapScale = useMemo(() => ({
    scale: 0.95,
    transition: { duration: 0.1 }
  }), [])

  return {
    transitions: {
      optimized: optimizedTransition,
      spring: springTransition,
      fast: fastTransition,
      slow: slowTransition
    },
    variants: {
      fadeInUp,
      fadeInScale,
      slideInLeft,
      slideInRight,
      staggerContainer
    },
    interactions: {
      hover: hoverScale,
      tap: tapScale
    }
  }
}