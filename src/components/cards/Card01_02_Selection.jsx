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
  onMenu
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
  // Usa useRef para persistir entre re-renderizações
  const expandedClassesRef = useRef({
    class1: false,  // Classe 1 fechada por padrão
    class2: false   // Classe 2 fechada por padrão
  })
  const [expandedClasses, setExpandedClasses] = useState(expandedClassesRef.current)
  const [lockedTutorialInfo, setLockedTutorialInfo] = useState(null)

  // Função para alternar expansão de uma classe
  const toggleClass = (classNum) => {
    const classKey = classNum === 1 ? 'class1' : 'class2'
    const newState = {
      ...expandedClassesRef.current,
      [classKey]: !expandedClassesRef.current[classKey]
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
    return tutorials.map((tutorial) => {
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
            borderBottom: '1px solid #e0e0e0',
            cursor: isLocked ? 'not-allowed' : 'pointer',
            opacity: isLocked ? 0.5 : (isCompleted ? 0.7 : 1),
            background: isLocked ? '#f5f5f5' : 'transparent',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 700, 
              color: isLocked ? '#999999' : '#000000',
              minWidth: '24px'
            }}>
              {tutorial.id}.
            </span>
            <span style={{ 
              fontSize: '16px', 
              color: isLocked ? '#999999' : '#000000', 
              fontWeight: 600 
            }}>
              {tutorial.name}
            </span>
            {isCompleted && (
              <span style={{ 
                fontSize: '12px', 
                color: '#4CAF50', 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                ✓ Concluído
              </span>
            )}
          </div>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: isLocked ? '#cccccc' : (isCompleted ? '#4CAF50' : '#000000'),
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
      <div style={{ padding: '40px 24px', position: 'relative' }}>
        {earnedBadges && Array.isArray(earnedBadges) && earnedBadges.includes(1) && (
          <div style={{ position: 'absolute', top: '20px', right: '24px', zIndex: 10 }}>
            <CreatorStamp isVisible={true} />
          </div>
        )}
        <h2 className="card-title" style={{ fontSize: '20px', paddingTop: '12px', margin: 0, marginBottom: '32px' }}>
          Tutoriais Expedição Roblox
        </h2>
        <div className="card-content">
          {/* Classe 1 - Acordeon */}
          <div style={{ marginBottom: '24px', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <div
              style={{
                padding: '16px 20px',
                background: '#f5f5f5',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: expandedClasses.class1 ? '1px solid #e0e0e0' : 'none'
              }}
              onClick={() => toggleClass(1)}
            >
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 700, 
                margin: 0,
                color: '#000000'
              }}>
                Os primeiros passos para se tornar Creator
              </h3>
              <span style={{ 
                fontSize: '20px', 
                color: '#666666',
                transition: 'transform 0.2s',
                transform: expandedClasses.class1 ? 'rotate(180deg)' : 'rotate(0deg)'
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
          <div style={{ marginBottom: '24px', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <div
              style={{
                padding: '16px 20px',
                background: '#f5f5f5',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: expandedClasses.class2 ? '1px solid #e0e0e0' : 'none'
              }}
              onClick={() => toggleClass(2)}
            >
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 700, 
                margin: 0,
                color: '#000000'
              }}>
                Criações rápidas
              </h3>
              <span style={{ 
                fontSize: '20px', 
                color: '#666666',
                transition: 'transform 0.2s',
                transform: expandedClasses.class2 ? 'rotate(180deg)' : 'rotate(0deg)'
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
            <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
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
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '12px 24px',
                background: '#2196F3',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#1976D2'}
              onMouseLeave={(e) => e.target.style.background = '#2196F3'}
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
