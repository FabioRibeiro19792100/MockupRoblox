import { useState, useEffect } from 'react'
import Card00_Cover from './cards/Card00_Cover'
import Card01_02_Selection from './cards/Card01_02_Selection'
import Card03_ModeSelection from './cards/Card03_ModeSelection'
import Card04_Introduction from './cards/Card04_Introduction'
import Card05_BeforeAction from './cards/Card05_BeforeAction'
import Card05_1_Concept from './cards/Card05_1_Concept'
import Card06_AfterAction from './cards/Card06_AfterAction'
import Card07_InteractionInvite from './cards/Card07_InteractionInvite'
import Card08_UserAttempt from './cards/Card08_UserAttempt'
import Card09_PositiveFeedback from './cards/Card09_PositiveFeedback'
import Card10_NegativeFeedback from './cards/Card10_NegativeFeedback'
import Card11_Completion from './cards/Card11_Completion'
import Card12_QuickComplete from './cards/Card12_QuickComplete'
import Card13_BadgeExplanation from './cards/Card13_BadgeExplanation'
import BadgeNotification from './BadgeNotification'
import BadgeDisplay from './BadgeDisplay'
import BadgeHeader from './BadgeHeader'
import BadgeScoreboard from './BadgeScoreboard'
import CreatorPopup from './CreatorPopup'
import CreatorStamp from './CreatorStamp'
import './TutorialPanel.css'

