import './CreatorStamp.css'

function CreatorStamp({ isVisible, hideText = false }) {
  if (!isVisible) return null

  return (
    <div className="creator-stamp-inline">
      <img 
        src="/Selo.png" 
        alt="Selo de Creator" 
        className="creator-stamp-image"
      />
    </div>
  )
}

export default CreatorStamp
