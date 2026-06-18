import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import services from './serviceData'
import Nav from './Nav'
import { useNightMode } from './hooks/useNightMode'
import './ServicePage.css'
import './App.css'

// Build Pexels CDN video URLs for a given ID.
// Multiple sources are tried in order so the browser picks the first it can play.
function pexelsSources(id) {
    return [
        `https://videos.pexels.com/video-files/${id}/${id}-hd_1920_1080_30fps.mp4`,
        `https://videos.pexels.com/video-files/${id}/${id}-hd_1920_1080_25fps.mp4`,
        `https://videos.pexels.com/video-files/${id}/${id}-hd_1280_720_30fps.mp4`,
        `https://videos.pexels.com/video-files/${id}/${id}-hd_1280_720_25fps.mp4`,
    ]
}

function pexelsPoster(id) {
    return `https://images.pexels.com/videos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`
}

function ServicePage() {
    const { slug } = useParams()
    const [nightMode, setNightMode] = useNightMode()
    const service = services[slug]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (!service) {
        return (
            <div className="service-page">
                <Nav nightMode={nightMode} onToggleNight={() => setNightMode(!nightMode)} />
                <div className="service-content">
                    <h1>Service Not Found</h1>
                    <p>Sorry, we couldn't find that service.</p>
                    <Link to="/" className="back-link">← Back to Home</Link>
                </div>
            </div>
        )
    }

    const { pexelsId } = service

    return (
        <div className="service-page">
            <Nav nightMode={nightMode} onToggleNight={() => setNightMode(!nightMode)} />

            <div className="service-content">
                <h1>{service.icon} {service.title}</h1>
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

                {pexelsId && (
                    <div className="service-inline-video">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            poster={pexelsPoster(pexelsId)}
                        >
                            {pexelsSources(pexelsId).map((src) => (
                                <source key={src} src={src} type="video/mp4" />
                            ))}
                        </video>
                        <p className="service-credit">
                            Demo video:{' '}
                            <a href={`https://www.pexels.com/video/${pexelsId}/`} target="_blank" rel="noopener noreferrer">
                                Pexels
                            </a>{' '}
                            — will be replaced with SkyHughes footage.
                        </p>
                    </div>
                )}

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
