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
            color: '#ffffff',
            lineHeight: 1.2
          }}>
            Do zero à criação do seu primeiro jogo
          </h1>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '12px',
            color: '#ffffff',
            lineHeight: 1.2
          }}>
            no Roblox Studio!
          </h1>

          {/* Subtítulo amarelo */}
          <p style={{
            fontSize: '16px',
            marginBottom: '8px',
            color: '#FFD700'
          }}>
            Aprenda aqui mesmo, com os tutoriais interativos dentro da ferramenta da Expedição Roblox!
          </p>

          {/* Tag Tutorial */}
          <div style={{
            display: 'inline-block',
            backgroundColor: '#2196F3',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '20px',
            width: 'fit-content'
          }}>
            Tutorial 1 de 5
          </div>

          {/* Texto descritivo */}
          <p className="card-text" style={{
            fontSize: '14pt',
            lineHeight: 1.3,
            marginBottom: '24px',
            color: '#ffffff',
            fontWeight: 'bold'
          }}>
            Aqui começa a sua jornada como Creator.<br />
            Vamos te ensinar, passo a passo,<br />
            a construir, testar e publicar um jogo<br />
            dentro da ferramenta.
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
              <span style={{ color: '#ffffff', fontSize: '15px' }}>NÃO PRECISA SABER PROGRAMAR</span>
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
              <span style={{ color: '#ffffff', fontSize: '15px' }}>LEVA CERCA DE 10 MINUTOS</span>
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
              <span style={{ color: '#ffffff', fontSize: '15px' }}>É POSSÍVEL SAIR A QUALQUER MOMENTO</span>
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
          INICIAR TUTORIAL
        </button>
      </div>
    </div>
  )
}

export default Card00_Cover
