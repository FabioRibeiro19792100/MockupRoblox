import './CreatorPopup.css'

function BadgePopup2({ onClose }) {
  return (
    <div className="creator-popup-overlay" onClick={onClose}>
      <div className="creator-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="creator-popup-close" onClick={onClose}>×</div>
        <div className="creator-popup-animation">
          <div className="creator-popup-star">
            <img 
              src="/badge2-removebg-preview.png" 
              alt="Badge Criador Iniciante"
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
        <p className="creator-popup-subtitle">Você conquistou o badge</p>
        <h1 className="creator-popup-creator">CRIADOR INICIANTE</h1>
        <p className="creator-popup-message">
          Você completou todos os tutoriais de "Transforme-se num Creator"!
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

export default BadgePopup2
