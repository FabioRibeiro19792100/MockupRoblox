import { useState } from 'react'
import './Card.css'
import './Card05_BeforeActionUxLenses.css'

function Card05_BeforeActionUxLenses({
  stepNumber,
  totalSteps,
  stepTitle,
  onDemonstrate,
  onBack,
  onShowConcept,
  onMenu,
  onRestart,
  onResetEffects,
  highlightStepCount = 0,
  highlightVariant = 'text-green',
  blinkStepIndex = null,
  blinkVariant = 'text-green'
}) {
  const completedStep = 0
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const steps = [
    {
      id: 1,
      title: 'Crie uma "Part"',
      lines: [
        <>Na barra superior, clique em <strong>Modelo</strong></>,
        <>Clique em <strong>Part</strong></>
      ]
    },
    {
      id: 2,
      title: 'Selecione e renomeie a nova "Part"',
      lines: [
        <>No painel Explorador (direita, embaixo), encontre o objeto recém-criado <span className="card05-ux-emphasis">"Part"</span></>,
        <>Renomeie para <span className="card05-ux-emphasis">Part_1</span> (botão direito &gt; Renomear &gt; Part_1 &gt; Enter)</>
      ]
    },
    {
      id: 3,
      title: 'Ajuste o tamanho da "Part"',
      lines: [
        <>Use as alças para dimensionar a base conforme necessário</>
      ]
    },
    {
      id: 4,
      title: 'Centralize a base da casa',
      lines: [
        <>Arraste a "Part_1" até o centro da cena</>,
        <>Garanta que a base fique alinhada com o chão</>
      ]
    }
  ]

  return (
    <div className="card card-step">
      <div className="card05-ux-topbar">
        <div className="card05-ux-banner">
          <div>
            <div className="card05-ux-kicker">TUTORIAL</div>
            <div className="card05-ux-title">Construir uma casa</div>
          </div>
          <div className="card05-ux-step-badge">ETAPA {stepNumber}/{totalSteps}</div>
        </div>
      </div>
      <div className="card05-ux-body">
        <div className="card05-ux-action">
          <div className="card05-ux-action-label">Ação:</div>
          <div className="card05-ux-action-title">
            {stepTitle || 'Montar terreno.'}
          </div>
        </div>

        <div className="card05-ux-section-title">Como fazer no Roblox Studios?</div>

        <section className="card05-ux-steps" aria-label="Passo a passo">
          <div className="card05-ux-steps-stack">
            {steps.map((step, index) => {
              const isHighlighted = highlightStepCount > index
              const isCurrent = highlightStepCount === index
              const isBlinking = blinkStepIndex === index
              const isInactive = !isHighlighted && !isCurrent && !isBlinking
              return (
              <div
                className={`card05-ux-step${isHighlighted ? ' card05-ux-step--highlighted' : ''}${isInactive ? ' card05-ux-step--inactive' : ''}${isBlinking ? ' card05-ux-step--blinking' : ''}`}
                data-highlight={isHighlighted ? highlightVariant : undefined}
                data-blink={isBlinking ? blinkVariant : undefined}
                key={step.id}
              >
                <div className="card05-ux-step-marker">
                  <div className="card05-ux-step-bubble">
                    {isHighlighted ? '✓' : step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="card05-ux-step-line"
                      style={{ background: completedStep >= step.id ? '#f97316' : '#d1d5db' }}
                    />
                  )}
                </div>
                <div className="card05-ux-step-content">
                  <div className="card05-ux-step-title">{step.title}</div>
                  {step.lines.map((line, lineIndex) => (
                    <div className="card05-ux-step-line-text" key={`${step.id}-${lineIndex}`}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )})}
            <section className="card05-ux-outcome" aria-label="Resultado esperado">
              <hr className="card05-ux-divider" />
              <h4 className="card05-ux-result-label">O que você vai ver na tela:</h4>
              <p className="card05-ux-result-text">
                Você verá a base da casa (um bloco cinza retangular grande) sendo criada no centro da tela.
              </p>
              {onShowConcept && (
                <div className="card05-ux-concept">
                  <button type="button" onClick={onShowConcept} className="card05-ux-concept-link">
                    O QUE É UMA PART?
                  </button>
                </div>
              )}
            </section>
          </div>
        </section>
      </div>
      <section className="card-actions card05-ux-actions" aria-label="Ações do tutorial">
        <button className="card05-ux-action-button card05-ux-action-menu" onClick={onMenu}>
          <span className="card05-ux-action-icon card05-ux-action-icon--menu" aria-hidden="true" />
          Menu
        </button>
        <button
          className="card05-ux-action-button card05-ux-action-reset"
          onClick={() => setShowResetConfirm(true)}
        >
          <span className="card05-ux-action-icon card05-ux-action-icon--reset" aria-hidden="true" />
          Reiniciar
        </button>
        <button className="card05-ux-action-button card05-ux-action-back" onClick={onBack}>
          <span className="card05-ux-action-icon card05-ux-action-icon--back" aria-hidden="true" />
          Voltar passo
        </button>
        <button className="card05-ux-action-button card05-ux-action-demo" onClick={onDemonstrate}>
          <span className="card05-ux-action-icon card05-ux-action-icon--demo" aria-hidden="true" />
          Demonstrar
        </button>
      </section>
      {showResetConfirm && (
        <div className="card05-ux-reset-overlay" role="dialog" aria-modal="true">
          <div className="card05-ux-reset-modal">
            <h3 className="card05-ux-reset-title">Reiniciar tutorial?</h3>
            <p className="card05-ux-reset-text">
              Você tem certeza que deseja reiniciar? Seu progresso desta etapa será perdido.
            </p>
            <div className="card05-ux-reset-actions">
              <button
                type="button"
                className="card05-ux-reset-button card05-ux-reset-cancel"
                onClick={() => setShowResetConfirm(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="card05-ux-reset-button card05-ux-reset-confirm"
                onClick={() => {
                  if (onResetEffects) onResetEffects()
                  setShowResetConfirm(false)
                  if (onRestart) onRestart()
                }}
              >
                Reiniciar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card05_BeforeActionUxLenses
