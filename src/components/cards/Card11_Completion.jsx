import { useState } from 'react'
import './Card.css'

function Card11_Completion({ onMenu, onRestart, onComplete, onCompleteAndMenu }) {
  const [showThankYou, setShowThankYou] = useState(false)

  const handleRegister = () => {
    // Coleta silenciosa: os logs já foram coletados durante o tutorial
    // Apenas mostra mensagem de agradecimento
    setShowThankYou(true)
    // Marcar tutorial como completo (mas não volta ao menu ainda)
    if (onComplete) {
      onComplete()
    }
  }

  const handleCompleteAndMenu = () => {
    // Marca como completo e volta ao menu
    if (onCompleteAndMenu) {
      onCompleteAndMenu()
    } else if (onComplete) {
      onComplete()
      // Fallback: volta ao menu após um delay
      setTimeout(() => {
        if (onMenu) {
          onMenu()
        }
      }, 3000)
    }
  }

  return (
    <div className="card card-completion">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div style={{ padding: '24px', paddingTop: '12px' }}>
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
          Você chegou<br />ao fim deste tutorial
        </h3>
        <div className="card-content" style={{ marginTop: '24px' }}>
          {!showThankYou ? (
            <>
              <button className="completion-button" onClick={handleRegister} style={{ textAlign: 'left', marginTop: '60px' }}>
                Clique aqui para registrar sua experiência
              </button>
            </>
          ) : (
            <div style={{ padding: '24px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#000000', marginBottom: '16px' }}>
                Obrigado!
              </h3>
              <p className="completion-text" style={{ marginBottom: '16px' }}>
                Sua experiência foi registrada. Os logs da sua jornada de aprendizado foram coletados silenciosamente durante o tutorial.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card11_Completion
