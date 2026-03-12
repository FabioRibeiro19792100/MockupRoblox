import { useEffect, useState, useRef } from 'react'
import './RobloxStudioMock.css'

const STEP_TITLES = {
  'base-created': 'Montar o terreno',
  'walls-created': 'Criar as paredes',
  'roof-created': 'Adicionar o telhado',
}

// Instruções descrevendo o que está implementado, sem suposições
const CARD_INSTRUCTIONS = {
  0: {
    title: 'Capa - Expedição Roblox',
    purpose: 'Tela inicial que apresenta o projeto Expedição Roblox. Mostra texto introdutório sobre o programa.',
    howItWorks: 'O usuário lê o texto sobre o projeto. Ao clicar em "COMEÇAR", chama onStart() que executa handleNext() no App.jsx, mudando currentCard de 0 para 1.',
    buttonBehaviors: {
      'COMEÇAR': 'Chama onStart() → handleNext() → setCurrentCard(1). Navega para a tela de seleção de trilhas.'
    },
    dataCollected: 'Nenhum dado é coletado. Apenas navegação entre telas.'
  },
  1: {
    title: 'Seleção de Trilha',
    purpose: 'Permite escolher entre duas trilhas: "Os primeiros passos para se tornar Creator" ou "Criações rápidas".',
    howItWorks: 'Mostra dois botões azuis com os nomes das trilhas. Ao clicar em qualquer um, chama onNext() que muda currentCard de 1 para 2. Não armazena qual trilha foi escolhida.',
    buttonBehaviors: {
      'Os primeiros passos para se tornar Creator': 'Chama onNext() → handleNext() → setCurrentCard(2). Vai para seleção de tutorial.',
      'Criações rápidas': 'Chama onNext() → handleNext() → setCurrentCard(2). Vai para seleção de tutorial.'
    },
    dataCollected: 'Nenhum dado é coletado sobre qual trilha foi escolhida. Apenas navegação.'
  },
  2: {
    title: 'Seleção de Tutorial',
    purpose: 'Mostra lista de tutoriais disponíveis. O usuário pode escolher um tutorial para fazer.',
    howItWorks: 'Exibe uma lista de tutoriais (ex: "Construir um casa", "Criar um obstáculo", "Animar um avatar"). Ao clicar em um tutorial, chama onSelect(tutorial.name) que atualiza selectedTutorial no estado do TutorialPanel, depois chama onNext() que muda currentCard de 2 para 3.',
    buttonBehaviors: {
      'Tutorial (linha clicável)': 'Chama onSelect(tutorial.name) → setSelectedTutorial(tutorial.name), depois onNext() → setCurrentCard(3). Armazena o nome do tutorial escolhido no estado local do TutorialPanel.',
      'Criações rápidas (botão azul)': 'Apenas visual, não tem ação implementada.'
    },
    dataCollected: 'Armazena selectedTutorial no estado do TutorialPanel. Este valor será usado no Card 04 para mostrar o nome do tutorial.'
  },
  3: {
    title: 'Escolha de Modo',
    purpose: 'Permite escolher entre modo demonstrativo ou interativo. Esta escolha define o fluxo do tutorial.',
    howItWorks: 'Mostra dois botões: "Modo demonstrativo" (azul, texto branco) e "Modo Interativo" (verde, texto preto). Ao clicar, chama onModeSelect(mode) que atualiza tutorialMode no App.jsx, depois chama onNext() automaticamente que muda currentCard de 3 para 4.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → setCurrentCard(1), setTutorialMode(null), setCurrentStep(1), setStudioState("empty"). Volta para seleção de trilhas e reseta tudo.',
      'Modo demonstrativo': 'Chama onModeSelect("demonstrative") → setTutorialMode("demonstrative"), depois onNext() → setCurrentCard(4). No modo demonstrativo, os cards 7-10 (interação) são pulados.',
      'Modo Interativo': 'Chama onModeSelect("interactive") → setTutorialMode("interactive"), depois onNext() → setCurrentCard(4). No modo interativo, os cards 7-10 aparecem para permitir prática.'
    },
    dataCollected: 'Armazena tutorialMode no estado do App.jsx. Este valor determina se cards de interação aparecem ou não.'
  },
  4: {
    title: 'Introdução do Tutorial',
    purpose: 'Mostra o nome do tutorial selecionado e uma descrição do que será aprendido.',
    howItWorks: 'Exibe o tutorialName (que vem de selectedTutorial do TutorialPanel) e texto descritivo. Ao clicar em "Iniciar", chama onStart() que executa handleNext(), mudando currentCard de 4 para 5 e iniciando currentStep em 1.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → setCurrentCard(1), reseta tutorialMode, currentStep e studioState. Volta para seleção de trilhas.',
      'Iniciar': 'Chama onStart() → handleNext() → setCurrentCard(5). Inicia o tutorial na primeira etapa (currentStep = 1).'
    },
    dataCollected: 'Nenhum dado adicional. O tutorialName já estava armazenado do Card 02.'
  },
  5: {
    title: 'Etapa do Tutorial - Antes da Ação',
    purpose: 'Card que exibe as instruções completas de uma etapa ANTES de ela ser demonstrada. Mostra o que o usuário precisa fazer e o que verá como resultado. É o card de preparação e ensino.',
    howItWorks: 'Exibe: (1) Box azul com "Construir um casa" e "ETAPA X/3" em duas linhas separadas por linha branca, (2) Barra branca com borda preta "AÇÃO | [título da etapa]" (ex: "AÇÃO | Montar o terreno"), (3) Seção "COMO FAZER NO ROBLOX STUDIO" com lista numerada de passos (ex: "Clique no menu Insert", "Selecione Part", etc.), (4) Seção "O QUE VOCÊ VAI VER NA TELA" com descrição do resultado esperado, (5) Link opcional "Entender conceito | O QUE É UMA PART?" (só aparece se onShowConcept existir). Recebe stepNumber, totalSteps (3) e stepTitle do App.jsx baseado em currentStep. Ao clicar em "Demonstrar", executa a ação no mock do Studio (adiciona step-box) e depois avança automaticamente para Card 06.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → setCurrentCard(1), setTutorialMode(null), setCurrentStep(1), setStudioState("empty"). Volta para seleção de trilhas e reseta tudo.',
      'Reiniciar tutorial': 'Chama onRestart() → handleRestart() → setCurrentCard(4), setCurrentStep(1), setStudioState("empty"). Volta para introdução (Card 04) mantendo tutorial selecionado e modo escolhido.',
      'Entender conceito | O QUE É UMA PART?': 'Chama onShowConcept() → setShowConcept(true) no TutorialPanel. Mostra Card 05.1 (conceito) como overlay sobre o Card 05. Não bloqueia progresso, é opcional. O usuário pode clicar em "Continuar" no Card 05.1 para voltar ao Card 05.',
      'Voltar um passo': 'Chama onBack() → handleBack(). Se currentStep > 1: remove último step-box do Studio (setStudioState("remove-last-step-blocks")), setCurrentStep(currentStep - 1), setCurrentCard(5) (volta para Card 05 da etapa anterior). Se currentStep = 1: setCurrentCard(4) (volta para introdução).',
      'Demonstrar': 'Chama onDemonstrate() → onCardAction("demonstrate") → setStudioState(step.action) (adiciona step-box no Studio mock com título da etapa), aguarda 1000ms para animação, depois onNext() → setCurrentCard(6) (vai para Card 06 - após ação).'
    },
    dataCollected: 'Nenhum dado é coletado neste card. Apenas atualiza currentStep e studioState para mostrar a ação no mock do Studio. É um card de instrução, não de interação ou coleta.'
  },
  '5.1': {
    title: 'Conceito Importante - O que é uma Part?',
    purpose: 'Explica o conceito de Part no Roblox Studio. Card opcional acessível via link "Entender conceito | O QUE É UMA PART?" no Card 05.',
    howItWorks: 'Mostra texto explicativo sobre Parts: "Uma Part é o objeto fundamental no Roblox Studio. É um bloco 3D que pode ser usado para construir qualquer coisa no seu jogo. Parts podem ter diferentes formas (bloco, esfera, cilindro) e propriedades como cor, tamanho e posição." Permite feedback com 👍 ou 👎 para indicar se a explicação foi útil. Ao clicar em "Continuar", volta para Card 05 mantendo o contexto da etapa.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → volta para Card 1, reseta tudo.',
      'Reiniciar tutorial': 'Chama onRestart() → handleRestart() → volta para Card 4, mantendo tutorial e modo.',
      '👍 / 👎': 'setFeedback("positive" ou "negative") muda opacidade do botão não selecionado. Coleta silenciosamente (via logs) se o usuário considerou a explicação útil (👍) ou não útil (👎), qual conceito foi consultado, e em qual etapa do tutorial foi acessado.',
      'Continuar': 'Chama onContinue() → setShowConcept(false). Volta para Card 05, mantendo o contexto da etapa (currentStep, studioState).'
    },
    dataCollected: 'Coleta silenciosamente (via logs): feedback do usuário sobre a utilidade da explicação (👍 positivo ou 👎 negativo), qual conceito foi consultado ("O que é uma Part?"), em qual etapa do tutorial foi acessado (currentStep), e se o usuário consultou o conceito antes ou depois de tentar a ação. Esses dados ajudam a identificar quais conceitos precisam de melhorias e quando os usuários mais precisam de ajuda conceitual.'
  },
  6: {
    title: 'Etapa do Tutorial - Após Ação',
    purpose: 'Mesma estrutura do Card 05, mas após a demonstração. O step-box já está visível no Studio.',
    howItWorks: 'Mostra as mesmas instruções, mas agora o resultado já foi demonstrado no Studio. Permite avançar para próxima etapa ou voltar.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → volta para Card 1.',
      'Reiniciar tutorial': 'Chama onRestart() → handleRestart() → volta para Card 4.',
      'Voltar um passo': 'Chama onBack() → handleBack(). Se currentStep > 1: remove step-box, setCurrentStep(currentStep - 1), setCurrentCard(5). Se currentStep = 1: setCurrentCard(4).',
      'Próximo passo': 'Chama onNextStep() → handleNext(). Se modo demonstrativo e currentStep < 3: setCurrentStep(currentStep + 1), setCurrentCard(5). Se currentStep = 3: setCurrentCard(11). Se modo interativo: setCurrentCard(7).'
    },
    dataCollected: 'Nenhum dado é coletado. Apenas atualiza currentStep e navegação.'
  },
  7: {
    title: 'Momento Interativo',
    purpose: 'Convida o usuário a tentar fazer a ação por conta própria. Só aparece no modo interativo.',
    howItWorks: 'Aparece apenas se tutorialMode === "interactive". Oferece duas opções: tentar fazer ou continuar sem tentar.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → volta para Card 1.',
      'Reiniciar tutorial': 'Chama onRestart() → handleRestart() → volta para Card 4.',
      'Sim, quero tentar.': 'Chama onTry() → onNext() → setCurrentCard(8). Vai para card de tentativa do usuário.',
      'Pular essa interação': 'Chama onContinue() → onSkipToNextStep() → fixa ação no Studio (setStudioState), se currentStep < 3: avança passo e vai para Card 5, senão vai para Card 11. Pula cards 8-10 (tentativa e feedback).'
    },
    dataCollected: 'Nenhum dado é coletado sobre a escolha. Apenas determina qual card aparece em seguida.'
  },
  8: {
    title: 'Tentativa do Usuário',
    purpose: 'Permite que o usuário tente fazer a ação. Mostra as mesmas instruções do Card 05. Só aparece no modo interativo.',
    howItWorks: 'Exibe as mesmas instruções da etapa. O usuário deve fazer a ação no Roblox Studio real (não no mock). Quando termina, clica para verificar resultado. O sistema verifica o estado do Studio para confirmar se a ação foi executada corretamente.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → volta para Card 1.',
      'Reiniciar tutorial': 'Chama onRestart() → handleRestart() → volta para Card 4.',
      'Já fez? Clique aqui para ver o seu resultado': 'Chama onCheckResult() → onCardAction("demonstrate") → setStudioState(step.action) (fixa ação no Studio), aguarda 500ms, depois onNext() → setCurrentCard(9). O sistema verifica o estado do Roblox Studio: se a ação foi feita corretamente (objetos criados, posicionados, etc.), vai para feedback positivo. Se não, vai para feedback negativo. No mock, sempre assume acerto.',
      'Ou clique aqui para pular esse passo': 'Chama onSkip() → onNext(). Se currentStep < 3: avança passo e vai para Card 5, senão vai para Card 11. Marca que esta etapa foi pulada.'
    },
    dataCollected: 'Coleta informações do Roblox Studio: se a ação foi executada corretamente (verifica objetos criados, propriedades, posições), se acertou na primeira tentativa, tempo para completar a tentativa, se pulou a etapa. No mock, sempre assume acerto na primeira tentativa.'
  },
  9: {
    title: 'Feedback Positivo - Parabéns, você acertou!',
    purpose: 'Confirma que o usuário executou a ação corretamente. Só aparece no modo interativo após tentativa com verificação positiva.',
    howItWorks: 'Mostra ícone de sucesso (✓) e mensagem positiva. Permite fazer de novo ou continuar. O sistema registra que esta etapa foi completada com sucesso.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → volta para Card 1.',
      'Reiniciar tutorial': 'Chama onRestart() → handleRestart() → volta para Card 4.',
      'Fazer de novo': 'Chama onTryAgain() → onBack() → volta para Card 8 (tentativa). Permite repetir mesmo tendo acertado.',
      'Continuar': 'Chama onContinue() → onNext(). Se currentStep < 3: setCurrentStep(currentStep + 1), setStudioState(nextStep.action), setCurrentCard(6). Se currentStep = 3: setCurrentCard(11). Marca etapa como completada com sucesso.'
    },
    dataCollected: 'Registra que a etapa foi completada com sucesso, número de tentativas até acertar, se escolheu fazer de novo mesmo acertando, tempo total na etapa. Todas as informações coletadas do Studio na tentativa são salvas junto com o resultado positivo.'
  },
  10: {
    title: 'Feedback Negativo - Ops! Algo não saiu como esperado',
    purpose: 'Informa que houve erro na tentativa. Aparece quando a verificação do Studio indica que a ação não foi executada corretamente.',
    howItWorks: 'O sistema verifica o estado do Roblox Studio e identifica o que está incorreto (objetos faltando, posições erradas, propriedades incorretas, etc.). Mostra feedback negativo e permite tentar novamente ou continuar mesmo assim.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → volta para Card 1.',
      'Reiniciar tutorial': 'Chama onRestart() → handleRestart() → volta para Card 4.',
      'Fazer de novo': 'Chama onTryAgain() → onBack() → volta para Card 8. Permite tentar novamente com as mesmas instruções.',
      'Continuar': 'Chama onContinue() → onNext() → avança para próximo card. O usuário escolhe continuar mesmo com erro, o sistema registra o erro mas permite progresso.'
    },
    dataCollected: 'Registra que houve erro na etapa, quais objetos/propriedades estavam incorretos no Studio, número de tentativas feitas, se escolheu continuar com erro. Todas as informações do estado do Studio no momento do erro são coletadas para identificar padrões de dificuldade.'
  },
  11: {
    title: 'Encerramento - Você chegou ao fim deste tutorial',
    purpose: 'Tela final do tutorial. Mostra mensagem de conclusão e opção para registrar experiência. Os dados já foram coletados silenciosamente (logs) durante o tutorial.',
    howItWorks: 'Exibe mensagem de conclusão. Permite voltar ao menu ou reiniciar. O botão de registrar experiência mostra mensagem de agradecimento. Não há coleta ativa de dados - os logs (alias do Roblox, ações, tentativas, erros, tempo) já foram coletados silenciosamente durante toda a jornada do tutorial.',
    buttonBehaviors: {
      'Voltar para o menu': 'Chama onMenu() → handleMenu() → setCurrentCard(1), reseta tudo. Volta para seleção de trilhas.',
      'Reiniciar tutorial': 'Chama onRestart() → handleRestart() → setCurrentCard(4), setCurrentStep(1), setStudioState("empty"). Volta para introdução.',
      'Clique aqui para registrar sua experiência': 'Chama handleRegister() → setShowThankYou(true). Mostra mensagem "Obrigado!" informando que os logs foram coletados silenciosamente. Não há formulário ou coleta ativa - apenas confirmação visual.'
    },
    dataCollected: 'Os dados já foram coletados silenciosamente durante o tutorial através de logs: alias do Roblox (usuário está logado), todas as etapas completadas, tentativas em cada etapa, erros cometidos, tempo total, verificações do Studio em cada passo interativo, preferências de modo (demonstrativo/interativo), conceitos consultados. Quando o usuário clica em "registrar experiência", apenas mostra mensagem de agradecimento - a coleta já aconteceu.'
  }
}

