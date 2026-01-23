import './BadgeDisplay.css'

function BadgeDisplay({ earnedBadges }) {
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

  return (
    <div className="badge-display">
      <h3 className="badge-display-title">
        Badges Ganhos ({earnedBadges.length}/3)
      </h3>
      <div className="badge-list">
        {[1, 2, 3].map(badgeId => {
          const isEarned = earnedBadges.includes(badgeId)
          return (
            <div
              key={badgeId}
              className={`badge-item ${isEarned ? 'earned' : 'locked'}`}
              title={badgeNames[badgeId]}
            >
              <img 
                src={badgeImages[badgeId]} 
                alt={badgeNames[badgeId]}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
              {isEarned && <span className="badge-check">✓</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BadgeDisplay
