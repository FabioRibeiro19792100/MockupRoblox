import './Card.css'

function Card07_InteractionInvite({ onTry, onContinue, onMenu, onRestart, uxLensesVariant = false }) {
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

          {/* Indicador de progresso */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '16px 20px 8px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#1e3a5f',
              border: '2px solid #1e3a5f'
            }} />
            <div style={{
              width: '30px',
              height: '2px',
              background: '#1e3a5f'
            }} />
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'transparent',
              border: '2px solid #1e3a5f'
            }} />
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
            {/* Ilustração 3D do personagem */}
            <div style={{
              width: '120px',
              height: '120px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src="/character-cube.png"
                alt="Creator"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.outerHTML = `<div style="width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; font-size: 60px;">🧑‍🎨</div>`
                }}
              />
            </div>

            {/* Título */}
            <h1 style={{
              fontSize: '22px',
              fontWeight: 800,
              fontStyle: 'italic',
              color: '#ffffff',
              margin: '0 0 12px 0',
              textTransform: 'uppercase',
              lineHeight: 1.2
            }}>
              ESSE É O SEU<br />MOMENTO CREATOR!
            </h1>

            {/* Descrição */}
            <p style={{
              fontSize: '14px',
              color: '#ffffff',
              lineHeight: 1.5,
              margin: '0 0 16px 0',
              maxWidth: '280px'
            }}>
              Para treinar suas habilidades você pode tentar executar esse mesmo passo com as instruções dadas.
            </p>

            {/* Quer tentar? */}
            <p style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#f97316',
              margin: '0 0 16px 0'
            }}>
              Quer tentar?
            </p>

            {/* Botão Continuar */}
            <button
              onClick={onTry}
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
                cursor: 'pointer',
                marginBottom: '12px'
              }}
            >
              continuar
            </button>

            {/* Botão pular */}
            <button
              onClick={onContinue}
              style={{
                width: '100%',
                maxWidth: '260px',
                background: 'transparent',
                border: '2px solid #3b82f6',
                borderRadius: '50px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#3b82f6',
                cursor: 'pointer'
              }}
            >
              pular essa interação
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
          Este é o seu momento de Creator
        </h3>
        <div className="card-interactive-content" style={{ marginTop: '16px' }}>
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
