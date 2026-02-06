import { useState } from 'react'

export function useOnboardingAnimation({ total } = {}) {
  const [index, setIndex] = useState(0)

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

  return {
    index,
    next,
    prev,
    goTo
  }
}
