import WhiteCardCanvas08IdealView from './WhiteCardCanvas08IdealView'
import './WhiteCardCanvas08.css'

function WhiteCardCanvas08({ variant = 'mvp' }) {
  if (variant === 'ideal') {
    return <WhiteCardCanvas08IdealView />
  }

  return (
    <section className="white-card-canvas-08" aria-label="Modo aprendizado">
      <header className="white-card-canvas-08__topbar">
        <button type="button" className="white-card-canvas-08__topbar-button">Voltar para o menu</button>
        <button type="button" className="white-card-canvas-08__topbar-button">Reiniciar tutorial</button>
      </header>

      <div className="white-card-canvas-08__panel">
        <div className="white-card-canvas-08__stripe" aria-hidden="true" />

        <div className="white-card-canvas-08__progress" aria-label="Progresso">
          <span className="white-card-canvas-08__progress-dot">1</span>
          <span className="white-card-canvas-08__progress-line" aria-hidden="true" />
          <span className="white-card-canvas-08__progress-dot is-active">2</span>
        </div>

        <div className="white-card-canvas-08__content">
          <h1 className="white-card-canvas-08__title">
            Ative o<br />modo aprendizado!
          </h1>

          <p className="white-card-canvas-08__lead">
            Agora que você já viu a demonstração, é hora de repetir os passos apresentados para compreender em profundidade como funciona o processo de criação no Roblox Studio.
          </p>

          <p className="white-card-canvas-08__note">
            Em seguida, você será convidado a reconstruir a experiência por conta própria. Durante o percurso, poderá pedir dicas e verificar se está no caminho certo para cumprir a missão.
          </p>

          <p className="white-card-canvas-08__prompt">E aí, preparado?</p>

          <button type="button" className="white-card-canvas-08__cta">CONTINUAR</button>
        </div>
      </div>
    </section>
  )
}

export default WhiteCardCanvas08
