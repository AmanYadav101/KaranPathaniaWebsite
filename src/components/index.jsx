import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data";

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

export function Toast({ msg, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3200);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div className="toast">{msg}</div>;
}

const NAV_LINKS = [
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Directors", path: "/directors" },
  { label: "Projects", path: "/projects" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact", cta: true },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          {/* Replace with: <img src="/logo.png" alt="Him Setu" className="nav-logo-img" /> */}
          <span>H</span>IM SETU
          <small>INFRASTRUCTURE</small>
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

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <span>H</span>IM SETU
            <br />
            <small>INFRASTRUCTURE</small>
          </div>
          <p className="footer-desc">
            Him Setu Infrastructure Private Limited
            <br />
            Incorporated 19 March 2026
            <br />
            Government Authorized Civil Contractor
            <br />
            Himachal Pradesh, India
          </p>
          <p className="footer-desc" style={{ marginTop: 14 }}>
            Authorized contractor for PWD and NHAI Department projects across
            Himachal Pradesh.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services">Civil Engineering Works</Link>
            </li>
            <li>
              <Link to="/services">Government Contracting</Link>
            </li>
            <li>
              <Link to="/services">Infrastructure Development</Link>
            </li>
            <li>
              <Link to="/services">DPR Preparation</Link>
            </li>
            <li>
              <Link to="/services">Project Management</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/directors">Directors</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <span>{COMPANY.email}</span>
            </li>
            <li>
              <span>Ankush: {COMPANY.phone}</span>
            </li>
            <li>
              <span>Rohit: {COMPANY.phone2}</span>
            </li>
            <li>
              <span>Himachal Pradesh, India</span>
            </li>
            <li>
              <span>PWD & NHAI Authorized</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 Him Setu Infrastructure Private Limited. All rights reserved.
        </span>
        <span>Incorporated 19.03.2026 · Government Contractor · HP, India</span>
      </div>
    </footer>
  );
}

export function ContactForm({ dark = false }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const handle = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    // TODO: POST to /api/contact or use Formspree/EmailJS
    setSent(true);
    setForm({ name: "", email: "", phone: "", project: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  if (sent)
    return (
      <div className="success-box">
        <div className="s-icon">✓</div>
        <h4>Message received!</h4>
        <p>We will respond within 2 business days.</p>
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
      <div className="form-row">
        <div className="form-group">
          <label>Phone</label>
          <input
            value={form.phone}
            onChange={(e) => handle("phone", e.target.value)}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div className="form-group">
          <label>Project Type</label>
          <input
            value={form.project}
            onChange={(e) => handle("project", e.target.value)}
            placeholder="e.g. Road, Bridge, Building"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          required
          value={form.message}
          onChange={(e) => handle("message", e.target.value)}
          placeholder="Tell us about your project or requirement…"
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
