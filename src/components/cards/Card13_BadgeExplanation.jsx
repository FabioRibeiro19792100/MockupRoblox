import './Card.css'

function Card13_BadgeExplanation({ onClose, uxLensesVariant = false }) {
  if (uxLensesVariant) {
    const badges = [
      {
        name: 'PRIMEIRO PASSO',
        requisito: 'Completar o tutorial 1 da classe 1',
        descricao: 'O primeiro marco de quem começa a criar no Roblox Studio. Indica domínio dos conceitos básicos da plataforma.'
      },
      {
        name: 'CRIADOR INICIANTE',
        requisito: 'Completar todos os 5 tutoriais da classe 1',
        descricao: 'Prova que você demonstra domínio dos fundamentos essenciais e está pronto para um desafio mais sério.'
      },
      {
        name: 'CRIADOR AVANÇADO',
        requisito: 'Completar o tutorial 1 da classe 1',
        descricao: 'Aqui você ja domina técnicas avançadas de criação e está preparado para desenvolver projetos complexos.'
      }
    ]

    return (
      <div className="card card-badge-explanation" style={{ background: '#e8f4fc', display: 'flex', flexDirection: 'column' }}>
        {/* Botão fechar */}
        <div className="no-padding-override" style={{ padding: '16px 20px', flex: 'none' }}>
          <button
            onClick={onClose}
            style={{
              width: '100%',
              background: '#fbbf24',
              border: 'none',
              borderRadius: '50px',
              padding: '14px 24px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            fechar
          </button>
        </div>

        {/* Conteúdo */}
        <div style={{ padding: '0 20px 20px', flex: 1, overflowY: 'auto' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 20px 0'
          }}>
            Tipos de badges:
          </h2>

          {badges.map((badge, index) => (
            <div key={index} style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              {/* Header do badge */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                {/* Ícone hexagonal roxo */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#a78bfa',
                  borderRadius: '8px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#f59e0b',
                    margin: '0 0 2px 0'
                  }}>
                    {badge.name}
                  </h3>
                  <span style={{
                    fontSize: '13px',
                    color: '#6b7280'
                  }}>
                    Requisito:
                  </span>
                </div>
              </div>

              {/* Barra de requisito */}
              <div style={{
                background: '#f59e0b',
                borderRadius: '6px',
                padding: '8px 12px',
                marginBottom: '12px'
              }}>
                <span style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#ffffff'
                }}>
                  {badge.requisito}
                </span>
              </div>

              {/* Descrição */}
              <p style={{
                fontSize: '14px',
                color: '#4b5563',
                lineHeight: 1.4,
                margin: 0
              }}>
                {badge.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="card card-badge-explanation">
      <div className="card-header-global single-button-header">
        <button className="header-button badge-close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
      <div style={{ padding: '24px', paddingTop: '24px' }}>
        {/* Título à esquerda e Logo à direita */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h3 style={{ 
            fontSize: '20px', 
            fontWeight: 700, 
            margin: 0, 
            color: '#000000',
            textDecoration: 'underline',
            textDecorationThickness: '1px',
            textUnderlineOffset: '12px'
          }}>
            Sistema de Badges
          </h3>
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
        <div className="card-content" style={{ marginTop: '24px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.12', marginBottom: '24px', marginTop: '16px', color: '#000000' }}>
            Os badges são conquistas que você ganha ao completar tutoriais. Cada badge representa um marco importante na sua jornada de aprendizado.
          </p>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#000000' }}>
              ⭐ Primeiro Passo
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#000000', marginBottom: '8px' }}>
              <strong>Requisito:</strong> Completar o tutorial 1 da classe 1 (Construir um casa)
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#000000' }}>
              Este é o seu primeiro passo na jornada de criação no Roblox Studio. Ao completar este tutorial, você desbloqueia o primeiro badge e aprende os fundamentos básicos.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#000000' }}>
              🏅 Criador Iniciante
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#000000', marginBottom: '8px' }}>
              <strong>Requisito:</strong> Completar todos os 5 tutoriais da classe 1 (Transforme-se num Creator)
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#000000' }}>
              Ao completar todos os tutoriais da primeira classe, você demonstra domínio dos conceitos fundamentais e está pronto para avançar para criações mais complexas.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#000000' }}>
              👑 Criador Avançado
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#000000', marginBottom: '8px' }}>
              <strong>Requisito:</strong> Completar todos os 5 tutoriais da classe 2 (Criações rápidas)
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#000000' }}>
              Este é o badge mais avançado. Ao conquistá-lo, você domina técnicas avançadas de criação e está preparado para desenvolver projetos complexos no Roblox Studio.
            </p>
          </div>

          <div style={{ 
            padding: '16px', 
            background: '#f0f7ff', 
            borderRadius: '8px',
            border: '1px solid #b3d9ff'
          }}>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#000000', margin: 0 }}>
              <strong>💡 Dica:</strong> Passe o mouse sobre os badges na galeria para ver seu progresso atual e os requisitos detalhados de cada conquista.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card13_BadgeExplanation
