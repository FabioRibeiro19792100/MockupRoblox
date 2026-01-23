import { useState } from 'react'
import './Card.css'

function Card11_Completion({ onMenu, onRestart, onComplete, onCompleteAndMenu, onNextTutorial }) {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleKeepMap = () => {
    setSelectedOption('keep')
    if (onComplete) {
      onComplete()
    }
  }

  const handleClearAndExit = () => {
    setSelectedOption('clear')
    if (onCompleteAndMenu) {
      onCompleteAndMenu()
    } else if (onMenu) {
      onMenu()
    }
  }

  return (
    <div className="card card-completion">
      <div style={{ 
        padding: '40px 24px 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Selo circular com checkmark */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: '#e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          fontSize: '60px',
          color: '#000000'
        }}>
          ✓
        </div>

        {/* Parabéns */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#ffffff',
          margin: '0 0 12px 0'
        }}>
          Parabéns!
        </h2>

        {/* Mensagem de conclusão */}
        <p style={{
          fontSize: '16px',
          color: '#cccccc',
          margin: '0 0 40px 0',
          lineHeight: '1.5'
        }}>
          Você concluiu o tutorial 'Construindo sua casa no Roblox Studio'!
        </p>

        {/* Modal com opções */}
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '24px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 12px 0',
            textAlign: 'left'
          }}>
            Manter o mapa?
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#000000',
            margin: '0 0 24px 0',
            textAlign: 'left'
          }}>
            O que deseja fazer com o mapa que você construiu?
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {/* Botão Manter mapa */}
            <button
              onClick={handleKeepMap}
              style={{
                width: '100%',
                padding: '14px 20px',
                background: 'rgb(253, 187, 44)',
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgb(230, 170, 40)'}
              onMouseLeave={(e) => e.target.style.background = 'rgb(253, 187, 44)'}
            >
              <span style={{ fontSize: '20px' }}>✓</span>
              <span>Manter mapa</span>
            </button>

            {/* Botão Limpar e sair */}
            <button
              onClick={handleClearAndExit}
              style={{
                width: '100%',
                padding: '14px 20px',
                background: '#f44336',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#d32f2f'}
              onMouseLeave={(e) => e.target.style.background = '#f44336'}
            >
              <span style={{ fontSize: '20px' }}>🗑️</span>
              <span>Limpar e sair</span>
            </button>
          </div>
        </div>

        {/* Botões de navegação */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
          maxWidth: '400px'
        }}>
          <button
            onClick={onMenu}
            style={{
              width: '100%',
              padding: '14px 20px',
              background: '#e0e0e0',
              color: '#666666',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#d0d0d0'}
            onMouseLeave={(e) => e.target.style.background = '#e0e0e0'}
          >
            Voltar para Menu
          </button>

          <button
            onClick={onNextTutorial || (() => {})}
            style={{
              width: '100%',
              padding: '14px 20px',
              background: 'rgb(253, 187, 44)',
              color: '#000000',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.2s',
              opacity: 0.7
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgb(230, 170, 40)'}
            onMouseLeave={(e) => e.target.style.background = 'rgb(253, 187, 44)'}
          >
            Próximo Tutorial
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card11_Completion
