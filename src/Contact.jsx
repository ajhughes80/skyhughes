import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import './App.css'

// REPLACE with your actual API Gateway URL after deploying the Lambda
// Example: "https://abc123xyz.execute-api.us-east-1.amazonaws.com/contact"
const API_URL = "https://8g2l17aby0.execute-api.us-east-1.amazonaws.com/prod/contact"

function Contact() {
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('sending')

        const form = e.target
        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            service: form.service.value,
            location: form.location.value,
            date: form.date.value,
            message: form.message.value,
        }

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (!res.ok) throw new Error('Failed to send')
            setStatus('sent')
            form.reset()
        } catch {
            setStatus('error')
        }
    }

    return (
        <>
            <header className="site-nav">
                <Link to="/" className="nav-logo">SkyHughes</Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            <div className="clouds clouds-top">
                <div className="cloud cloud-t1"></div>
                <div className="cloud cloud-t2"></div>
                <div className="cloud cloud-t3"></div>
            </div>

            <div className="contact-page">

                <h1>📬 Contact Us</h1>
                <p className="contact-subtitle">Have a project in mind? Fill out the form below and we'll get back to you!</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input type="text" id="name" name="name" placeholder="Your Full Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" placeholder="you@example.com" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" placeholder="(optional)" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service *</label>
                            <select id="service" name="service" required>
                                <option value="">Select a Service</option>
                                <option value="real-estate">Real Estate & Property Marketing</option>
                                <option value="airbnb">Airbnb & Vacation Rental Content</option>
                                <option value="business">Business & Tourism Promotion</option>
                                <option value="weddings">Weddings & Special Events</option>
                                <option value="family">Family & Personal Memory Films</option>
                                <option value="outdoor">Outdoor & Adventure Experiences</option>
                                <option value="events">Events, Festivals & Community</option>
                                <option value="construction">Construction & Land Development</option>
                                <option value="farms">Farms, Ranches & Rural Properties</option>
                                <option value="commercial">Commercial & Creative Projects</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Event/Project Location</label>
                        <input type="text" id="location" name="location" placeholder="City, State (optional)" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Preferred Date</label>
                        <input type="date" id="date" name="date" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Project Details *</label>
                        <textarea id="message" name="message" placeholder="Tell us about your project, vision, and any specific requirements..." rows="6" required></textarea>
                    </div>

                    <button type="submit" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'sent' && <p className="form-success">Thank you! We will be in touch soon.</p>}
                    {status === 'error' && <p className="form-error">Something went wrong. Please try again or email us directly.</p>}
                </form>

                <p className="contact-phone">📞 Prefer to talk? Give us a call: <a href="tel:+18287676604">828-767-6604</a></p>
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
        </>
    )
}

export default Contact
