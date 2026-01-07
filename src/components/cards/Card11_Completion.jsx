import { useState } from 'react'
import './Card.css'

function Card11_Completion({ onMenu, onRestart }) {
  const [showThankYou, setShowThankYou] = useState(false)

  const handleRegister = () => {
    // Coleta silenciosa: os logs já foram coletados durante o tutorial
    // Apenas mostra mensagem de agradecimento
    setShowThankYou(true)
  }

  return (
    <div className="card card-completion">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div style={{ padding: '24px' }}>
        <h2 className="card-title">Você chegou ao fim deste tutorial</h2>
        <div className="card-content">
          {!showThankYou ? (
            <>
              <button className="completion-button" onClick={handleRegister} style={{ textAlign: 'left' }}>
                Clique aqui para registrar sua experiência
              </button>
              <p className="completion-text" style={{ textAlign: 'left' }}>
                Ao finalizar todos os tutoriais desta fase você receberá uma mensagem para resgatar um asset especial da Mastertech
              </p>
            </>
          ) : (
            <div style={{ padding: '24px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#000000', marginBottom: '16px' }}>
                Obrigado!
              </h3>
              <p className="completion-text" style={{ marginBottom: '16px' }}>
                Sua experiência foi registrada. Os logs da sua jornada de aprendizado foram coletados silenciosamente durante o tutorial.
              </p>
              <p className="completion-text">
                Ao finalizar todos os tutoriais desta fase você receberá uma mensagem para resgatar um asset especial da Mastertech
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card11_Completion
