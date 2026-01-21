import './CreatorStamp.css'

function CreatorStamp({ isVisible }) {
  if (!isVisible) return null

  return (
    <div className="creator-stamp-inline">
      <div className="creator-stamp-content-inline">
        <span className="creator-stamp-icon-inline">⭐</span>
        <span className="creator-stamp-text-inline">Você é um Creator</span>
      </div>
    </div>
  )
}

export default CreatorStamp
