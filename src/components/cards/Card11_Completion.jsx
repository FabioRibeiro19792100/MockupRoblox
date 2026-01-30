import './Card.css'

function Card11_Completion({ onMenu, onRestart, onComplete, onCompleteAndMenu, uxLensesVariant = false }) {
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
      <div className="card card-completion" style={{ background: '#ffffff', display: 'flex', flexDirection: 'column' }}>
        {/* Header com botões - fundo branco */}
        <div style={{ display: 'flex', gap: '12px', padding: '16px 20px', flex: 'none' }}>
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
        <div style={{
          flex: 1,
          background: 'linear-gradient(180deg, #5a9fd4 0%, #7ab8e8 100%)',
          borderRadius: '20px',
          margin: '0 16px 16px 16px',
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Sparkles decorativos */}
          <div style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '20px' }}>✨</div>
          <div style={{ position: 'absolute', top: '40px', right: '60px', fontSize: '14px' }}>✨</div>
          <div style={{ position: 'absolute', top: '25px', left: '25px', fontSize: '16px' }}>✨</div>

          {/* Título PARABÉNS */}
          <h1 style={{
            fontSize: '32px',
            fontWeight: 900,
            color: '#fbbf24',
            margin: '0 0 8px 0',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            letterSpacing: '2px'
          }}>
            ✦PARABÉNS!
          </h1>

          {/* Subtítulo */}
          <p style={{
            fontSize: '16px',
            color: '#ffffff',
            margin: '0 0 24px 0',
            fontWeight: 500
          }}>
            você concluiu o tutorial:
          </p>

          {/* Ícone da casa */}
          <div style={{
            width: '120px',
            height: '120px',
            background: '#3b6fa0',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            transform: 'rotate(-5deg)'
          }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>

          {/* Nome do tutorial */}
          <h2 style={{
            fontSize: '22px',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 12px 0'
          }}>
            Construir uma casa
          </h2>

          {/* Pergunta */}
          <p style={{
            fontSize: '15px',
            color: '#e0f0ff',
            margin: '0 0 28px 0',
            lineHeight: 1.4
          }}>
            O que deseja fazer com<br />a criação que você construiu?
          </p>

          {/* Botão Continuar */}
          <button
            onClick={handleKeepMap}
            style={{
              width: '100%',
              maxWidth: '260px',
              background: '#fbbf24',
              border: 'none',
              borderRadius: '50px',
              padding: '14px 24px',
              fontSize: '16px',
              fontWeight: 700,
              color: '#000000',
              cursor: 'pointer',
              marginBottom: '16px'
            }}
          >
            continuar
          </button>

          {/* Link limpar e sair */}
          <button
            onClick={handleClearAndExit}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#1e3a5f',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            limpar e sair
          </button>
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
