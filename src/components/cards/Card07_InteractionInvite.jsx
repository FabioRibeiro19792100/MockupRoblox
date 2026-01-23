import './Card.css'

function Card07_InteractionInvite({ onTry, onContinue, onMenu, onRestart }) {
  return (
    <div className="card card-interactive">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div style={{ padding: '24px 24px', paddingTop: '12px' }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 700, 
          margin: 0, 
          color: '#ffffff', 
          marginBottom: '24px', 
          paddingTop: '12px',
          textDecoration: 'underline',
          textDecorationThickness: '1px',
          textUnderlineOffset: '12px'
        }}>
          Este é o seu momento de Creator
        </h3>
        <div className="card-interactive-content" style={{ marginTop: '24px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.12', color: '#ffffff', marginBottom: '16px' }}>
          Para treinar suas habilidades você pode tentar executar esse mesmo passo com as instruções dadas.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.12', fontWeight: 700, color: '#ffffff', marginBottom: '24px' }}>
          Quer tentar?
        </p>
        <button className="interactive-button try" onClick={onTry}>
          Sim, quero tentar.
        </button>
        <button className="interactive-button continue" onClick={onContinue}>
          Pular essa interação
        </button>
        </div>
      </div>
    </div>
  )
}

export default Card07_InteractionInvite
