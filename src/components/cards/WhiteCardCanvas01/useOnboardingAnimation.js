import { useEffect, useRef, useState } from 'react'

export function useOnboardingAnimation({ total, interval = 4000, autoPlay = false } = {}) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const next = () => {
    setIndex((current) => (current + 1) % total)
  }

  const prev = () => {
    setIndex((current) => (current - 1 + total) % total)
  }

  const goTo = (nextIndex) => {
    if (Number.isNaN(nextIndex)) return
    const bounded = Math.max(0, Math.min(total - 1, nextIndex))
    setIndex(bounded)
  }

  useEffect(() => {
    if (!autoPlay || total <= 1) return
    timerRef.current = window.setInterval(next, interval)
    return () => window.clearInterval(timerRef.current)
  }, [autoPlay, interval, total])

  return {
    index,
    next,
    prev,
    goTo
  }
}
