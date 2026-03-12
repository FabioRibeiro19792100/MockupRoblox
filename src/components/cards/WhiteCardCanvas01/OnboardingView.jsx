import React, { useRef } from 'react'
import './WhiteCardCanvas01.css'

function OnboardingView({ slides, index, displayText, animationSeed, onPrev, onNext, onGoTo, onSkip, skipLabel = 'Pular' }) {
  const beepRef = useRef(null)
  const activeSlide = slides[index]
  const isFinalSlide = index === slides.length - 1

  const playBeep = () => {
    if (!beepRef.current) {
      beepRef.current = new Audio('/sound-fx/beep.wav')
      beepRef.current.volume = 0.6
    }
    const audio = beepRef.current
    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  return (
    <section className="white-card-canvas-01 white-card-canvas-01--onboarding" aria-label="Onboarding">
      <div
        className="white-card-canvas-01__body white-card-canvas-01__body--onboarding white-card-canvas-01__phone"
        role="group"
        aria-label="Tela de celular"
      >
        <nav className="white-card-canvas-01__dots" aria-label="Passos do onboarding">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.id}
              type="button"
              className={slideIndex === index ? 'white-card-canvas-01__dot is-active' : 'white-card-canvas-01__dot'}
              aria-label={`Ir para slide ${slideIndex + 1}`}
              aria-current={slideIndex === index ? 'true' : undefined}
              onClick={() => {
                playBeep()
                onGoTo(slideIndex)
              }}
            />
          ))}
        </nav>
        <main className="white-card-canvas-01__hero-message">
          {activeSlide ? (
            <figure className="white-card-canvas-01__hero">
              <div
                key={`hero-${animationSeed}`}
                className="white-card-canvas-01__hero-circle is-pop"
                aria-hidden="true"
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  className="white-card-canvas-01__hero-image"
                />
              </div>
            </figure>
          ) : null}
          <blockquote className="white-card-canvas-01__message">
            <p key={`message-${animationSeed}`} className="white-card-canvas-01__message-text">
              {activeSlide
                ? displayText.split('\n').map((line, lineIndex) => (
                    <span
                      key={lineIndex}
                      className={
                        line.trim().startsWith('•')
                          ? 'white-card-canvas-01__message-line white-card-canvas-01__message-line--bullet'
                          : 'white-card-canvas-01__message-line'
                      }
                    >
                      {line}
                    </span>
                  ))
                : ''}
            </p>
          </blockquote>
          <div className="white-card-canvas-01__actions" role="group" aria-label="Acoes do onboarding">
            <div className="white-card-canvas-01__actions-row">
              <button
                type="button"
                className="white-card-canvas-01__action white-card-canvas-01__action--ghost white-card-canvas-01__action--with-icon-left"
                onClick={() => {
                  playBeep()
                  onPrev()
                }}
                aria-label="Voltar para o slide anterior"
                disabled={index === 0}
              >
                <img
                  src="/UI/arrow-left.png"
                  alt=""
                  aria-hidden="true"
                  className="white-card-canvas-01__action-icon"
                />
                Voltar
              </button>
              <button
                type="button"
                className="white-card-canvas-01__action white-card-canvas-01__action--primary white-card-canvas-01__action--with-icon-right"
                onClick={() => {
                  playBeep()
                  onNext()
                }}
                aria-label="Avancar para o proximo slide"
              >
                Avancar
                <img
                  src="/UI/arrow-right.png"
                  alt=""
                  aria-hidden="true"
                  className="white-card-canvas-01__action-icon"
                />
              </button>
            </div>
            <button
              type="button"
              className="white-card-canvas-01__action white-card-canvas-01__action--link"
              onClick={() => {
                playBeep()
                onSkip()
              }}
              aria-label="Pular onboarding"
              disabled={skipLabel === 'Iniciar' && !isFinalSlide}
            >
              {skipLabel}
            </button>
          </div>
        </main>
      </div>
    </section>
  )
}

export default OnboardingView
