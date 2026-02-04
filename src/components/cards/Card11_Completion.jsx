import { useState } from 'react'
import './Card.css'

function Card11_Completion({ onMenu, onRestart, onComplete, onCompleteAndMenu, uxLensesVariant = false }) {
  const [completionValue, setCompletionValue] = useState(50)

  const handleKeepMap = () => {
    if (onComplete) {
      onComplete()
    }
  }

  const handleClearAndExit = () => {
    if (onCompleteAndMenu) {
      onCompleteAndMenu()
    } else if (onMenu) {
      onMenu()
    }
  }

  if (uxLensesVariant) {
    return (
      <div className="card card-completion" style={{ background: '#ffffff', display: 'flex', flexDirection: 'column', flex: '1 1 auto', minHeight: 0 }}>
        <style>{`
          .card.card-completion {
            background-image: none !important;
          }
          .card.card-completion::before {
            display: none !important;
          }
          .card-layout-view.layer-layer12 .card-layout-item .card.card-completion {
            background-image: none !important;
          }
          .card-layout-view.layer-layer12 .card-layout-item .card.card-completion::before {
            display: none !important;
          }
        `}</style>
        {/* Header com botões - fundo branco */}
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

        {/* Conteúdo principal - fundo azul gradiente */}
        <div
          className="completion-card"
          style={{
            flex: '1 1 auto',
            minHeight: 0,
            background: '#ffffff',
            borderRadius: '20px',
            margin: '0 16px 16px',
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Sparkles decorativos */}
          <div style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '20px' }}>✨</div>
          <div style={{ position: 'absolute', top: '40px', right: '60px', fontSize: '14px' }}>✨</div>
          <div style={{ position: 'absolute', top: '25px', left: '25px', fontSize: '16px' }}>✨</div>
          <style>{`
            .completion-range {
              outline: none;
              border: none;
              box-shadow: none;
              appearance: none;
              -webkit-appearance: none;
              height: 12px;
              border-radius: 2px;
            }
            .completion-range::-webkit-slider-runnable-track {
              background: transparent;
              border: 2px solid #1e3a5f;
              height: 12px;
              border-radius: 2px;
              box-shadow: none;
            }
            .completion-range::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 0;
              height: 0;
              border-radius: 2px;
              background: transparent;
              border: none;
              box-shadow: none;
              margin-top: 0;
            }
            .completion-range::-moz-range-track {
              background: #e0f0ff;
              border: 2px solid #1e3a5f;
              height: 12px;
              border-radius: 2px;
              box-shadow: none;
            }
            .completion-range::-moz-range-progress {
              background: #3b82f6;
              height: 12px;
              border-radius: 2px;
            }
            .completion-range::-moz-range-thumb {
              width: 0;
              height: 0;
              border-radius: 2px;
              background: transparent;
              border: none;
              box-shadow: none;
            }
            .completion-range::-ms-track {
              background: transparent;
              border: 2px solid #1e3a5f;
              color: transparent;
              height: 12px;
              border-radius: 2px;
              box-shadow: none;
            }
            .completion-range::-ms-fill-lower {
              background: #3b82f6;
              border-radius: 2px;
            }
            .completion-range::-ms-fill-upper {
              background: #e0f0ff;
              border-radius: 2px;
            }
            .completion-card .completion-title {
              color: #000000 !important;
            }
            .completion-card h1.completion-title {
              color: #000000 !important;
            }
          `}</style>

          <section className="completion-actions-section">
            {/* Título PARABÉNS */}
            <h1
              className="completion-title"
              style={{
                fontSize: '28px',
                fontWeight: 900,
                color: '#000000',
                margin: '10px 0 0px',
                letterSpacing: '0px',
                textTransform: 'none'
              }}
            >
              Parabéns!
            </h1>

            {/* Subtítulo */}
            <p style={{
              fontSize: '14px',
              color: '#000000',
              margin: '0 0 22px',
              fontWeight: 500
            }}>
              você concluiu o tutorial:
            </p>

            {/* Ícone da casa */}
            <div style={{
              width: '104px',
              height: '104px',
              background: '#3b6fa0',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              transform: 'rotate(-5deg)'
            }}>
              <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>

            <h2
              className="completion-title"
              style={{
                fontSize: '18pt',
                fontWeight: 700,
                color: '#000000',
                margin: '18px 0 6px'
              }}
            >
              Construir uma casa
            </h2>
          </section>

          <section className="completion-progress-section">
            <div style={{ width: '100%', margin: '8px auto 4px' }}>
              <input
                type="range"
                min="0"
                max="100"
                value={completionValue}
                onChange={(event) => {
                  setCompletionValue(Number(event.target.value))
                }}
                className="completion-range"
                style={{
                  width: '100%',
                  background: `linear-gradient(
                    to right,
                    #3b82f6 0%,
                    #3b82f6 ${completionValue}%,
                    #e0f0ff ${completionValue}%,
                    #e0f0ff 100%
                  )`,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  color: '#000000',
                  fontWeight: 700,
                }}
              >
                <span>{completionValue}%</span>
                <span>100%</span>
              </div>
            </div>
            <p style={{
              fontSize: '10pt',
              color: 'rgb(128 126 126)',
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: '24px'
            }}>
              Faltam X tutoriais para você<br />
              conquistar um novo badge!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button
                onClick={handleKeepMap}
                style={{
                  width: '100%',
                  maxWidth: '260px',
                  background: '#fbbf24',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '12px 22px',
                  fontSize: '14pt',
                  fontWeight: 700,
                  color: '#000000',
                  cursor: 'pointer',
                  marginBottom: '12px'
                }}
              >
                continuar
              </button>

            <button
              onClick={handleClearAndExit}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#000000',
                fontSize: '10pt',
                fontWeight: 700,
                textDecoration: 'underline',
                marginBottom: 0,
                cursor: 'pointer'
              }}
            >
              limpar e sair
            </button>
            </div>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="card card-completion" style={{ position: 'relative' }}>
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button 
          className="header-button next-tutorial-button" 
          onClick={onRestart}
          style={{
            background: 'rgb(253, 187, 44)',
            color: '#000000',
            border: '1px solid #000000'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgb(230, 170, 40)'
            e.target.style.color = '#000000'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgb(253, 187, 44)'
            e.target.style.color = '#000000'
          }}
        >
          Próximo tutorial
        </button>
      </div>
      <div style={{ padding: '24px', paddingTop: '24px', position: 'relative' }}>
        {/* Logo */}
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '24px' }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ 
              maxWidth: '120px', 
              maxHeight: '60px', 
              width: 'auto', 
              height: 'auto',
              objectFit: 'contain'
            }} 
          />
        </div>
        <div style={{
          position: 'relative',
          marginBottom: '16px'
        }}>
          <h3 style={{ 
            fontSize: '20px', 
            fontWeight: 700, 
            margin: 0, 
            color: '#ffffff', 
            padding: 0,
            position: 'relative',
            textAlign: 'left'
          }}>
            Parabéns, você conclui o tutorial "Construir uma Casa"
          </h3>
        </div>
        <div className="card-content" style={{ marginTop: '16px', position: 'relative' }}>
          {/* Modal com opções da criação */}
          <div style={{
            background: 'transparent',
            borderRadius: '12px',
            padding: '24px 0',
            marginTop: '24px'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#ffffff',
              margin: '0 0 12px 0',
              textAlign: 'left'
            }}>
              Manter a criação?
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#ffffff',
              margin: '0 0 24px 0',
              textAlign: 'left'
            }}>
              O que deseja fazer com a criação que você construiu?
            </p>

            <div style={{
              display: 'flex',
              gap: '12px',
              width: '100%',
              maxWidth: '400px'
            }}>
              {/* Botão Manter criação - Amarelo */}
              <button
                className="feedback-button-black"
                onClick={handleKeepMap}
                style={{
                  background: 'rgb(253, 187, 44)',
                  color: '#000000'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgb(230, 170, 40)'}
                onMouseLeave={(e) => e.target.style.background = 'rgb(253, 187, 44)'}
              >
                Manter criação
              </button>

              {/* Botão Limpar e sair - Vermelho */}
              <button
                className="feedback-button-red"
                onClick={handleClearAndExit}
              >
                Limpar e sair
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card11_Completion
