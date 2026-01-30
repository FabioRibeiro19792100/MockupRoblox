import './Card.css'

function Card09_PositiveFeedback({ onTryAgain, onContinue, onMenu, onRestart, uxLensesVariant = false }) {
  if (uxLensesVariant) {
    const confettiPieces = [
      { top: '-10%', left: '12%', rotate: '-20deg', color: '#f97316', w: 10, h: 3, drift: '12px', delay: '0s', duration: '2.6s' },
      { top: '-6%', left: '68%', rotate: '18deg', color: '#3b82f6', w: 8, h: 3, drift: '-14px', delay: '0.2s', duration: '2.4s' },
      { top: '-12%', left: '28%', rotate: '32deg', color: '#22c55e', w: 9, h: 3, drift: '10px', delay: '0.35s', duration: '2.8s' },
      { top: '-8%', left: '80%', rotate: '-12deg', color: '#ef4444', w: 10, h: 3, drift: '-10px', delay: '0.1s', duration: '2.5s' },
      { top: '-14%', left: '8%', rotate: '20deg', color: '#a855f7', w: 8, h: 3, drift: '14px', delay: '0.25s', duration: '2.7s' },
      { top: '-9%', left: '88%', rotate: '35deg', color: '#f59e0b', w: 10, h: 3, drift: '-8px', delay: '0.4s', duration: '2.9s' },
      { top: '-11%', left: '6%', rotate: '-25deg', color: '#3b82f6', w: 9, h: 3, drift: '16px', delay: '0.55s', duration: '2.6s' },
      { top: '-7%', left: '76%', rotate: '10deg', color: '#22c55e', w: 8, h: 3, drift: '-12px', delay: '0.3s', duration: '2.4s' },
      { top: '-13%', left: '20%', rotate: '28deg', color: '#ef4444', w: 10, h: 3, drift: '10px', delay: '0.15s', duration: '2.8s' },
      { top: '-5%', left: '84%', rotate: '-18deg', color: '#a855f7', w: 8, h: 3, drift: '-16px', delay: '0.6s', duration: '2.7s' },
      { top: '-12%', left: '32%', rotate: '-8deg', color: '#f59e0b', w: 9, h: 3, drift: '12px', delay: '0.45s', duration: '2.6s' },
      { top: '-10%', left: '72%', rotate: '22deg', color: '#3b82f6', w: 9, h: 3, drift: '-10px', delay: '0.5s', duration: '2.5s' }
    ]

    return (
      <div className="card card-feedback" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="card-header-global">
          <button className="header-button" onClick={onMenu}>Voltar para menu</button>
          <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
        </div>

        <div style={{ padding: '22px 24px 28px', textAlign: 'center', position: 'relative', background: '#ffffff' }}>
          {confettiPieces.map((piece, index) => (
            <span
              key={index}
              className="confetti-piece"
              style={{
                position: 'absolute',
                top: piece.top,
                left: piece.left,
                width: `${piece.w}px`,
                height: `${piece.h}px`,
                background: piece.color,
                '--confetti-rotate': piece.rotate,
                '--confetti-drift': piece.drift,
                borderRadius: '2px',
                opacity: 0.9,
                animationDelay: piece.delay,
                animationDuration: piece.duration
              }}
            />
          ))}

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

          <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>
            <span style={{ color: '#f59e0b' }}>+ 1 acerto</span> • Badges 2/5
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '62px' }}>
            Isso conta para seus badges de creator.
          </div>

          <button
            className="primary-button"
            onClick={onContinue}
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
            continuar
          </button>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '10px' }}>
            próximo: <strong>vamos colocar isso no mundo!</strong>
          </div>
          <button
            onClick={onTryAgain}
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
            fazer de novo
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
