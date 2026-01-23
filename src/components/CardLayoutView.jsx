import React, { useState, useEffect, useRef } from 'react'
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
import Card13_BadgeExplanation from './cards/Card13_BadgeExplanation'
import BadgeHeader from './BadgeHeader'
import BadgeScoreboard from './BadgeScoreboard'
import CreatorPopup from './CreatorPopup'
import BadgePopup2 from './BadgePopup2'
import BadgePopup3 from './BadgePopup3'
import CreatorStamp from './CreatorStamp'
import ElementLabel from './ElementLabel'
import BadgeNotification from './BadgeNotification'
import './CardLayoutView.css'

// Sistema de layers - Design Original + Bold + Pixel Art
const LAYER_STYLES = {
  layer1: {
    name: 'Design Original',
    description: 'Design original sem modificações'
  },
  layer2: {
    name: 'Bold',
    description: 'Tipografia pesada, destaque em negrito'
  },
  layer3: {
    name: 'Pixel Art',
    description: 'Estilo pixel-art retrô com bordas douradas e painéis bege'
  }
}

function CardLayoutView({ 
  onCardAction,
  onModeSelect,
  onMenu,
  onRestart,
  completedTutorials,
  earnedBadges,
  onTutorialSelect,
  onTutorialComplete,
  onQuickComplete
}) {
  const [selectedTutorial, setSelectedTutorial] = useState('Construir uma casa')
  const [showConcept, setShowConcept] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [tutorialMode, setTutorialMode] = useState('demonstrative')
  const [currentLayer, setCurrentLayer] = useState('layer1')
  const [showLabels, setShowLabels] = useState(false)
  const [showBadgeGallery, setShowBadgeGallery] = useState(true)
  const [badgeGalleryExpanded, setBadgeGalleryExpanded] = useState(false) // Para controle global
  const [expandedCards, setExpandedCards] = useState(new Set()) // Estado individual por card
  
  // Estados para edição de elementos
  const [selectedElements, setSelectedElements] = useState(new Set())
  const [instructionText, setInstructionText] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  
  // Estado para modal de edição rápida (clicando no elemento)
  const [quickEditModal, setQuickEditModal] = useState(null) // { elementType, selector, label, cardId }
  const [quickEditInstruction, setQuickEditInstruction] = useState('')
  const [applyToAllCards, setApplyToAllCards] = useState(true) // true = todos os cards, false = apenas este card
  
  // Estado para coordenadas do elemento clicado
  const [elementPosition, setElementPosition] = useState(null) // { label, position, cardId }
  
  // Chave para localStorage
  const STORAGE_KEY = 'cardLayoutCustomStyles'
  
  // Função para aplicar estilos salvos (será definida depois de cards)
  const applySavedStyles = (styles, cardsArray) => {
    // Usar todos os cards disponíveis no DOM
    const allCards = document.querySelectorAll('.card-layout-item')
    allCards.forEach(cardItem => {
      const cardId = cardItem.querySelector('.card-layout-content')?.id
      if (!cardId) return
      
      const cardIdMatch = cardId.match(/card-content-(\d+)/)
      if (!cardIdMatch) return
      
      const cardIdNum = parseInt(cardIdMatch[1])
      const card = cardsArray?.find(c => c.id === cardIdNum)
      if (!card || !card.elements) return
      
      const cardContainer = document.getElementById(cardId)
      if (!cardContainer) return
      
      card.elements.forEach(element => {
        const styleKey = `${element.type}-${element.selector}`
        const savedStyle = styles[styleKey]
        
        if (savedStyle) {
          const el = cardContainer.querySelector(element.selector)
          if (el) {
            Object.entries(savedStyle).forEach(([property, value]) => {
              el.style[property] = value
            })
            console.log(`Aplicando estilos salvos para ${element.type}`)
          }
        }
      })
    })
  }
  
  // Função para salvar estilos no localStorage
  const saveStylesToStorage = (elementType, selector, property, value) => {
    try {
      const savedStyles = localStorage.getItem(STORAGE_KEY)
      const styles = savedStyles ? JSON.parse(savedStyles) : {}
      
      const styleKey = `${elementType}-${selector}`
      if (!styles[styleKey]) {
        styles[styleKey] = {}
      }
      
      styles[styleKey][property] = value
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(styles))
      console.log(`💾 Estilo salvo: ${elementType} -> ${property}: ${value}`)
      
      // Reaplicar estilos imediatamente após salvar
      setTimeout(() => {
        applySavedStyles(styles, cards)
      }, 100)
    } catch (error) {
      console.error('❌ Erro ao salvar estilo:', error)
    }
  }
  
  // Função para limpar todos os estilos salvos
  const clearSavedStyles = () => {
    localStorage.removeItem(STORAGE_KEY)
    // Recarregar a página para aplicar os estilos originais
    window.location.reload()
  }

  const mockStepData = {
    title: 'Montar o terreno',
    description: 'Criar a base da casa'
  }

  // Estado para controlar visibilidade da galeria por card - por padrão todos estão visíveis
  const [badgeGalleryVisible, setBadgeGalleryVisible] = useState(() => {
    // Inicializa com todos os cards desligados (toggle off)
    return new Set()
  })

  // Estado para rastrear cards explicitamente contraídos (quando o usuário clica no header da galeria)
  const [collapsedGalleryCards, setCollapsedGalleryCards] = useState(new Set())

  const toggleBadgeGalleryVisibility = (cardId) => {
    const hasAnyVisible = badgeGalleryVisible.size > 0
    
    if (hasAnyVisible) {
      // Se tem algum visível, desliga todos e contrai todas as galerias
      const allCollapsed = new Set()
      for (let i = 0; i < 21; i++) {
        allCollapsed.add(i)
      }
      setBadgeGalleryVisible(new Set())
      setCollapsedGalleryCards(allCollapsed)
    } else {
      // Se não tem nenhum visível, liga todos e expande todas as galerias
      const allCards = new Set()
      for (let i = 0; i < 21; i++) {
        allCards.add(i)
      }
      // Limpa o collapsedGalleryCards e liga todos os toggles simultaneamente
      setCollapsedGalleryCards(new Set())
      setBadgeGalleryVisible(allCards)
    }
  }

  // Função helper para renderizar a galeria de badges
  const renderBadgeGallery = (cardContent, cardId) => {
    // Estado global: se algum card está visível
    const isAnyGalleryVisible = badgeGalleryVisible.size > 0
    const isGalleryVisible = badgeGalleryVisible.has(cardId)
    
    // Quando visível, começa expandida por padrão, a menos que tenha sido explicitamente contraída
    const isCardExpanded = isGalleryVisible && !collapsedGalleryCards.has(cardId)
    
    // Se a galeria está contraída, ela não deve aparecer (altura 0)
    // Se está expandida, mostra com altura 350px
    const galleryHeight = isCardExpanded ? 350 : 0
    const buttonHeight = 80 // Altura dos botões de CTA
    
    // IMPORTANTE: Esta função apenas expande/contrai a galeria, NÃO desliga o toggle
    // O toggle (badgeGalleryVisible) é controlado separadamente e não deve ser afetado aqui
    const toggleCardGallery = () => {
      // Expandir/contrair a galeria em TODOS os cards ao mesmo tempo
      setCollapsedGalleryCards(prev => {
        const isCurrentlyCollapsed = prev.has(cardId)
        if (isCurrentlyCollapsed) {
          // Se estava contraída, expande TODOS (remove todos do Set)
          return new Set()
        } else {
          // Se estava expandida, contrai TODOS (adiciona todos ao Set)
          // Quando contrai, também desliga o toggle para voltar à posição inicial
          setBadgeGalleryVisible(new Set())
          const allCards = new Set()
          for (let i = 0; i < 21; i++) {
            allCards.add(i)
          }
          return allCards
        }
      })
    }
    
    // Toggle switch da galeria de badges - será inserido logo após o header via CSS
    const badgeToggle = (
      <div 
        className="badge-gallery-toggle"
        onClick={(e) => {
          e.stopPropagation()
          toggleBadgeGalleryVisibility(cardId)
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          background: 'rgb(113, 180, 233)',
          borderBottom: '1px solid #e0e0e0',
          cursor: 'pointer',
          userSelect: 'none',
          transition: 'background 0.2s',
          flexShrink: 0
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(100, 160, 210)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgb(113, 180, 233)'}
      >
        <span style={{ fontSize: '14px', fontWeight: 600, color: '#000000' }}>
          Conquiste seus badges de Creator
        </span>
        {/* Toggle Switch */}
        <div 
          onClick={(e) => {
            e.stopPropagation()
            toggleBadgeGalleryVisibility(cardId)
          }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}
        >
          <div 
            style={{
              width: '44px',
              height: '24px',
              borderRadius: '12px',
              background: isAnyGalleryVisible ? 'rgb(113, 180, 233)' : '#cccccc',
              position: 'relative',
              transition: 'background 0.3s',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#ffffff',
                position: 'absolute',
                top: '2px',
                left: isAnyGalleryVisible ? '22px' : '2px',
                transition: 'left 0.3s',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>
        </div>
      </div>
    )

    // Wrapper que insere o toggle logo após o header
    const contentWithToggle = (
      <div className="card-with-badge-toggle" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
        {cardContent}
        {badgeToggle}
      </div>
    )
    
    if (!isGalleryVisible) {
      return contentWithToggle
    }
    
    return (
      <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'visible' }}>
        {/* Conteúdo do card com toggle - não é afetado pela galeria */}
        <div style={{ 
          height: '100%',
          width: '100%',
          overflow: 'auto',
          position: 'relative',
          paddingBottom: `${buttonHeight}px` // Espaço para os botões ficarem visíveis
        }}>
          {contentWithToggle}
        </div>
        {/* Galeria de badges - overlay absoluto que não move nada, posicionada acima dos botões */}
        {/* Só mostra a galeria se estiver expandida */}
        {isCardExpanded && (
        <div className={`badge-gallery-fixed expanded`} style={{ 
          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
          borderTop: '2px solid rgb(113, 180, 233)',
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.15)',
          position: 'absolute',
          bottom: `${buttonHeight}px`, // Posiciona acima dos botões (80px)
          left: 0,
          right: 0,
          zIndex: 100,
          maxHeight: `${galleryHeight}px`,
          minHeight: '350px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, min-height 0.3s ease'
        }}>
          <div 
            className="badge-gallery-header"
            onClick={(e) => {
              e.stopPropagation()
              toggleCardGallery()
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              padding: '16px 24px',
              userSelect: 'none',
              minHeight: '100px',
              position: 'relative',
              background: 'linear-gradient(135deg, rgb(113, 180, 233) 0%, rgb(100, 160, 210) 100%)',
              borderBottom: '1px solid rgb(90, 140, 190)',
              color: '#000000',
              zIndex: 101,
              pointerEvents: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <h2 style={{ fontSize: '20px', paddingTop: '0px', marginBottom: '0px', margin: 0, color: '#000000' }}>
                Galeria de Badges
              </h2>
              <span style={{ 
                fontSize: '24px', 
                fontWeight: 700,
                color: '#000000',
                transition: 'transform 0.3s',
                transform: isCardExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
                lineHeight: 1
              }}>
                +
              </span>
            </div>
            <div style={{ marginTop: '12px' }}>
              <BadgeScoreboard earnedBadges={earnedBadges || [1, 2]} />
            </div>
          </div>
          {isCardExpanded && (
            <div className="badge-gallery-content" style={{ 
              padding: '12px 24px', 
              background: '#f9f9f9',
              maxHeight: `${galleryHeight - 100}px`, // Altura total menos o header (100px)
              overflowY: 'auto'
            }}>
              <div style={{ marginBottom: '12px', padding: '12px 0', borderBottom: '1px solid #e0e0e0' }}>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'rgb(113, 180, 233)',
                    fontSize: '13px',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Entenda o sistema de badges
                </button>
              </div>
              <div>
                <BadgeHeader 
                  earnedBadges={earnedBadges || [1, 2]} 
                  completedTutorials={completedTutorials || { class1: [1, 2, 3, 4, 5], class2: [1, 2] }}
                />
              </div>
            </div>
          )}
        </div>
        )}
      </div>
    )
  }

  const cards = [
    {
      id: 0,
      name: 'Card 00 - Capa',
      component: <Card00_Cover onStart={() => {}} />,
      elements: [
        { type: 'title-1', selector: '.card-title', label: 'Título 1 - Principal' },
        { type: 'title-2', selector: 'h3', label: 'Título 2 - Subtítulo' },
        { type: 'body', selector: '.card-text', label: 'Corpo - Texto descritivo' },
        { type: 'button-primary', selector: '.primary-button', label: 'Botão Primário - Ação Principal' },
        { type: 'card-actions', selector: '.card-actions', label: 'Área de Ações - Footer' }
      ]
    },
    {
      id: 1,
      name: 'Card 01 - Seleção (Em Andamento)',
      component: renderBadgeGallery(
        <Card01_02_Selection
          cardNumber={1}
          selectedTutorial={selectedTutorial}
          onSelect={setSelectedTutorial}
          onNext={() => {}}
          completedTutorials={{ class1: [1, 2], class2: [] }}
          earnedBadges={[1]}
          currentTutorialClass={1}
          onTutorialClassSelect={() => {}}
          onTutorialSelect={onTutorialSelect || (() => {})}
          onBack={onMenu || (() => {})}
          onMenu={onMenu || (() => {})}
          stampOpacity={0.05}
        />,
        1
      ),
      elements: [
        { type: 'title-1', selector: '.card-title', label: 'Título 1 - Principal' },
        { type: 'accordion-header', selector: 'h3', label: 'Cabeçalho do Acordeão - Título' },
        { type: 'accordion-icon', selector: 'span[style*="transform"]', label: 'Ícone Expandir/Colapsar' },
        { type: 'accordion-content', selector: 'div[style*="borderBottom"]', label: 'Conteúdo do Acordeão - Lista' },
        { type: 'button-selection', selector: '.selection-button', label: 'Botão de Seleção' },
        { type: 'tutorial-item', selector: 'div[style*="padding: \'24px\'"]', label: 'Item de Tutorial' },
        { type: 'tutorial-status', selector: 'span[style*="✓ Concluído"]', label: 'Status - Concluído' },
        { type: 'tutorial-lock', selector: 'span[style*="🔒"]', label: 'Ícone - Bloqueado' },
        { type: 'header-global', selector: '.card-header-global', label: 'Header Global' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' },
        { type: 'badge-header', selector: '.badge-header', label: 'Galeria de Badges - Expandida' },
        { type: 'badge-item', selector: '.badge-header-item', label: 'Item de Badge' },
        { type: 'badge-description', selector: '.badge-description', label: 'Descrição do Badge' },
        { type: 'creator-stamp', selector: '.creator-stamp-inline', label: 'Selo de Creator' }
      ]
    },
    {
      id: 2,
      name: 'Card 01 - Seleção (Aberto)',
      component: renderBadgeGallery(
        <Card01_02_Selection
          cardNumber={1}
          selectedTutorial={selectedTutorial}
          onSelect={setSelectedTutorial}
          onNext={() => {}}
          completedTutorials={{ class1: [1, 2], class2: [] }}
          earnedBadges={[1]}
          currentTutorialClass={1}
          onTutorialClassSelect={() => {}}
          onTutorialSelect={onTutorialSelect || (() => {})}
          onBack={onMenu || (() => {})}
          onMenu={onMenu || (() => {})}
          defaultExpanded={true}
        />,
        2
      ),
      elements: [
        { type: 'title-1', selector: '.card-title', label: 'Título 1 - Principal' },
        { type: 'accordion-header', selector: 'h3', label: 'Cabeçalho do Acordeão - Título' },
        { type: 'accordion-icon', selector: 'span[style*="transform"]', label: 'Ícone Expandir/Colapsar' },
        { type: 'accordion-content', selector: 'div[style*="borderBottom"]', label: 'Conteúdo do Acordeão - Lista' },
        { type: 'button-selection', selector: '.selection-button', label: 'Botão de Seleção' },
        { type: 'tutorial-item', selector: 'div[style*="padding: \'24px\'"]', label: 'Item de Tutorial' },
        { type: 'tutorial-status', selector: 'span[style*="✓ Concluído"]', label: 'Status - Concluído' },
        { type: 'tutorial-lock', selector: 'span[style*="🔒"]', label: 'Ícone - Bloqueado' },
        { type: 'header-global', selector: '.card-header-global', label: 'Header Global' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' },
        { type: 'badge-header', selector: '.badge-header', label: 'Galeria de Badges - Expandida' },
        { type: 'badge-item', selector: '.badge-header-item', label: 'Item de Badge' },
        { type: 'badge-description', selector: '.badge-description', label: 'Descrição do Badge' },
        { type: 'creator-stamp', selector: '.creator-stamp-inline', label: 'Selo de Creator' }
      ]
    },
    {
      id: 3,
      name: 'Card 01 - Seleção (Concluído)',
      component: renderBadgeGallery(
        <Card01_02_Selection
          cardNumber={1}
          selectedTutorial={selectedTutorial}
          onSelect={setSelectedTutorial}
          onNext={() => {}}
          completedTutorials={{ class1: [1, 2, 3, 4, 5], class2: [1, 2, 3, 4, 5] }}
          earnedBadges={[1, 2, 3]}
          currentTutorialClass={1}
          onTutorialClassSelect={() => {}}
          onTutorialSelect={onTutorialSelect || (() => {})}
          onBack={onMenu || (() => {})}
          onMenu={onMenu || (() => {})}
          defaultExpanded={true}
        />,
        2
      ),
      elements: [
        { type: 'title-1', selector: '.card-title', label: 'Título 1 - Principal' },
        { type: 'accordion-header', selector: 'h3', label: 'Cabeçalho do Acordeão - Título' },
        { type: 'accordion-icon', selector: 'span[style*="transform"]', label: 'Ícone Expandir/Colapsar' },
        { type: 'accordion-content', selector: 'div[style*="borderBottom"]', label: 'Conteúdo do Acordeão - Lista' },
        { type: 'button-selection', selector: '.selection-button', label: 'Botão de Seleção' },
        { type: 'tutorial-item', selector: 'div[style*="padding: \'24px\'"]', label: 'Item de Tutorial' },
        { type: 'tutorial-status', selector: 'span[style*="✓ Concluído"]', label: 'Status - Concluído' },
        { type: 'header-global', selector: '.card-header-global', label: 'Header Global' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' },
        { type: 'badge-header', selector: '.badge-header', label: 'Galeria de Badges - Expandida' },
        { type: 'badge-item', selector: '.badge-header-item', label: 'Item de Badge' },
        { type: 'badge-description', selector: '.badge-description', label: 'Descrição do Badge' },
        { type: 'creator-stamp', selector: '.creator-stamp-inline', label: 'Selo de Creator' }
      ]
    },
    {
      id: 4,
      name: 'Card 03 - Modo',
      component: (
        <Card03_ModeSelection
          onModeSelect={(mode) => {
            setTutorialMode(mode)
            if (onModeSelect) onModeSelect(mode)
          }}
          onMenu={onMenu || (() => {})}
        />
      ),
      elements: [
        { type: 'title-1', selector: '.card-title', label: 'Título 1' },
        { type: 'button-mode', selector: '.mode-button', label: 'Botão de Modo' },
        { type: 'title-2', selector: '.mode-title', label: 'Título 2 - Subtítulo' },
        { type: 'body', selector: '.mode-description', label: 'Corpo - Descrição' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' }
      ]
    },
    {
      id: 5,
      name: 'Card 04 - Introdução',
      component: renderBadgeGallery(
        <Card04_Introduction
          tutorialName={selectedTutorial}
          onStart={() => {}}
          onMenu={onMenu || (() => {})}
          onRestart={onRestart || (() => {})}
          currentTutorialId={1}
          onCompleteAndMenu={() => {
            if (onQuickComplete) onQuickComplete()
            else if (onMenu) onMenu()
          }}
        />,
        5
      ),
      elements: [
        { type: 'title-2', selector: 'h3', label: 'Título 2 - Nome do Tutorial' },
        { type: 'body', selector: '.card-text', label: 'Corpo - Texto descritivo' },
        { type: 'button-primary', selector: '.primary-button', label: 'Botão Primário - Iniciar' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'header-global', selector: '.card-header-global', label: 'Header Global' },
        { type: 'card-actions', selector: '.card-actions', label: 'Área de Ações - Footer' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' }
      ]
    },
    {
      id: 6,
      name: 'Card 05 - Antes da Ação',
      component: renderBadgeGallery(
        <Card05_BeforeAction
          stepNumber={currentStep}
          totalSteps={3}
          stepTitle={mockStepData.title}
          onDemonstrate={() => {
            if (onCardAction) onCardAction('demonstrate')
          }}
          onBack={() => setCurrentStep(Math.max(1, currentStep - 1))}
          onShowConcept={() => setShowConcept(true)}
          onMenu={onMenu || (() => {})}
          onRestart={onRestart || (() => {})}
        />,
        6
      ),
      elements: [
        { type: 'title-2', selector: '.card-title', label: 'Título 2 - Subtítulo' },
        { type: 'theme-box', selector: '.theme-box', label: 'Theme Box - Container destacado' },
        { type: 'step-counter', selector: '.step-counter', label: 'Contador de Passos' },
        { type: 'step-title-bar', selector: '.step-title-bar', label: 'Barra de Título da Ação' },
        { type: 'title-2', selector: '.section-title', label: 'Título 2 - Seção' },
        { type: 'instructions-box', selector: '.instructions-box', label: 'Caixa de Instruções' },
        { type: 'instructions-list', selector: '.instructions-list', label: 'Lista de Instruções' },
        { type: 'body', selector: '.card-text', label: 'Corpo - Texto descritivo' },
        { type: 'concept-link', selector: '.concept-title-bar', label: 'Link de Conceito' },
        { type: 'button-secondary', selector: '.secondary-button', label: 'Botão Secundário - Voltar' },
        { type: 'button-primary', selector: '.primary-button.demonstrate-button', label: 'Botão Primário - Demonstrar' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'card-actions', selector: '.card-actions', label: 'Área de Ações - Footer' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' }
      ]
    },
    {
      id: '5.1',
      name: 'Card 05.1 - Conceito',
      component: (
        <Card05_1_Concept
          onContinue={() => setShowConcept(false)}
          onMenu={onMenu || (() => {})}
          onRestart={onRestart || (() => {})}
        />
      ),
      elements: [
        { type: 'title-1', selector: '.card-title', label: 'Título 1' },
        { type: 'body', selector: '.card-text', label: 'Corpo - Texto explicativo' },
        { type: 'feedback-section', selector: '.feedback-section', label: 'Seção de Feedback' },
        { type: 'button-feedback', selector: '.feedback-button.positive', label: 'Botão Feedback - Positivo 👍' },
        { type: 'button-feedback', selector: '.feedback-button.negative', label: 'Botão Feedback - Negativo 👎' },
        { type: 'button-primary', selector: '.primary-button', label: 'Botão Primário - Continuar' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' }
      ]
    },
    {
      id: 7,
      name: 'Card 06 - Após Ação',
      component: renderBadgeGallery(
        <Card06_AfterAction
          stepNumber={currentStep}
          totalSteps={3}
          stepTitle={mockStepData.title}
          onNextStep={() => setCurrentStep(Math.min(3, currentStep + 1))}
          onBack={() => setCurrentStep(Math.max(1, currentStep - 1))}
          onMenu={onMenu || (() => {})}
          onRestart={onRestart || (() => {})}
        />,
        7
      ),
      elements: [
        { type: 'title-2', selector: '.card-title', label: 'Título 2' },
        { type: 'theme-box', selector: '.theme-box', label: 'Theme Box' },
        { type: 'step-title-bar', selector: '.step-title-bar', label: 'Barra de Título' },
        { type: 'button-secondary', selector: '.secondary-button', label: 'Botão Secundário - Voltar' },
        { type: 'button-next', selector: '.next-step-button', label: 'Botão Próximo Passo' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'card-actions', selector: '.card-actions', label: 'Área de Ações - Footer' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' }
      ]
    },
    {
      id: 8,
      name: 'Card 07 - Interação',
      component: renderBadgeGallery(
        <Card07_InteractionInvite
          onTry={() => {}}
          onContinue={() => {}}
          onMenu={onMenu || (() => {})}
          onRestart={onRestart || (() => {})}
        />,
        8
      ),
      elements: [
        { type: 'title-1', selector: '.card-title', label: 'Título 1' },
        { type: 'button-interactive', selector: '.interactive-button.try', label: 'Botão Interativo - Tentar' },
        { type: 'button-interactive', selector: '.interactive-button.continue', label: 'Botão Interativo - Continuar' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' }
      ]
    },
    {
      id: 9,
      name: 'Card 08 - Tentativa',
      component: renderBadgeGallery(
        <Card08_UserAttempt
          stepNumber={currentStep}
          totalSteps={3}
          stepTitle={mockStepData.title}
          onCheckResult={() => {
            if (onCardAction) onCardAction('demonstrate')
          }}
          onSkip={() => {}}
          onMenu={onMenu || (() => {})}
          onRestart={onRestart || (() => {})}
        />,
        9
      ),
      elements: [
        { type: 'button-attempt', selector: '.user-attempt-button', label: 'Botão de Tentativa - Verificar' },
        { type: 'link-skip', selector: '.skip-link', label: 'Link Pular' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' }
      ]
    },
    {
      id: 10,
      name: 'Card 09 - Feedback Positivo',
      component: renderBadgeGallery(
        <Card09_PositiveFeedback
          onTryAgain={() => {}}
          onContinue={() => {}}
          onMenu={onMenu || (() => {})}
          onRestart={onRestart || (() => {})}
        />,
        10
      ),
      elements: [
        { type: 'feedback-icon', selector: '.feedback-icon', label: 'Ícone de Feedback' },
        { type: 'title-1', selector: '.card-title', label: 'Título 1' },
        { type: 'button-feedback', selector: '.feedback-button-red', label: 'Botão Feedback - Fazer de Novo' },
        { type: 'button-feedback', selector: '.feedback-button-black', label: 'Botão Feedback - Continuar' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' }
      ]
    },
    {
      id: 11,
      name: 'Card 10 - Feedback Negativo',
      component: renderBadgeGallery(
        <Card10_NegativeFeedback
          onTryAgain={() => {}}
          onContinue={() => {}}
          onMenu={onMenu || (() => {})}
          onRestart={onRestart || (() => {})}
        />,
        11
      ),
      elements: [
        { type: 'feedback-icon', selector: '.feedback-icon', label: 'Ícone de Feedback' },
        { type: 'title-1', selector: '.card-title', label: 'Título 1' },
        { type: 'button-feedback', selector: '.feedback-button-red', label: 'Botão Feedback - Fazer de Novo' },
        { type: 'button-feedback', selector: '.feedback-button-black', label: 'Botão Feedback - Continuar' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' }
      ]
    },
    {
      id: 12,
      name: 'Card 11 - Conclusão',
      component: renderBadgeGallery(
        <Card11_Completion
          onMenu={onMenu || (() => {})}
          onRestart={onRestart || (() => {})}
          onComplete={onTutorialComplete || (() => {})}
          onCompleteAndMenu={onQuickComplete || (() => {})}
        />,
        12
      ),
      elements: [
        { type: 'title-1', selector: '.card-title', label: 'Título 1' },
        { type: 'button-completion', selector: '.completion-button', label: 'Botão Conclusão - Registrar' },
        { type: 'body', selector: '.completion-text', label: 'Corpo - Texto final' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' },
        { type: 'badge-gallery', selector: '.badge-gallery-fixed', label: 'Galeria de Badges - Fixa' },
        { type: 'badge-scoreboard', selector: '.badge-scoreboard', label: 'Placar de Badges' }
      ]
    },
    {
      id: 13,
      name: 'Card 13 - Badges',
      component: (
        <Card13_BadgeExplanation
          onClose={() => {}}
        />
      ),
      elements: [
        { type: 'title-1', selector: '.card-title', label: 'Título 1' },
        { type: 'body', selector: '.card-text', label: 'Corpo' },
        { type: 'button-header', selector: '.header-button', label: 'Botão Header - Navegação' }
      ]
    },
    {
      id: 16,
      name: 'Badge Notification - Popup',
      component: (
        <div className="card" style={{ padding: '24px', background: '#ffffff', height: '100%', position: 'relative', overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <BadgeNotification badgeId={1} onClose={() => {}} />
            <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10 }}>
              <CreatorStamp isVisible={true} />
            </div>
          </div>
        </div>
      ),
      elements: [
        { type: 'badge-notification', selector: '.badge-notification', label: 'Notificação de Badge' },
        { type: 'badge-icon', selector: '.badge-icon', label: 'Ícone de Badge' },
        { type: 'title-1', selector: '.badge-text h3', label: 'Título - Notificação' },
        { type: 'body', selector: '.badge-text p', label: 'Corpo - Nome do Badge' },
        { type: 'button-close', selector: '.badge-close', label: 'Botão Fechar' }
      ]
    },
    {
      id: 17,
      name: 'Creator Popup - Conquista',
      component: (
        <div className="card" style={{ padding: '24px', background: '#ffffff', height: '100%', position: 'relative', overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CreatorPopup onClose={() => {}} />
        </div>
      ),
      elements: [
        { type: 'popup-overlay', selector: '.creator-popup-overlay', label: 'Overlay do Popup' },
        { type: 'popup-content', selector: '.creator-popup-content', label: 'Conteúdo do Popup' },
        { type: 'title-1', selector: '.creator-popup-title', label: 'Título 1 - Parabéns' },
        { type: 'title-2', selector: '.creator-popup-creator', label: 'Título 2 - Creator' },
        { type: 'body', selector: '.creator-popup-message', label: 'Corpo - Mensagem' },
        { type: 'button-primary', selector: '.creator-popup-button', label: 'Botão Primário - Continuar' }
      ]
    },
    {
      id: 19,
      name: 'Badge Popup 2 - Criador Iniciante',
      component: (
        <div className="card" style={{ padding: '24px', background: '#ffffff', height: '100%', position: 'relative', overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <BadgePopup2 onClose={() => {}} />
        </div>
      ),
      elements: [
        { type: 'popup-overlay', selector: '.creator-popup-overlay', label: 'Overlay do Popup' },
        { type: 'popup-content', selector: '.creator-popup-content', label: 'Conteúdo do Popup' },
        { type: 'title-1', selector: '.creator-popup-title', label: 'Título 1 - Parabéns' },
        { type: 'title-2', selector: '.creator-popup-creator', label: 'Título 2 - Criador Iniciante' },
        { type: 'body', selector: '.creator-popup-message', label: 'Corpo - Mensagem' },
        { type: 'button-primary', selector: '.creator-popup-button', label: 'Botão Primário - Continuar' }
      ]
    },
    {
      id: 20,
      name: 'Badge Popup 3 - Criador Avançado',
      component: (
        <div className="card" style={{ padding: '24px', background: '#ffffff', height: '100%', position: 'relative', overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <BadgePopup3 onClose={() => {}} />
        </div>
      ),
      elements: [
        { type: 'popup-overlay', selector: '.creator-popup-overlay', label: 'Overlay do Popup' },
        { type: 'popup-content', selector: '.creator-popup-content', label: 'Conteúdo do Popup' },
        { type: 'title-1', selector: '.creator-popup-title', label: 'Título 1 - Parabéns' },
        { type: 'title-2', selector: '.creator-popup-creator', label: 'Título 2 - Criador Avançado' },
        { type: 'body', selector: '.creator-popup-message', label: 'Corpo - Mensagem' },
        { type: 'button-primary', selector: '.creator-popup-button', label: 'Botão Primário - Continuar' }
      ]
    }
  ]

  // Debug: verificar se o componente está renderizando
  console.log('CardLayoutView renderizando', { completedTutorials, earnedBadges, cardsCount: cards.length })
  
  // Carregar e aplicar estilos customizados do localStorage sempre que os cards forem renderizados
  useEffect(() => {
    const applyStyles = () => {
      const savedStyles = localStorage.getItem(STORAGE_KEY)
      if (savedStyles && cards && cards.length > 0) {
        try {
          const styles = JSON.parse(savedStyles)
          // Aplicar estilos salvos após um delay para garantir que os elementos existam no DOM
          setTimeout(() => {
            applySavedStyles(styles, cards)
          }, 500)
        } catch (error) {
          console.error('Erro ao carregar estilos salvos:', error)
        }
      }
    }
    
    // Aplicar imediatamente
    applyStyles()
    
    // Também aplicar quando o DOM mudar (usando MutationObserver)
    const observer = new MutationObserver(() => {
      applyStyles()
    })
    
    // Observar mudanças no container de cards
    const container = document.querySelector('.card-layout-container')
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true
      })
    }
    
    // Reaplicar periodicamente para garantir que os estilos sejam mantidos
    const interval = setInterval(() => {
      applyStyles()
    }, 2000)
    
    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [cards.length, showLabels]) // Re-executar quando cards forem carregados ou labels mudarem

  // Extrair todos os elementos únicos agrupados por tipo
  const allElements = React.useMemo(() => {
    const elementMap = new Map()
    cards.forEach(card => {
      if (card.elements) {
        card.elements.forEach((element) => {
          // Usar apenas type como chave para agrupar elementos do mesmo tipo
          const key = element.type
          if (!elementMap.has(key)) {
            elementMap.set(key, {
              type: element.type,
              label: element.label,
              selector: element.selector
            })
          }
        })
      }
    })
    return Array.from(elementMap.values())
  }, [cards])

  // Função para processar instruções e aplicar mudanças
  const handleProcessInstruction = async () => {
    if (!instructionText.trim() || selectedElements.size === 0) {
      alert('Por favor, selecione pelo menos um elemento e digite uma instrução.')
      return
    }

    setIsProcessing(true)
    
    const instruction = instructionText.trim().toLowerCase()
    const selectedTypes = Array.from(selectedElements)
    
    console.log('Processando instrução:', instruction)
    console.log('Elementos selecionados:', selectedTypes)
    
    let changesApplied = 0
    let unrecognized = false
    
    // Mapa de cores em português
    const colorMap = {
      'azul': 'rgb(113, 180, 233)',
      'blue': 'rgb(113, 180, 233)',
      'vermelho': '#f44336',
      'red': '#f44336',
      'verde': 'rgb(253, 187, 44)',
      'green': 'rgb(253, 187, 44)',
      'amarelo': '#FFC107',
      'yellow': '#FFC107',
      'preto': '#000000',
      'black': '#000000',
      'branco': '#ffffff',
      'white': '#ffffff',
      'roxo': '#9C27B0',
      'purple': '#9C27B0',
      'laranja': '#FF9800',
      'orange': '#FF9800',
      'rosa': '#E91E63',
      'pink': '#E91E63',
      'cinza': '#9E9E9E',
      'gray': '#9E9E9E',
      'grey': '#9E9E9E'
    }
    
    // Função para extrair cor da instrução
    const extractColor = (inst) => {
      // Procurar por hex
      const hexMatch = inst.match(/#[0-9a-f]{6}/i)
      if (hexMatch) return hexMatch[0]
      
      // Procurar por rgb/rgba
      const rgbMatch = inst.match(/rgba?\([^)]+\)/i)
      if (rgbMatch) return rgbMatch[0]
      
      // Procurar por nome de cor em português/inglês
      for (const [name, color] of Object.entries(colorMap)) {
        if (inst.includes(name)) {
          return color
        }
      }
      
      return null
    }
    
    // Aplicar mudanças em todos os cards que contêm os elementos selecionados
    try {
      sortedCards.forEach(card => {
        if (!card.elements) return
        
        const cardContainer = document.getElementById(`card-content-${card.id}`)
        if (!cardContainer) return
        
        card.elements.forEach(element => {
          if (selectedTypes.includes(element.type)) {
            const el = cardContainer.querySelector(element.selector)
            if (!el) return
            
            let applied = false
          
            // Processar diferentes tipos de instruções
            if (instruction.includes('aumentar') && (instruction.includes('fonte') || instruction.includes('font'))) {
              const match = instruction.match(/(\d+)\s*%/)
              if (match) {
                const percent = parseInt(match[1])
                const currentSize = window.getComputedStyle(el).fontSize
                const newSize = parseFloat(currentSize) * (1 + percent / 100)
                const newSizeValue = `${newSize}px`
                el.style.fontSize = newSizeValue
                saveStylesToStorage(element.type, element.selector, 'fontSize', newSizeValue)
                console.log(`Aumentando fonte de ${element.type} em ${percent}%`)
                applied = true
                changesApplied++
              }
            } else if (instruction.includes('diminuir') && (instruction.includes('fonte') || instruction.includes('font'))) {
              const match = instruction.match(/(\d+)\s*%/)
              if (match) {
                const percent = parseInt(match[1])
                const currentSize = window.getComputedStyle(el).fontSize
                const newSize = parseFloat(currentSize) * (1 - percent / 100)
                const newSizeValue = `${newSize}px`
                el.style.fontSize = newSizeValue
                saveStylesToStorage(element.type, element.selector, 'fontSize', newSizeValue)
                console.log(`Diminuindo fonte de ${element.type} em ${percent}%`)
                applied = true
                changesApplied++
              }
            } else if ((instruction.includes('cor') || instruction.includes('color') || instruction.includes('fonte') || instruction.includes('font')) && (instruction.includes('pra') || instruction.includes('para') || instruction.includes('to'))) {
              const color = extractColor(instruction)
              if (color) {
                el.style.color = color
                saveStylesToStorage(element.type, element.selector, 'color', color)
                console.log(`Mudando cor de ${element.type} para ${color}`)
                applied = true
                changesApplied++
              }
            } else if (instruction.includes('background') || instruction.includes('fundo')) {
              const color = extractColor(instruction)
              if (color) {
                el.style.backgroundColor = color
                saveStylesToStorage(element.type, element.selector, 'backgroundColor', color)
                console.log(`Mudando fundo de ${element.type} para ${color}`)
                applied = true
                changesApplied++
              }
            } else if (instruction.includes('borda') || instruction.includes('border')) {
              const match = instruction.match(/(\d+)\s*px/)
              if (match) {
                const width = match[1]
                const borderValue = `${width}px solid #000`
                el.style.border = borderValue
                saveStylesToStorage(element.type, element.selector, 'border', borderValue)
                console.log(`Adicionando borda de ${width}px em ${element.type}`)
                applied = true
                changesApplied++
              }
            } else if (instruction.includes('sombra') || instruction.includes('shadow')) {
              const shadowValue = '0 4px 6px rgba(0, 0, 0, 0.1)'
              el.style.boxShadow = shadowValue
              saveStylesToStorage(element.type, element.selector, 'boxShadow', shadowValue)
              console.log(`Adicionando sombra em ${element.type}`)
              applied = true
              changesApplied++
            } else if (instruction.includes('espaçamento') || instruction.includes('padding')) {
              const match = instruction.match(/(\d+)\s*px/)
              if (match) {
                const padding = match[1]
                const paddingValue = `${padding}px`
                el.style.padding = paddingValue
                saveStylesToStorage(element.type, element.selector, 'padding', paddingValue)
                console.log(`Ajustando padding de ${element.type} para ${padding}px`)
                applied = true
                changesApplied++
              }
            } else if (instruction.includes('margem') || instruction.includes('margin')) {
              const match = instruction.match(/(\d+)\s*px/)
              if (match) {
                const margin = match[1]
                const marginValue = `${margin}px`
                el.style.margin = marginValue
                saveStylesToStorage(element.type, element.selector, 'margin', marginValue)
                console.log(`Ajustando margin de ${element.type} para ${margin}px`)
                applied = true
                changesApplied++
              }
            }
            
            if (!applied) {
              unrecognized = true
            }
          }
        })
      })
      
      // Mostrar feedback apenas uma vez, no final
      setTimeout(() => {
        if (changesApplied > 0) {
          console.log(`✅ ${changesApplied} mudança(s) aplicada(s) com sucesso!`)
          // Não mostrar alert se mudanças foram aplicadas
        } else if (unrecognized) {
          // Só mostrar alert se nenhuma mudança foi aplicada
          setTimeout(() => {
            alert(`Instrução não reconhecida automaticamente.\n\n"${instructionText}"\n\nTente usar formatos como:\n- "mude a fonte para azul"\n- "mude a cor para azul"\n- "aumentar fonte em 20%"\n- "adicionar borda de 2px"`)
          }, 100)
        }
        
        setInstructionText('')
        setSelectedElements(new Set())
        setIsProcessing(false)
      }, 300)
      
    } catch (error) {
      console.error('Erro ao processar instrução:', error)
      alert('Erro ao processar instrução. Verifique o console para mais detalhes.')
      setIsProcessing(false)
    }
  }

  // Função para lidar com Enter no campo de instruções
  const handleInstructionKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleProcessInstruction()
    }
  }
  
  // Estado para modo de arrastar
  const [isDragging, setIsDragging] = useState(false)
  const [draggedElement, setDraggedElement] = useState(null)
  const [dropTarget, setDropTarget] = useState(null)
  
  // Função para capturar posição do elemento ao clicar (SEM abrir modal)
  const handleElementClick = (elementInfo) => {
    // Se estiver arrastando, não fazer nada ao clicar (usar setas)
    if (isDragging) {
      return
    }
    
    console.log('Element clicked:', elementInfo)
    
    const cardIdMatch = elementInfo.containerId.match(/card-content-(\d+)/)
    if (cardIdMatch) {
      // Capturar informações de posição do elemento
      const cardContainer = document.getElementById(elementInfo.containerId)
      console.log('Card container:', cardContainer, 'Selector:', elementInfo.selector)
      
      if (cardContainer) {
        const element = cardContainer.querySelector(elementInfo.selector)
        console.log('Element found:', element)
        
        if (element) {
          const rect = element.getBoundingClientRect()
          const containerRect = cardContainer.getBoundingClientRect()
          
          // Calcular posição relativa ao container
          const position = {
            top: Math.round(rect.top - containerRect.top),
            left: Math.round(rect.left - containerRect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            right: Math.round(rect.right - containerRect.left),
            bottom: Math.round(rect.bottom - containerRect.top),
            // Linha do grid (cada 20px)
            gridLine: Math.round((rect.top - containerRect.top) / 20)
          }
          
          console.log('Position calculated:', position)
          
          // Atualizar estado de posição para mostrar no box (SEM abrir modal)
          setElementPosition({
            label: elementInfo.label,
            type: elementInfo.type,
            cardId: parseInt(cardIdMatch[1]),
            position: position
          })
        } else {
          console.warn('Element not found with selector:', elementInfo.selector)
          // Mesmo sem encontrar, mostra o box com informações básicas
          setElementPosition({
            label: elementInfo.label,
            type: elementInfo.type,
            cardId: parseInt(cardIdMatch[1]),
            position: null
          })
        }
      } else {
        console.warn('Card container not found:', elementInfo.containerId)
        // Mesmo sem encontrar, mostra o box com informações básicas
        setElementPosition({
          label: elementInfo.label,
          type: elementInfo.type,
          cardId: parseInt(cardIdMatch[1]),
          position: null
        })
      }
    }
  }
  
  // Função para excluir elemento
  const handleDeleteElement = () => {
    if (!quickEditModal) return
    
    const { type, selector, cardId } = quickEditModal
    
    if (applyToAllCards) {
      // Excluir em todos os cards
      const cardsToProcess = cards.filter(card => card.elements?.some(el => el.type === type))
      cardsToProcess.forEach(card => {
        const cardContainer = document.getElementById(`card-content-${card.id}`)
        if (!cardContainer) return
        
        const element = card.elements?.find(el => el.type === type)
        if (!element) return
        
        const el = cardContainer.querySelector(element.selector)
        if (el) {
          el.style.display = 'none'
          // Salvar no localStorage
          const savedStyles = localStorage.getItem(STORAGE_KEY)
          const styles = savedStyles ? JSON.parse(savedStyles) : {}
          const styleKey = `${type}-${element.selector}`
          if (!styles[styleKey]) styles[styleKey] = {}
          styles[styleKey]['display'] = 'none'
          localStorage.setItem(STORAGE_KEY, JSON.stringify(styles))
        }
      })
    } else {
      // Excluir apenas no card atual
      const cardContainer = document.getElementById(`card-content-${cardId}`)
      if (cardContainer) {
        const el = cardContainer.querySelector(selector)
        if (el) {
          el.style.display = 'none'
          // Salvar no localStorage
          const savedStyles = localStorage.getItem(STORAGE_KEY)
          const styles = savedStyles ? JSON.parse(savedStyles) : {}
          const styleKey = `${type}-${selector}`
          if (!styles[styleKey]) styles[styleKey] = {}
          styles[styleKey]['display'] = 'none'
          localStorage.setItem(STORAGE_KEY, JSON.stringify(styles))
        }
      }
    }
    
    setQuickEditModal(null)
    alert('Elemento excluído! (Use "Resetar Todos os Estilos Customizados" para restaurar)')
  }
  
  // Função para ativar modo de arrastar
  const handleStartDrag = () => {
    if (!quickEditModal) return
    
    const draggedInfo = { ...quickEditModal }
    const sourceCardId = draggedInfo.cardId
    const sourceSelector = draggedInfo.selector
    
    setIsDragging(true)
    setDraggedElement(draggedInfo)
    setQuickEditModal(null)
    
    // Função para limpar indicadores visuais
    const clearVisualIndicators = () => {
      cards.forEach(card => {
        const cardContainer = document.getElementById(`card-content-${card.id}`)
        if (cardContainer) {
          card.elements?.forEach(element => {
            const el = cardContainer.querySelector(element.selector)
            if (el) {
              el.style.cursor = ''
              el.style.outline = ''
              el.style.outlineOffset = ''
              el.style.boxShadow = ''
              el.style.opacity = ''
              el.style.transform = ''
              el.removeAttribute('data-drop-target')
            }
          })
        }
      })
    }
    
    // Função para mover elemento com setas
    const handleArrowKeys = (e) => {
      // Verificar se é uma tecla de seta ou ESC
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Escape'].includes(e.key)) {
        return
      }
      
      if (e.key === 'Escape') {
        e.preventDefault()
        setIsDragging(false)
        setDraggedElement(null)
        setDropTarget(null)
        clearVisualIndicators()
        document.removeEventListener('keydown', handleArrowKeys)
        return
      }
      
      e.preventDefault()
      
      const sourceCardContainer = document.getElementById(`card-content-${sourceCardId}`)
      if (!sourceCardContainer) {
        console.warn('Card container não encontrado:', `card-content-${sourceCardId}`)
        return
      }
      
      const sourceEl = sourceCardContainer.querySelector(sourceSelector)
      if (!sourceEl) {
        console.warn('Elemento não encontrado:', sourceSelector)
        return
      }
      
      const parent = sourceEl.parentNode
      if (!parent) {
        console.warn('Parent não encontrado')
        return
      }
      
      let moved = false
      
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        // Mover para cima (antes do elemento anterior)
        const prevSibling = sourceEl.previousElementSibling
        if (prevSibling) {
          parent.insertBefore(sourceEl, prevSibling)
          moved = true
          console.log('Movido para cima')
        } else {
          console.log('Não há elemento anterior para mover')
        }
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        // Mover para baixo (depois do próximo elemento)
        const nextSibling = sourceEl.nextElementSibling
        if (nextSibling) {
          parent.insertBefore(sourceEl, nextSibling.nextElementSibling)
          moved = true
          console.log('Movido para baixo')
        } else {
          // Se não tem próximo, mover para o final
          parent.appendChild(sourceEl)
          moved = true
          console.log('Movido para o final')
        }
      }
      
      if (moved) {
        // Salvar posição no localStorage
        const savedStyles = localStorage.getItem(STORAGE_KEY)
        const styles = savedStyles ? JSON.parse(savedStyles) : {}
        const styleKey = `${draggedInfo.type}-${draggedInfo.selector}`
        if (!styles[styleKey]) styles[styleKey] = {}
        styles[styleKey]['moved'] = true
        localStorage.setItem(STORAGE_KEY, JSON.stringify(styles))
      }
    }
    
    // Adicionar listener para setas
    console.log('Adicionando listener de setas para arrastar elemento')
    document.addEventListener('keydown', handleArrowKeys)
    
    // Adicionar estilo visual ao elemento que está sendo arrastado
    setTimeout(() => {
      const sourceCardContainer = document.getElementById(`card-content-${sourceCardId}`)
      const sourceEl = sourceCardContainer?.querySelector(sourceSelector)
      
      // Destacar o elemento que está sendo arrastado
      if (sourceEl) {
        sourceEl.style.opacity = '0.7'
        sourceEl.style.cursor = 'grabbing'
        sourceEl.style.transition = 'all 0.2s'
        sourceEl.style.outline = '3px solid rgb(253, 187, 44)'
        sourceEl.style.outlineOffset = '4px'
        sourceEl.style.boxShadow = '0 0 10px rgba(76, 175, 80, 0.5)'
      }
    }, 100)
  }
  
  
  // Efeito para limpar estado de arrastar quando necessário
  useEffect(() => {
    if (!isDragging) {
      // Limpar indicadores visuais
      cards.forEach(card => {
        const cardContainer = document.getElementById(`card-content-${card.id}`)
        if (cardContainer) {
          card.elements?.forEach(element => {
            const el = cardContainer.querySelector(element.selector)
            if (el) {
              el.style.cursor = ''
              el.style.outline = ''
              el.style.outlineOffset = ''
              el.style.boxShadow = ''
              el.style.opacity = ''
              el.removeAttribute('data-drop-target')
            }
          })
        }
      })
    }
  }, [isDragging, cards])
  
  // Função para processar instrução rápida (do modal)
  const handleQuickEdit = async () => {
    if (!quickEditInstruction.trim() || !quickEditModal) {
      console.log('❌ handleQuickEdit: Instrução vazia ou modal não existe')
      return
    }
    
    setIsProcessing(true)
    
    const instruction = quickEditInstruction.trim().toLowerCase()
    const { type, selector, cardId } = quickEditModal
    
    console.log('🔍 Processando edição rápida:', { type, selector, cardId, instruction, applyToAllCards })
    
    // Determinar quais cards processar (usar cards diretamente, não sortedCards que pode não estar definido ainda)
    const cardsToProcess = applyToAllCards 
      ? cards.filter(card => card.elements?.some(el => el.type === type))
      : cards.filter(card => card.id === cardId)
    
    console.log(`📋 Processando ${cardsToProcess.length} card(s)`)
    
    if (cardsToProcess.length === 0) {
      alert('Nenhum card encontrado para processar')
      setIsProcessing(false)
      return
    }
    
    // Mapa de cores
    const colorMap = {
      'azul': 'rgb(113, 180, 233)', 'blue': 'rgb(113, 180, 233)',
      'vermelho': '#f44336', 'red': '#f44336',
      'verde': 'rgb(253, 187, 44)', 'green': 'rgb(253, 187, 44)',
      'amarelo': '#FFC107', 'yellow': '#FFC107',
      'preto': '#000000', 'black': '#000000',
      'branco': '#ffffff', 'white': '#ffffff',
      'roxo': '#9C27B0', 'purple': '#9C27B0',
      'laranja': '#FF9800', 'orange': '#FF9800',
      'rosa': '#E91E63', 'pink': '#E91E63',
      'cinza': '#9E9E9E', 'gray': '#9E9E9E', 'grey': '#9E9E9E'
    }
    
    const extractColor = (inst) => {
      const hexMatch = inst.match(/#[0-9a-f]{6}/i)
      if (hexMatch) return hexMatch[0]
      const rgbMatch = inst.match(/rgba?\([^)]+\)/i)
      if (rgbMatch) return rgbMatch[0]
      for (const [name, color] of Object.entries(colorMap)) {
        if (inst.includes(name)) return color
      }
      return null
    }
    
    let applied = false
    let changesCount = 0
    
    try {
      // Processar cada card
      cardsToProcess.forEach(card => {
        const cardContainer = document.getElementById(`card-content-${card.id}`)
        if (!cardContainer) return
        
        // Encontrar o elemento neste card
        const element = card.elements?.find(el => el.type === type)
        if (!element) return
        
        const el = cardContainer.querySelector(element.selector)
        if (!el) return
        
        // Processar instruções
        if (instruction.includes('aumentar') && (instruction.includes('fonte') || instruction.includes('font'))) {
          const match = instruction.match(/(\d+)\s*%/)
          if (match) {
            const percent = parseInt(match[1])
            const currentSize = window.getComputedStyle(el).fontSize
            const newSize = parseFloat(currentSize) * (1 + percent / 100)
            const newSizeValue = `${newSize}px`
            el.style.fontSize = newSizeValue
            saveStylesToStorage(type, element.selector, 'fontSize', newSizeValue)
            applied = true
            changesCount++
          }
        } else if (instruction.includes('diminuir') && (instruction.includes('fonte') || instruction.includes('font'))) {
          const match = instruction.match(/(\d+)\s*%/)
          if (match) {
            const percent = parseInt(match[1])
            const currentSize = window.getComputedStyle(el).fontSize
            const newSize = parseFloat(currentSize) * (1 - percent / 100)
            const newSizeValue = `${newSize}px`
            el.style.fontSize = newSizeValue
            saveStylesToStorage(type, element.selector, 'fontSize', newSizeValue)
            applied = true
            changesCount++
          }
        } else if ((instruction.includes('cor') || instruction.includes('color') || instruction.includes('fonte') || instruction.includes('font')) && (instruction.includes('pra') || instruction.includes('para') || instruction.includes('to'))) {
          const color = extractColor(instruction)
          if (color) {
            el.style.color = color
            saveStylesToStorage(type, element.selector, 'color', color)
            applied = true
            changesCount++
          }
        } else if (instruction.includes('background') || instruction.includes('fundo')) {
          const color = extractColor(instruction)
          if (color) {
            el.style.backgroundColor = color
            saveStylesToStorage(type, element.selector, 'backgroundColor', color)
            applied = true
            changesCount++
          }
        } else if (instruction.includes('borda') || instruction.includes('border')) {
          const match = instruction.match(/(\d+)\s*px/)
          if (match) {
            const width = match[1]
            const borderValue = `${width}px solid #000`
            el.style.border = borderValue
            saveStylesToStorage(type, element.selector, 'border', borderValue)
            applied = true
            changesCount++
          }
        } else if (instruction.includes('sombra') || instruction.includes('shadow')) {
          const shadowValue = '0 4px 6px rgba(0, 0, 0, 0.1)'
          el.style.boxShadow = shadowValue
          saveStylesToStorage(type, element.selector, 'boxShadow', shadowValue)
          applied = true
          changesCount++
        } else if (instruction.includes('espaçamento') || instruction.includes('padding')) {
          const match = instruction.match(/(\d+)\s*px/)
          if (match) {
            const padding = match[1]
            const paddingValue = `${padding}px`
            el.style.padding = paddingValue
            saveStylesToStorage(type, element.selector, 'padding', paddingValue)
            applied = true
            changesCount++
          }
        } else if (instruction.includes('margem') || instruction.includes('margin')) {
          const match = instruction.match(/(\d+)\s*px/)
          if (match) {
            const margin = match[1]
            const marginValue = `${margin}px`
            el.style.margin = marginValue
            saveStylesToStorage(type, element.selector, 'margin', marginValue)
            applied = true
            changesCount++
          }
        }
      })
      
      if (applied) {
        console.log(`✅ ${changesCount} mudança(s) aplicada(s) com sucesso em ${cardsToProcess.length} card(s)!`)
        setTimeout(() => {
          setQuickEditModal(null)
          setQuickEditInstruction('')
          setApplyToAllCards(true) // Reset para padrão
          setIsProcessing(false)
        }, 300)
      } else {
        console.log('❌ Instrução não reconhecida:', instruction)
        alert(`Instrução não reconhecida: "${quickEditInstruction}"\n\nTente formatos como:\n- "mude a cor para azul"\n- "mude a fonte para azul"\n- "aumentar fonte em 20%"\n- "adicionar borda de 2px"\n- "adicionar sombra"`)
        setIsProcessing(false)
      }
    } catch (error) {
      console.error('❌ Erro ao processar edição rápida:', error)
      alert(`Erro ao processar instrução: ${error.message}\n\nVerifique o console para mais detalhes.`)
      setIsProcessing(false)
    }
  }

  // Ordenar cards na ordem da experiência do usuário
  const sortedCards = [...cards].sort((a, b) => {
    // Ordem específica da experiência: 0, 1, 2, 3, 4, 5, 5.1, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 19, 20
    const order = [0, 1, 2, 3, 4, 5, '5.1', 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 19, 20]
    const indexA = order.indexOf(a.id)
    const indexB = order.indexOf(b.id)
    // Se não estiver na lista de ordem, coloca no final
    if (indexA === -1 && indexB === -1) return 0
    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })
  
  console.log('Cards ordenados:', sortedCards.map(c => ({ id: c.id, name: c.name })))

  try {
    return (
      <div className={`card-layout-view layer-${currentLayer}`}>
      <div className="card-layout-sidebar">
        <div className="sidebar-header">
          <h1>Design System Layers</h1>
        </div>
        
        {/* Box de Coordenadas - NO TOPO DA SIDEBAR */}
        {elementPosition && (
          <div style={{
            margin: '12px',
            padding: '12px',
            backgroundColor: elementPosition.position ? '#e3f2fd' : '#fff3cd',
            borderRadius: '6px',
            border: `2px solid ${elementPosition.position ? 'rgb(113, 180, 233)' : '#ffc107'}`,
            fontSize: '11px',
            fontFamily: 'monospace',
            position: 'sticky',
            top: '0',
            zIndex: 100
          }}>
            <div style={{ 
              fontWeight: '700', 
              marginBottom: '8px', 
              color: elementPosition.position ? '#1976d2' : '#856404',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px'
            }}>
              <span>📍 {elementPosition.label}</span>
              <button
                onClick={() => setElementPosition(null)}
                style={{
                  padding: '2px 6px',
                  backgroundColor: 'transparent',
                  color: elementPosition.position ? '#1976d2' : '#856404',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                ×
              </button>
            </div>
            {elementPosition.position ? (
              <>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '4px',
                  color: '#333',
                  fontSize: '10px'
                }}>
                  <div><strong>Top:</strong> {elementPosition.position.top}px</div>
                  <div><strong>Left:</strong> {elementPosition.position.left}px</div>
                  <div><strong>Width:</strong> {elementPosition.position.width}px</div>
                  <div><strong>Height:</strong> {elementPosition.position.height}px</div>
                  <div><strong>Right:</strong> {elementPosition.position.right}px</div>
                  <div><strong>Bottom:</strong> {elementPosition.position.bottom}px</div>
                </div>
                <div style={{ 
                  marginTop: '8px', 
                  paddingTop: '8px', 
                  borderTop: '1px solid #90caf9',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#1976d2'
                }}>
                  Linha do Grid: <span style={{ color: '#333' }}>{elementPosition.position.gridLine}</span>
                </div>
              </>
            ) : (
              <div style={{ 
                color: '#856404',
                fontSize: '10px',
                fontStyle: 'italic'
              }}>
                Posição não calculada. Verifique o console.
              </div>
            )}
          </div>
        )}
        
        <div className="sidebar-controls">
          <div className="control-group">
            <label>Layer Atual:</label>
            <select 
              value={currentLayer} 
              onChange={(e) => setCurrentLayer(e.target.value)}
              className="layer-select"
            >
              {Object.entries(LAYER_STYLES).map(([key, value]) => {
                console.log('Layer option:', key, value.name)
                return (
                  <option key={key} value={key}>{value.name}</option>
                )
              })}
            </select>
          </div>
          <div className="control-group">
            <label>
              <input 
                type="checkbox" 
                checked={showLabels} 
                onChange={(e) => setShowLabels(e.target.checked)}
              />
              Mostrar Labels
            </label>
          </div>
        </div>
      </div>
      <div className="card-layout-container">
        {sortedCards.map((card) => (
          <div key={card.id} className="card-layout-wrapper">
            <div className="card-layout-label">{card.name}</div>
            <div className="card-layout-item">
              <div className="card-layout-content" id={`card-content-${card.id}`}>
                {card.component}
                {showLabels && card.elements && (
                  <ElementLabel 
                    elements={card.elements.map(el => ({
                      ...el,
                      highlighted: selectedElements.has(el.type)
                    }))} 
                    containerId={`card-content-${card.id}`}
                    onElementClick={handleElementClick}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal de Edição Rápida - REMOVIDO para não bloquear interação */}
      {false && quickEditModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
          onClick={() => setQuickEditModal(null)}
        >
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '24px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600' }}>
                Editar: {quickEditModal.label}
              </h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
                Digite uma instrução para modificar este elemento
              </p>
              
              {/* Informações de posição */}
              {quickEditModal.position ? (
                <div style={{ 
                  marginTop: '12px', 
                  padding: '12px', 
                  backgroundColor: '#e3f2fd', 
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  border: '1px solid #90caf9'
                }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#1976d2' }}>
                    📍 Posição do Elemento:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', color: '#333' }}>
                    <div><strong>Top:</strong> {quickEditModal.position.top}px</div>
                    <div><strong>Left:</strong> {quickEditModal.position.left}px</div>
                    <div><strong>Width:</strong> {quickEditModal.position.width}px</div>
                    <div><strong>Height:</strong> {quickEditModal.position.height}px</div>
                    <div><strong>Right:</strong> {quickEditModal.position.right}px</div>
                    <div><strong>Bottom:</strong> {quickEditModal.position.bottom}px</div>
                    <div style={{ gridColumn: '1 / -1', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #90caf9' }}>
                      <strong>Linha do Grid (20px):</strong> {quickEditModal.position.gridLine}
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ 
                  marginTop: '12px', 
                  padding: '12px', 
                  backgroundColor: '#fff3cd', 
                  borderRadius: '4px',
                  fontSize: '12px',
                  border: '1px solid #ffc107',
                  color: '#856404'
                }}>
                  ⚠️ Não foi possível calcular a posição do elemento. Verifique o console para mais detalhes.
                </div>
              )}
            </div>
            
            {/* Botões de ação rápida */}
            <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
              <button
                onClick={handleStartDrag}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  backgroundColor: 'rgb(253, 187, 44)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(230, 170, 40)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(253, 187, 44)'}
              >
                📦 Arrastar Elemento
              </button>
              <button
                onClick={() => {
                  if (confirm(`Tem certeza que deseja excluir "${quickEditModal.label}"?\n\nEsta ação pode ser revertida usando "Resetar Todos os Estilos Customizados".`)) {
                    handleDeleteElement()
                  }
                }}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  backgroundColor: '#f44336',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
              >
                🗑️ Excluir Elemento
              </button>
            </div>
            
            {/* Opção de escopo */}
            <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
                <input
                  type="checkbox"
                  checked={applyToAllCards}
                  onChange={(e) => setApplyToAllCards(e.target.checked)}
                  disabled={isProcessing}
                />
                <span>
                  <strong>Aplicar em todos os cards</strong> com este tipo de elemento
                </span>
              </label>
              {!applyToAllCards && (
                <p style={{ margin: '8px 0 0 24px', fontSize: '12px', color: '#666', fontStyle: 'italic' }}>
                  Aplicará apenas no card atual
                </p>
              )}
              {applyToAllCards && (
                <p style={{ margin: '8px 0 0 24px', fontSize: '12px', color: '#666', fontStyle: 'italic' }}>
                  Aplicará em todos os cards que contêm "{quickEditModal.label}"
                </p>
              )}
            </div>
            
            <textarea
              value={quickEditInstruction}
              onChange={(e) => setQuickEditInstruction(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && !isProcessing) {
                  e.preventDefault()
                  handleQuickEdit()
                }
              }}
              placeholder="Ex: 'mude a cor para azul', 'aumentar fonte em 20%', 'adicionar borda de 2px'..."
              disabled={isProcessing}
              autoFocus
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '12px',
                fontSize: '14px',
                border: '2px solid #e0e0e0',
                borderRadius: '4px',
                resize: 'vertical',
                fontFamily: 'inherit',
                marginBottom: '16px'
              }}
            />
            
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setQuickEditModal(null)
                  setQuickEditInstruction('')
                }}
                disabled={isProcessing}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#f5f5f5',
                  color: '#333',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  cursor: isProcessing ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                Cancelar
              </button>
              <button
                onClick={handleQuickEdit}
                disabled={!quickEditInstruction.trim() || isProcessing}
                style={{
                  padding: '10px 20px',
                  backgroundColor: quickEditInstruction.trim() && !isProcessing ? 'rgb(113, 180, 233)' : '#ccc',
                  color: quickEditInstruction.trim() && !isProcessing ? '#000000' : '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: quickEditInstruction.trim() && !isProcessing ? 'pointer' : 'not-allowed',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'background-color 0.2s'
                }}
              >
                {isProcessing ? 'Aplicando...' : 'Aplicar (Enter)'}
              </button>
            </div>
            
            <div style={{ marginTop: '12px', padding: '8px', backgroundColor: '#fff3cd', borderRadius: '4px', fontSize: '11px', color: '#856404' }}>
              <strong>💡 Dica:</strong> Exemplos de instruções:
              <ul style={{ margin: '4px 0 0 20px', padding: 0 }}>
                <li>"mude a cor para azul"</li>
                <li>"aumentar fonte em 20%"</li>
                <li>"adicionar borda de 2px"</li>
                <li>"adicionar sombra"</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {/* Indicador de modo de arrastar */}
      {isDragging && draggedElement && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            zIndex: 9999,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '20px'
          }}
        >
          <div 
            style={{
              backgroundColor: 'rgb(253, 187, 44)',
              color: '#ffffff',
              padding: '16px 24px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              fontSize: '16px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              pointerEvents: 'auto'
            }}
          >
            <span style={{ fontSize: '24px' }}>📦</span>
            <div>
              <div>Modo de Arrastar Ativo</div>
              <div style={{ fontSize: '12px', opacity: 0.9, marginTop: '4px' }}>
                Use as <strong>setas ↑↓ ou ←→</strong> para mover "{draggedElement.label}"
              </div>
              <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>
                Pressione ESC para cancelar
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    )
  } catch (error) {
    console.error('Erro ao renderizar CardLayoutView:', error)
    return (
      <div style={{ padding: '20px', color: 'red', background: '#fff' }}>
        <h2>Erro ao carregar modo layout</h2>
        <p>{error.message}</p>
        <pre style={{ fontSize: '12px', overflow: 'auto' }}>{error.stack}</pre>
      </div>
    )
  }
}

// Componente de Grid Overlay - Folha Quadriculada
function GridOverlay({ cardId }) {
  const overlayRef = useRef(null)
  const [lines, setLines] = useState([])
  
  useEffect(() => {
    const container = document.getElementById(`card-content-${cardId}`)
    if (!container || !overlayRef.current) return
    
    // Criar linhas a cada 20px (grid de 20px)
    const containerHeight = container.scrollHeight || container.clientHeight || 1000
    const lineHeight = 20 // Altura de cada linha do grid
    const numLines = Math.ceil(containerHeight / lineHeight)
    
    const newLines = []
    for (let i = 0; i <= numLines; i++) {
      const top = i * lineHeight
      newLines.push({
        top,
        number: i
      })
    }
    
    setLines(newLines)
  }, [cardId])
  
  return (
    <div 
      ref={overlayRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.5
      }}
    >
      {lines.map((line) => (
        <div
          key={line.number}
          style={{
            position: 'absolute',
            top: `${line.top}px`,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: '#cccccc',
            borderTop: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '4px'
          }}
        >
          <span
            style={{
              fontSize: '9px',
              fontWeight: '600',
              color: '#666666',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '1px 4px',
              borderRadius: '2px',
              marginLeft: '-2px',
              marginTop: '-7px',
              border: '1px solid #cccccc',
              fontFamily: 'monospace'
            }}
          >
            {line.number}
          </span>
        </div>
      ))}
    </div>
  )
}

export default CardLayoutView
