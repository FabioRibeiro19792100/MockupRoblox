import React from 'react'
import './WhiteCardCanvas02.css'

function WhiteCardCanvas02() {
  return (
    <section className="white-card-canvas-02" aria-label="Tela 02">
      <div className="white-card-canvas-02__body white-card-canvas-02__body--hero">
        <figure className="white-card-canvas-02__image">
          <img
            src="/logo.png"
            alt="Imagem principal"
            className="white-card-canvas-02__image-asset"
          />
        </figure>
        <p className="white-card-canvas-02__slogan">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          justo sed ipsum dignissim viverra.
        </p>
        <button type="button" className="white-card-canvas-02__cta">
          Comecar
        </button>
      </div>
    </section>
  )
}

export default WhiteCardCanvas02
