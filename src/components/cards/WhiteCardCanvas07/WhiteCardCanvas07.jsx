import { useEffect, useState } from 'react'
import './WhiteCardCanvas07.css'

function WhiteCardCanvas07({ variant = 'ideal' }) {
  const victoryFrames = ['victory-1', 'victory-1-ib', 'victory-2', 'victory-3', 'victory-3-ib', 'victory-4']
  const [victoryFrameIndex, setVictoryFrameIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVictoryFrameIndex((current) => (current + 1) % victoryFrames.length)
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  if (variant === 'mvp') {
    return (
      <section className="white-card-canvas-07" aria-label="Feedback positivo MVP">
        <div className="white-card-canvas-07__body--mvp">
          <img
            src="/Q&A/Winscreen.png"
            alt="Winscreen"
            className="white-card-canvas-07__mvp-image"
          />
        </div>
      </section>
    )
  }

  return (
    <section className="white-card-canvas-07" aria-label="Feedback positivo">
      <div className="white-card-canvas-07__topbar">
        <button type="button" className="white-card-canvas-07__topbar-button">Voltar para o menu</button>
        <button type="button" className="white-card-canvas-07__topbar-button">Reiniciar tutorial</button>
      </div>

      <div className="white-card-canvas-07__content">
        <div className="white-card-canvas-07__confetti">
          <span className="white-card-canvas-07__confetti-piece piece-1" />
          <span className="white-card-canvas-07__confetti-piece piece-2" />
          <span className="white-card-canvas-07__confetti-piece piece-3" />
          <span className="white-card-canvas-07__confetti-piece piece-4" />
          <span className="white-card-canvas-07__confetti-piece piece-5" />
          <span className="white-card-canvas-07__confetti-piece piece-6" />
          <span className="white-card-canvas-07__confetti-piece piece-7" />
          <span className="white-card-canvas-07__confetti-piece piece-8" />
          <span className="white-card-canvas-07__confetti-piece piece-9" />
          <span className="white-card-canvas-07__confetti-piece piece-10" />
          <span className="white-card-canvas-07__confetti-piece piece-11" />
          <span className="white-card-canvas-07__confetti-piece piece-12" />
        </div>

        <div className="white-card-canvas-07__hero">
          <img
            src={`/victory/${victoryFrames[victoryFrameIndex]}.png`}
            alt=""
            className="white-card-canvas-07__hero-image"
          />
        </div>

        <div className="white-card-canvas-07__title-group">
          <h2 className="white-card-canvas-07__title">Etapa concluída com sucesso!</h2>
          <div className="white-card-canvas-07__learned">
            <div className="white-card-canvas-07__learned-item">
              <div className="white-card-canvas-07__learned-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Criar blocos no mundo 3D</span>
            </div>
            <div className="white-card-canvas-07__learned-item">
              <div className="white-card-canvas-07__learned-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Controlar tamanho e posição</span>
            </div>
            <div className="white-card-canvas-07__learned-item">
              <div className="white-card-canvas-07__learned-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Aplicar aparência ao objeto</span>
            </div>
          </div>
          <p className="white-card-canvas-07__subtitle">progresso salvo!</p>
        </div>

        <div className="white-card-canvas-07__next">
          <button type="button" className="white-card-canvas-07__primary">CONTINUAR</button>
          <div className="white-card-canvas-07__next-text">
            próximo: <strong>vamos colocar isso no mundo!</strong>
          </div>
          <button type="button" className="white-card-canvas-07__link">fazer de novo</button>
        </div>
      </div>

      <div className="white-card-canvas-07__badge-toggle">
        <span className="white-card-canvas-07__badge-text">CONQUISTE SEUS BADGES DE CREATOR</span>
        <div className="white-card-canvas-07__badge-switch">
          <div className="white-card-canvas-07__badge-knob" />
        </div>
      </div>
    </section>
  )
}

export default WhiteCardCanvas07
