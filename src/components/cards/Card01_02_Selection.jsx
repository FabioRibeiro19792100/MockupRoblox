import './Card.css'

function Card01_02_Selection({ cardNumber, selectedTutorial, onSelect, onNext }) {
  const tutorials = [
    { id: 1, name: 'Construir um casa', description: 'Aprenda a criar uma casa completa' },
    { id: 2, name: 'Criar um obstáculo', description: 'Domine a criação de obstáculos' },
    { id: 3, name: 'Animar um avatar', description: 'Aprenda a animar personagens' },
  ]

  const trails = [
    { id: 1, name: 'Os primeiros passos para se tornar Creator' },
    { id: 2, name: 'Criações rápidas' },
  ]

  if (cardNumber === 1) {
    return (
      <div className="card card-selection">
        <div style={{ padding: '40px 24px' }}>
          <h2 className="card-title" style={{ fontSize: '20px', paddingTop: '12px' }}>
            Tutoriais Expedição Roblox
          </h2>
          <div className="card-content">
            {trails.map((trail) => (
              <button
                key={trail.id}
                className="selection-button"
                onClick={() => onNext()}
              >
                {trail.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card card-selection">
      <div style={{ padding: '40px 24px' }}>
          <h2 className="card-title" style={{ fontSize: '20px', paddingTop: '12px' }}>
            Tutoriais Expedição Roblox
          </h2>
        <div className="card-content">
          <button className="selection-button" style={{ marginBottom: '16px' }}>
            Os primeiros passos para se tornar Creator
          </button>
          <div style={{ marginBottom: '24px' }}>
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '24px',
                  borderBottom: '1px solid #e0e0e0',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  onSelect(tutorial.name)
                  onNext()
                }}
              >
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: 600 }}>{tutorial.name}</span>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ color: '#ffffff', fontSize: '12px' }}>▶</span>
                </div>
              </div>
            ))}
          </div>
          <button className="selection-button">
            Criações rápidas
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card01_02_Selection
