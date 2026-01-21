import './BadgeDisplay.css'

function BadgeDisplay({ earnedBadges }) {
  const badgeNames = {
    1: 'Primeiro Passo',
    2: 'Criador Iniciante',
    3: 'Criador Avançado'
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
              <span className="badge-emoji">🏆</span>
              <span className="badge-number">{badgeId}</span>
              {isEarned && <span className="badge-check">✓</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BadgeDisplay
