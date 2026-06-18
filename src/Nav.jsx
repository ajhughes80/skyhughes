import { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav({ nightMode, onToggleNight }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-nav">
      <Link to="/" className="nav-logo">🇺🇸 SkyHughes</Link>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
      </button>

      <nav className={menuOpen ? 'nav-open' : ''}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>

      <button
        className="mode-toggle"
        onClick={() => onToggleNight()}
        aria-label={nightMode ? 'Switch to day mode' : 'Switch to night mode'}
      >
        {nightMode ? '🌙' : '☀️'}
      </button>
    </header>
  )
}

export default Nav
