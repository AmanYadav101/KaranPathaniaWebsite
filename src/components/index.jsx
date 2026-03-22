import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/* ── PLACEHOLDER ── */
export function Placeholder({ label, hint }) {
  return (
    <div className="todo-box">
      <div className="todo-label">Placeholder — {label}</div>
      <p>
        <strong>{hint}</strong>
      </p>
    </div>
  );
}

/* ── TOAST ── */
export function Toast({ msg, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3200);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div className="toast">{msg}</div>;
}

/* ── NAV ── */
const NAV_LINKS = [
  { label: "Services", path: "/services" },
  { label: "Founder", path: "/founder" },
  { label: "Key Persons", path: "/key-persons" },
  { label: "Projects", path: "/projects" },
  { label: "Careers", path: "/careers" },
  { label: "Newsletters", path: "/newsletters" },
  { label: "Contact Us", path: "/contact", cta: true },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const navigate = useNavigate();

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span>P</span>RAMAR
        </Link>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.path}>
              <Link to={l.path} className={l.cta ? "nav-cta" : ""}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        {NAV_LINKS.map((l) => (
          <Link key={l.path} to={l.path} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}

/* ── FOOTER ── */
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <span>V</span>ERTEX
          </div>
          <p className="footer-desc">
            Parmar Constructions Pvt. Ltd.
            <br />
            Multi-disciplinary engineering since 1996.
            <br />
            Chandigarh · Delhi · Mumbai · Bengaluru
          </p>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/founder">Founder</Link>
            </li>
            <li>
              <Link to="/key-persons">Key Persons</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/newsletters">Newsletters</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services">Structural Engineering</Link>
            </li>
            <li>
              <Link to="/services">MEP Consultancy</Link>
            </li>
            <li>
              <Link to="/services">Sustainable Design</Link>
            </li>
            <li>
              <Link to="/services">Civil & Infrastructure</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <span>SCO 88–89, Sector 17C</span>
            </li>
            <li>
              <span>Chandigarh — 160 017</span>
            </li>
            <li>
              <span>+91 172 270 4400</span>
            </li>
            <li>
              <span>enquiries@parmarconstructions.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Parmar Constructions Pvt. Ltd. All rights reserved.</span>
        <span>CIN: U74210CH1996PTC018742</span>
      </div>
    </footer>
  );
}

/* ── CONTACT FORM ── */
export function ContactForm({ dark = false }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handle = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    // TODO: replace with real API call e.g. fetch('/api/contact', { method:'POST', body: JSON.stringify(form) })
    setSent(true);
    setForm({ name: "", email: "", project: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  if (sent)
    return (
      <div className="success-box">
        <div className="s-icon">✓</div>
        <h4>Message received!</h4>
        <p>We will get back to you within 2 business days.</p>
      </div>
    );

  return (
    <form onSubmit={submit} className={dark ? "" : "form-light"}>
      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => handle("name", e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => handle("email", e.target.value)}
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Project Type</label>
        <input
          value={form.project}
          onChange={(e) => handle("project", e.target.value)}
          placeholder="e.g. Commercial high-rise, Township"
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          required
          value={form.message}
          onChange={(e) => handle("message", e.target.value)}
          placeholder="Tell us about your project…"
        />
      </div>
      <button
        className="btn-primary"
        type="submit"
        style={{ width: "100%", justifyContent: "center" }}
      >
        Send Enquiry
      </button>
    </form>
  );
}
