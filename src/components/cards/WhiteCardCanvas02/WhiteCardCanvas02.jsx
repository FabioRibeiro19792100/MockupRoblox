import React from 'react'
import './WhiteCardCanvas02.css'

function WhiteCardCanvas02({ title, subtitle }) {
  return (
    <div className="white-card-canvas-02">
      <div className="white-card-canvas-02__header">
        <span className="white-card-canvas-02__eyebrow">Tela em branco</span>
        <h2 className="white-card-canvas-02__title">{title}</h2>
        {subtitle ? (
          <p className="white-card-canvas-02__subtitle">{subtitle}</p>
        ) : null}
      </div>
      <div className="white-card-canvas-02__body">
        <div className="white-card-canvas-02__placeholder">
          <span>Area livre para layout</span>
        </div>
      </div>
    </div>
  )
}

export default WhiteCardCanvas02
