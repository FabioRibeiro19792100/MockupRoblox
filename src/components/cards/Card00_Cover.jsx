import './Card.css'

function Card00_Cover({ onStart }) {
  return (
    <div className="card card-cover">
      <div style={{ padding: '24px 24px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <div className="card-content">
          <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <img 
              src="/logo.png" 
              alt="Logo" 
            style={{ 
              maxWidth: '160px', 
              maxHeight: '80px', 
              width: 'auto', 
              height: 'auto',
              objectFit: 'contain'
            }}
            />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px', color: '#000000' }}>
            Tutoriais Roblox Studios
          </h3>
          <div style={{ borderBottom: '1px solid #cccccc', marginBottom: '40px' }}></div>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.12', marginBottom: '24px' }}>
            Ao longo de 2026, 10 mil jovens de 13 a 18 anos vão transformar sua relação com os jogos em criação.
          </p>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.12', marginBottom: '24px' }}>
            Eles vão aprender a usar o Roblox Studio para construir, testar e publicar seus próprios jogos, entendendo como ideias viram experiências jogáveis.
          </p>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.12', marginBottom: '24px' }}>
            Este tutorial faz parte dessa jornada.
          </p>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.12', marginBottom: '40px' }}>
            Aqui, você aprende criando, passo a passo, dentro do próprio Roblox Studio...
          </p>
        </div>
      </div>
      <div className="card-actions single-button">
        <button className="primary-button" onClick={onStart}>
          Começar
        </button>
      </div>
    </div>
  )
}

export default Card00_Cover
