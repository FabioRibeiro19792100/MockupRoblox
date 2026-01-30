import './Card.css'

function Card03_ModeSelection({ onModeSelect, onMenu, initialMode, dimmedOpacity = 0.5, showProgressBadge = false }) {
  return (
    <div className="card card-mode">
      <div className="card-header-global single-button-header">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
      </div>
      <div style={{ padding: '24px', paddingBottom: '80px' }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 700, 
          margin: '0 0 24px', 
          color: '#ffffff', 
          textDecoration: 'underline 1px',
          textUnderlineOffset: '12px',
          textAlign: 'center'
        }}>
          Escolha o modo:
        </h3>
        <div className="card-content">
          <div
            className={`mode-button mode-button-demonstrative ${initialMode === 'demonstrative' ? 'selected' : ''}`}
            onClick={() => onModeSelect && onModeSelect('demonstrative')}
            style={{
              background: '#71B4E9',
              opacity: initialMode === 'demonstrative' ? 1 : (initialMode ? dimmedOpacity : 1),
              padding: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              cursor: 'pointer',
              width: '100%',
              height: '256px',
              flexGrow: 0,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '10px 10px 10px'
            }}>
              <div style={{
                fontSize: '16pt',
                fontWeight: 700,
                color: '#000000',
                margin: 0
              }}>
                OBSERVADOR
              </div>
              <span style={{
                backgroundColor: 'rgb(0 0 0 / 33%)',
                color: '#ffffff',
                padding: '4px 10px',
                borderRadius: '50px',
                fontSize: '8pt',
                fontWeight: 700
              }}>
                32% CONCLUÍDO
              </span>
            </div>

            {/* Subtítulo - fita azul claro de ponta a ponta */}
            <div style={{
              padding: '6px 10px 10px',
              background: '#a8d4f0'
            }}>
              <span style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#000000'
              }}>
                observar e aprender
              </span>
            </div>

            {/* Conteúdo */}
            <div style={{ position: 'relative', flex: 1, margin: '14px 10px' }}>
              <p style={{
                fontSize: '12pt',
                fontWeight: 700,
                color: '#000000',
                marginBottom: '16px',
                lineHeight: 1.3,
                textAlign: 'left'
              }}>
                Você vai apenas entender como se dá o processo de construção no Studio
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'rgb(53 60 93)', fontSize: '9pt', fontWeight: 'bold', lineHeight: 1.4, textAlign: 'left' }}>
                    Sem necessidade de executar ações.
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'rgb(53 60 93)', fontSize: '9pt', fontWeight: 'bold', lineHeight: 1.4, textAlign: 'left' }}>
                    Você pode trocar de modo depois.
                  </span>
                </div>
              </div>

              {/* Botão play no canto inferior direito */}
            </div>
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </div>
          </div>
          <div
            className={`mode-button mode-button-interactive ${initialMode === 'interactive' ? 'selected' : ''}`}
            onClick={() => onModeSelect && onModeSelect('interactive')}
            style={{
              background: '#f59e0b',
              opacity: 1,
              padding: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              cursor: 'pointer',
              width: '100%',
              flexGrow: 0,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            {/* Header */}
            <div style={{
              background: '#fbbf24',
              position: 'relative',
              margin: '10px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}>
                <div style={{
                  fontSize: '16pt',
                  fontWeight: 700,
                  color: '#000000',
                  margin: 0
                }}>
                  APRENDIZADO
                </div>
                {showProgressBadge ? (
                  <span style={{
                    backgroundColor: 'rgb(0 0 0 / 33%)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '50px',
                    fontSize: '8pt',
                    fontWeight: 700,
                    whiteSpace: 'nowrap'
                  }}>
                    32% CONCLUÍDO
                  </span>
                ) : null}
              </div>
            </div>

            {/* Subtítulo com setas - fita amarela de ponta a ponta */}
            <div style={{
              background: 'rgb(255, 233, 175)',
              padding: '6px 10px 10px',
              borderTop: '1px solid rgba(0,0,0,0.1)'
            }}>
              <span style={{
                fontSize: '13px',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 700
              }}>
                clicar <span style={{ color: 'rgb(25 67 123)' }}>❯</span> construir <span style={{ color: 'rgb(25 67 123)' }}>❯</span> testar
              </span>
            </div>

            {/* Conteúdo */}
            <div style={{ position: 'relative', flex: 1, margin: '10px' }}>
              <p style={{
                fontSize: '12pt',
                fontWeight: 700,
                color: '#000000',
                marginBottom: '16px',
                lineHeight: 1.3,
                textAlign: 'left'
              }}>
                Você terá a chance de aprender e fazer junto ao longo do tutorial
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '3px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'rgb(103 79 0)', fontSize: '9pt', lineHeight: 1.4, textAlign: 'left', fontWeight: 'bold' }}>
                    Passo a passo, com ajuda.
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'rgb(103 79 0)', fontSize: '9pt', lineHeight: 1.4, textAlign: 'left', fontWeight: 'bold' }}>
                    Você pode errar e repetir.
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'rgb(103 79 0)', fontSize: '9pt', lineHeight: 1.4, textAlign: 'left', fontWeight: 'bold' }}>
                    Nada aqui é avaliado.
                  </span>
                </div>
              </div>

              {/* Botão play no canto inferior direito */}
            </div>
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card03_ModeSelection
