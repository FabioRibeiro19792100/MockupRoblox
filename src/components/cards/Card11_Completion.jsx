import './Card.css'

function Card11_Completion({ onMenu, onRestart, onComplete, onCompleteAndMenu }) {
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

  return (
    <div className="card card-completion" style={{ position: 'relative' }}>
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button 
          className="header-button" 
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
      <div style={{ padding: '24px', paddingTop: '12px', position: 'relative' }}>
        <div style={{
          position: 'relative',
          marginBottom: '24px',
          paddingTop: '12px'
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
        <div className="card-content" style={{ marginTop: '24px', position: 'relative' }}>
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
