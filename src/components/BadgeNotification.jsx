import './BadgeNotification.css'

function BadgeNotification({ badgeId, onClose }) {
  const badgeNames = {
    1: 'Primeiro Passo',
    2: 'Criador Iniciante',
    3: 'Criador Avançado'
  }

  const badgeImages = {
    1: '/badge1-removebg-preview.png',
    2: '/badge2-removebg-preview.png',
    3: '/badge3-removebg-preview.png'
  }

  if (!badgeId) return null

  return (
    <div className="badge-notification">
      <div className="badge-notification-content">
        <div className="badge-icon">
          <img 
            src={badgeImages[badgeId] || badgeImages[1]} 
            alt={badgeNames[badgeId]}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
        <div className="badge-text">
          <h3>Novo Badge Desbloqueado!</h3>
          <p>{badgeNames[badgeId]}</p>
        </div>
        <button className="badge-close" onClick={onClose}>×</button>
      </div>
    </div>
  )
}

export default BadgeNotification
