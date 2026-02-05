import React from 'react'
import './WhiteCardCanvas03.css'

function WhiteCardCanvas03() {
  return (
    <section className="white-card-canvas-03" aria-label="Card de capa">
      <div className="white-card-canvas-03__body">
        <header className="white-card-canvas-03__logo">
          <img src="/logo.png" alt="Expedicao Roblox" className="white-card-canvas-03__logo-image" />
        </header>

        <div className="white-card-canvas-03__content">
          <h1 className="white-card-canvas-03__title">Do zero ao primeiro jogo</h1>
          <h1 className="white-card-canvas-03__title white-card-canvas-03__title--spaced">
            No Roblox Studio
          </h1>

          <p className="white-card-canvas-03__subtitle">
            Tutoriais interativos dentro da ferramenta
          </p>

          <span className="white-card-canvas-03__tag">Tutorial 1 de 5</span>

          <p className="white-card-canvas-03__description">
            Aqui voce comeca como criador.<br />
            Voce vai construir, testar<br />
            e publicar um jogo,<br />
            Passo a passo.
          </p>

          <ul className="white-card-canvas-03__list">
            <li className="white-card-canvas-03__list-item">
              <span className="white-card-canvas-03__check">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Nao precisa saber programar</span>
            </li>
            <li className="white-card-canvas-03__list-item">
              <span className="white-card-canvas-03__check">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Leva cerca de 10 minutos</span>
            </li>
            <li className="white-card-canvas-03__list-item">
              <span className="white-card-canvas-03__check">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Voce pode sair a qualquer momento</span>
            </li>
          </ul>
        </div>

        <div className="white-card-canvas-03__actions">
          <button type="button" className="white-card-canvas-03__cta">
            Iniciar tutorial
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhiteCardCanvas03
