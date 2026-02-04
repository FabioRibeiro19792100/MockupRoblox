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
  const splitTitleForTail = (text) => {
    if (!text || typeof text !== 'string') return { head: '', tail: text }
    const trimmed = text.trim()
    if (!trimmed.includes(' ')) return { head: '', tail: trimmed }

    const lastQuoteIndex = trimmed.lastIndexOf('"')
    const hasQuotePair = lastQuoteIndex !== -1 && trimmed.slice(0, lastQuoteIndex).includes('"')

    if (hasQuotePair) {
      const quoteStart = trimmed.lastIndexOf('"', lastQuoteIndex - 1)
      const beforeQuote = trimmed.slice(0, quoteStart).trim()
      const quoteGroup = trimmed.slice(quoteStart)
      const beforeQuoteParts = beforeQuote.split(/\s+/)
      if (beforeQuoteParts.length >= 1) {
        const head = beforeQuoteParts.slice(0, -1).join(' ')
        const tail = `${beforeQuoteParts[beforeQuoteParts.length - 1]} ${quoteGroup}`
        return { head, tail }
      }
      return { head: '', tail: trimmed }
    }

    const parts = trimmed.split(/\s+/)
    const lastWord = parts[parts.length - 1]
    const keepCount = lastWord.length <= 4 ? 3 : 2
    if (parts.length <= keepCount) {
      return { head: '', tail: parts.join(' ') }
    }
    return {
      head: parts.slice(0, -keepCount).join(' '),
      tail: parts.slice(-keepCount).join(' ')
    }
  }
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [activeHelpStepId, setActiveHelpStepId] = useState(null)
  const steps = [
    {
      id: 1,
      title: 'Crie uma "Part"',
      lines: [
        <>Na barra superior, clique em <strong>Modelo (model)</strong> e, em seguida,<br />clique em <strong>Part</strong></>
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
      title: 'Ajuste o tamanho e posição da Part',
      lines: [
        <>No painel <strong>"Propriedades"</strong>:</>,
        <>Encontre a variável <strong>"Size"</strong> e substitua os valores atuais por 2.6,9.8,4.4</>,
        <>Encontre a variável <strong>"Position"</strong> e substitua os valores atuais por 5.96,4.9,-9.54</>
      ]
    },
    {
      id: 4,
      title: 'Mude o Material',
      lines: [
        <>Mova o cursor até o top bar, clique em <strong>Modelo (model)</strong>, clique em <strong>"Material"</strong>.</>,
        <>No campo de busca, digite <strong>"Wood"</strong> e selecione.</>
      ]
    }
  ]
  const isAllStepsCompleted = highlightStepCount >= steps.length
  const getHelpImagePath = (stepId) =>
    `public/Tutorial-steps/Build-A-House/Build-a-house-step${stepId}.png`

  const helpContentByStep = {
    1: {
      image: getHelpImagePath(1),
      text: 'Nesta etapa você cria a primeira Part pelo menu Modelo.'
    },
    2: {
      image: getHelpImagePath(2),
      text: 'Caso você não veja o painel explorer na tela, ele pode ser encontrado em Window > Explorer.'
    },
    3: {
      image: getHelpImagePath(3),
      text: 'Clique nos numero ao lado, na coluna da direita, para alterar os valores da variável.'
    },
    4: {
      image: getHelpImagePath(4),
      text: 'Isso irá aplicar um "Shader" no seu Part.'
    }
  }
  const activeHelp = activeHelpStepId ? helpContentByStep[activeHelpStepId] : null

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
              const { head, tail } = splitTitleForTail(step.title)
              return (
              <div
                className={`card05-ux-step${isHighlighted ? ' card05-ux-step--highlighted' : ''}${isCurrent ? ' card05-ux-step--current' : ''}${isInactive ? ' card05-ux-step--inactive' : ''}${isBlinking ? ' card05-ux-step--blinking' : ''}`}
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
                  <div className="card05-ux-step-title">
                    {head ? `${head} ` : ''}
                    <span className="card05-ux-step-title-tail">
                      {tail}
                      {isCurrent && (
                        <button
                          type="button"
                          className="card05-ux-step-help"
                          aria-label="Ajuda"
                          onClick={() => setActiveHelpStepId(step.id)}
                        >
                          ?
                        </button>
                      )}
                    </span>
                  </div>
                  {step.lines.map((line, lineIndex) => (
                    <div className="card05-ux-step-line-text" key={`${step.id}-${lineIndex}`}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )})}
            <div className="card05-ux-result-action">
              <button
                type="button"
                className={`card05-ux-result-button${isAllStepsCompleted ? '' : ' card05-ux-result-button--disabled'}`}
                disabled={!isAllStepsCompleted}
                onClick={() => {}}
              >
                Clique para ver o resultado
              </button>
            </div>
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
      {activeHelp && (
        <div className="card05-ux-help-overlay" role="dialog" aria-modal="true">
          <div className="card05-ux-help-modal">
            <button
              type="button"
              className="card05-ux-help-close"
              aria-label="Fechar"
              onClick={() => setActiveHelpStepId(null)}
            >
              ×
            </button>
            <div className="card05-ux-help-image">
              <img src={activeHelp.image} alt="" />
            </div>
            <p className="card05-ux-help-text">{activeHelp.text}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card05_BeforeActionUxLenses
