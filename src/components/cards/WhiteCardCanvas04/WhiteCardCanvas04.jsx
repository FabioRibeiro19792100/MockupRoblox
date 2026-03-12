import React, { useState } from 'react'
import Card01_02_Selection from '../Card01_02_Selection'
import './WhiteCardCanvas04.css'

function WhiteCardCanvas04({ variant = 'mvp' }) {
  const isIdeal = variant === 'ideal'
  const [selectedTutorial, setSelectedTutorial] = useState(null)
  if (isIdeal) {
    return (
      <section className="white-card-canvas-04" aria-label="Tutorial Select Screen Ideal">
        <Card01_02_Selection
          cardNumber={1}
          selectedTutorial={selectedTutorial}
          onSelect={setSelectedTutorial}
          onNext={() => {}}
          completedTutorials={{ class1: [1, 2], class2: [] }}
          earnedBadges={[1]}
          currentTutorialClass={1}
          onTutorialClassSelect={() => {}}
          onTutorialSelect={() => {}}
          onBack={() => {}}
          onMenu={() => {}}
          defaultExpanded={true}
        />
      </section>
    )
  }
  return (
    <section className="white-card-canvas-04" aria-label="Tutorial Select Screen MVP">
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
