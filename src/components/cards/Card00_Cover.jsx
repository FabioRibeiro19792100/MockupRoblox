import './Card.css'

function Card00_Cover({ onStart }) {
  return (
    <div className="card card-cover">
      <div style={{ padding: '24px 24px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flex: '1 1 0%' }}>
        <div className="card-content">
          {/* Logo */}
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <img
              src="/logo.png"
              alt="Expedição Roblox"
              style={{
                maxWidth: '140px',
                maxHeight: '100px',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Título Principal */}
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '8px',
            color: '#ffffff',
            lineHeight: 1.2
          }}>
            Do zero ao primeiro jogo
          </h1>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '12px',
            color: '#ffffff',
            lineHeight: 1.2
          }}>
            No Roblox Studio
          </h1>

          {/* Subtítulo amarelo */}
          <p style={{
            fontSize: '16px',
            fontStyle: 'italic',
            marginBottom: '8px',
            color: '#FFD700'
          }}>
            Tutoriais interativos dentro da ferramenta
          </p>

          {/* Tag Tutorial */}
          <div style={{
            display: 'inline-block',
            backgroundColor: '#22c55e',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '20px'
          }}>
            Tutorial 1 de 5
          </div>

          {/* Texto descritivo */}
          <p className="card-text" style={{
            fontSize: '16px',
            lineHeight: 1.5,
            marginBottom: '24px',
            color: '#ffffff'
          }}>
            Aqui você começa como criador.<br />
            Você vai construir, testar<br />
            e publicar um jogo,<br />
            Passo a passo.
          </p>

          {/* Lista de benefícios */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span style={{ color: '#ffffff', fontSize: '15px' }}>Não precisa saber programar</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span style={{ color: '#ffffff', fontSize: '15px' }}>Leva cerca de 10 minutos</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span style={{ color: '#ffffff', fontSize: '15px' }}>Você pode sair a qualquer momento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botão */}
      <div className="card-actions single-button">
        <button
          className="primary-button"
          onClick={onStart}
          style={{
            backgroundColor: '#fbbf24',
            color: '#000000',
            fontWeight: 600,
            fontSize: '18px',
            border: 'none',
            borderRadius: '50px',
            padding: '16px 32px',
            width: '100%',
            maxWidth: '400px'
          }}
        >
          Iniciar tutorial
        </button>
      </div>
    </div>
  )
}

export default Card00_Cover
