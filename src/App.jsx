import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Nav, Footer } from './components'
import HomePage from './pages/HomePage'
import {
  ServicesPage,
  FounderPage,
  KeyPersonsPage,
  ProjectsPage,
  ContactPage,
  CareersPage,
  NewslettersPage,
} from './pages'

/* Scroll to top on every route change */
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
        <Route path="/"             element={<HomePage />} />
        <Route path="/services"     element={<ServicesPage />} />
        <Route path="/founder"      element={<FounderPage />} />
        <Route path="/key-persons"  element={<KeyPersonsPage />} />
        <Route path="/projects"     element={<ProjectsPage />} />
        <Route path="/contact"      element={<ContactPage />} />
        <Route path="/careers"      element={<CareersPage />} />
        <Route path="/newsletters"  element={<NewslettersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
