import './Card.css'
import './Card14_ProgressVisual.css'

function Card14_ProgressVisual({ 
  currentStep = 1, 
  totalSteps = 3, 
  completedSteps = [],
  onStepClick,
  onContinue,
  onBack,
  onMenu,
  onRestart 
}) {
  const progressPercentage = (completedSteps.length / totalSteps) * 100
  
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)
  
  const getStepStatus = (stepNum) => {
    if (completedSteps.includes(stepNum)) return 'completed'
    if (stepNum === currentStep) return 'current'
    if (stepNum < currentStep) return 'available'
    return 'locked'
  }
  
  const getStepIcon = (stepNum, status) => {
    switch (status) {
      case 'completed':
        return '✓'
      case 'current':
        return '▶'
      case 'available':
        return stepNum
      default:
        return '🔒'
    }
  }
  
  return (
    <div className="card card-progress-visual">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      
      <div className="progress-visual-content">
        {/* Header com título e progresso geral */}
        <div className="progress-header">
          <h2 className="progress-title">Progresso do Tutorial</h2>
          <div className="progress-overview">
            <div className="progress-bar-container">
              <div className="progress-bar-background">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="progress-percentage">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="progress-stats">
              <span className="stat-item">
                <strong>{completedSteps.length}</strong> de <strong>{totalSteps}</strong> passos concluídos
              </span>
            </div>
          </div>
        </div>
        
        {/* Timeline visual dos passos */}
        <div className="steps-timeline">
          {steps.map((stepNum, index) => {
            const status = getStepStatus(stepNum)
            const isClickable = status !== 'locked'
            
            return (
              <div 
                key={stepNum} 
                className={`timeline-step timeline-step-${status}`}
                onClick={() => isClickable && onStepClick && onStepClick(stepNum)}
                style={{ cursor: isClickable ? 'pointer' : 'not-allowed' }}
              >
                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div className={`timeline-connector timeline-connector-${status}`} />
                )}
                
                {/* Círculo do passo */}
                <div className="timeline-step-circle">
                  <span className="timeline-step-icon">
                    {getStepIcon(stepNum, status)}
                  </span>
                </div>
                
                {/* Informações do passo */}
                <div className="timeline-step-info">
                  <div className="timeline-step-label">
                    Passo {stepNum}
                  </div>
                  <div className="timeline-step-title">
                    {stepNum === 1 && 'Montar o terreno'}
                    {stepNum === 2 && 'Criar as paredes'}
                    {stepNum === 3 && 'Adicionar o telhado'}
                    {!stepNum && `Passo ${stepNum}`}
                  </div>
                  {status === 'completed' && (
                    <div className="timeline-step-badge">Concluído</div>
                  )}
                  {status === 'current' && (
                    <div className="timeline-step-badge current">Em andamento</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Seção de detalhes do passo atual */}
        {currentStep && (
          <div className="current-step-details">
            <div className="details-header">
              <h3>Passo Atual: {currentStep}</h3>
            </div>
            <div className="details-content">
              <div className="detail-item">
                <span className="detail-label">Status:</span>
                <span className="detail-value">
                  {completedSteps.includes(currentStep) ? 'Concluído' : 'Em andamento'}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Progresso:</span>
                <span className="detail-value">
                  {completedSteps.length} de {totalSteps} passos
                </span>
              </div>
            </div>
          </div>
        )}
        
        {/* Cards de conquistas/milestones */}
        <div className="milestones-section">
          <h3 className="milestones-title">Marcos Alcançados</h3>
          <div className="milestones-grid">
            {completedSteps.length >= 1 && (
              <div className="milestone-card milestone-1">
                <div className="milestone-icon">🏗️</div>
                <div className="milestone-label">Base Criada</div>
              </div>
            )}
            {completedSteps.length >= 2 && (
              <div className="milestone-card milestone-2">
                <div className="milestone-icon">🧱</div>
                <div className="milestone-label">Estrutura Pronta</div>
              </div>
            )}
            {completedSteps.length >= 3 && (
              <div className="milestone-card milestone-3">
                <div className="milestone-icon">🏠</div>
                <div className="milestone-label">Casa Completa</div>
              </div>
            )}
            {completedSteps.length === 0 && (
              <div className="milestone-empty">
                Complete os passos para desbloquear marcos!
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="card-actions">
        {onBack && (
          <button className="secondary-button" onClick={onBack}>
            Voltar
          </button>
        )}
        {onContinue && (
          <button 
            className="primary-button" 
            onClick={onContinue}
            disabled={completedSteps.length === totalSteps}
          >
            {completedSteps.length === totalSteps ? 'Tutorial Completo!' : 'Continuar'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Card14_ProgressVisual
