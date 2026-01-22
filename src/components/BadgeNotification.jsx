import './BadgeNotification.css'

function BadgeNotification({ badgeId, onClose }) {
  // Componente desabilitado - não renderizar notificação
  return null
  
  /* Código original comentado
  const badgeNames = {
    1: 'Primeiro Passo',
    2: 'Criador Iniciante',
    3: 'Criador Avançado'
  }

  if (!badgeId) return null

  return (
    <div className="badge-notification">
      <div className="badge-notification-content">
        <div className="badge-icon">🏆</div>
        <div className="badge-text">
          <h3>Novo Badge Desbloqueado!</h3>
          <p>{badgeNames[badgeId]}</p>
        </div>
        <button className="badge-close" onClick={onClose}>×</button>
      </div>
    </div>
  )
  */
}

export default BadgeNotification
