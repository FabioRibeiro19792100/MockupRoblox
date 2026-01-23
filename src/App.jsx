import { useState, useEffect, useRef } from 'react'
import TutorialPanel from './components/TutorialPanel'
import RobloxStudioMock from './components/RobloxStudioMock'
import CardLayoutView from './components/CardLayoutView'
import BadgeHeader from './components/BadgeHeader'
import CreatorStamp from './components/CreatorStamp'
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
  const [showConcept, setShowConcept] = useState(false)
  const removeBlocksRef = useRef(null)
  
  // Estados de gamificação
  const [completedTutorials, setCompletedTutorials] = useState({
    class1: [], // IDs dos tutoriais completados da classe 1 (1-5)
    class2: []  // IDs dos tutoriais completados da classe 2 (1-5)
  })
  const [earnedBadges, setEarnedBadges] = useState([]) // IDs dos badges ganhos (1-3)
  const [showBadgeNotification, setShowBadgeNotification] = useState(null) // Badge ID para mostrar notificação
  const [showCreatorPopup, setShowCreatorPopup] = useState(false) // Mostrar popup de Creator (badge 1)
  const [showBadgePopup2, setShowBadgePopup2] = useState(false) // Mostrar popup de Badge 2 (Criador Iniciante)
  const [showBadgePopup3, setShowBadgePopup3] = useState(false) // Mostrar popup de Badge 3 (Criador Avançado)
  const [currentTutorialClass, setCurrentTutorialClass] = useState(null) // 1 ou 2
  const [currentTutorialId, setCurrentTutorialId] = useState(null) // ID do tutorial atual (1-5 dentro de cada classe)
  const [layoutMode, setLayoutMode] = useState(false) // Modo layout para visualizar todos os cards

  // Reset Studio state apenas nos cards iniciais
  useEffect(() => {
    // Cards iniciais: Studio vazio
    if (currentCard <= 4 && currentCard > 0) {
      setStudioState('empty')
    }
    // Não reseta entre passos - os blocos acumulam
    
    // Reset showConcept quando não está no card 5
    if (currentCard !== 5) {
      setShowConcept(false)
    }
    
    // Não resetar currentTutorialClass e currentTutorialId quando está no Card 12
    // Eles precisam ser mantidos para marcar como completo
  }, [currentCard])

  const handleNext = () => {
    if (currentCard < 11) {
      // Card 0 (capa) sempre vai para card 1 (agora mostra tutoriais diretamente)
      if (currentCard === 0) {
        setCurrentCard(1)
        return
      }
      // Card 1 agora mostra os tutoriais, então não precisa ir para Card 2
      if (currentCard === 1) {
        // Se já está no Card 1, não faz nada (já mostra os tutoriais)
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

  // Função para verificar e conceder badges
  const checkBadges = (classNum, completed) => {
    const newBadges = []
    const allCompleted = [...completedTutorials.class1, ...completedTutorials.class2]
    
    if (classNum === 1) {
      // Badge 1: primeiro tutorial da classe 1
      if (completed.includes(1) && !earnedBadges.includes(1)) {
        newBadges.push(1)
      }
      // Badge 2: todos os 5 tutoriais da classe 1
      if (completed.length === 5 && !earnedBadges.includes(2)) {
        newBadges.push(2)
      }
    } else if (classNum === 2) {
      // Badge 3: todos os 5 tutoriais da classe 2
      if (completed.length === 5 && !earnedBadges.includes(3)) {
        newBadges.push(3)
      }
    }
    
    if (newBadges.length > 0) {
      setEarnedBadges([...earnedBadges, ...newBadges])
      // Mostrar popup correspondente ao badge conquistado
      if (newBadges.includes(1)) {
        setShowCreatorPopup(true)
      }
      if (newBadges.includes(2)) {
        setShowBadgePopup2(true)
      }
      if (newBadges.includes(3)) {
        setShowBadgePopup3(true)
      }
      // Mostrar notificação do primeiro badge
      // Desabilitado: notificação de badge
      // setShowBadgeNotification(newBadges[0])
      // setTimeout(() => setShowBadgeNotification(null), 5000)
    }
  }

  // Função para marcar tutorial como completo
  const handleTutorialComplete = () => {
    if (!currentTutorialClass || !currentTutorialId) {
      return
    }
    
    const classKey = currentTutorialClass === 1 ? 'class1' : 'class2'
    const newCompleted = [...completedTutorials[classKey]]
    
    if (!newCompleted.includes(currentTutorialId)) {
      newCompleted.push(currentTutorialId)
      setCompletedTutorials({
        ...completedTutorials,
        [classKey]: newCompleted.sort()
      })
      
      // Verificar badges
      checkBadges(currentTutorialClass, newCompleted)
    }
  }

  const handleTutorialSelect = (tutorialId, tutorialClass) => {
    setCurrentTutorialClass(tutorialClass)
    setCurrentTutorialId(tutorialId)
    
    // Verificar se é tutorial mockado (2-5 da classe 1 ou 1-5 da classe 2)
    const isMocked = (tutorialClass === 1 && tutorialId > 1) || (tutorialClass === 2)
    
    if (isMocked) {
      // Vai direto para Card 12 (conclusão rápida)
      setCurrentCard(12)
    } else {
      // Tutorial completo: vai para Card 3 (seleção de modo)
      setCurrentCard(3)
    }
  }

  const handleMenu = () => {
    // Volta para Card 01 (seleção de categorias)
    setCurrentCard(1)
    setTutorialMode(null)
    setCurrentStep(1)
    setStudioState('empty')
    // Reseta currentTutorialClass para permitir escolher qualquer classe novamente
    setCurrentTutorialClass(null)
    setCurrentTutorialId(null)
  }

  const handleResetGamification = () => {
    // Zera toda a gamificação
    setCompletedTutorials({
      class1: [],
      class2: []
    })
    setEarnedBadges([])
    setShowBadgeNotification(null)
    setShowCreatorPopup(false)
    // Volta para o menu
    handleMenu()
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

  console.log('App renderizando, layoutMode:', layoutMode)
  
  return (
    <div className="app">
      {layoutMode ? (
        <CardLayoutView
          onCardAction={handleCardAction}
          onModeSelect={setTutorialMode}
          onMenu={handleMenu}
          onRestart={handleRestart}
          completedTutorials={completedTutorials}
          earnedBadges={earnedBadges}
          onTutorialSelect={handleTutorialSelect}
          onTutorialComplete={handleTutorialComplete}
          onQuickComplete={() => {
            handleTutorialComplete()
            setCurrentCard(1)
            setTutorialMode(null)
            setCurrentStep(1)
            setStudioState('empty')
            setCurrentTutorialId(null)
          }}
        />
      ) : (
        <>
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
            onShowConceptChange={setShowConcept}
            completedTutorials={completedTutorials}
            earnedBadges={earnedBadges}
            currentTutorialClass={currentTutorialClass}
            currentTutorialId={currentTutorialId}
            onTutorialClassSelect={setCurrentTutorialClass}
            onTutorialSelect={(tutorialId, tutorialClass) => {
              setCurrentTutorialId(tutorialId)
              // Se passou a classe, usa ela, senão tenta determinar pela classe atual
              const classToUse = tutorialClass || currentTutorialClass
              if (classToUse) {
                setCurrentTutorialClass(classToUse)
              }
              // Verificar se é mockado (tutoriais 2-5 da classe 1 e 1-5 da classe 2 são mockados)
              const isMocked = (classToUse === 1 && tutorialId > 1) || (classToUse === 2)
              if (isMocked) {
                setCurrentCard(12)
              } else {
                // Tutorial 1 da classe 1 - vai para seleção de modo
                setCurrentCard(3)
              }
            }}
            onTutorialComplete={handleTutorialComplete}
            onQuickComplete={() => {
              // Marca como completo primeiro
              handleTutorialComplete()
              // Volta ao menu imediatamente (Card 1) para ver o status atualizado
              setCurrentCard(1)
              setTutorialMode(null)
              setCurrentStep(1)
              setStudioState('empty')
              setCurrentTutorialId(null) // Reseta apenas o ID do tutorial
            }}
            onCompleteAndMenu={() => {
              // Marca como completo primeiro
              handleTutorialComplete()
              // Volta ao menu imediatamente (Card 1) para ver o status atualizado
              setCurrentCard(1)
              setTutorialMode(null)
              setCurrentStep(1)
              setStudioState('empty')
              setCurrentTutorialId(null) // Reseta apenas o ID do tutorial
            }}
            onResetGamification={handleResetGamification}
            showBadgeNotification={showBadgeNotification}
            onCloseBadgeNotification={() => setShowBadgeNotification(null)}
            showCreatorPopup={showCreatorPopup}
            onCloseCreatorPopup={() => setShowCreatorPopup(false)}
            showBadgePopup2={showBadgePopup2}
            onCloseBadgePopup2={() => setShowBadgePopup2(false)}
            showBadgePopup3={showBadgePopup3}
            onCloseBadgePopup3={() => setShowBadgePopup3(false)}
          />
          <RobloxStudioMock 
            state={studioState} 
            onRemoveBlocks={removeBlocksRef}
            currentCard={currentCard}
            tutorialMode={tutorialMode}
            showConcept={showConcept}
            onResetGamification={handleResetGamification}
            layoutMode={layoutMode}
            onLayoutModeToggle={setLayoutMode}
          />
        </>
      )}
      {!layoutMode && (
        <button 
          onClick={() => {
            console.log('Botão Modo Layout clicado, mudando para:', !layoutMode)
            setLayoutMode(true)
          }}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 10000,
            padding: '10px 20px',
            background: '#002DCC',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
          }}
        >
          Modo Layout
        </button>
      )}
      {layoutMode && (
        <button 
          onClick={() => setLayoutMode(!layoutMode)}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
            padding: '10px 20px',
            background: '#4CAF50',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
          }}
        >
          Modo Normal
        </button>
      )}
    </div>
  )
}

export default App
