import React from 'react'
import './WhiteCardCanvas06.css'

function WhiteCardCanvas06() {
  return (
    <section className="white-card-canvas-06" aria-label="Antes da ação">
      <div className="white-card-canvas-06__topbar">
        <div className="white-card-canvas-06__banner">
          <div>
            <div className="white-card-canvas-06__kicker">TUTORIAL</div>
            <div className="white-card-canvas-06__title">Construir uma casa</div>
          </div>
          <div className="white-card-canvas-06__step-badge">ETAPA 1/3</div>
        </div>
      </div>

      <div className="white-card-canvas-06__body">
        <div className="white-card-canvas-06__action">
          <div className="white-card-canvas-06__action-label">Ação:</div>
          <div className="white-card-canvas-06__action-title">Montar o terreno</div>
        </div>

        <div className="white-card-canvas-06__section-title">Como fazer no Roblox Studios?</div>
        <section className="white-card-canvas-06__steps" aria-label="Passo a passo">
          <div className="white-card-canvas-06__steps-stack">
            <div className="white-card-canvas-06__step white-card-canvas-06__step--current">
              <div className="white-card-canvas-06__step-marker">
                <div className="white-card-canvas-06__step-bubble">1</div>
                <div className="white-card-canvas-06__step-line" />
              </div>
              <div className="white-card-canvas-06__step-content">
                <div className="white-card-canvas-06__step-title">
                  Crie <span className="white-card-canvas-06__step-title-tail">
                    uma &quot;Part&quot;
                    <button type="button" className="white-card-canvas-06__step-help" aria-label="Ajuda">?</button>
                  </span>
                </div>
                <div className="white-card-canvas-06__step-text">
                  Na barra superior, clique em <strong>Modelo (model)</strong> e, em seguida,<br />
                  clique em <strong>Part</strong>
                </div>
              </div>
            </div>

            <div className="white-card-canvas-06__step white-card-canvas-06__step--inactive">
              <div className="white-card-canvas-06__step-marker">
                <div className="white-card-canvas-06__step-bubble">2</div>
                <div className="white-card-canvas-06__step-line" />
              </div>
              <div className="white-card-canvas-06__step-content">
                <div className="white-card-canvas-06__step-title">
                  Selecione e renomeie a <span className="white-card-canvas-06__step-title-tail">
                    nova &quot;Part&quot;
                  </span>
                </div>
                <div className="white-card-canvas-06__step-text">
                  No painel Explorador (direita, embaixo), encontre o objeto recém-criado <span className="white-card-canvas-06__emphasis">&quot;Part&quot;</span>
                </div>
                <div className="white-card-canvas-06__step-text">
                  Renomeie para <span className="white-card-canvas-06__emphasis">Part_1</span> (botão direito &gt; Renomear &gt; Part_1 &gt; Enter)
                </div>
              </div>
            </div>

            <div className="white-card-canvas-06__step white-card-canvas-06__step--inactive">
              <div className="white-card-canvas-06__step-marker">
                <div className="white-card-canvas-06__step-bubble">3</div>
                <div className="white-card-canvas-06__step-line" />
              </div>
              <div className="white-card-canvas-06__step-content">
                <div className="white-card-canvas-06__step-title">
                  Ajuste o tamanho e <span className="white-card-canvas-06__step-title-tail">posição da Part</span>
                </div>
                <div className="white-card-canvas-06__step-text">No painel <strong>&quot;Propriedades&quot;</strong>:</div>
                <div className="white-card-canvas-06__step-text">
                  Encontre a variável <strong>&quot;Size&quot;</strong> e substitua os valores atuais por 2.6,9.8,4.4
                </div>
                <div className="white-card-canvas-06__step-text">
                  Encontre a variável <strong>&quot;Position&quot;</strong> e substitua os valores atuais por 5.96,4.9,-9.54
                </div>
              </div>
            </div>

            <div className="white-card-canvas-06__step white-card-canvas-06__step--inactive">
              <div className="white-card-canvas-06__step-marker">
                <div className="white-card-canvas-06__step-bubble">4</div>
              </div>
              <div className="white-card-canvas-06__step-content">
                <div className="white-card-canvas-06__step-title">
                  Mude <span className="white-card-canvas-06__step-title-tail">o Material</span>
                </div>
                <div className="white-card-canvas-06__step-text">
                  Mova o cursor até o top bar, clique em <strong>Modelo (model)</strong>, clique em <strong>&quot;Material&quot;</strong>.
                </div>
                <div className="white-card-canvas-06__step-text">
                  No campo de busca, digite <strong>&quot;Wood&quot;</strong> e selecione.
                </div>
              </div>
            </div>

            <div className="white-card-canvas-06__result-action">
              <button type="button" className="white-card-canvas-06__result-button" aria-disabled="true">
                Clique para ver o resultado
              </button>
            </div>

            <section className="white-card-canvas-06__outcome" aria-label="Resultado esperado">
              <hr className="white-card-canvas-06__divider" />
              <h4 className="white-card-canvas-06__result-label">O que você vai ver na tela:</h4>
              <p className="white-card-canvas-06__result-text">
                Você verá a base da casa (um bloco cinza retangular grande) sendo criada no centro da tela.
              </p>
              <div className="white-card-canvas-06__concept">
                <button type="button" className="white-card-canvas-06__concept-link">O QUE É UMA PART?</button>
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
          Voltar passo
        </button>
        <button className="white-card-canvas-06__action-button white-card-canvas-06__action-demo">
          <span className="white-card-canvas-06__action-icon white-card-canvas-06__action-icon--demo" aria-hidden="true" />
          Demonstrar
        </button>
      </section>

      <div className="white-card-canvas-06__badge-toggle">
        <span className="white-card-canvas-06__badge-text">Conquiste seus badges de Creator</span>
        <div className="white-card-canvas-06__badge-switch">
          <div className="white-card-canvas-06__badge-knob" />
        </div>
      </div>
    </section>
  )
}

export default WhiteCardCanvas06
