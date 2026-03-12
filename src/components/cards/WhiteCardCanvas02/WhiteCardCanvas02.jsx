import React, { useEffect, useRef } from 'react'
import './WhiteCardCanvas02.css'

function WhiteCardCanvas02({ autoPlay = false, animationSeed = 0, soundEnabled = false }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sound-fx/soundtrack-1.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = 0.6
    }

    const audio = audioRef.current
    if (soundEnabled) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
      audio.currentTime = 0
    }

    return () => {
      if (!audio) return
      audio.pause()
      audio.currentTime = 0
    }
  }, [soundEnabled])

  return (
    <section
      className={autoPlay ? 'white-card-canvas-02 white-card-canvas-02--animated' : 'white-card-canvas-02'}
      aria-label="Tela 02"
    >
      <div className="white-card-canvas-02__body white-card-canvas-02__body--hero">
        <figure className="white-card-canvas-02__image">
          <img
            key={`card02-image-${animationSeed}`}
            src="/logo.png"
            alt="Imagem principal"
            className="white-card-canvas-02__image-asset"
          />
        </figure>
        <p key={`card02-slogan-${animationSeed}`} className="white-card-canvas-02__slogan">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          justo sed ipsum dignissim viverra.
        </p>
        <button key={`card02-cta-${animationSeed}`} type="button" className="white-card-canvas-02__cta">
          Comecar
        </button>
      </div>
    </section>
  )
}

export default WhiteCardCanvas02
