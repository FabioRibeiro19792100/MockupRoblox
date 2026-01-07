import './Card.css'

function Card07_InteractionInvite({ onTry, onContinue, onMenu, onRestart }) {
  return (
    <div className="card card-interactive">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div className="card-interactive-header">
        <h2 className="card-title">
          Momento<br />
          interativo
        </h2>
      </div>
      <div className="card-interactive-content">
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#000000', marginBottom: '16px' }}>
          Para treinar suas habilidades você pode tentar executar esse mesmo passo com as instruções dadas.
        </p>
        <p style={{ fontSize: '16px', fontWeight: 700, color: '#000000', marginBottom: '24px' }}>
          Quer tentar?
        </p>
        <button className="interactive-button try" onClick={onTry}>
          Sim, quero tentar.
        </button>
        <button className="interactive-button continue" onClick={onContinue}>
          Prefiro continuar na demonstração
        </button>
      </div>
    </div>
  )
}

export default Card07_InteractionInvite
