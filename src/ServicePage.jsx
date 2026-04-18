import { useParams, Link } from 'react-router-dom'
import services from './serviceData'
import './ServicePage.css'
import './App.css'
import Yonahmountain from './assets/Yonahmountain.png'

function ServicePage() {
    const { slug } = useParams()
    const service = services[slug]

    if (!service) {
        return (
            <div className="service-page">
                <header className="site-nav">
                    <Link to="/" className="nav-logo">SkyHughes</Link>
                    <nav>
                        <Link to="/">Home</Link>
                        <a href="/#services">Services</a>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </header>
                <div className="service-content">
                    <h1>Service Not Found</h1>
                    <p>Sorry, we couldn't find that service.</p>
                    <Link to="/" className="back-link">← Back to Home</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="service-page">
            <header className="site-nav">
                <Link to="/" className="nav-logo">SkyHughes</Link>
                <nav>
                    <Link to="/">Home</Link>
                    <a href="/#services">Services</a>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            {slug === 'outdoor' && (
                <div className="service-hero" style={{ backgroundImage: `url(${Yonahmountain})` }}>
                    <div className="service-hero-overlay">
                        <h1>{service.icon} {service.title}</h1>
                    </div>
                </div>
            )}

            <div className="service-content">
                {slug !== 'outdoor' && <h1>{service.icon} {service.title}</h1>}
                <p className="service-tagline-page">{service.tagline}</p>

                <section className="service-description">
                    <p>{service.description}</p>
                </section>

                <section className="service-features">
                    <h2>What We Offer</h2>
                    <ul>
                        {service.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section className="service-why">
                    <h2>Why Choose SkyHughes?</h2>
                    <p>{service.whyUs}</p>
                </section>

                <div className="service-cta">
                    <Link to="/contact" className="contact-button">📬 Get a Free Quote</Link>
                    <Link to="/" className="back-link">← Back to All Services</Link>
                </div>
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

export default ServicePage
