import './Card.css'

function Card00_Cover({ onStart }) {
  return (
    <div className="card card-cover">
      <div style={{ padding: '24px 24px', paddingRight: '48px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
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
          <h3 style={{ 
            fontSize: '20px', 
            fontWeight: 600, 
            marginBottom: '40px', 
            color: '#ffffff',
            textDecoration: 'underline',
            textDecorationThickness: '1px',
            textUnderlineOffset: '12px'
          }}>
            Tutoriais Roblox Studio
          </h3>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '24px', fontWeight: 700, color: '#ffffff' }}>
            Bem vindos e bem vindas à Expedição Roblox!
          </p>
          <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', fontWeight: 700, color: '#ffffff' }}>
            Aprenda a criar experiências incríveis com tutoriais interativos dentro do Roblox Studio!
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
