import React from 'react'
import './WhiteCardCanvas03.css'

function WhiteCardCanvas03({ variant = 'mvp' }) {
  const isIdeal = variant === 'ideal'
  if (!isIdeal) {
    return (
      <section className="white-card-canvas-03 white-card-canvas-03--mvp" aria-label="Pagina home">
        <div className="white-card-canvas-03__body">
          <figure className="white-card-canvas-03__figure">
            <img
              src="/Q&A/pagina-home.png"
              alt="Pagina Home"
              className="white-card-canvas-03__image"
            />
          </figure>
        </div>
      </section>
    )
  }
  return (
    <section className="white-card-canvas-03" aria-label="Card de capa">
      <div className="white-card-canvas-03__body">
        <header className="white-card-canvas-03__logo">
          <img src="/logo.png" alt="Expedicao Roblox" className="white-card-canvas-03__logo-image" />
        </header>

        <div className="white-card-canvas-03__content">
          <h1 className="white-card-canvas-03__title">Do zero a criacao do seu primeiro jogo</h1>
          <h1 className="white-card-canvas-03__title white-card-canvas-03__title--spaced">
            no Roblox Studio!
          </h1>

          <p className="white-card-canvas-03__subtitle">
            Aprenda aqui mesmo, com os tutoriais interativos dentro da ferramenta da Expedicao Roblox!
          </p>

          <span className="white-card-canvas-03__tag">Tutorial 1 de 5</span>

          <p className="white-card-canvas-03__description">
            Aqui comeca a sua jornada como Creator.<br />
            Vamos te ensinar, passo a passo,<br />
            a construir, testar e publicar um jogo<br />
            dentro da ferramenta.
          </p>

          <ul className="white-card-canvas-03__list">
            <li className="white-card-canvas-03__list-item">
              <span className="white-card-canvas-03__check">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>NAO PRECISA SABER PROGRAMAR</span>
            </li>
            <li className="white-card-canvas-03__list-item">
              <span className="white-card-canvas-03__check">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>LEVA CERCA DE 10 MINUTOS</span>
            </li>
            <li className="white-card-canvas-03__list-item">
              <span className="white-card-canvas-03__check">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>E POSSIVEL SAIR A QUALQUER MOMENTO</span>
            </li>
          </ul>
        </div>

        <div className="white-card-canvas-03__actions">
          <button type="button" className="white-card-canvas-03__cta">
            INICIAR TUTORIAL
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhiteCardCanvas03
