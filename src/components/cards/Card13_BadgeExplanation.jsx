import './Card.css'

function Card13_BadgeExplanation({ onClose }) {
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
