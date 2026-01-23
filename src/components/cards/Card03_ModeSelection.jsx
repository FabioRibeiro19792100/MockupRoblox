import './Card.css'

function Card03_ModeSelection({ onModeSelect, onMenu }) {
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
            className="mode-button mode-button-demonstrative"
            onClick={() => onModeSelect('demonstrative')}
            style={{ background: 'rgb(113, 180, 233)' }}
          >
            <div className="mode-title" style={{ color: '#000000' }}>Modo observador</div>
            <div className="mode-description" style={{ color: '#000000' }}>você vai apenas entender como se dá o processo de construção no Studio</div>
          </button>
          <button
            className="mode-button mode-button-interactive"
            onClick={() => onModeSelect('interactive')}
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