function RobloxStudioMock({ state, onRemoveBlocks, currentCard, tutorialMode, showConcept, onResetGamification }) {
  const [steps, setSteps] = useState([])
  const [highlightedMenu, setHighlightedMenu] = useState(null)
  const [showInstructions, setShowInstructions] = useState(true)
  const [resetToggle, setResetToggle] = useState(false)
  const timeoutRefs = useRef([])

  // Expõe função para remover passos
  useEffect(() => {
    if (onRemoveBlocks && onRemoveBlocks.current !== undefined) {
      onRemoveBlocks.current = () => {
        setSteps(prev => prev.slice(0, -1))
      }
    }
  }, [onRemoveBlocks])

  useEffect(() => {
    // Limpar timeouts anteriores
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    timeoutRefs.current = []
    
    if (!state) return
    
    // Se for para remover o último passo
    if (state === 'remove-last-step-blocks') {
      setSteps(prev => prev.slice(0, -1))
      return
    }
    
    // Adiciona novo passo se ainda não existe
    const stepTitle = STEP_TITLES[state]
    if (stepTitle) {
      setHighlightedMenu('insert')
      const timeout = setTimeout(() => {
        setSteps(prev => {
          // Verifica se o passo já existe
          if (!prev.find(s => s.action === state)) {
            return [...prev, { action: state, title: stepTitle }]
          }
          return prev
        })
        setTimeout(() => {
          setHighlightedMenu(null)
        }, 500)
      }, 300)
      timeoutRefs.current.push(timeout)
    }
    
    if (state === 'empty') {
      setSteps([])
      setHighlightedMenu(null)
    }
    
    // Cleanup function
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
      timeoutRefs.current = []
    }
  }, [state])

  // Obter instruções do card atual
  const getCardInstructions = () => {
    // Se o card conceitual está sendo exibido, usa as instruções do card 5.1
    if (showConcept && currentCard === 5) {
      return CARD_INSTRUCTIONS['5.1'] || CARD_INSTRUCTIONS[5]
    }
    return CARD_INSTRUCTIONS[currentCard] || CARD_INSTRUCTIONS[0]
  }

  const instructions = getCardInstructions()

  return (
    <div className="roblox-studio-mock" style={{ 
      display: 'flex', 
      flex: '1 1 auto', 
      minWidth: '500px',
      width: 'auto',
      height: '85vh',
      maxHeight: '85vh',
      background: '#e0e0e0',
      flexDirection: 'column',
      marginTop: '48px',
      marginLeft: '0',
      position: 'relative',
      zIndex: 10,
      visibility: 'visible',
      opacity: 1
    }}>
      <div className="studio-toolbar">
        <div className="toolbar-item">File</div>
        <div className="toolbar-item">Edit</div>
        <div className={`toolbar-item ${highlightedMenu === 'insert' ? 'highlighted' : ''}`}>
          Insert
        </div>
        <div className="toolbar-item">View</div>
        <div className="toolbar-item">Plugins</div>
        <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', padding: '4px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#666666', whiteSpace: 'nowrap' }}>Explicações</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={showInstructions}
                onChange={() => setShowInstructions(!showInstructions)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          {onResetGamification && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12px', color: '#ff4444', fontWeight: 600, whiteSpace: 'nowrap' }}>Resetar Gamificação</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={resetToggle}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setResetToggle(true)
                      // Executa o reset
                      onResetGamification()
                      // Desmarca após resetar (tempo maior para garantir que o reset foi processado)
                      setTimeout(() => {
                        setResetToggle(false)
                      }, 500)
                    }
                  }}
                />
                <span className="toggle-slider red"></span>
              </label>
            </div>
          )}
        </div>
      </div>
      
      <div className={`studio-viewport ${!showInstructions ? 'full-height' : ''}`}>
        <div className="viewport-grid">
          <div className="steps-container">
            {steps.map((step, index) => (
              <div
                key={step.action}
                className="step-box"
                style={{
                  animation: 'blockAppear 0.5s ease forwards',
                }}
              >
                {step.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Área de instruções de desenvolvimento (40% inferior) */}
      {showInstructions && (
      <div className="dev-instructions-panel">
        <div className="dev-instructions-header">
          <strong>{instructions.title}</strong>
        </div>
        <div className="dev-instructions-content">
          <div className="dev-instruction-section">
            <strong>Propósito:</strong> {instructions.purpose}
          </div>
          <div className="dev-instruction-section">
            <strong>Como funciona:</strong> {instructions.howItWorks}
          </div>
          <div className="dev-instruction-section">
            <strong>Comportamento dos botões:</strong>
            <ul className="dev-instruction-buttons-list">
              {Object.entries(instructions.buttonBehaviors).map(([button, behavior], idx) => (
                <li key={idx}>
                  <strong>"{button}"</strong>: {behavior}
                </li>
              ))}
            </ul>
          </div>
          <div className="dev-instruction-section">
            <strong>Informações coletadas:</strong> {instructions.dataCollected}
          </div>
          {tutorialMode && (
            <div className="dev-instruction-section">
              <strong>Modo Atual:</strong> {tutorialMode === 'demonstrative' ? 'Demonstrativo' : 'Interativo'}
            </div>
          )}
        </div>
      </div>
      )}
    </div>
  )
}

export default RobloxStudioMock
