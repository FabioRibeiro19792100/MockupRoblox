import { useEffect, useRef, useState } from 'react'
import './Card.css'

function Card10_NegativeFeedback({ onTryAgain, onContinue, onMenu, onRestart, uxLensesVariant = false }) {
  const lossFrames = ['loss-1', 'loss-2', 'loss-3', 'loss-4', 'loss-5', 'loss-6', 'loss-7']
  const [lossFrameIndex, setLossFrameIndex] = useState(0)
  const lossIntervalRef = useRef(null)
  const lossCycleTimeoutRef = useRef(null)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    const root = document.documentElement
    const setAnimatingFlag = (value) => {
      root.dataset.card15Animating = value ? 'true' : 'false'
    }

    const stopAnimation = () => {
      if (lossIntervalRef.current) {
        clearInterval(lossIntervalRef.current)
        lossIntervalRef.current = null
      }
      isAnimatingRef.current = false
      setAnimatingFlag(false)
    }

    const startAnimation = () => {
      if (isAnimatingRef.current) return
      isAnimatingRef.current = true
      setAnimatingFlag(true)

      lossIntervalRef.current = setInterval(() => {
        setLossFrameIndex((current) => {
          if (current >= lossFrames.length - 1) {
            stopAnimation()
            lossCycleTimeoutRef.current = setTimeout(() => {
              setLossFrameIndex(0)
              startAnimation()
            }, 5000)
            return current
          }
          return current + 1
        })
      }, 200)
    }

    startAnimation()

    return () => {
      stopAnimation()
      if (lossCycleTimeoutRef.current) {
        clearTimeout(lossCycleTimeoutRef.current)
        lossCycleTimeoutRef.current = null
      }
    }
  }, [])

  if (uxLensesVariant) {
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
            Voltar para menu
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

        <div style={{ padding: '24px 20px', textAlign: 'center', position: 'relative', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <section>
            <img
              src={`/Loss/${lossFrames[lossFrameIndex]}.png`}
              alt="Derrota"
              style={{
                width: '120px',
                height: '120px',
                margin: '45px auto 14px',
                objectFit: 'contain'
              }}
            />
            <div style={{ fontSize: '18pt', fontWeight: 700, color: '#000000', margin: '0 0 10px' }}>
              Opa! Infelizmente essa etapa não saiu como esperado.
            </div>
          </section>
          <section className="negative-action-section">
            <div style={{ fontSize: '12pt', color: '#6b7280', margin: '0 0 5px' }}>
              mas você pode
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button
                className="primary-button"
                onClick={onTryAgain}
                style={{
                width: '100%',
                maxWidth: '260px',
                margin: '0 auto 22px',
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
                className="negative-follow-link"
              >
                seguir em frente
              </button>
            </div>
          </section>
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
