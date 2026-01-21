import { useState } from 'react'
import './BadgeHeader.css'

function BadgeHeader({ earnedBadges, completedTutorials }) {
  const [hoveredBadge, setHoveredBadge] = useState(null)
  const class1Completed = completedTutorials.class1 || []
  const class2Completed = completedTutorials.class2 || []

  const badges = [
    {
      id: 1,
      name: 'Primeiro Passo',
      symbol: '⭐',
      requirement: 'Tutorial 1 da classe 1',
      requirementDetail: 'Completar: Construir um casa',
      earned: earnedBadges.includes(1),
      progress: class1Completed.includes(1) ? 1 : 0,
      total: 1
    },
    {
      id: 2,
      name: 'Criador Iniciante',
      symbol: '🏅',
      requirement: 'Tutoriais 1-5 da classe 1',
      requirementDetail: 'Completar todos os tutoriais de "Os primeiros passos para se tornar Creator"',
      earned: earnedBadges.includes(2),
      progress: class1Completed.length,
      total: 5
    },
    {
      id: 3,
      name: 'Criador Avançado',
      symbol: '👑',
      requirement: 'Tutoriais 1-5 da classe 2',
      requirementDetail: 'Completar todos os tutoriais de "Criações rápidas"',
      earned: earnedBadges.includes(3),
      progress: class2Completed.length,
      total: 5
    }
  ]

  const hoveredBadgeData = hoveredBadge ? badges.find(b => b.id === hoveredBadge) : null

  return (
    <div className="badge-header-container">
      <div className="badge-header">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`badge-header-item ${badge.earned ? 'earned' : ''} ${hoveredBadge === badge.id ? 'hovered' : ''} ${hoveredBadge && hoveredBadge !== badge.id ? 'dimmed' : ''}`}
            onMouseEnter={() => setHoveredBadge(badge.id)}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            <div className="badge-header-icon">
              <span>{badge.symbol}</span>
              {badge.earned && <span className="badge-check">✓</span>}
            </div>
          </div>
        ))}
      </div>
      {hoveredBadgeData && (
        <div className="badge-description">
          <div style={{ fontWeight: 600, marginBottom: '4px' }}>
            {hoveredBadgeData.earned ? (
              <>
                <span style={{ color: '#4CAF50', marginRight: '6px' }}>✓</span>
                {hoveredBadgeData.name} - Conquistado!
              </>
            ) : (
              hoveredBadgeData.name
            )}
          </div>
          <div style={{ fontSize: '11px', color: '#666666', lineHeight: '1.4' }}>
            {hoveredBadgeData.requirementDetail}
          </div>
          {!hoveredBadgeData.earned && (
            <div style={{ fontSize: '11px', color: '#666666', marginTop: '4px', fontWeight: 500 }}>
              Progresso: {hoveredBadgeData.progress}/{hoveredBadgeData.total}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default BadgeHeader
