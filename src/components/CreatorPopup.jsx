import './CreatorPopup.css'

function CreatorPopup({ onClose, uxLensesVariant = false }) {
  if (uxLensesVariant) {
    const topBadges = [
      { id: 1, label: 'Lorem ipsum', earned: true },
      { id: 2, label: 'Lorem ipsum', earned: true },
      { id: 3, label: 'Lorem ipsum', earned: false }
    ]
    const bottomBadges = [
      { id: 4, label: 'Lorem ipsum', earned: false },
      { id: 5, label: 'Lorem ipsum', earned: false },
      { id: 6, label: 'Lorem ipsum', earned: false }
    ]

    return (
      <div className="creator-popup-overlay creator-popup-gallery-overlay" onClick={onClose}>
        <div className="creator-popup-content creator-popup-gallery" onClick={(e) => e.stopPropagation()}>
          <button className="creator-popup-gallery-close" onClick={onClose}>×</button>

          <button className="creator-popup-gallery-title" type="button">
            GALERIA DE BADGES
          </button>

          <div className="creator-popup-gallery-divider" />
          <div className="creator-popup-gallery-label">Conquistadas:</div>
          <div className="creator-popup-gallery-count">
            <span className="count-current">2</span>
            <span className="count-total">/9</span>
          </div>
          <div className="creator-popup-gallery-divider" />

          <div className="creator-popup-badges-grid">
            {topBadges.map((badge) => (
              <div key={badge.id} className="creator-popup-badge-item">
                <div className={`creator-popup-badge-hex ${badge.earned ? 'earned' : 'locked'}`} />
                <div className="creator-popup-badge-label">{badge.label}</div>
              </div>
            ))}
          </div>

          <div className="creator-popup-badge-card">
            <div className="badge-card-title">PRIMEIRO PASSO</div>
            <div className="badge-card-subtitle">Completar: construir uma casa.</div>
            <div className="badge-card-progress">PROGRESSO: 0/1</div>
          </div>

          <div className="creator-popup-badges-grid">
            {bottomBadges.map((badge) => (
              <div key={badge.id} className="creator-popup-badge-item">
                <div className="creator-popup-badge-hex locked" />
                <div className="creator-popup-badge-label">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="creator-popup-overlay" onClick={onClose}>
      <div className="creator-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="creator-popup-close" onClick={onClose}>×</div>
        <div className="creator-popup-animation">
          <div className="creator-popup-star">
            <img 
              src="/badge1-removebg-preview.png" 
              alt="Badge Primeiro Passo"
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                display: 'block'
              }}
            />
          </div>
        </div>
        <h2 className="creator-popup-title">Parabéns!</h2>
        <p className="creator-popup-subtitle">Você agora é um</p>
        <h1 className="creator-popup-creator">CREATOR ROBLOX</h1>
        <p className="creator-popup-message">
          Você completou seu primeiro tutorial e ganhou o selo de Creator!
        </p>
        <p className="creator-popup-message">
          Continue aprendendo para desbloquear mais conquistas.
        </p>
        <button className="creator-popup-button" onClick={onClose}>
          Continuar
        </button>
      </div>
    </div>
  )
}

export default CreatorPopup
