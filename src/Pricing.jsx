import { Link } from 'react-router-dom'
import './Pricing.css'
import './App.css'

function Pricing() {
    return (
        <div className="pricing-page">
            <header className="site-nav">
                <Link to="/" className="nav-logo">🇺🇸 SkyHughes</Link>
                <nav>
                    <Link to="/">Home</Link>
                    <a href="/#services">Services</a>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            <div className="pricing-content">
                <h1>💰 Service Pricing</h1>
                <p className="pricing-subtitle">Transparent pricing for all our aerial media services.</p>

                <div className="pricing-badge">🎉 New Client Special: 25% off Standard Prices!</div>

                <section className="pricing-section">
                    <h2>🏠 Real Estate</h2>
                    <div className="pricing-table-wrap">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Package</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Basic</td>
                                    <td className="price">$100</td>
                                    <td>5–8 aerial photos, 1 location</td>
                                </tr>
                                <tr>
                                    <td>Standard</td>
                                    <td className="price">$200</td>
                                    <td>10–15 photos, basic editing</td>
                                </tr>
                                <tr>
                                    <td>Premium</td>
                                    <td className="price">$300</td>
                                    <td>15–25 photos + short video</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="pricing-section">
                    <h2>🎬 Video</h2>
                    <div className="pricing-table-wrap">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Package</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Basic Video</td>
                                    <td className="price">$200</td>
                                    <td>30–45 sec aerial video</td>
                                </tr>
                                <tr>
                                    <td>Cinematic Video</td>
                                    <td className="price">$350</td>
                                    <td>1–2 min video, color grading</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="pricing-section">
                    <h2>💒 Wedding</h2>
                    <div className="pricing-table-wrap">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Package</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Drone Add-on</td>
                                    <td className="price">$150</td>
                                    <td>Aerial ceremony shots</td>
                                </tr>
                                <tr>
                                    <td>Full Drone Video</td>
                                    <td className="price">$500</td>
                                    <td>Highlight video</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="pricing-section">
                    <h2>📱 Social Media</h2>
                    <div className="pricing-table-wrap">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Package</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Content Package</td>
                                    <td className="price">$250</td>
                                    <td>Photos + vertical clips</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="pricing-section">
                    <h2>🌄 Land</h2>
                    <div className="pricing-table-wrap">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Package</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Land Package</td>
                                    <td className="price">$200</td>
                                    <td>Aerial + boundary overview</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="pricing-section">
                    <h2>➕ Add-Ons</h2>
                    <div className="pricing-table-wrap">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Add-On</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Extra Photos</td>
                                    <td className="price">$50</td>
                                    <td>Additional images</td>
                                </tr>
                                <tr>
                                    <td>Rush Delivery</td>
                                    <td className="price">$75</td>
                                    <td>Same-day delivery</td>
                                </tr>
                                <tr>
                                    <td>Longer Video</td>
                                    <td className="price">$100</td>
                                    <td>Extended video length</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="pricing-section travel-section">
                    <h2>🚗 Flat Travel Fee</h2>
                    <div className="travel-grid">
                        <div className="travel-card">
                            <span className="travel-distance">0–25 miles</span>
                            <span className="travel-fee free">Free</span>
                        </div>
                        <div className="travel-card">
                            <span className="travel-distance">25–50 miles</span>
                            <span className="travel-fee">$25–$50</span>
                        </div>
                        <div className="travel-card">
                            <span className="travel-distance">50+ miles</span>
                            <span className="travel-fee">$50–$100 <small>or open negotiation</small></span>
                        </div>
                    </div>
                </section>

                <div className="pricing-cta">
                    <Link to="/contact" className="contact-button">📬 Request a Quote</Link>
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

export default Pricing
