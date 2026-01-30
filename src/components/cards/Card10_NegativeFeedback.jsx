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
          <div style={{
            width: '190px',
            height: '190px',
            margin: '10px auto 14px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #eef7ff 0%, #dff2ff 55%, #cbe9ff 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              position: 'absolute',
              inset: '-10px',
              background: 'conic-gradient(from 0deg, rgba(180, 220, 255, 0.35), rgba(255, 255, 255, 0) 40%, rgba(180, 220, 255, 0.35) 70%, rgba(255, 255, 255, 0))',
              borderRadius: '50%',
              filter: 'blur(1px)'
            }} />
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: '#4f46e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 14px rgba(79, 70, 229, 0.35)'
            }}>
              <img
                src="/badge2-removebg-preview.png"
                alt="Badge"
                style={{ width: '74px', height: '74px', objectFit: 'contain' }}
              />
            </div>
          </div>

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
