import './Card.css'

function Card05_BeforeAction({ stepNumber, totalSteps, stepTitle, onDemonstrate, onBack, onShowConcept, onMenu, onRestart }) {
  return (
    <div className="card card-step">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div style={{ padding: '0 24px 24px 24px' }}>
        <div className="card-step-header" style={{ marginBottom: '16px' }}>
          <div className="theme-box">
            <div>Construir um casa</div>
            <div style={{ borderTop: '1px solid #ffffff', paddingTop: '4px', marginTop: '4px' }}>
              <div className="step-counter">ETAPA {stepNumber}/{totalSteps}</div>
            </div>
          </div>
        </div>
        <div className="step-title-bar">
          AÇÃO | {stepTitle || 'Montar o terreno'}
        </div>
        <div className="instructions-section">
          <div className="section-title">COMO FAZER NO ROBLOX STUDIOS</div>
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
            <p style={{ margin: 0, color: '#000000', fontSize: '16px', lineHeight: '1.6' }}>
              Você verá a base da casa (um bloco cinza retangular grande) sendo criada no centro da tela.
            </p>
          </div>
        </div>
        {onShowConcept && (
          <div className="instructions-section" style={{ marginTop: '16px' }}>
            <div className="concept-title-bar" onClick={onShowConcept} style={{ cursor: 'pointer' }}>
              <div style={{ fontSize: '14px', marginBottom: '4px' }}>Entender conceito</div>
              <div>O QUE É UMA PART?</div>
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
