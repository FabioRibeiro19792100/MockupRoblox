import { useState } from 'react'
import './Card.css'

function Card05_1_Concept({ onContinue, onMenu, onRestart, uxLensesVariant = false }) {
  const [feedback, setFeedback] = useState(null)

  if (uxLensesVariant) {
    return (
      <div className="card card-concept" style={{ background: '#ffffff', display: 'flex', flexDirection: 'column' }}>
        {/* Header com botões - fundo branco */}
        <div style={{ display: 'flex', gap: '12px', padding: '16px 20px', flex: 'none' }}>
          <button
            onClick={onMenu}
            style={{
              flex: 1,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '50px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            Voltar para menu
          </button>
          <button
            onClick={onRestart}
            style={{
              flex: 1,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '50px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            Reiniciar tutorial
          </button>
        </div>

        {/* Conteúdo explicativo - fundo azul claro */}
        <div style={{ background: '#e8f4fc', flex: 'none', padding: '20px' }}>
            {/* Título */}
            <h2 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#000000',
              margin: '0 0 12px 0'
            }}>
              O que é uma Part?
            </h2>

            {/* Explicação 1 */}
            <p style={{
              fontSize: '15px',
              color: '#374151',
              lineHeight: 1.5,
              margin: '0 0 16px 0'
            }}>
              Uma <span style={{ textDecoration: 'underline' }}>Part</span> é o objeto fundamental no Roblox Studio. É um bloco 3D que pode ser usado para construir qualquer coisa no seu jogo.
            </p>

            <p style={{
              fontSize: '15px',
              color: '#374151',
              lineHeight: 1.5,
              margin: '0 0 20px 0'
            }}>
              <span style={{ textDecoration: 'underline' }}>Parts</span> podem ter diferentes formas (bloco, esfera, cilindro) e propriedades como cor, Tamanho e posição.
            </p>

            {/* Subtítulo */}
            <h3 style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#000000',
              margin: '0 0 8px 0'
            }}>
              Qual é a importância disso?
            </h3>

            <p style={{
              fontSize: '15px',
              color: '#374151',
              lineHeight: 1.5,
              margin: 0
            }}>
              <span style={{ textDecoration: 'underline' }}>Part</span> é o átomo do sistema. Tudo que você vê, toca ou anima no jogo parte dela.
            </p>
        </div>

        {/* Seção inferior - fundo branco */}
        <div style={{ padding: '20px', paddingBottom: '80px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Feedback */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{
              fontSize: '15px',
              fontWeight: 600,
              color: '#000000',
              margin: '0 0 12px 0'
            }}>
              Esta explicação foi útil?
            </p>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
              <button
                onClick={() => setFeedback('positive')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: feedback === 'positive' ? '#3b82f6' : '#3b82f6',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  opacity: feedback === 'negative' ? 0.5 : 1
                }}
              >
                👍 SIM
              </button>
              <button
                onClick={() => setFeedback('negative')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: feedback === 'negative' ? '#1f2937' : '#1f2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  opacity: feedback === 'positive' ? 0.5 : 1
                }}
              >
                👎 NÃO
              </button>
            </div>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              fontStyle: 'italic',
              margin: 0
            }}>
              Isso melhora os próximos tutoriais.
            </p>
          </div>

          {/* Próximo passo */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#f97316'
              }}>
                No próximo passo, você vai:
              </span>
              <span style={{ color: '#f97316', fontSize: '18px' }}>→</span>
            </div>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: 0,
              lineHeight: 1.4
            }}>
              texto dizendo qual será o próximo passo do usuário
            </p>
          </div>

          {/* Botão Continuar */}
          <button
            onClick={onContinue}
            style={{
              width: '100%',
              marginTop: 'auto',
              background: '#fbbf24',
              border: 'none',
              borderRadius: '50px',
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: 700,
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="card card-concept">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div style={{ padding: '24px', paddingBottom: '80px' }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 700,
          margin: 0,
          color: '#000000',
          marginBottom: '24px',
          paddingTop: '12px',
          borderBottom: '1px solid #000000',
          paddingBottom: '8px'
        }}>
          O que é uma Part?
        </h3>
        <div className="card-content">
          <p className="card-text">
            Uma <strong>Part</strong> é o objeto fundamental no Roblox Studio. É um bloco 3D que pode ser usado para construir qualquer coisa no seu jogo.
          </p>
          <p className="card-text">
            Parts podem ter diferentes formas (bloco, esfera, cilindro) e propriedades como cor, tamanho e posição.
          </p>
          <div className="feedback-section">
            <p className="feedback-question">Esta explicação foi útil?</p>
            <div className="feedback-buttons">
              <button
                className={`feedback-button positive ${feedback === 'negative' ? 'low-opacity' : ''}`}
                onClick={() => setFeedback('positive')}
              >
                👍
              </button>
              <button
                className={`feedback-button negative ${feedback === 'positive' ? 'low-opacity' : ''}`}
                onClick={() => setFeedback('negative')}
              >
                👎
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <button className="primary-button" onClick={onContinue} style={{ gridColumn: '1 / -1' }}>
          Continuar
        </button>
      </div>
    </div>
  )
}

export default Card05_1_Concept
