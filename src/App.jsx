// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Nav, Footer } from './components'
import HomePage from './pages/HomePage'
import { ServicesPage, AboutPage, DirectorsPage, ProjectsPage, ContactPage, CareersPage } from './pages'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/services"  element={<ServicesPage />} />
        <Route path="/about"     element={<AboutPage />} />
        <Route path="/directors" element={<DirectorsPage />} />
        <Route path="/projects"  element={<ProjectsPage />} />
        <Route path="/contact"   element={<ContactPage />} />
        <Route path="/careers"   element={<CareersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
