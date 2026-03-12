import { useEffect, useState } from 'react'
import './Card.css'

function Card09_PositiveFeedback({ onTryAgain, onContinue, onMenu, onRestart, uxLensesVariant = false }) {
  const victoryFrames = ['victory-1', 'victory-1-ib', 'victory-2', 'victory-3', 'victory-3-ib', 'victory-4']
  const [victoryFrameIndex, setVictoryFrameIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVictoryFrameIndex((current) => (current + 1) % victoryFrames.length)
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

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
        <div
          className="no-padding-override"
          style={{
            display: 'flex',
            gap: '12px',
            padding: '16px 20px',
            flex: 'none',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <button
            onClick={onMenu}
            style={{
              flex: 1,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '50px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            Voltar para o menu
          </button>
          <button
            onClick={onRestart}
            style={{
              flex: 1,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '50px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            Reiniciar tutorial
          </button>
        </div>

        <div
          style={{
            padding: '24px 20px',
            textAlign: 'center',
            position: 'relative',
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
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

          {/* NOTE: use congrats image here; do not reintroduce the badge2 circle container */}
          <section>
            <div
              style={{
                width: '120px',
                height: '120px',
                margin: '40px auto 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <img
                src={`/victory/${victoryFrames[victoryFrameIndex]}.png`}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            <div
              style={{
                fontSize: '18pt',
                fontWeight: 700,
                color: '#000000',
                margin: '0 0 10px',
              }}
            >
              ETAPA CONCLUÍDA COM SUCESSO!
            </div>
          </section>
          <section className="positive-next-section">
            <button
              className="primary-button"
              onClick={onContinue}
              style={{
                width: '100%',
                maxWidth: '260px',
                margin: '0 auto 4px',
                background: '#facc15',
                color: '#000000',
                fontWeight: 700,
                fontSize: '14pt',
                borderRadius: '999px',
                padding: '12px 18px',
                boxShadow: '0 10px 20px rgba(250, 204, 21, 0.35)'
              }}
            >
              CONTINUAR
            </button>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '10px' }}>
              PRÓXIMO: <strong>VAMOS COLOCAR ISSO NO MUNDO!</strong>
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
              REFAZER
            </button>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="card card-feedback">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para o menu</button>
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
