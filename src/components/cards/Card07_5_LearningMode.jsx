import './Card.css'

function Card07_5_LearningMode({ onContinue, onMenu, onRestart }) {
  return (
    <div className="card card-interactive">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div style={{ padding: '24px 24px', paddingTop: '24px' }}>
        {/* Logo */}
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '24px' }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ 
              maxWidth: '120px', 
              maxHeight: '60px', 
              width: 'auto', 
              height: 'auto',
              objectFit: 'contain'
            }} 
          />
        </div>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 700, 
          margin: 0, 
          color: '#ffffff', 
          marginBottom: '16px',
          textDecoration: 'underline',
          textDecorationThickness: '1px',
          textUnderlineOffset: '12px'
        }}>
          Como usar o Modo Aprendizado
        </h3>
        <div className="card-interactive-content" style={{ marginTop: '16px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.4', color: '#ffffff', marginBottom: '16px', fontWeight: 700 }}>
            Agora, após a demonstração, você terá a oportunidade de repetir os passos apresentados e compreender, em profundidade, como funciona o processo de criação no Roblox Studio.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#ffffff', marginBottom: '16px' }}>
            Em seguida, você será convidado(a) a reconstruir a experiência por conta própria. Durante o percurso, poderá pedir dicas e verificar se conseguiu cumprir a missão.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.4', fontWeight: 700, color: '#ffffff', marginBottom: '32px' }}>
            E aí? Preparado(a)?
          </p>
          <button className="interactive-button try" onClick={onContinue}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card07_5_LearningMode
