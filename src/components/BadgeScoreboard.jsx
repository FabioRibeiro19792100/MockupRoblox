import './BadgeScoreboard.css'

function BadgeScoreboard({ earnedBadges }) {
  const badgeImages = {
    1: '/badge1-removebg-preview.png',
    2: '/badge2-removebg-preview.png',
    3: '/badge3-removebg-preview.png'
  }

  const earnedCount = earnedBadges ? earnedBadges.length : 0

  return (
    <div className="badge-scoreboard">
      <div className="badge-scoreboard-label">Badges:</div>
      <div className="badge-scoreboard-badges">
        {[1, 2, 3].map(badgeId => {
          const isEarned = earnedBadges && earnedBadges.includes(badgeId)
          return (
            <div
              key={badgeId}
              className={`badge-scoreboard-item ${isEarned ? 'earned' : ''}`}
              title={isEarned ? `Badge ${badgeId} conquistado` : `Badge ${badgeId} não conquistado`}
            >
              <img 
                src={badgeImages[badgeId]} 
                alt={`Badge ${badgeId}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
              {isEarned && <span className="badge-scoreboard-check">✓</span>}
            </div>
          )
        })}
      </div>
      <div className="badge-scoreboard-count">
        {earnedCount}/3
      </div>
    </div>
  )
}

export default BadgeScoreboard
