import './Card.css'

function Card04_Introduction({ tutorialName, onStart, onMenu, onRestart, currentTutorialId, onCompleteAndMenu }) {
  // Sempre mostra o botão de marcar completo
  const handleComplete = () => {
    if (onCompleteAndMenu) {
      onCompleteAndMenu()
    } else if (onMenu) {
      onMenu()
    }
  }

  return (
    <div className="card card-intro">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button 
          className="header-button" 
          onClick={handleComplete}
          style={{
            background: '#4CAF50',
            color: '#ffffff',
            fontWeight: 600
          }}
        >
          ✓ Marcar completo
        </button>
      </div>
      <div style={{ padding: '24px', paddingBottom: '80px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#000000', marginBottom: '24px', paddingTop: '12px' }}>
          {tutorialName}
        </h3>
        <div className="card-content">
          <p className="card-text">
            Aprenda a criar uma casa completa do zero: base, paredes, telhado, porta e janelas.
          </p>
          <p className="card-text">
            O tutorial te guia em cada etapa, mostrando como posicionar, dimensionar e aplicar materiais e cores aos objetos.
          </p>
          <p className="card-text">
            Ao final, você terá uma casa funcional e pronta para usar em seus jogos!
          </p>
        </div>
      </div>
      <div className="card-actions single-button">
        <button className="primary-button" onClick={onStart}>
          Iniciar
        </button>
      </div>
    </div>
  )
}

export default Card04_Introduction
