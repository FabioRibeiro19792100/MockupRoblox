import './WhiteCardCanvas08Ideal.css'

function WhiteCardCanvas08IdealView() {
  const lines = [
    'Ative o modo aprendizado!',
    'Agora que você já viu a demonstração, é hora de repetir os passos apresentados para compreender em profundidade como funciona o processo de criação no Roblox Studio.',
    'Em seguida, você será convidado a reconstruir a experiência por conta própria. Durante o percurso, poderá pedir dicas e verificar se está no caminho certo para cumprir a missão.',
    'E aí, preparado?'
  ]

  return (
    <section className="white-card-canvas-08-ideal white-card-canvas-08-ideal--learning" aria-label="Modo aprendizado ideal">
      <div className="white-card-canvas-08-ideal__body white-card-canvas-08-ideal__body--learning">
        <div className="white-card-canvas-08-ideal__phone" role="group" aria-label="Tela de celular">
          <nav className="white-card-canvas-08-ideal__dots" aria-label="Passos do onboarding">
            <button type="button" className="white-card-canvas-08-ideal__dot" aria-label="Passo 1" />
            <button type="button" className="white-card-canvas-08-ideal__dot is-active" aria-label="Passo 2" aria-current="true" />
          </nav>

          <main className="white-card-canvas-08-ideal__hero-message">
            <div className="white-card-canvas-08-ideal__hero-meta">
              <div className="white-card-canvas-08-ideal__meta-item">
                <span className="white-card-canvas-08-ideal__meta-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h12a4 4 0 0 1 4 4v10H8a4 4 0 0 0-4 4V4z" />
                  </svg>
                </span>
                <span className="white-card-canvas-08-ideal__meta-text">PASSO 2/2</span>
              </div>
              <div className="white-card-canvas-08-ideal__meta-item white-card-canvas-08-ideal__meta-item--right">
                <span className="white-card-canvas-08-ideal__meta-text">MODO: APRENDIZADO</span>
              </div>
            </div>

            <figure className="white-card-canvas-08-ideal__hero">
              <div className="white-card-canvas-08-ideal__hero-circle is-pop" aria-hidden="true">
                <svg className="white-card-canvas-08-ideal__hero-icon" viewBox="0 0 24 24">
                  <path d="M5 3h10a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V3z" />
                  <path d="M5 17h13" />
                  <path d="M8 7h6" />
                </svg>
              </div>
            </figure>

            <blockquote className="white-card-canvas-08-ideal__message">
              <p className="white-card-canvas-08-ideal__message-text">
                {lines.map((line, index) => (
                  <span key={index} className="white-card-canvas-08-ideal__message-line">
                    {line}
                  </span>
                ))}
              </p>
            </blockquote>
          </main>

          <div className="white-card-canvas-08-ideal__actions" role="group" aria-label="Acoes do onboarding">
            <button type="button" className="white-card-canvas-08-ideal__action white-card-canvas-08-ideal__action--ghost">
              VOLTAR
            </button>
            <button type="button" className="white-card-canvas-08-ideal__action white-card-canvas-08-ideal__action--primary">
              CONTINUAR
            </button>
            <button type="button" className="white-card-canvas-08-ideal__action white-card-canvas-08-ideal__action--ghost">
              PULAR
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhiteCardCanvas08IdealView
