import './Card.css'

function Card03_ModeSelection({ onModeSelect, onMenu }) {
  return (
    <div className="card card-mode">
      <div className="card-header-global single-button-header">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
      </div>
      <div style={{ padding: '40px 24px' }}>
        <h2 className="card-title" style={{ fontSize: '20px', paddingTop: '12px' }}>
          Tutoriais Expedição Roblox
        </h2>
        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: '#000000' }}>
          Escolha o modo:
        </h3>
        <div className="card-content">
          <button
            className="mode-button mode-button-demonstrative"
            onClick={() => onModeSelect('demonstrative')}
          >
            <div className="mode-title">Modo demonstrativo</div>
            <div className="mode-description">você apenas vê a ação acontecer</div>
          </button>
          <button
            className="mode-button mode-button-interactive"
            onClick={() => onModeSelect('interactive')}
          >
            <div className="mode-title">Modo Interativo</div>
            <div className="mode-description">você tem a chance de fazer junto</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card03_ModeSelection
