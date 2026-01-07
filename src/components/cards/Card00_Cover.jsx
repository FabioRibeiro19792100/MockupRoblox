import './Card.css'

function Card00_Cover({ onStart }) {
  return (
    <div className="card card-cover">
      <div style={{ padding: '40px 24px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <div className="card-content">
          <h2 className="card-title" style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: '#000000' }}>
            Expedição Roblox
          </h2>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px', color: '#000000' }}>
            Tutoriais Roblox Studios
          </h3>
          <div style={{ borderBottom: '1px solid #cccccc', marginBottom: '40px' }}></div>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '24px' }}>
            Ao longo de 2026, 10 mil jovens de 13 a 18 anos vão transformar sua relação com os jogos em criação.
          </p>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '24px' }}>
            Eles vão aprender a usar o Roblox Studio para construir, testar e publicar seus próprios jogos, entendendo como ideias viram experiências jogáveis.
          </p>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '24px' }}>
            Este tutorial faz parte dessa jornada.
          </p>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
            Aqui, você aprende criando, passo a passo, dentro do próprio Roblox Studio...
          </p>
        </div>
      </div>
      <div className="card-actions single-button">
        <button className="primary-button" onClick={onStart}>
          COMEÇAR
        </button>
      </div>
    </div>
  )
}

export default Card00_Cover
