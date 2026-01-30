import './Card.css'

function Card05_BeforeAction({ stepNumber, totalSteps, stepTitle, onDemonstrate, onBack, onShowConcept, onMenu, onRestart, uxLensesVariant = false }) {
  if (uxLensesVariant) {
    const completedStep = 0
    return (
      <div className="card card-step">
        <div className="card-header-global">
          <button className="header-button" onClick={onMenu}>Voltar para menu</button>
          <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
        </div>
        <div style={{ padding: '0 24px 24px 24px' }}>
          <div style={{ marginTop: '12px', marginBottom: '10px' }}>
            <div style={{
              background: '#f4d36f',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#000000', letterSpacing: '0.4px' }}>
                  TUTORIAL
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#000000' }}>
                  Construir uma casa
                </div>
              </div>
              <div style={{
                background: '#000000',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                padding: '6px 10px',
                borderRadius: '6px',
                lineHeight: 1,
                whiteSpace: 'nowrap'
              }}>
                ETAPA {stepNumber}/{totalSteps}
              </div>
            </div>
          </div>

          <div style={{ margin: '8px 0 12px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f97316' }}>Ação:</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#000000' }}>
              {stepTitle || 'Montar terreno.'}
            </div>
          </div>

          <div style={{ fontSize: '16px', fontWeight: 700, color: '#000000', marginBottom: '8px' }}>
            Como fazer no Roblox Studios?
          </div>

          <div style={{ position: 'relative', paddingRight: '28px', marginBottom: '12px', maxHeight: '190px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#000000',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #f97316',
                    flexShrink: 0
                  }}>1</div>
                  <div style={{
                    marginTop: '4px',
                    width: '2px',
                    flexGrow: 1,
                    minHeight: '26px',
                    background: completedStep >= 1 ? '#f97316' : '#d1d5db',
                    borderRadius: '2px'
                  }} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#000000' }}>Crie uma "Part"</div>
                  <div style={{ fontSize: '13px', color: '#4b5563', marginTop: '2px' }}>
                    Na barra superior, clique em <strong>Modelo</strong>
                  </div>
                  <div style={{ fontSize: '13px', color: '#4b5563' }}>
                    Clique em <strong>Part</strong>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#000000',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #f97316',
                    flexShrink: 0
                  }}>2</div>
                  <div style={{
                    marginTop: '4px',
                    width: '2px',
                    flexGrow: 1,
                    minHeight: '26px',
                    background: completedStep >= 2 ? '#f97316' : '#d1d5db',
                    borderRadius: '2px'
                  }} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#000000' }}>
                    Selecione e renomeie a nova "Part"
                  </div>
                  <div style={{ fontSize: '13px', color: '#4b5563', marginTop: '2px' }}>
                    No painel Explorador (direita, embaixo),
                    encontre o objeto recém-criado <span style={{ color: '#ef4444', textDecoration: 'underline' }}>"Part"</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#4b5563' }}>
                    Renomeie para <span style={{ color: '#ef4444', textDecoration: 'underline' }}>Part_1</span> (botão direito &gt; Renomear &gt; Part_1 &gt; Enter)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#000000',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #f97316',
                    flexShrink: 0
                  }}>3</div>
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#000000' }}>
                    Ajuste o tamanho da "Part"
                  </div>
                  <div style={{ fontSize: '13px', color: '#4b5563', marginTop: '2px' }}>
                    Use as alças para dimensionar a base conforme necessário
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '2px dotted #d1d5db', margin: '10px 0 12px' }} />

          <div style={{ fontSize: '15px', fontWeight: 700, color: '#f97316', marginBottom: '4px' }}>
            O que você vai ver na tela:
          </div>
          <div style={{ fontSize: '10pt', color: '#4b5563', lineHeight: 1.3, fontWeight: 'bold' }}>
            Você verá a base da casa (um bloco cinza retangular grande) sendo criada no centro da tela.
          </div>

          {onShowConcept && (
            <div style={{ marginTop: '12px' }}>
              <div onClick={onShowConcept} style={{ cursor: 'pointer', color: '#ef4444', fontSize: '10pt', fontWeight: 'bold', textDecoration: 'underline' }}>
                O QUE É UMA PART?
              </div>
            </div>
          )}
        </div>
        <div className="card-actions">
          <button className="secondary-button" onClick={onBack}>
            Voltar passo
          </button>
          <button className="primary-button demonstrate-button" onClick={onDemonstrate}>
            Demonstrar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="card card-step">
      <div className="card-header-global">
        <button className="header-button" onClick={onMenu}>Voltar para menu</button>
        <button className="header-button" onClick={onRestart}>Reiniciar tutorial</button>
      </div>
      <div style={{ padding: '0 24px 24px 24px' }}>
        <div className="card-step-header" style={{ marginBottom: '12px', marginTop: '24px' }}>
          <div className="step-counter" style={{ marginBottom: '8px', marginTop: '-16px' }}>ETAPA {stepNumber}/{totalSteps}</div>
          <div className="theme-action-box">
            <div className="theme-box">
              <div>Tutorial → Construir uma casa</div>
            </div>
            <div className="step-title-bar">
              Ação → {stepTitle || 'Montar o terreno'}
            </div>
          </div>
        </div>
        <div className="instructions-section">
          <div className="section-title">COMO FAZER NO ROBLOX STUDIO</div>
          <div className="instructions-box">
            <ol className="instructions-list">
              <li>Clique no menu "Insert"</li>
              <li>Selecione "Part"</li>
              <li>Um bloco será criado na cena</li>
              <li>Posicione o bloco no centro da viewport</li>
              <li>Ajuste o tamanho conforme necessário</li>
            </ol>
          </div>
        </div>
        <div className="instructions-section">
          <div className="section-title">O QUE VOCÊ VAI VER NA TELA</div>
          <div className="instructions-box">
            <p style={{ margin: 0, color: '#000000', fontSize: '14.5px', lineHeight: '1.12' }}>
              Você verá a base da casa (um bloco cinza retangular grande) sendo criada no centro da tela.
            </p>
          </div>
        </div>
        {onShowConcept && (
          <div className="instructions-section" style={{ marginTop: '16px' }}>
            <div className="concept-title-bar" onClick={onShowConcept} style={{ cursor: 'pointer' }}>
              <div style={{ 
                fontSize: '12px', 
                marginBottom: '12px',
                textDecoration: 'underline',
                textDecorationThickness: '1px',
                textUnderlineOffset: '4px',
                color: '#f44336'
              }}>Entender conceito</div>
              <div style={{ 
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#f44336'
              }}>
                <span style={{ 
                  fontSize: '14px', 
                  fontWeight: 700,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#f44336',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>ℹ</span>
                O QUE É UMA PART?
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="card-actions">
        <button className="secondary-button" onClick={onBack}>
          Voltar passo
        </button>
        <button className="primary-button demonstrate-button" onClick={onDemonstrate}>
          Demonstrar
        </button>
      </div>
    </div>
  )
}

export default Card05_BeforeAction
