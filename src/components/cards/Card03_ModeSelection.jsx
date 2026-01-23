import './Card.css'

function Card03_ModeSelection({ onModeSelect, onMenu, initialMode, dimmedOpacity = 0.5 }) {
  return (
    <div className="card card-mode">
      <div className="card-header-global single-button-header">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
      </div>
      <div style={{ padding: '24px', paddingBottom: '80px' }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 700, 
          margin: 0, 
          color: '#ffffff', 
          marginBottom: '24px', 
          paddingTop: '12px',
          textDecoration: 'underline',
          textDecorationThickness: '1px',
          textUnderlineOffset: '12px'
        }}>
          Escolha o modo:
        </h3>
        <div className="card-content">
          <button
            className={`mode-button mode-button-demonstrative ${initialMode === 'demonstrative' ? 'selected' : ''}`}
            onClick={() => onModeSelect && onModeSelect('demonstrative')}
            style={{ background: initialMode === 'demonstrative' ? 'rgb(113, 180, 233)' : 'rgb(113, 180, 233)', opacity: initialMode === 'demonstrative' ? 1 : (initialMode ? dimmedOpacity : 1) }}
          >
            <div className="mode-title" style={{ color: '#000000' }}>Modo observador</div>
            <div className="mode-description" style={{ color: '#000000' }}>você vai apenas entender como se dá o processo de construção no Studio</div>
          </button>
          <button
            className={`mode-button mode-button-interactive ${initialMode === 'interactive' ? 'selected' : ''}`}
            onClick={() => onModeSelect && onModeSelect('interactive')}
            style={{ opacity: initialMode === 'interactive' ? 1 : (initialMode ? dimmedOpacity : 1) }}
          >
            <div className="mode-title">Modo aprendizado</div>
            <div className="mode-description">você terá a chance de aprender e fazer junto ao longo do tutorial</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card03_ModeSelection
