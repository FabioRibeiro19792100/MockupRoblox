import './Card.css'

function Card09_PositiveFeedback({ onTryAgain, onContinue, onMenu, onRestart }) {
  return (
    <div className="card card-feedback">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div className="card-feedback-content" style={{ paddingTop: '40px' }}>
        <div className="feedback-icon success" style={{ fontSize: '80px' }}>✓</div>
        <h2 className="card-title">Parabéns, você acertou!</h2>
        <div className="feedback-actions">
          <button className="feedback-button-red" onClick={onTryAgain}>
            Fazer de novo
          </button>
          <button className="feedback-button-black" onClick={onContinue}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card09_PositiveFeedback
