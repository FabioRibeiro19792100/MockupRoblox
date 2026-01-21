import './CreatorPopup.css'

function CreatorPopup({ onClose }) {
  return (
    <div className="creator-popup-overlay" onClick={onClose}>
      <div className="creator-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="creator-popup-close" onClick={onClose}>×</div>
        <div className="creator-popup-animation">
          <div className="creator-popup-star">⭐</div>
          <div className="creator-popup-confetti">
            <span>🎉</span>
            <span>✨</span>
            <span>🎊</span>
            <span>🌟</span>
          </div>
        </div>
        <h2 className="creator-popup-title">Parabéns!</h2>
        <p className="creator-popup-subtitle">Você agora é um</p>
        <h1 className="creator-popup-creator">CREATOR</h1>
        <p className="creator-popup-message">
          Você completou seu primeiro tutorial e ganhou o selo de Creator!
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
