import './Card.css'
import './Card05_BeforeAction.css'
import Card05_BeforeActionUxLenses from './Card05_BeforeActionUxLenses'

function Card05_BeforeAction({
  stepNumber,
  totalSteps,
  stepTitle,
  onDemonstrate,
  onBack,
  onShowConcept,
  onMenu,
  onRestart,
  highlightStepCount = null,
  highlightVariant = 'text-green',
  onResetEffects,
  blinkStepIndex = null,
  blinkVariant = 'text-green',
  stageNumber = 1,
  totalStages = 3,
  stageBlinking = false,
  stageLoading = false,
  onAdvanceStage,
  uxLensesVariant = false
}) {
  const effectiveHighlightCount =
    highlightStepCount === null || highlightStepCount === undefined
      ? Math.max(0, (stepNumber || 1) - 1)
      : highlightStepCount
  if (uxLensesVariant) {
    return (
      <Card05_BeforeActionUxLenses
        stepNumber={stepNumber}
        totalSteps={totalSteps}
        stepTitle={stepTitle}
        onDemonstrate={onDemonstrate}
        onBack={onBack}
        onShowConcept={onShowConcept}
        onMenu={onMenu}
        onRestart={onRestart}
        highlightStepCount={effectiveHighlightCount}
        highlightVariant={highlightVariant}
        onResetEffects={onResetEffects}
        blinkStepIndex={blinkStepIndex}
        blinkVariant={blinkVariant}
        stageNumber={stageNumber}
        totalStages={totalStages}
        stageBlinking={stageBlinking}
        stageLoading={stageLoading}
        onAdvanceStage={onAdvanceStage}
      />
    )
  }

  return (
    <div className="card card-step">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div className="card05-before-action-content">
        <div className="card-step-header card05-before-action-header">
          <div className="step-counter card05-before-action-step-counter">ETAPA {stepNumber}/{totalSteps}</div>
          <div className="theme-action-box">
            <div className="theme-box">
              <div>Tutorial → Construir uma casa</div>
            </div>
            <div className="step-title-bar">
              Ação → {stepTitle || 'Montar o terreno'}
            </div>
          </div>
        </div>
        <div className="instructions-section">
          <div className="section-title">COMO FAZER NO ROBLOX STUDIO</div>
          <div className="instructions-box">
            <ol className="instructions-list">
              <li>Clique no menu "Insert"</li>
              <li>Selecione "Part"</li>
              <li>Um bloco será criado na cena</li>
              <li>Posicione o bloco no centro da viewport</li>
              <li>Ajuste o tamanho conforme necessário</li>
            </ol>
          </div>
        </div>
        <div className="instructions-section">
          <div className="section-title">O QUE VOCÊ VAI VER NA TELA</div>
          <div className="instructions-box">
            <p className="card05-before-action-note">
              Você verá a base da casa (um bloco cinza retangular grande) sendo criada no centro da tela.
            </p>
          </div>
        </div>
        {onShowConcept && (
          <div className="instructions-section card05-before-action-concept">
            <div className="concept-title-bar card05-before-action-concept-bar" onClick={onShowConcept}>
              <div className="card05-before-action-concept-label">Entender conceito</div>
              <div className="card05-before-action-concept-title">
                <span className="card05-before-action-concept-icon">ℹ</span>
                O QUE É UMA PART?
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="card-actions">
        <button className="secondary-button" onClick={onBack}>
          Voltar passo
        </button>
        <button className="primary-button demonstrate-button" onClick={onDemonstrate}>
          Demonstrar
        </button>
      </div>
    </div>
  )
}

export default Card05_BeforeAction
