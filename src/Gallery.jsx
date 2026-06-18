import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { useNightMode } from './hooks/useNightMode'
import './Gallery.css'
import './App.css'

/**
 * TO ADD PHOTOS:
 * 1. Drop your images/videos into src/assets/gallery/
 * 2. Import them here and add entries to the GALLERY_ITEMS array below.
 *
 * Example:
 *   import photo1 from './assets/gallery/blue-ridge-aerial.jpg'
 *   { src: photo1, caption: 'Blue Ridge Aerial', category: 'landscapes' }
 *
 * Categories: 'all' | 'real-estate' | 'weddings' | 'landscapes' | 'events'
 */

const GALLERY_ITEMS = [
  // Add your photos here — see instructions above
]

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'landscapes', label: '🏔️ Landscapes' },
  { key: 'real-estate', label: '🏠 Real Estate' },
  { key: 'weddings', label: '💒 Weddings' },
  { key: 'events', label: '🎪 Events' },
]

function Gallery() {
  const [nightMode, setNightMode] = useNightMode()
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory)

  return (
    <div className="gallery-page">
      <Nav nightMode={nightMode} onToggleNight={() => setNightMode(!nightMode)} />

      <div className="gallery-content">
        <h1>📸 Gallery</h1>
        <p className="gallery-subtitle">Aerial work from the Blue Ridge mountains and beyond.</p>

        {GALLERY_ITEMS.length > 0 && (
          <div className="gallery-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                className={`gallery-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {filtered.length > 0 ? (
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => setLightbox(item)}
              >
                {item.type === 'video' ? (
                  <video src={item.src} muted playsInline />
                ) : (
                  <img src={item.src} alt={item.caption || ''} loading="lazy" />
                )}
                {item.caption && (
                  <div className="gallery-item-caption">{item.caption}</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-coming-soon">
            <span className="coming-soon-icon">🚁</span>
            <h2>Portfolio Coming Soon</h2>
            <p>
              We're loading up the gallery with our best aerial work from the North Georgia mountains.
              In the meantime, reach out to see samples relevant to your project.
            </p>
            <Link to="/contact" className="gallery-cta-link">Request Sample Work</Link>
          </div>
        )}
      </div>

      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery-lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            {lightbox.type === 'video' ? (
              <video src={lightbox.src} controls autoPlay />
            ) : (
              <img src={lightbox.src} alt={lightbox.caption || ''} />
            )}
            {lightbox.caption && (
              <p className="gallery-lightbox-caption">{lightbox.caption}</p>
            )}
          </div>
        </div>
      )}

      <div className="trees-left">
        <div className="tree tree-1"></div>
        <div className="tree tree-4"></div>
        <div className="tree tree-3"></div>
        <div className="tree tree-6"></div>
        <div className="tree tree-2"></div>
        <div className="tree tree-5"></div>
      </div>
      <div className="trees-right">
        <div className="tree tree-2"></div>
        <div className="tree tree-5"></div>
        <div className="tree tree-1"></div>
        <div className="tree tree-6"></div>
        <div className="tree tree-3"></div>
        <div className="tree tree-4"></div>
      </div>
    </div>
  )
}

export default Gallery
