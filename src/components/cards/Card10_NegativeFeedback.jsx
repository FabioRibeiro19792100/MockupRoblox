import './Card.css'

function Card10_NegativeFeedback({ onTryAgain, onContinue, onMenu, onRestart, uxLensesVariant = false }) {
  if (uxLensesVariant) {
    return (
      <div className="card card-feedback" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="card-header-global">
          <button className="header-button" onClick={onMenu}>Voltar para menu</button>
          <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
        </div>

        <div style={{ padding: '56px 24px 28px', textAlign: 'center', position: 'relative', background: '#ffffff' }}>
          <img
            src="/logo-expedicao-derrota.png"
            alt="Derrota"
            style={{
              width: '120px',
              height: '120px',
              margin: '10px auto 14px',
              objectFit: 'contain'
            }}
          />

          <div style={{ fontSize: '14pt', fontWeight: 700, color: '#111827', marginBottom: '25px', marginTop: '28px' }}>
            Opa! Infelizmente essa etapa não saiu como esperado.
          </div>
          <div style={{ fontSize: '12pt', color: '#6b7280', marginBottom: '18px' }}>
            mas você pode
          </div>

          <button
            className="primary-button"
            onClick={onTryAgain}
            style={{
              width: '100%',
              maxWidth: '260px',
              margin: '0 auto 10px',
              background: '#facc15',
              color: '#000000',
              fontWeight: 700,
              borderRadius: '999px',
              padding: '12px 18px',
              boxShadow: '0 10px 20px rgba(250, 204, 21, 0.35)'
            }}
          >
            tentar novamente
          </button>
          <button
            onClick={onContinue}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#2563eb',
              fontSize: '12px',
              fontWeight: 700,
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            seguir em frente
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="card card-feedback">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div className="card-feedback-content">
        <div className="feedback-icon error" style={{ fontSize: '80px' }}>✗</div>
        <h2 className="card-title">Ops! Algo não saiu como esperado</h2>
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

export default Card10_NegativeFeedback
