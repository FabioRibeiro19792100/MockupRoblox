import './Card.css'

function Card05_BeforeAction({ stepNumber, totalSteps, stepTitle, onDemonstrate, onBack, onShowConcept, onMenu, onRestart }) {
  return (
    <div className="card card-step">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div style={{ padding: '0 24px 24px 24px' }}>
        <div className="card-step-header" style={{ marginBottom: '12px', marginTop: '24px' }}>
          <div className="step-counter" style={{ marginBottom: '8px', marginTop: '-16px' }}>ETAPA {stepNumber}/{totalSteps}</div>
          <div className="theme-action-box">
            <div className="theme-box">
              <div>Tutorial → Construir uma casa</div>
            </div>
            <div className="step-title-bar">
              Ação → {stepTitle || 'Montar o terreno'}
            </div>
          </div>
        </div>
        <div className="instructions-section">
          <div className="section-title">COMO FAZER NO ROBLOX STUDIO</div>
          <div className="instructions-box">
            <ol className="instructions-list">
              <li>Clique no menu "Insert"</li>
              <li>Selecione "Part"</li>
              <li>Um bloco será criado na cena</li>
              <li>Posicione o bloco no centro da viewport</li>
              <li>Ajuste o tamanho conforme necessário</li>
            </ol>
          </div>
        </div>
        <div className="instructions-section">
          <div className="section-title">O QUE VOCÊ VAI VER NA TELA</div>
          <div className="instructions-box">
            <p style={{ margin: 0, color: '#000000', fontSize: '14.5px', lineHeight: '1.12' }}>
              Você verá a base da casa (um bloco cinza retangular grande) sendo criada no centro da tela.
            </p>
          </div>
        </div>
        {onShowConcept && (
          <div className="instructions-section" style={{ marginTop: '16px' }}>
            <div className="concept-title-bar" onClick={onShowConcept} style={{ cursor: 'pointer' }}>
              <div style={{ 
                fontSize: '12px', 
                marginBottom: '12px',
                textDecoration: 'underline',
                textDecorationThickness: '1px',
                textUnderlineOffset: '4px',
                color: '#f44336'
              }}>Entender conceito</div>
              <div style={{ 
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#f44336'
              }}>
                <span style={{ 
                  fontSize: '14px', 
                  fontWeight: 700,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#f44336',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>ℹ</span>
                O QUE É UMA PART?
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="card-actions">
        <button className="secondary-button" onClick={onBack}>
          Voltar passo
        </button>
        <button className="primary-button demonstrate-button" onClick={onDemonstrate}>
          Demonstrar
        </button>
      </div>
    </div>
  )
}

export default Card05_BeforeAction
