import { useState } from 'react'
import './Card.css'

function Card05_1_Concept({ onContinue, onMenu, onRestart }) {
  const [feedback, setFeedback] = useState(null)

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
