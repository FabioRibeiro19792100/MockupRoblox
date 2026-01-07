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
import './TutorialPanel.css'

function TutorialPanel({ currentCard, tutorialMode, currentStep, totalSteps, stepData, onNext, onBack, onCardAction, onModeSelect, onSkipToNextStep, onMenu, onRestart, onShowConceptChange }) {
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
          />
        )
      default:
        return <div>Card não encontrado</div>
    }
  }

  return (
    <div className="tutorial-panel">
      {renderCard()}
    </div>
  )
}

export default TutorialPanel
