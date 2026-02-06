import React from 'react'
import './WhiteCardCanvas04.css'

function WhiteCardCanvas04({ variant = 'mvp' }) {
  const isIdeal = variant === 'ideal'
  return (
    <section className="white-card-canvas-04" aria-label={`Tutorial Select Screen ${isIdeal ? 'Ideal' : 'MVP'}`}>
      <div className="white-card-canvas-04__body">
        <figure className="white-card-canvas-04__figure">
          <img
            src="/Q&A/Tutorial-Select-Screen.png"
            alt="Tutorial Select Screen"
            className="white-card-canvas-04__image"
          />
          <span className="white-card-canvas-04__marker white-card-canvas-04__marker--0">1</span>
          <span className="white-card-canvas-04__marker white-card-canvas-04__marker--1">1.2</span>
          <span className="white-card-canvas-04__marker white-card-canvas-04__marker--2">2</span>
          <div className="white-card-canvas-04__callout">
            <p className="white-card-canvas-04__callout-text">
              Esse texto será dinâmico, ele muda de acordo com o hover do mouse,
              dependendo de qual elemento o usuário está querendo investigar.
            </p>
          </div>
        </figure>
      </div>
    </section>
  )
}

export default WhiteCardCanvas04
