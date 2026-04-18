import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nightMode, setNightMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('night-mode', nightMode)
  }, [nightMode])

  return (
    <>
      <header className="site-nav">
        <Link to="/" className="nav-logo">🇺🇸 SkyHughes</Link>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
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
          onClick={() => setNightMode(!nightMode)}
          aria-label={nightMode ? 'Switch to day mode' : 'Switch to night mode'}
        >
          {nightMode ? '🌙' : '☀️'}
        </button>
      </header>

      <div className="clouds clouds-top">
        <div className="cloud cloud-t1"></div>
        <div className="cloud cloud-t2"></div>
        <div className="cloud cloud-t3"></div>
      </div>

      <div className="land">
        <video className="base" autoPlay muted playsInline loop>
          <source src="/IntroHelen.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="drone-anim">
          <div className="drone-body">
            <div className="drone-arm drone-arm-fl"></div>
            <div className="drone-arm drone-arm-fr"></div>
            <div className="drone-arm drone-arm-bl"></div>
            <div className="drone-arm drone-arm-br"></div>
            <div className="drone-motor drone-motor-fl"><div className="drone-propeller"></div></div>
            <div className="drone-motor drone-motor-fr"><div className="drone-propeller"></div></div>
            <div className="drone-motor drone-motor-bl"><div className="drone-propeller"></div></div>
            <div className="drone-motor drone-motor-br"><div className="drone-propeller"></div></div>
            <div className="drone-camera"></div>
            <div className="drone-flash"></div>
          </div>
        </div>
      </div>
      <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      <section id="center">
        <div>
          <h1>SkyHughes Aerial Media</h1>
          <p>Professional drone services for stunning aerial photography and videography.</p>
          <p>Contact us today to elevate your projects with breathtaking aerial perspectives.</p>

        </div>
      </section>


      <section id="services">
        <h2 className="services-heading">🎥 Aerial Video Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🔹 Real Estate & Property Marketing</h3>
            <ul>
              <li>Residential home listings</li>
              <li>Luxury property videos</li>
              <li>Land & acreage showcase</li>
              <li>Real estate development overview</li>
              <li>Property walkthrough (drone + exterior focus)</li>
            </ul>
            <p className="service-tagline">👉 Helps properties sell faster and stand out online</p>
            <Link to="/services/real-estate" className="service-link">Click Here →</Link>
          </div>

          <div className="service-card">
            <h3>🔹 Airbnb & Vacation Rental Content</h3>
            <ul>
              <li>Cabin and vacation rental showcase videos</li>
              <li>Scenic surroundings (mountains, rivers, views)</li>
              <li>Listing highlight reels (Airbnb / VRBO)</li>
              <li>Social media promo clips</li>
            </ul>
            <p className="service-tagline">👉 Designed to increase bookings and visibility</p>
            <Link to="/services/airbnb" className="service-link">Click Here →</Link>
          </div>

          <div className="service-card">
            <h3>🔹 Business & Tourism Promotion</h3>
            <ul>
              <li>Wineries, resorts, and lodges</li>
              <li>Restaurants with outdoor/scenic views</li>
              <li>Adventure businesses (tubing, hiking tours, rentals)</li>
              <li>Promotional videos for websites and ads</li>
            </ul>
            <p className="service-tagline">👉 Helps businesses attract more customers</p>
            <Link to="/services/business" className="service-link">Click Here →</Link>
          </div>

          <div className="service-card">
            <h3>🔹 Weddings & Special Events</h3>
            <ul>
              <li>Wedding venue aerial coverage</li>
              <li>Ceremony and highlight shots</li>
              <li>Engagement and proposal videos</li>
              <li>Anniversary celebrations</li>
            </ul>
            <p className="service-tagline">👉 Cinematic storytelling for once-in-a-lifetime moments</p>
            <Link to="/services/weddings" className="service-link">Click Here →</Link>
          </div>

          <div className="service-card">
            <h3>🔹 Family & Personal Memory Films</h3>
            <ul>
              <li>Family gatherings and milestones</li>
              <li>Home memory videos</li>
              <li>Pregnancy and newborn moments</li>
              <li>Moving-out or legacy videos</li>
            </ul>
            <p className="service-tagline">👉 Capture meaningful moments to keep forever</p>
            <Link to="/services/family" className="service-link">Click Here →</Link>
          </div>

          <div className="service-card">
            <h3>🔹 Outdoor & Adventure Experiences</h3>
            <ul>
              <li>Hiking trips and scenic journeys</li>
              <li>Camping and outdoor lifestyle</li>
              <li>River, lake, and kayaking activities</li>
              <li>Personal adventure videos</li>
            </ul>
            <p className="service-tagline">👉 Perfect for personal memories and social sharing</p>
            <Link to="/services/outdoor" className="service-link">Click Here →</Link>
          </div>

          <div className="service-card">
            <h3>🔹 Events, Festivals & Community</h3>
            <ul>
              <li>Local festivals and parades</li>
              <li>Concerts and public events</li>
              <li>Community gatherings</li>
              <li>City/town promotional footage</li>
            </ul>
            <p className="service-tagline">👉 Great for marketing and community engagement</p>
            <Link to="/services/events" className="service-link">Click Here →</Link>
          </div>

          <div className="service-card">
            <h3>🔹 Construction & Land Development</h3>
            <ul>
              <li>Construction progress tracking</li>
              <li>Before/after land transformation</li>
              <li>Development site overview</li>
              <li>Project documentation videos</li>
            </ul>
            <p className="service-tagline">👉 Useful for builders, developers, and investors</p>
            <Link to="/services/construction" className="service-link">Click Here →</Link>
          </div>

          <div className="service-card">
            <h3>🔹 Farms, Ranches & Rural Properties</h3>
            <ul>
              <li>Farm and agricultural land overview</li>
              <li>Livestock and ranch footage</li>
              <li>Large property marketing</li>
              <li>Rural estate showcase</li>
            </ul>
            <p className="service-tagline">👉 Highlights scale and natural beauty</p>
            <Link to="/services/farms" className="service-link">Click Here →</Link>
          </div>

          <div className="service-card">
            <h3>🔹 Commercial & Creative Projects</h3>
            <ul>
              <li>Automotive and dealership videos</li>
              <li>Brand storytelling content</li>
              <li>Creative video projects</li>
              <li>Stock footage production</li>
            </ul>
            <p className="service-tagline">👉 For advertising, branding, and creative media use</p>
            <Link to="/services/commercial" className="service-link">Click Here →</Link>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="contact-cta">
        <h2>📬 Ready to Get Started?</h2>
        <p>Let's bring your vision to life with stunning aerial footage.</p>
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </section>

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
    </>
  )
}

export default App
