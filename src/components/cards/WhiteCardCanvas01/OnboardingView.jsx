import React from 'react'
import './WhiteCardCanvas01.css'

function OnboardingView({ slides, index, displayText, animationSeed, onPrev, onNext, onGoTo, onSkip }) {
  const activeSlide = slides[index]

  return (
    <section className="white-card-canvas-01 white-card-canvas-01--onboarding" aria-label="Onboarding">
      <div className="white-card-canvas-01__body white-card-canvas-01__body--onboarding">
        <div className="white-card-canvas-01__phone" role="group" aria-label="Tela de celular">
          <nav className="white-card-canvas-01__dots" aria-label="Passos do onboarding">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.id}
                type="button"
                className={slideIndex === index ? 'white-card-canvas-01__dot is-active' : 'white-card-canvas-01__dot'}
                aria-label={`Ir para slide ${slideIndex + 1}`}
                aria-current={slideIndex === index ? 'true' : undefined}
                onClick={() => onGoTo(slideIndex)}
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
                {activeSlide ? displayText : ''}
              </p>
            </blockquote>
          </main>
          <div className="white-card-canvas-01__actions" role="group" aria-label="Acoes do onboarding">
            <button
              type="button"
              className="white-card-canvas-01__action white-card-canvas-01__action--ghost"
              onClick={onPrev}
              aria-label="Voltar para o slide anterior"
            >
              Voltar
            </button>
            <button
              type="button"
              className="white-card-canvas-01__action white-card-canvas-01__action--primary"
              onClick={onNext}
              aria-label="Avancar para o proximo slide"
            >
              Avancar
            </button>
            <button
              type="button"
              className="white-card-canvas-01__action white-card-canvas-01__action--ghost"
              onClick={onSkip}
              aria-label="Pular onboarding"
            >
              Pular
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnboardingView
