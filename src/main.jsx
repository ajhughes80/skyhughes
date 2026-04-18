import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx'
import Gallery from './Gallery.jsx'
import Pricing from './Pricing.jsx'
import ServicePage from './ServicePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
