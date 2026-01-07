import { useState, useEffect, useRef } from 'react'
import TutorialPanel from './components/TutorialPanel'
import RobloxStudioMock from './components/RobloxStudioMock'
import './App.css'

// Definindo 3 passos mockados do tutorial com sequência lógica
// Cada passo tem IDs de blocos que adiciona
const TUTORIAL_STEPS = [
  { id: 1, title: 'Montar o terreno', action: 'base-created', blockIds: [1], description: 'Criar a base da casa' },
  { id: 2, title: 'Criar as paredes', action: 'walls-created', blockIds: [2, 3], description: 'Adicionar paredes laterais' },
  { id: 3, title: 'Adicionar o telhado', action: 'roof-created', blockIds: [4], description: 'Criar estrutura do telhado' },
]

function App() {
  const [currentCard, setCurrentCard] = useState(0)
  const [tutorialMode, setTutorialMode] = useState(null) // 'demonstrative' | 'interactive'
  const [studioState, setStudioState] = useState('empty')
  const [currentStep, setCurrentStep] = useState(1) // Passo atual do tutorial (1-3)
  const removeBlocksRef = useRef(null)

  // Reset Studio state apenas nos cards iniciais
  useEffect(() => {
    // Cards iniciais: Studio vazio
    if (currentCard <= 4 && currentCard > 0) {
      setStudioState('empty')
    }
    // Não reseta entre passos - os blocos acumulam
  }, [currentCard])

  const handleNext = () => {
    if (currentCard < 11) {
      // Card 0 (capa) sempre vai para card 1
      if (currentCard === 0) {
        setCurrentCard(1)
        return
      }
      let nextCard = currentCard + 1
      
      // No modo demonstrativo, pula cards 7-10 (interação)
      if (tutorialMode === 'demonstrative') {
        if (currentCard === 6) {
          // Se estamos no card 6 e ainda há passos, continua para próximo passo
          if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
            setCurrentCard(5) // Volta para card 5 (antes da ação) do próximo passo
            // NÃO reseta o Studio - os blocos acumulam
            return
          } else {
            nextCard = 11 // Vai direto para completion
          }
        } else if (currentCard >= 7 && currentCard < 11) {
          nextCard = 11
        }
      } else if (tutorialMode === 'interactive') {
        // No modo interativo, após card 6, vai para card 7 (convite à interação)
        if (currentCard === 6) {
          nextCard = 7
        } else if (currentCard === 7) {
          // Card 7: se escolheu continuar, TutorialPanel já tratou (pula direto)
          // Se escolheu tentar, vai para card 8
          // Por padrão, se chegou aqui via onNext, vai para card 8
          nextCard = 8
        } else if (currentCard === 8) {
          // Card 8 (tentativa) vai para card 9 (feedback positivo)
          nextCard = 9
        } else if (currentCard === 9 || currentCard === 10) {
          // Após feedback positivo no modo interativo, a ação já está no Studio
          // Vai direto para Card 6 do próximo passo (pula Card 5)
          if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
            // Demonstra a ação do próximo passo automaticamente
            const nextStep = TUTORIAL_STEPS.find(s => s.id === currentStep + 1)
            if (nextStep) {
              setStudioState(nextStep.action)
            }
            setCurrentCard(6) // Vai direto para Card 6 (pula Card 5)
            // NÃO reseta o Studio - os blocos acumulam
            return
          } else {
            nextCard = 11
          }
        }
      }
      
      setCurrentCard(nextCard)
    }
  }

  const handleSkipToNextStep = () => {
    // Pula direto para o próximo passo, fixando a ação no Studio
    const step = TUTORIAL_STEPS.find(s => s.id === currentStep)
    if (step) {
      setStudioState(step.action)
    }
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      setCurrentCard(5) // Vai para card 5 do próximo passo
    } else {
      setCurrentCard(11) // Vai para completion
    }
  }

  const handleMenu = () => {
    // Volta para Card 01 (seleção de categorias)
    setCurrentCard(1)
    setTutorialMode(null)
    setCurrentStep(1)
    setStudioState('empty')
  }

  const handleRestart = () => {
    // Reinicia o tutorial a partir do Card 04 (introdução)
    // Mantém o tutorial e modo selecionados
    setCurrentCard(4)
    setCurrentStep(1)
    setStudioState('empty')
  }

  const handleBack = () => {
    if (currentCard === 0) {
      // Não volta da capa
      return
    }
    if (currentCard === 5 || currentCard === 6) {
      // Se está em um passo do tutorial, volta para o passo anterior
      if (currentStep > 1) {
        // Remove os blocos do passo atual antes de voltar
        const currentStepData = TUTORIAL_STEPS.find(s => s.id === currentStep)
        if (currentStepData && currentStepData.blockIds && removeBlocksRef.current) {
          removeBlocksRef.current(currentStepData.blockIds)
        }
        setCurrentStep(currentStep - 1)
        setCurrentCard(5) // Volta para card 5 do passo anterior
      } else {
        // Se é o primeiro passo, volta para card 4
        setCurrentCard(4)
        setStudioState('empty')
      }
    } else if (currentCard > 1) {
      // Para outros cards, volta normalmente
      const previousCard = currentCard - 1
      setCurrentCard(previousCard)
      if (previousCard < 5) {
        setStudioState('empty')
      }
    }
  }

  const handleCardAction = (action, params = {}) => {
    switch (action) {
      case 'demonstrate':
        // Simula ação no Studio baseado no passo atual
        const step = TUTORIAL_STEPS.find(s => s.id === currentStep)
        if (step) {
          setStudioState(step.action)
        }
        break
      case 'next-step':
        handleNext()
        break
      case 'reset-studio':
        setStudioState('empty')
        break
      default:
        break
    }
  }

  // Reset Studio quando muda de passo (exceto quando está demonstrando)
  useEffect(() => {
    if (currentCard === 5 && currentStep > 1) {
      // Ao voltar para card 5 de um novo passo, reseta o Studio
      const step = TUTORIAL_STEPS.find(s => s.id === currentStep)
      if (step && studioState === 'empty') {
        // Mantém vazio até demonstrar
      }
    }
  }, [currentStep, currentCard])

  const getCurrentStepData = () => {
    return TUTORIAL_STEPS.find(s => s.id === currentStep) || TUTORIAL_STEPS[0]
  }

  return (
    <div className="app">
      <TutorialPanel
        currentCard={currentCard}
        tutorialMode={tutorialMode}
        currentStep={currentStep}
        totalSteps={3}
        stepData={getCurrentStepData()}
        onNext={handleNext}
        onBack={handleBack}
        onCardAction={handleCardAction}
        onModeSelect={setTutorialMode}
        onSkipToNextStep={handleSkipToNextStep}
        onMenu={handleMenu}
        onRestart={handleRestart}
      />
      <RobloxStudioMock 
        state={studioState} 
        onRemoveBlocks={removeBlocksRef}
        currentCard={currentCard}
        tutorialMode={tutorialMode}
      />
    </div>
  )
}

export default App
