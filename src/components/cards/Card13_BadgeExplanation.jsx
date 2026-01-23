import './Card.css'

function Card13_BadgeExplanation({ onClose }) {
  return (
    <div className="card">
      <div className="card-header-global single-button-header">
        <button className="header-button" onClick={onClose}>
          Fechar
        </button>
      </div>
      <div style={{ padding: '24px', paddingTop: '12px' }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 700, 
          margin: 0, 
          color: '#000000', 
          marginBottom: '24px', 
          paddingTop: '12px',
          borderBottom: '1px solid #000000',
          paddingBottom: '8px'
        }}>
          Sistema de<br />Badges
        </h3>
        <div className="card-content" style={{ marginTop: '24px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.12', marginBottom: '24px', marginTop: '16px' }}>
            Os badges são conquistas que você ganha ao completar tutoriais. Cada badge representa um marco importante na sua jornada de aprendizado.
          </p>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#000000' }}>
              ⭐ Primeiro Passo
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#333333', marginBottom: '8px' }}>
              <strong>Requisito:</strong> Completar o tutorial 1 da classe 1 (Construir um casa)
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#666666' }}>
              Este é o seu primeiro passo na jornada de criação no Roblox Studio. Ao completar este tutorial, você desbloqueia o primeiro badge e aprende os fundamentos básicos.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#000000' }}>
              🏅 Criador Iniciante
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#333333', marginBottom: '8px' }}>
              <strong>Requisito:</strong> Completar todos os 5 tutoriais da classe 1 (Transforme-se num Creator)
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#666666' }}>
              Ao completar todos os tutoriais da primeira classe, você demonstra domínio dos conceitos fundamentais e está pronto para avançar para criações mais complexas.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#000000' }}>
              👑 Criador Avançado
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#333333', marginBottom: '8px' }}>
              <strong>Requisito:</strong> Completar todos os 5 tutoriais da classe 2 (Criações rápidas)
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#666666' }}>
              Este é o badge mais avançado. Ao conquistá-lo, você domina técnicas avançadas de criação e está preparado para desenvolver projetos complexos no Roblox Studio.
            </p>
          </div>

          <div style={{ 
            padding: '16px', 
            background: '#f0f7ff', 
            borderRadius: '8px',
            border: '1px solid #b3d9ff'
          }}>
            <p style={{ fontSize: '14px', lineHeight: '1.12', color: '#333333', margin: 0 }}>
              <strong>💡 Dica:</strong> Passe o mouse sobre os badges na galeria para ver seu progresso atual e os requisitos detalhados de cada conquista.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card13_BadgeExplanation
