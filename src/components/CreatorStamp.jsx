import './CreatorStamp.css'

function CreatorStamp({ isVisible, hideText = false, badgeImage }) {
  if (!isVisible) return null

  const imageSrc = badgeImage || '/Selo2.png'

  return (
    <div className="creator-stamp-inline">
      <img 
        src={imageSrc} 
        alt="Selo de Creator" 
        className="creator-stamp-image"
      />
    </div>
  )
}

export default CreatorStamp
