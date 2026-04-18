import { Link } from 'react-router-dom'
import './Gallery.css'
import './App.css'

function Gallery() {
    return (
        <div className="gallery-page">
            <header className="site-nav">
                <Link to="/" className="nav-logo">SkyHughes</Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            <div className="gallery-content">
                <h1>📸 Gallery</h1>
                <p className="gallery-subtitle">A showcase of our aerial work — coming soon!</p>
            </div>

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
