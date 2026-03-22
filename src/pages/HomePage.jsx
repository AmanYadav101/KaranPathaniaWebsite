import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SLIDES, SERVICES, PROJECTS } from "../data";
import { ContactForm } from "../components";

export default function HomePage() {
  const navigate = useNavigate();
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);
  const total = SLIDES.length;

  const goTo = useCallback((n) => setCur((n + total) % total), [total]);

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(cur + 1), 5500);
    return () => clearInterval(timerRef.current);
  }, [cur, goTo]);

  return (
    <div>
      {/* ── HERO SLIDESHOW ── */}
      <section className="hero">
        <div
          className="slides-wrap"
          style={{ transform: `translateX(-${cur * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div key={i} className={`slide ${i === cur ? "active" : ""}`}>
              <div
                className="slide-bg"
                style={{ backgroundImage: `url('${s.bg}')` }}
              />
              <div className="slide-content">
                <div className="slide-tag">{s.tag}</div>
                <h1 className="slide-title">{s.title}</h1>
                <p className="slide-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slide-counter">
          {String(cur + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
        <div className="slide-controls">
          <div className="dot-row">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === cur ? "active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <div className="arrow-btns">
            <button className="arrow-btn" onClick={() => goTo(cur - 1)}>
              ←
            </button>
            <button className="arrow-btn" onClick={() => goTo(cur + 1)}>
              →
            </button>
          </div>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      {/* ── STAT STRIP ── */}
      <div className="strip">
        {[
          ["28+", "Years in Practice"],
          ["340+", "Projects Delivered"],
          ["12", "Countries Served"],
          ["80+", "Expert Engineers"],
        ].map(([n, l]) => (
          <div className="strip-stat" key={l}>
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section">
        <div className="sec-label">What We Do</div>
        <h2 className="sec-title">
          A full spectrum of engineering disciplines
        </h2>
        <div className="services-grid-home">
          {SERVICES.map((s) => (
            <div className="svc-card" key={s.title}>
              <div className="svc-icon">⬡</div>
              <div className="svc-name">{s.title}</div>
              <div className="svc-body">{s.desc.slice(0, 110)}…</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <button className="btn-ghost" onClick={() => navigate("/services")}>
            All Services →
          </button>
        </div>
      </section>

      {/* ── PROJECTS MOSAIC ── */}
      <section className="section alt">
        <div className="sec-label">Our Work</div>
        <h2 className="sec-title">Selected projects across India and beyond</h2>
        <div className="proj-mosaic">
          {PROJECTS.slice(0, 5).map((p, i) => (
            <div key={p.name} className={`proj-card ${i === 0 ? "tall" : ""}`}>
              <div
                className="proj-bg"
                style={{ backgroundImage: `url('${p.img}')`, height: "100%" }}
              />
              <div className="proj-overlay" />
              <div className="proj-info">
                <span>
                  {p.type} · {p.location}
                </span>
                <h4>{p.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <button className="btn-ghost" onClick={() => navigate("/projects")}>
            View All Projects →
          </button>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="section">
        <div className="about-split">
          <div className="about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
              alt="About Parmar Constructions"
            />
          </div>
          <div className="about-text">
            <div className="sec-label">Who We Are</div>
            <h2 className="sec-title" style={{ marginBottom: 24 }}>
              Three decades of precision, integrity, and innovation
            </h2>
            <p>
              Founded in 1996, Parmar Constructions has grown from a structural
              design firm into a multi-disciplinary practice serving clients
              across India, the Middle East, and Southeast Asia.
            </p>
            <p>
              Our team of 80+ engineers, architects, and analysts brings deep
              technical expertise and a genuine commitment to timely delivery
              and client partnership.
            </p>
            <p>
              We believe the best engineering is invisible — seamlessly
              integrated, quietly reliable, and built to last.
            </p>
            <div
              style={{
                marginTop: 24,
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn-primary"
                onClick={() => navigate("/founder")}
              >
                Meet the Founder
              </button>
              <button
                className="btn-outline"
                onClick={() => navigate("/key-persons")}
              >
                Our Team
              </button>
            </div>
          </div>
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
                ["Head Office", "SCO 88–89, Sector 17C, Chandigarh — 160 017"],
                ["Phone", "+91 172 270 4400"],
                ["Email", "enquiries@Parmar Constructions.com"],
              ].map(([l, v]) => (
                <div className="contact-row" key={l}>
                  <p>{l}</p>
                  <strong>{v}</strong>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <button
                className="btn-primary"
                onClick={() => navigate("/contact")}
              >
                Full Contact Page →
              </button>
            </div>
          </div>
          <ContactForm dark />
        </div>
      </section>
    </div>
  );
}
