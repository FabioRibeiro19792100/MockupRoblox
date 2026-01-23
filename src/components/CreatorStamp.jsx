import './CreatorStamp.css'

function CreatorStamp({ isVisible, hideText = false }) {
  if (!isVisible) return null

  return (
    <div className="creator-stamp-inline">
      <div className="creator-stamp-content-inline">
        <div className="creator-stamp-stars-top">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
        {!hideText && (
        <div className="creator-stamp-ribbon">
          <span className="creator-stamp-text-inline">Você é um CREATOR</span>
        </div>
        )}
        <div className="creator-stamp-stars-bottom">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>
    </div>
  )
}

export default CreatorStamp
