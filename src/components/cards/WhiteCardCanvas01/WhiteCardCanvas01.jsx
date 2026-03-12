import React, { useEffect, useMemo, useRef, useState } from 'react'
import slides from './onboardingSlides.json'
import OnboardingView from './OnboardingView'
import { useOnboardingAnimation } from './useOnboardingAnimation'

function WhiteCardCanvas01({ autoPlay = false, animationSeed = 0, skipLabel }) {
  const { index, next, prev, goTo } = useOnboardingAnimation({
    total: slides.length,
    interval: 4500,
    autoPlay
  })

  const activeSlide = useMemo(() => slides[index], [index])
  const [displayText, setDisplayText] = useState('')
  const lastSeedRef = useRef(animationSeed)

  useEffect(() => {
    if (!activeSlide) {
      setDisplayText('')
      return
    }

    const shouldDelayTyping = animationSeed !== lastSeedRef.current
    lastSeedRef.current = animationSeed

    setDisplayText('')
    const growDelayMs = shouldDelayTyping ? 350 : 0
    const typingDelayMs = shouldDelayTyping ? 550 : 0
    const typingSpeedMs = 28
    let typingInterval = null

    const startTypingTimeout = window.setTimeout(() => {
      let currentIndex = 0
      typingInterval = window.setInterval(() => {
        currentIndex += 1
        setDisplayText(activeSlide.text.slice(0, currentIndex))
        if (currentIndex >= activeSlide.text.length) {
          window.clearInterval(typingInterval)
        }
      }, typingSpeedMs)
    }, growDelayMs + typingDelayMs)

    return () => {
      window.clearTimeout(startTypingTimeout)
      if (typingInterval) {
        window.clearInterval(typingInterval)
      }
    }
  }, [activeSlide, animationSeed])

  return (
    <OnboardingView
      slides={slides}
      index={index}
      displayText={displayText}
      animationSeed={animationSeed}
      onPrev={prev}
      onNext={next}
      onGoTo={goTo}
      onSkip={() => goTo(slides.length - 1)}
      skipLabel={skipLabel}
    />
  )
}

export default WhiteCardCanvas01
