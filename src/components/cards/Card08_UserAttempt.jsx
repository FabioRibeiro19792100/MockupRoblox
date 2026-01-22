import './Card.css'

function Card08_UserAttempt({ stepNumber, totalSteps, stepTitle, onCheckResult, onSkip, onMenu, onRestart }) {
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
              <div className="step-counter">ETAPA {stepNumber || 1}/{totalSteps || 3}</div>
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
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          <button className="user-attempt-button" onClick={onCheckResult} style={{ textAlign: 'left' }}>
            Já fez? Clique aqui para ver o seu resultado
          </button>
          <span className="skip-link" onClick={onSkip} style={{ display: 'block', textAlign: 'left', padding: '16px', marginTop: '0' }}>
            Ou clique aqui para pular esse passo
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card08_UserAttempt
