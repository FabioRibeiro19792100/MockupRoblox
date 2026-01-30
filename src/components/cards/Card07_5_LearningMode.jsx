import './Card.css'

function Card07_5_LearningMode({ onContinue, onMenu, onRestart, uxLensesVariant = false }) {
  if (uxLensesVariant) {
    return (
      <div className="card card-interactive" style={{ background: '#ffffff', display: 'flex', flexDirection: 'column', flex: '1 1 auto', minHeight: 0 }}>
        {/* Header com botões - fundo branco */}
        <div className="no-padding-override" style={{ display: 'flex', gap: '12px', padding: '16px 20px', flex: 'none' }}>
          <button
            onClick={onMenu}
            style={{
              flex: 1,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '50px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            Voltar para menu
          </button>
          <button
            onClick={onRestart}
            style={{
              flex: 1,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '50px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            Reiniciar tutorial
          </button>
        </div>

        {/* Conteúdo principal - fundo azul gradiente */}
        <div style={{
          flex: '1 1 auto',
          minHeight: 0,
          background: 'linear-gradient(180deg, #5a9fd4 0%, #7ab8e8 100%)',
          borderRadius: '20px',
          margin: '0 16px 76px 16px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Fita de perigo amarela/preta no topo */}
          <div style={{
            width: '100%',
            height: '24px',
            background: 'repeating-linear-gradient(45deg, #fbbf24, #fbbf24 10px, #000000 10px, #000000 20px)',
            flexShrink: 0
          }} />

          {/* Indicador de progresso - step 2 preenchido */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '16px 20px 8px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'transparent',
              border: '2px solid #1e3a5f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 700,
              color: '#1e3a5f'
            }}>1</div>
            <div style={{
              width: '30px',
              height: '2px',
              background: '#1e3a5f'
            }} />
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#1e3a5f',
              border: '2px solid #1e3a5f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 700,
              color: '#ffffff'
            }}>2</div>
          </div>

          {/* Área de conteúdo com scroll */}
          <div style={{
            flex: '1 1 auto',
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: '0 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Título */}
            <h1 style={{
              fontSize: '22px',
              fontWeight: 800,
              fontStyle: 'italic',
              color: '#1e3a5f',
              margin: '16px 0 16px 0',
              lineHeight: 1.2
            }}>
              Como usar<br />o modo aprendizado?
            </h1>

            {/* Descrição principal */}
            <p style={{
              fontSize: '14px',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#1e3a5f',
              lineHeight: 1.5,
              margin: '0 0 16px 0',
              maxWidth: '280px'
            }}>
              Agora, após a demonstração, você terá a oportunidade de repetir os passos apresentados e compreender, em profundidade, como funciona o processo de criação no Roblox Studio.
            </p>

            {/* Texto secundário em laranja */}
            <p style={{
              fontSize: '13px',
              color: '#f97316',
              lineHeight: 1.5,
              margin: '0 0 16px 0',
              maxWidth: '280px'
            }}>
              Em seguida, você será convidado(a) a reconstruir a experiência por conta própria. Durante o percurso, poderá pedir dicas e verificar se conseguiu cumprir a missão.
            </p>

            {/* E aí, preparado? */}
            <p style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#f97316',
              margin: '0 0 20px 0'
            }}>
              E aí, preparado?
            </p>

            {/* Botão Continuar */}
            <button
              onClick={onContinue}
              style={{
                width: '100%',
                maxWidth: '260px',
                background: '#fbbf24',
                border: 'none',
                borderRadius: '50px',
                padding: '14px 24px',
                fontSize: '16px',
                fontWeight: 700,
                color: '#000000',
                cursor: 'pointer'
              }}
            >
              continuar
            </button>
          </div>
        </div>
      </div>
    )
  }

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
