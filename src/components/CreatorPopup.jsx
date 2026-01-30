import './CreatorPopup.css'

function CreatorPopup({ onClose, uxLensesVariant = false }) {
  if (uxLensesVariant) {
    return (
      <div className="creator-popup-overlay" onClick={onClose}>
        <div
          className="creator-popup-content-ux"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
            padding: 0,
            minHeight: 'unset',
            height: 'auto',
            maxHeight: 'none'
          }}
        >
          <div
            style={{
              width: '300px',
              maxWidth: '300px',
              backgroundColor: '#dff3ff',
              backgroundImage: 'none',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto',
              backgroundPosition: 'initial',
              border: 'none',
              borderRadius: '28px',
              padding: '24px 20px 20px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              height: '75vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >


            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }}>
              {[
                { top: '-10%', left: '12%', rotate: '-20deg', color: '#f97316', w: 6, h: 2, drift: '12px', delay: '0s', duration: '2.6s' },
                { top: '-6%', left: '68%', rotate: '18deg', color: '#3b82f6', w: 6, h: 2, drift: '-14px', delay: '0.2s', duration: '2.4s' },
                { top: '-12%', left: '28%', rotate: '32deg', color: '#22c55e', w: 6, h: 2, drift: '10px', delay: '0.35s', duration: '2.8s' },
                { top: '-8%', left: '80%', rotate: '-12deg', color: '#ef4444', w: 6, h: 2, drift: '-10px', delay: '0.1s', duration: '2.5s' },
                { top: '-14%', left: '8%', rotate: '20deg', color: '#f97316', w: 6, h: 2, drift: '14px', delay: '0.25s', duration: '2.7s' },
                { top: '-9%', left: '88%', rotate: '35deg', color: '#3b82f6', w: 6, h: 2, drift: '-8px', delay: '0.4s', duration: '2.9s' },
                { top: '-11%', left: '6%', rotate: '-25deg', color: '#22c55e', w: 6, h: 2, drift: '16px', delay: '0.55s', duration: '2.6s' },
                { top: '-7%', left: '76%', rotate: '10deg', color: '#ef4444', w: 6, h: 2, drift: '-12px', delay: '0.3s', duration: '2.4s' }
              ].map((piece, i) => (
                <span
                  key={i}
                  className="confetti-piece"
                  style={{
                    position: 'absolute',
                    width: `${piece.w}px`,
                    height: `${piece.h}px`,
                    background: piece.color,
                    top: piece.top,
                    left: piece.left,
                    '--confetti-rotate': piece.rotate,
                    '--confetti-drift': piece.drift,
                    borderRadius: '2px',
                    animationDelay: piece.delay,
                    animationDuration: piece.duration
                  }}
                />
              ))}
            </div>

            <div style={{ fontSize: '28px', fontWeight: 900, color: '#ef4444', margin: '12px 0 8px', letterSpacing: '1px', backgroundImage: 'none' }}>
              PARABÉNS
            </div>

            <div
              style={{
                width: '280px',
                height: '280px',
                margin: '0 auto 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src="/congrats-badge.png"
                alt="Badge"
                style={{
                  width: '156px',
                  height: '134px',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '13px', color: '#1e3a5f', marginBottom: '4px' }}>você agora é um</div>
              <div style={{ fontSize: '21pt', fontWeight: 'bold', color: '#1d4ed8' }}>
                CREATOR ROBLOX
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div
                style={{
                  background: '#ffffff',
                  border: '2px solid #f59e0b',
                  borderRadius: '14px',
                  padding: '10px 12px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#111827',
                  marginBottom: '10px'
                }}
              >
                Você completou seu primeiro tutorial e ganhou o selo de Creator!
              </div>

              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                isso libera novos tutoriais e desafios no plugin
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                width: '100%',
                maxWidth: '220px',
                background: '#fbbf24',
                border: 'none',
                borderRadius: '999px',
                padding: '10px 16px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#000000',
                cursor: 'pointer'
              }}
            >
              continuar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="creator-popup-overlay" onClick={onClose}>
      <div className="creator-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="creator-popup-close" onClick={onClose}>×</div>
        <div className="creator-popup-animation">
          <div className="creator-popup-star">
            <img 
              src="/badge1-removebg-preview.png" 
              alt="Badge Primeiro Passo"
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                display: 'block'
              }}
            />
          </div>
        </div>
        <h2 className="creator-popup-title">Parabéns!</h2>
        <p className="creator-popup-subtitle">Você agora é um</p>
        <h1 className="creator-popup-creator">CREATOR ROBLOX</h1>
        <p className="creator-popup-message">
          Você completou seu primeiro tutorial e ganhou o selo de Creator!
        </p>
        <p className="creator-popup-message">
          Continue aprendendo para desbloquear mais conquistas.
        </p>
        <button className="creator-popup-button" onClick={onClose}>
          Continuar
        </button>
      </div>
    </div>
  )
}

export default CreatorPopup
