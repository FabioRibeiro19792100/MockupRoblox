import React from 'react'
import './WhiteCardCanvas05Ideal.css'

function WhiteCardCanvas05IdealView({ slides, index, displayText, animationSeed, onPrev, onNext, onGoTo, onSkip, skipLabel = 'Pular' }) {
  const activeSlide = slides[index]
  const isFinalSlide = index === slides.length - 1

  return (
    <section className="white-card-canvas-05-ideal white-card-canvas-05-ideal--onboarding" aria-label="Onboarding">
      <div className="white-card-canvas-05-ideal__body white-card-canvas-05-ideal__body--onboarding">
        <div className="white-card-canvas-05-ideal__phone" role="group" aria-label="Tela de celular">
          <nav className="white-card-canvas-05-ideal__dots" aria-label="Passos do onboarding">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.id}
                type="button"
                className={slideIndex === index ? 'white-card-canvas-05-ideal__dot is-active' : 'white-card-canvas-05-ideal__dot'}
                aria-label={`Ir para slide ${slideIndex + 1}`}
                aria-current={slideIndex === index ? 'true' : undefined}
                onClick={() => onGoTo(slideIndex)}
              />
            ))}
          </nav>
          <main className="white-card-canvas-05-ideal__hero-message">
            <div className="white-card-canvas-05-ideal__hero-meta">
              <div className="white-card-canvas-05-ideal__meta-item">
                <span className="white-card-canvas-05-ideal__meta-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 2h12v4l-3.5 4 3.5 4v4H6v-4l3.5-4L6 6V2z" />
                  </svg>
                </span>
                <span className="white-card-canvas-05-ideal__meta-text">20/30 min</span>
              </div>
              <div className="white-card-canvas-05-ideal__meta-item white-card-canvas-05-ideal__meta-item--right">
                <span className="white-card-canvas-05-ideal__meta-text">Nível: Fácil</span>
              </div>
            </div>
            {activeSlide ? (
              <figure className="white-card-canvas-05-ideal__hero">
                <div
                  key={`hero-${animationSeed}`}
                  className="white-card-canvas-05-ideal__hero-circle is-pop"
                  aria-hidden="true"
                >
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    className="white-card-canvas-05-ideal__hero-image"
                  />
                </div>
              </figure>
            ) : null}
            <blockquote className="white-card-canvas-05-ideal__message">
              <p key={`message-${animationSeed}`} className="white-card-canvas-05-ideal__message-text">
                {activeSlide
                  ? displayText.split('\n').map((line, lineIndex) => (
                      <span
                        key={lineIndex}
                        className={
                          line.trim().startsWith('•')
                            ? 'white-card-canvas-05-ideal__message-line white-card-canvas-05-ideal__message-line--bullet'
                            : 'white-card-canvas-05-ideal__message-line'
                        }
                      >
                        {line}
                      </span>
                    ))
                  : ''}
              </p>
            </blockquote>
          </main>
          <div className="white-card-canvas-05-ideal__actions" role="group" aria-label="Acoes do onboarding">
            <button
              type="button"
              className="white-card-canvas-05-ideal__action white-card-canvas-05-ideal__action--ghost"
              onClick={onPrev}
              aria-label="Voltar para o slide anterior"
            >
              Voltar
            </button>
            <button
              type="button"
              className="white-card-canvas-05-ideal__action white-card-canvas-05-ideal__action--primary"
              onClick={onNext}
              aria-label="Avancar para o proximo slide"
            >
              Avancar
            </button>
            <button
              type="button"
              className="white-card-canvas-05-ideal__action white-card-canvas-05-ideal__action--ghost"
              onClick={onSkip}
              aria-label="Pular onboarding"
              disabled={skipLabel === 'Iniciar' && !isFinalSlide}
            >
              {skipLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhiteCardCanvas05IdealView
