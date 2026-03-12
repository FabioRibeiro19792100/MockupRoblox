import React from 'react'
import WhiteCardCanvas05Ideal from './WhiteCardCanvas05Ideal'
import './WhiteCardCanvas05.css'

function WhiteCardCanvas05({ variant = 'mvp' }) {
  if (variant === 'ideal') {
    return (
      <WhiteCardCanvas05Ideal skipLabel="Iniciar" />
    )
  }

  return (
    <section className="white-card-canvas-05" aria-label="Tutorial Select Screen">
      <div className="white-card-canvas-05__body">
        <figure className="white-card-canvas-05__figure">
          <img
            src="/Q&A/Instructions-screen.png"
            alt="Instructions Screen"
            className="white-card-canvas-05__image"
          />
          <span className="white-card-canvas-05__marker white-card-canvas-05__marker--1">3</span>
          <span className="white-card-canvas-05__marker white-card-canvas-05__marker--2">4</span>
          <span className="white-card-canvas-05__marker white-card-canvas-05__marker--3">5</span>
          <span className="white-card-canvas-05__marker white-card-canvas-05__marker--4">6</span>
          <span className="white-card-canvas-05__marker white-card-canvas-05__marker--5">7</span>
        </figure>
      </div>
    </section>
  )
}

export default WhiteCardCanvas05
