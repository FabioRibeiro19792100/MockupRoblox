import { useState, useRef, useEffect } from 'react'
import CreatorStamp from '../CreatorStamp'
import './Card.css'

function Card01_02_Selection({ 
  cardNumber, 
  selectedTutorial, 
  onSelect, 
  onNext,
  completedTutorials,
  earnedBadges,
  currentTutorialClass,
  onTutorialClassSelect,
  onTutorialSelect,
  onBack,
  onMenu,
  defaultExpanded = false,
  stampOpacity = 1
}) {
  const tutorialsClass1 = [
    { id: 1, name: 'Construir um casa', description: 'Aprenda a criar uma casa completa' },
    { id: 2, name: 'Criar um obstáculo', description: 'Domine a criação de obstáculos' },
    { id: 3, name: 'Animar um avatar', description: 'Aprenda a animar personagens' },
    { id: 4, name: 'Criar um portal', description: 'Aprenda a criar portais' },
    { id: 5, name: 'Adicionar efeitos', description: 'Aprenda a adicionar efeitos visuais' },
  ]

  const tutorialsClass2 = [
    { id: 1, name: 'Criar um jogo simples', description: 'Aprenda a criar um jogo básico' },
    { id: 2, name: 'Adicionar física', description: 'Domine a física no Roblox' },
    { id: 3, name: 'Criar UI interativa', description: 'Aprenda a criar interfaces' },
    { id: 4, name: 'Publicar seu jogo', description: 'Aprenda a publicar jogos' },
    { id: 5, name: 'Monetizar criação', description: 'Aprenda a monetizar' },
  ]

  // Estado para controlar quais classes estão expandidas
  // Se defaultExpanded for true, inicia com classe 1 aberta
  const initialExpanded = {
    class1: defaultExpanded === true,
    class2: false
  }
  const [expandedClasses, setExpandedClasses] = useState(initialExpanded)
  const expandedClassesRef = useRef(expandedClasses)
  const [lockedTutorialInfo, setLockedTutorialInfo] = useState(null)

  // Atualizar o ref quando o estado mudar
  useEffect(() => {
    expandedClassesRef.current = expandedClasses
  }, [expandedClasses])

  // Função para alternar expansão de uma classe
  const toggleClass = (classNum) => {
    const classKey = classNum === 1 ? 'class1' : 'class2'
    const newState = {
      ...expandedClasses,
      [classKey]: !expandedClasses[classKey]
    }
    expandedClassesRef.current = newState
    setExpandedClasses(newState)
  }

  // Card 1 e Card 2 agora mostram a mesma coisa - lista de tutoriais das duas classes
  const completedClass1 = completedTutorials.class1 || []
  const completedClass2 = completedTutorials.class2 || []

  // Função para verificar se um tutorial está disponível dentro de uma classe
  const isTutorialAvailable = (tutorialId, completed) => {
    // Tutorial 1 sempre está disponível
    if (tutorialId === 1) return true
    // Outros tutoriais só estão disponíveis se o anterior estiver completo
    return completed.includes(tutorialId - 1)
  }

  const renderTutorialList = (tutorials, completed, classNum) => {
    return tutorials.map((tutorial, index) => {
      const isCompleted = completed.includes(tutorial.id)
      const isAvailable = isTutorialAvailable(tutorial.id, completed)
      const isLocked = !isAvailable && !isCompleted
      
      return (
        <div
          key={`${classNum}-${tutorial.id}`}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px',
            borderBottom: '1px solid #666666',
            cursor: isLocked ? 'not-allowed' : 'pointer',
            opacity: isLocked ? 0.5 : (isCompleted ? 0.7 : 1),
            background: 'transparent',
          }}
          onClick={() => {
            if (isLocked) {
              // Mostra popup explicativo
              const previousTutorial = tutorials.find(t => t.id === tutorial.id - 1)
              setLockedTutorialInfo({
                tutorialName: tutorial.name,
                previousTutorialName: previousTutorial ? previousTutorial.name : 'tutorial anterior',
                classNum: classNum
              })
              return
            }
            onSelect(tutorial.name)
            if (onTutorialSelect) {
              // Passa o ID do tutorial e a classe
              onTutorialSelect(tutorial.id, classNum)
            } else {
              // Fallback: se não tiver onTutorialSelect, usa onNext
              onNext()
            }
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 700, 
              color: isLocked ? '#999999' : '#000000',
              minWidth: '24px'
            }}>
              {tutorial.id}.
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
              <span style={{ 
                fontSize: '16px', 
                color: isLocked ? '#999999' : '#000000', 
                fontWeight: 600,
                display: 'inline-block',
                width: '100%'
              }}>
                {tutorial.name}
              </span>
              {isCompleted ? (
                <span style={{ 
                  fontSize: '12px', 
                  color: '#000000', 
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  lineHeight: '1.4',
                  margin: 0,
                  padding: 0
                }}>
                  <span style={{ 
                    fontSize: '12px',
                    lineHeight: '1.4'
                  }}>✓ Concluído</span>
                </span>
              ) : isAvailable && !isLocked ? (
                <span style={{ 
                  fontSize: '12px', 
                  color: '#666666', 
                  fontWeight: 500
                }}>
                  Em andamento
                </span>
              ) : null}
            </div>
          </div>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: isLocked ? '#cccccc' : (isCompleted ? 'rgb(253, 187, 44)' : '#000000'),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isLocked ? 'not-allowed' : 'pointer',
            }}
          >
            {isLocked ? (
              <span style={{ color: '#ffffff', fontSize: '16px' }}>🔒</span>
            ) : isCompleted ? (
              <span style={{ color: '#ffffff', fontSize: '16px' }}>✓</span>
            ) : (
              <span style={{ color: '#ffffff', fontSize: '12px' }}>▶</span>
            )}
          </div>
        </div>
      )
    })
  }

  return (
    <div className="card card-selection" style={{ position: 'relative' }}>
      <div style={{ padding: '24px 24px', paddingTop: '24px', position: 'relative' }}>
        {/* Logo e Selo lado a lado */}
        <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '24px' }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ 
              maxWidth: '160px', 
              maxHeight: '80px', 
              width: 'auto', 
              height: 'auto',
              objectFit: 'contain'
            }} 
          />
          {earnedBadges && Array.isArray(earnedBadges) && earnedBadges.includes(1) && (
            <div style={{ opacity: stampOpacity }}>
              <CreatorStamp isVisible={true} hideText={stampOpacity < 1} badgeImage="/badge1-removebg-preview.png" />
            </div>
          )}
        </div>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 600, 
          marginBottom: '24px', 
          color: '#ffffff',
          textDecoration: 'underline',
          textDecorationThickness: '1px',
          textUnderlineOffset: '12px'
        }}>
          Tutoriais Roblox Studio
        </h3>
        <div className="card-content" style={{ margin: 0, padding: 0, marginTop: '0px', display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 0 }}>
          {/* Classe 1 - Acordeon */}
          <div style={{ 
            margin: 0,
            marginBottom: '24px',
            border: '1px solid #000000', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            width: '100%',
            flexShrink: 0
          }}>
            <div
              style={{
                padding: '16px 20px',
                background: 'rgb(253, 187, 44)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderBottom: expandedClasses.class1 ? '1px solid #000000' : 'none',
                minHeight: '80px',
                boxSizing: 'border-box',
                margin: 0
              }}
              onClick={() => toggleClass(1)}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  margin: 0,
                  padding: 0,
                  color: '#000000',
                  lineHeight: '24px'
                }}>
                  Transforme-se num Creator
                </h3>
                <p style={{
                  fontSize: '14px',
                  fontStyle: 'italic',
                  margin: '4px 0 8px 0',
                  color: '#000000'
                }}>
                  Aprenda do zero, passo a passo.
                </p>
                <span className="badge-tag" style={{
                  display: 'inline-block',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.5px'
                }}>
                  BADGES DE CRIAÇÃO
                </span>
              </div>
              <span style={{
                fontSize: '20px',
                color: '#333333',
                transition: 'transform 0.2s',
                transform: expandedClasses.class1 ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '12px',
                flexShrink: 0,
                marginTop: '4px'
              }}>
                ▼
              </span>
            </div>
            {expandedClasses.class1 && (
              <div>
                {renderTutorialList(tutorialsClass1, completedClass1, 1)}
              </div>
            )}
          </div>

          {/* Classe 2 - Acordeon */}
          <div style={{ 
            margin: 0,
            marginBottom: '24px',
            border: '1px solid #000000', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            width: '100%',
            flexShrink: 0
          }}>
            <div
              style={{
                padding: '16px 20px',
                background: 'rgb(253, 187, 44)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderBottom: expandedClasses.class2 ? '1px solid #000000' : 'none',
                minHeight: '80px',
                boxSizing: 'border-box',
                margin: 0
              }}
              onClick={() => toggleClass(2)}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  margin: 0,
                  padding: 0,
                  color: '#000000',
                  lineHeight: '24px'
                }}>
                  Criações rápidas
                </h3>
                <p style={{
                  fontSize: '14px',
                  fontStyle: 'italic',
                  margin: '4px 0 8px 0',
                  color: '#000000'
                }}>
                  Quero algo pronto agora.
                </p>
                <span className="badge-tag" style={{
                  display: 'inline-block',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.5px'
                }}>
                  BADGES DE EXPLORAÇÃO
                </span>
              </div>
              <span style={{
                fontSize: '20px',
                color: '#333333',
                transition: 'transform 0.2s',
                transform: expandedClasses.class2 ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '12px',
                flexShrink: 0,
                marginTop: '4px'
              }}>
                ▼
              </span>
            </div>
            {expandedClasses.class2 && (
              <div>
                {renderTutorialList(tutorialsClass2, completedClass2, 2)}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Popup para tutorial bloqueado */}
      {lockedTutorialInfo && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            borderRadius: '8px'
          }}
          onClick={() => setLockedTutorialInfo(null)}
        >
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '32px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              margin: '20px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLockedTutorialInfo(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666666',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              ×
            </button>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ 
                fontSize: '48px', 
                textAlign: 'center', 
                marginBottom: '16px' 
              }}>
                🔒
              </div>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: 700, 
                margin: 0, 
                marginBottom: '12px',
                textAlign: 'center',
                color: '#000000'
              }}>
                Tutorial Bloqueado
              </h3>
            </div>
            <div style={{ fontSize: '16px', lineHeight: '1.12', color: '#333333' }}>
              <p style={{ marginBottom: '16px' }}>
                O tutorial <strong>"{lockedTutorialInfo.tutorialName}"</strong> está bloqueado.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Para desbloqueá-lo, você precisa completar o tutorial anterior: <strong>"{lockedTutorialInfo.previousTutorialName}"</strong>.
              </p>
              <p style={{ margin: 0, fontSize: '14px', color: '#666666', fontStyle: 'italic' }}>
                Os tutoriais são sequenciais para garantir que você aprenda passo a passo.
              </p>
            </div>
            <button
              onClick={() => setLockedTutorialInfo(null)}
              className="selection-popup-button"
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '12px 24px',
                background: 'rgb(253, 187, 44)',
                color: '#000000',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgb(230, 170, 40)'}
              onMouseLeave={(e) => e.target.style.background = 'rgb(253, 187, 44)'}
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card01_02_Selection
