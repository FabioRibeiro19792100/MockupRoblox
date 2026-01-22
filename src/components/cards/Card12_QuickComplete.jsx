import './Card.css'

function Card12_QuickComplete({ 
  tutorialName, 
  onComplete, 
  onMenu 
}) {
  const handleComplete = () => {
    if (onComplete) {
      onComplete()
    }
  }

  return (
    <div className="card">
      <div className="card-header-global single-button-header">
        <button className="header-button" onClick={onMenu}>
          Voltar para menu
        </button>
      </div>
      <div style={{ padding: '24px' }}>
        <h2 className="card-title">{tutorialName}</h2>
        <div className="card-content">
          <p style={{ marginBottom: '24px', fontSize: '16px', lineHeight: '1.6' }}>
            Este tutorial está sendo mockado. Clique no botão abaixo para marcá-lo como completo.
          </p>
          <button 
            className="completion-button"
            onClick={handleComplete}
            style={{ width: '100%', textAlign: 'center' }}
          >
            Marcar como completo
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card12_QuickComplete
