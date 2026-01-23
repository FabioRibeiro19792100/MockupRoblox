import './Card.css'

function CardTransition_Reunion({ onContinue, onMenu }) {
  return (
    <div 
      className="card card-transition"
      style={{
        background: '#4caf50 !important',
        backgroundImage: 'none !important',
        backgroundSize: 'auto',
        backgroundPosition: 'initial',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div style={{ padding: '24px', paddingTop: '24px', position: 'relative', zIndex: 2 }}>
        <div style={{ marginTop: '16px', textAlign: 'left' }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 700, 
            margin: 0, 
            color: '#ffffff', 
            marginBottom: '24px',
            textDecoration: 'underline',
            textDecorationThickness: '2px',
            textUnderlineOffset: '12px'
          }}>
            FLUXOS SE ENCONTRAM
          </h3>
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.6', 
            color: '#ffffff', 
            marginBottom: '32px',
            fontWeight: 600
          }}>
            É aqui que os <strong>fluxos se encontram novamente</strong>
          </p>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.5', 
            color: '#ffffff', 
            marginBottom: '24px'
          }}>
            Independentemente do modo escolhido (Observador ou Aprendizado), ambos os fluxos convergem neste ponto, seguindo para a conclusão do tutorial.
          </p>
          <button 
            className="primary-button"
            style={{
              marginTop: '32px',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 700,
              background: '#ffffff',
              color: '#000000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f5f5f5'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ffffff'
            }}
          >
            ISSO NÃO FAZ PARTE DO LAYOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardTransition_Reunion
