import './Card.css'

function Card06_AfterAction({ stepNumber, totalSteps, stepTitle, onNextStep, onBack, onMenu, onRestart }) {
  return (
    <div className="card card-step">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para o menu</button>
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
              <li>Crie uma Part</li>
              <li>Selecione e renomeie a nova Part</li>
              <li>Ajuste o tamanho e a posição da Part_1</li>
              <li>Mude o material</li>
            </ol>
          </div>
        </div>
        <div className="instructions-section">
          <div className="section-title">O QUE VOCÊ VAI VER NA TELA</div>
          <div className="instructions-box">
            <p style={{ margin: 0, color: '#000000', fontSize: '14.5px', lineHeight: '1.12' }}>
              A base da casa, representada por um bloco retangular cinza e grande.
            </p>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <button className="secondary-button" onClick={onBack}>
          Voltar um passo
        </button>
        <button className="primary-button next-step-button" onClick={onNextStep}>
          Próximo passo
        </button>
      </div>
    </div>
  )
}

export default Card06_AfterAction