function TutorialPanel({ 
  currentCard, 
  tutorialMode, 
  currentStep, 
  totalSteps, 
  stepData, 
  onNext, 
  onBack, 
  onCardAction, 
  onModeSelect, 
  onSkipToNextStep, 
  onMenu, 
  onRestart, 
  onShowConceptChange,
  completedTutorials,
  earnedBadges,
  currentTutorialClass,
  currentTutorialId,
  onTutorialClassSelect,
  onTutorialSelect,
  onTutorialComplete,
  showBadgeNotification,
  onCloseBadgeNotification,
  onQuickComplete,
  onResetGamification,
  showCreatorPopup,
  onCloseCreatorPopup
}) {
  const [showBadges, setShowBadges] = useState(true)
  const [showBadgeExplanation, setShowBadgeExplanation] = useState(false)
  const [badgeGalleryExpanded, setBadgeGalleryExpanded] = useState(false)

  // Expandir galeria automaticamente quando um badge é conquistado
  useEffect(() => {
    if (showBadgeNotification) {
      setBadgeGalleryExpanded(true)
    }
  }, [showBadgeNotification])
  const [showConcept, setShowConcept] = useState(false)
  const [selectedTutorial, setSelectedTutorial] = useState(null)

  // Notificar App quando showConcept muda
  useEffect(() => {
    if (onShowConceptChange) {
      onShowConceptChange(showConcept)
    }
  }, [showConcept, onShowConceptChange])

  // Reset selectedTutorial quando volta para Card 01 (menu)
  useEffect(() => {
    if (currentCard === 1) {
      setSelectedTutorial(null)
      setShowConcept(false)
    }
  }, [currentCard])

  // Expandir galeria automaticamente quando um badge é conquistado
  useEffect(() => {
    if (showBadgeNotification) {
      setBadgeGalleryExpanded(true)
    }
  }, [showBadgeNotification])

  const renderCard = () => {
    // Card 05.1 é opcional e pode aparecer após Card 05
    if (showConcept && currentCard === 5) {
      return (
        <Card05_1_Concept
          onContinue={() => setShowConcept(false)}
          onMenu={onMenu}
          onRestart={onRestart}
        />
      )
    }

    switch (currentCard) {
      case 0:
        return (
          <Card00_Cover
            onStart={onNext}
          />
        )
      case 1:
      case 2:
        return (
          <Card01_02_Selection
            cardNumber={currentCard}
            selectedTutorial={selectedTutorial}
            onSelect={setSelectedTutorial}
            onNext={onNext}
            completedTutorials={completedTutorials}
            earnedBadges={earnedBadges}
            currentTutorialClass={currentTutorialClass}
            onTutorialClassSelect={onTutorialClassSelect}
            onTutorialSelect={onTutorialSelect}
            onBack={onMenu}
            onMenu={onMenu}
          />
        )
      case 12:
        return (
          <Card12_QuickComplete
            tutorialName={selectedTutorial || 'Tutorial'}
            onComplete={onQuickComplete || onTutorialComplete}
            onMenu={onMenu}
          />
        )
      case 3:
        return (
          <Card03_ModeSelection
            onModeSelect={(mode) => {
              onModeSelect(mode)
              onNext()
            }}
            onMenu={onMenu}
          />
        )
      case 4:
        return (
          <Card04_Introduction
            tutorialName={selectedTutorial || 'Tutorial de Expedição'}
            onStart={onNext}
            onMenu={onMenu}
            onRestart={onRestart}
            currentTutorialId={currentTutorialId}
            onCompleteAndMenu={onQuickComplete}
          />
        )
      case 5:
        return (
          <Card05_BeforeAction
            stepNumber={currentStep || 1}
            totalSteps={totalSteps || 3}
            stepTitle={stepData?.title || 'Montar o terreno'}
            onDemonstrate={() => {
              // Simula a ação no Studio
              onCardAction('demonstrate')
              // Após demonstrar, avança automaticamente para o card 6 (após ação)
              setTimeout(() => {
                onNext()
              }, 1000) // Aguarda a animação do Studio completar
            }}
            onBack={onBack}
            onShowConcept={() => setShowConcept(true)}
            onMenu={onMenu}
            onRestart={onRestart}
          />
        )
      case 6:
        return (
          <Card06_AfterAction
            stepNumber={currentStep || 1}
            totalSteps={totalSteps || 3}
            stepTitle={stepData?.title || 'Montar o terreno'}
            onNextStep={onNext}
            onBack={onBack}
            onMenu={onMenu}
            onRestart={onRestart}
          />
        )
      case 7:
        // Card 7 só aparece no modo interativo após card 6
        if (tutorialMode === 'interactive') {
          return (
            <Card07_InteractionInvite
              onTry={() => {
                // Vai para card 8 (tentativa do usuário)
                onNext()
              }}
              onContinue={() => {
                // Pula a interação e vai direto para próximo passo
                // Fixa a ação no Studio e pula cards 8-10
                if (onSkipToNextStep) {
                  onSkipToNextStep()
                } else {
                  // Fallback: fixa ação e avança
                  onCardAction('demonstrate')
                  setTimeout(() => {
                    onNext()
                  }, 500)
                }
              }}
              onMenu={onMenu}
              onRestart={onRestart}
            />
          )
        } else {
          // No modo demonstrativo, nunca chega aqui (pula direto para próximo passo)
          // Mas se chegar por algum motivo, avança
          onNext()
          return null
        }
      case 8:
        // Card 8 só aparece no modo interativo após tentativa
        if (tutorialMode === 'interactive') {
          return (
            <Card08_UserAttempt
              stepNumber={currentStep || 1}
              totalSteps={totalSteps || 3}
              stepTitle={stepData?.title || 'Montar o terreno'}
              onCheckResult={() => {
                // Simula verificação: sempre positivo para o mock
                // Fixa a ação no Studio antes de mostrar feedback
                onCardAction('demonstrate')
                // Vai para card 9 (feedback positivo)
                setTimeout(() => {
                  onNext()
                }, 500)
              }}
              onSkip={() => {
                // Pula a tentativa e vai direto para próximo passo, fixando a ação no Studio
                if (onSkipToNextStep) {
                  onSkipToNextStep()
                } else {
                  // Fallback: fixa ação e avança
                  onCardAction('demonstrate')
                  if (currentStep < totalSteps) {
                    // Será tratado no App.jsx handleNext
                    onNext()
                  } else {
                    onNext()
                  }
                }
              }}
              onMenu={onMenu}
              onRestart={onRestart}
            />
          )
        } else {
          // No modo demonstrativo, nunca chega aqui
          onNext()
          return null
        }
      case 9:
        // Card 9 só aparece no modo interativo após verificação positiva
        if (tutorialMode === 'interactive') {
          return (
            <Card09_PositiveFeedback
              onTryAgain={onBack}
              onContinue={() => {
                // A ação já foi fixada no Studio no Card 8, agora vai para próximo passo
                if (currentStep < totalSteps) {
                  // Avança para próximo passo (será tratado no App.jsx)
                  onNext()
                } else {
                  // Último passo, vai para completion
                  onNext()
                }
              }}
              onMenu={onMenu}
              onRestart={onRestart}
            />
          )
        } else {
          // No modo demonstrativo, pula direto para completion
          return (
            <Card11_Completion
              onMenu={onMenu}
              onRestart={onRestart}
            />
          )
        }
      case 10:
        // Card 10 só aparece no modo interativo após verificação negativa
        // No mock, sempre vamos para positivo, então este card não aparece normalmente
        if (tutorialMode === 'interactive') {
          return (
            <Card10_NegativeFeedback
              onTryAgain={onBack}
              onContinue={onNext}
              onMenu={onMenu}
              onRestart={onRestart}
            />
          )
        } else {
          // No modo demonstrativo, pula direto para completion
          return (
            <Card11_Completion
              onMenu={onMenu}
              onRestart={onRestart}
            />
          )
        }
      case 11:
        return (
          <Card11_Completion
            onMenu={onMenu}
            onRestart={onRestart}
            onComplete={onTutorialComplete}
            onCompleteAndMenu={onQuickComplete}
          />
        )
      default:
        return <div>Card não encontrado</div>
    }
  }

  return (
    <div className={`tutorial-panel ${currentCard === 0 ? 'no-padding-top' : ''} ${badgeGalleryExpanded ? 'badge-gallery-expanded' : ''}`} style={{ position: 'relative' }}>
      <div className="tutorial-panel-content">
        {showBadgeExplanation ? (
          <Card13_BadgeExplanation onClose={() => setShowBadgeExplanation(false)} />
        ) : (
          renderCard()
        )}
        {showBadgeNotification && (
          <BadgeNotification 
            badgeId={showBadgeNotification}
            onClose={onCloseBadgeNotification}
          />
        )}
        {showCreatorPopup && (
          <CreatorPopup onClose={onCloseCreatorPopup} />
        )}
      </div>
      {currentCard > 0 && currentCard !== 12 && !showBadgeExplanation && (
        <div className={`badge-gallery-fixed ${badgeGalleryExpanded ? 'expanded' : 'collapsed'}`}>
          <div 
            className="badge-gallery-header"
            onClick={() => setBadgeGalleryExpanded(!badgeGalleryExpanded)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              padding: '16px 24px',
              userSelect: 'none',
              minHeight: '100px',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <h2 className="card-title" style={{ fontSize: '20px', paddingTop: '0px', marginBottom: '0px', margin: 0 }}>
                Galeria de Badges
              </h2>
              <span style={{ 
                fontSize: '24px', 
                fontWeight: 700,
                color: '#ffffff',
                transition: 'transform 0.3s',
                transform: badgeGalleryExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
                lineHeight: 1
              }}>
                +
              </span>
            </div>
            <div style={{ marginTop: '12px' }}>
              <BadgeScoreboard earnedBadges={earnedBadges || []} />
            </div>
          </div>
          {badgeGalleryExpanded && (
            <div className="badge-gallery-content">
              <div style={{ marginBottom: '12px' }}>
                <button
                  onClick={() => setShowBadgeExplanation(true)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#0066cc',
                    fontSize: '13px',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Entenda o sistema de badges
                </button>
              </div>
              <BadgeHeader 
                earnedBadges={earnedBadges || []}
                completedTutorials={completedTutorials || { class1: [], class2: [] }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default TutorialPanel
