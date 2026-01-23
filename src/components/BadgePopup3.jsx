import './CreatorPopup.css'

function BadgePopup3({ onClose }) {
  return (
    <div className="creator-popup-overlay" onClick={onClose}>
      <div className="creator-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="creator-popup-close" onClick={onClose}>×</div>
        <div className="creator-popup-animation">
          <div className="creator-popup-star">
            <img 
              src="/badge3-removebg-preview.png" 
              alt="Badge Criador Avançado"
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
        <h1 className="creator-popup-creator">CRIADOR AVANÇADO</h1>
        <p className="creator-popup-message">
          Você completou todos os tutoriais de "Criações rápidas"!
        </p>
        <p className="creator-popup-message">
          Você está se tornando um verdadeiro Creator!
        </p>
        <button className="creator-popup-button" onClick={onClose}>
          Continuar
        </button>
      </div>
    </div>
  )
}

export default BadgePopup3
