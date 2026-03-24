import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { SLIDES, SERVICES, PROJECTS, STATS, COMPANY } from '../data'
import { ContactForm } from '../components'

export default function HomePage() {
  const navigate = useNavigate()
  const [cur, setCur] = useState(0)
  const timerRef = useRef(null)
  const total = SLIDES.length

  const goTo = useCallback((n) => setCur((n + total) % total), [total])

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(cur + 1), 5800)
    return () => clearInterval(timerRef.current)
  }, [cur, goTo])

  return (
    <div>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="slides-wrap" style={{ transform: `translateX(-${cur * 100}%)` }}>
          {SLIDES.map((s, i) => (
            <div key={i} className={`slide ${i === cur ? 'active' : ''}`}>
              <div className="slide-bg" style={{ backgroundImage: `url('${s.bg}')` }} />
              <div className="slide-content">
                <div className="slide-tag">{s.tag}</div>
                <h1 className="slide-title">{s.title}</h1>
                <p className="slide-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slide-counter">{String(cur + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
        <div className="slide-controls">
          <div className="dot-row">
            {SLIDES.map((_, i) => <button key={i} className={`dot ${i === cur ? 'active' : ''}`} onClick={() => goTo(i)} />)}
          </div>
          <div className="arrow-btns">
            <button className="arrow-btn" onClick={() => goTo(cur - 1)}>←</button>
            <button className="arrow-btn" onClick={() => goTo(cur + 1)}>→</button>
          </div>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      {/* ── STAT STRIP ── */}
      <div className="strip">
        {STATS.map(s => (
          <div className="strip-stat" key={s.label}>
            <strong>{s.num}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── INTRO ── */}
      <section className="section">
        <div className="about-split">
          <div className="about-img-wrap">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80" alt="Him Setu Infrastructure" />
          </div>
          <div className="about-text">
            <div className="sec-label">Who We Are</div>
            <h2 className="sec-title" style={{ marginBottom: 24 }}>Civil engineering built on 15 years of government trust</h2>
            <p>Him Setu Infrastructure Private Limited is a government-authorized civil engineering contractor specializing in the construction, development, and maintenance of roads, buildings, bridges, and infrastructure works across Himachal Pradesh.</p>
            <p>Founded by Directors Ankush Parmar and Rohit Kapil — each with 15+ years of active infrastructure experience — we bring hands-on, director-led project execution to every contract we undertake.</p>
            <p>We are an authorized service provider to the PWD and IPH Department, ensuring full compliance with public sector infrastructure standards and government procurement guidelines.</p>
            <div style={{ marginTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate('/about')}>About the Company</button>
              <button className="btn-outline" onClick={() => navigate('/directors')}>Meet the Directors</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section alt">
        <div className="sec-label">What We Do</div>
        <h2 className="sec-title">Full-cycle civil engineering services</h2>
        <div className="services-grid-home">
          {SERVICES.map(s => (
            <div className="svc-card" key={s.title}>
              <div className="svc-icon">⬡</div>
              <div className="svc-name">{s.title}</div>
              <div className="svc-body">{s.desc.slice(0, 100)}…</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <button className="btn-ghost" onClick={() => navigate('/services')}>All Services →</button>
        </div>
      </section>

      {/* ── PROJECTS MOSAIC ── */}
      <section className="section">
        <div className="sec-label">Our Work</div>
        <h2 className="sec-title">Government and infrastructure projects across HP</h2>
        <div className="proj-mosaic">
          {PROJECTS.slice(0, 5).map((p, i) => (
            <div key={p.name} className={`proj-card ${i === 0 ? 'tall' : ''}`}>
              <div className="proj-bg" style={{ backgroundImage: `url('${p.img}')`, height: '100%' }} />
              <div className="proj-overlay" />
              <div className="proj-info">
                <span>{p.type} · {p.location}</span>
                <h4>{p.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <button className="btn-ghost" onClick={() => navigate('/projects')}>View All Projects →</button>
        </div>
      </section>

      {/* ── GOVERNMENT AUTHORIZATION HIGHLIGHT ── */}
      <section className="section teal">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, textAlign: 'center' }}>
          {[
            ['PWD Authorized', 'Approved contractor for Public Works Department projects across Himachal Pradesh.'],
            ['IPH Authorized', 'Certified service provider for Irrigation and Public Health Department contracts.'],
            ['Incorporated 2026', 'Recently registered Private Limited entity with full statutory compliance and active credentials.'],
          ].map(([title, desc]) => (
            <div key={title}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: '#fff', marginBottom: 12 }}>{title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="section dark">
        <div className="contact-split">
          <div>
            <div className="sec-label">Reach Out</div>
            <h2 className="sec-title">Let's discuss your project</h2>
            <div className="contact-info-block">
              {[
                ['Director — Ankush Parmar', `${COMPANY.phone}\n${COMPANY.email}`],
                ['Director — Rohit Kapil', `${COMPANY.phone2}\n${COMPANY.email}`],
                ['Location', 'Himachal Pradesh, India'],
              ].map(([l, v]) => (
                <div className="contact-row" key={l}>
                  <p>{l}</p>
                  <strong style={{ whiteSpace: 'pre-line' }}>{v}</strong>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <button className="btn-primary" onClick={() => navigate('/contact')}>Full Contact Page →</button>
            </div>
          </div>
          <ContactForm dark />
        </div>
      </section>
    </div>
  )
}
