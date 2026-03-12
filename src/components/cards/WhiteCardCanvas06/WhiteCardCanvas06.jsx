import React, { useState, useMemo } from 'react'
import './WhiteCardCanvas06.css'
import tutorials from '../../../data/tutorials.json'


function WhiteCardCanvas06({ modoSelecionado: modoProp, nivelSelecionado: nivelProp }) {
  const [modoSelecionado, setModoSelecionado] = useState(modoProp || 'criador')
  const [nivelSelecionado, setNivelSelecionado] = useState(nivelProp || 'facil')


  const listaFiltrada = useMemo(() => {
    return tutorials.filter((tutorial) => {
      if (tutorial.modo !== modoSelecionado) return false
      if (modoSelecionado === 'criador') {
        return tutorial.nivel === nivelSelecionado
      }
      return true
    })
  }, [tutorials, modoSelecionado, nivelSelecionado])


  const tutorial = listaFiltrada[0];

  if (!tutorial) {
    return (
      <section className="white-card-canvas-06" aria-label="Antes da ação">
        <div className="white-card-canvas-06__body">
          <div className="white-card-canvas-06__section-title">
            Nenhum tutorial disponível para o modo {modoSelecionado}
            {modoSelecionado === 'criador' ? ` (${nivelSelecionado})` : ''}
          </div>
        </div>
      </section>
    )
  }


  return (
    <section className="white-card-canvas-06" aria-label="Antes da ação">
      <div className="white-card-canvas-06__topbar">
        <div className="white-card-canvas-06__banner">
          <div>
            <div className="white-card-canvas-06__kicker">TUTORIAL</div>
            <div className="white-card-canvas-06__title">{tutorial.titulo}</div>
          </div>
          <div className="white-card-canvas-06__step-badge">ETAPA {tutorial.etapa}</div>
        </div>
      </div>

      <div className="white-card-canvas-06__body">
        <div className="white-card-canvas-06__action">
          <div className="white-card-canvas-06__action-label">Ação:</div>
          <div className="white-card-canvas-06__action-title">{tutorial.acao}</div>
        </div>

        <div className="white-card-canvas-06__section-title">Como fazer no Roblox Studio</div>
        <section className="white-card-canvas-06__steps" aria-label="Passo a passo">
          <div className="white-card-canvas-06__steps-stack">
            {tutorial.passos.map((passo, index) => (
              <div
                key={passo.numero}
                className={
                  index === 0
                    ? 'white-card-canvas-06__step white-card-canvas-06__step--current'
                    : 'white-card-canvas-06__step white-card-canvas-06__step--inactive'
                }
              >
                <div className="white-card-canvas-06__step-marker">
                  <div className="white-card-canvas-06__step-bubble">{passo.numero}</div>
                  {index !== tutorial.passos.length - 1 ? (
                    <div className="white-card-canvas-06__step-line" />
                  ) : null}
                </div>

                <div className="white-card-canvas-06__step-content">
                  <div className="white-card-canvas-06__step-title">{passo.titulo}</div>
                  {passo.textos.map((texto, textoIndex) => (
                    <div key={textoIndex} className="white-card-canvas-06__step-text">
                      {texto}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="white-card-canvas-06__result-action">
              <button type="button" className="white-card-canvas-06__result-button" aria-disabled="true">
                Clique para ver o resultado
              </button>
            </div>

            <section className="white-card-canvas-06__outcome" aria-label="Resultado esperado">
              <hr className="white-card-canvas-06__divider" />
              <h4 className="white-card-canvas-06__result-label">O que você vai ver na tela:</h4>
              <p className="white-card-canvas-06__result-text">
                {tutorial.resultado}
              </p>
              <div className="white-card-canvas-06__concept">
                <button type="button" className="white-card-canvas-06__concept-link">{tutorial.conceito}</button>
              </div>
            </section>
          </div>
        </section>
      </div>

      <section className="white-card-canvas-06__actions" aria-label="Ações do tutorial">
        <button className="white-card-canvas-06__action-button white-card-canvas-06__action-menu">
          <span className="white-card-canvas-06__action-icon white-card-canvas-06__action-icon--menu" aria-hidden="true" />
          Menu
        </button>
        <button className="white-card-canvas-06__action-button white-card-canvas-06__action-reset">
          <span className="white-card-canvas-06__action-icon white-card-canvas-06__action-icon--reset" aria-hidden="true" />
          Reiniciar
        </button>
        <button className="white-card-canvas-06__action-button white-card-canvas-06__action-back">
          <span className="white-card-canvas-06__action-icon white-card-canvas-06__action-icon--back" aria-hidden="true" />
          Voltar um passo
        </button>
        <button className="white-card-canvas-06__action-button white-card-canvas-06__action-demo">
          <span className="white-card-canvas-06__action-icon white-card-canvas-06__action-icon--demo" aria-hidden="true" />
          Demonstrar
        </button>
      </section>

      <div className="white-card-canvas-06__badge-toggle">
        <span className="white-card-canvas-06__badge-text">CONQUISTE SEUS BADGES DE CREATOR</span>
        <div className="white-card-canvas-06__badge-switch">
          <div className="white-card-canvas-06__badge-knob" />
        </div>
      </div>
    </section>
  )
}

export default WhiteCardCanvas06
