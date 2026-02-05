import React from 'react'
import './WhiteCardCanvas03.css'

function WhiteCardCanvas03({ title, subtitle }) {
  return (
    <div className="white-card-canvas-03">
      <div className="white-card-canvas-03__header">
        <span className="white-card-canvas-03__eyebrow">Tela em branco</span>
        <h2 className="white-card-canvas-03__title">{title}</h2>
        {subtitle ? (
          <p className="white-card-canvas-03__subtitle">{subtitle}</p>
        ) : null}
      </div>
      <div className="white-card-canvas-03__body">
        <div className="white-card-canvas-03__placeholder">
          <span>Area livre para layout</span>
        </div>
      </div>
    </div>
  )
}

export default WhiteCardCanvas03
