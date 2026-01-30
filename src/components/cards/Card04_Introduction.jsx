import './Card.css'

function Card04_Introduction({ tutorialName, onStart, onMenu, onRestart, currentTutorialId, onCompleteAndMenu, uxLensesVariant = false }) {
  // Sempre mostra o botão de marcar completo
  const handleComplete = () => {
    if (onCompleteAndMenu) {
      onCompleteAndMenu()
    } else if (onMenu) {
      onMenu()
    }
  }

  if (uxLensesVariant) {
    return (
      <div className="card card-intro" style={{ background: '#1a1a2e' }}>
        {/* Header com botão */}
        <button
          onClick={onMenu}
          style={{
            width: 'calc(100% - 40px)',
            margin: '16px 20px 8px',
            background: '#ffffff',
            border: 'none',
            borderRadius: '50px',
            padding: '14px 24px',
            fontSize: '15px',
            fontWeight: 600,
            color: '#000000',
            cursor: 'pointer',
            flex: 'none'
          }}
        >
          Voltar para menu
        </button>

        {/* Banner escuro com título e duração */}
        <div className="no-padding-override" style={{
          background: '#0f0f1a',
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '20px',
          paddingRight: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 'none'
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 700,
            color: '#ffffff',
            margin: 0
          }}>
            {tutorialName}
          </h2>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#9ca3af'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: 500 }}>6 min</span>
          </div>
        </div>

        {/* Conteúdo */}
        <div style={{ padding: '20px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
          <p style={{
            fontSize: '15px',
            color: '#d1d5db',
            lineHeight: 1.5,
            margin: '0 0 16px 0'
          }}>
            Você vai criar uma animação simples e aplicar a seu personagem.
          </p>

          <p style={{
            fontSize: '15px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.5,
            margin: '0 0 16px 0'
          }}>
            Aprenda a criar e animar um avatar do zero: configurar o personagem, criar poses e movimentos básicos e aplicar a animação no jogo.
          </p>

          <p style={{
            fontSize: '15px',
            color: '#d1d5db',
            lineHeight: 1.5,
            margin: '0 0 20px 0'
          }}>
            O tutorial te guia em cada etapa, mostrando como usar o Animation Editor, ajustar keyframes e testar o resultado no Studio.
          </p>

          {/* Callout box */}
          <div style={{
            background: '#2d2d44',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}>
            <img
              src="/avatar-preview.png"
              alt="Avatar"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                objectFit: 'cover',
                background: '#4ade80',
                flexShrink: 0
              }}
              onError={(e) => {
                e.target.style.display = 'flex'
                e.target.outerHTML = `<div style="width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><span style="font-size: 28px;">🧑</span></div>`
              }}
            />
            <p style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#ffffff',
              lineHeight: 1.4,
              margin: 0
            }}>
              Ao final, você terá um avatar animado e pronto para usar nas suas experiências.
            </p>
          </div>

          {/* Botão Iniciar */}
          <button
            onClick={onStart}
            style={{
              width: '100%',
              marginTop: '20px',
              background: '#fbbf24',
              border: 'none',
              borderRadius: '50px',
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: 700,
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            Iniciar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="card card-intro">
      <div className="card-header-global single-button-header">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
      </div>
      <div style={{ padding: '24px', paddingBottom: '80px' }}>
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
