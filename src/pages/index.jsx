import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import {
  SERVICES,
  BUSINESS_OBJECTS,
  DIRECTORS,
  PROJECTS,
  JOBS,
  ADVANTAGES,
  SERVICE_TIERS,
  LIFECYCLE,
  CLIENTS,
  COMPANY,
} from "../data";
import { Placeholder, Toast, ContactForm } from "../components";

/* ═══════════════ SERVICES ═══════════════ */
export function ServicesPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / Services</div>
          <h1>Our Services</h1>
          <p>
            Full-cycle civil engineering — from feasibility and planning through
            construction, supervision, and maintenance.
          </p>
        </div>
      </div>

      {/* Service Tiers */}
      <section className="section">
        <div className="sec-label">Service Structure</div>
        <h2 className="sec-title">Four tiers of integrated delivery</h2>
        <p className="sec-intro">
          Our services are structured across four tiers to ensure every project
          receives the right expertise at every stage — from initial planning
          through long-term maintenance.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
            marginBottom: 60,
          }}
        >
          {SERVICE_TIERS.map((t) => (
            <div
              key={t.num}
              style={{
                background: "var(--white)",
                padding: "36px 28px",
                borderTop: "3px solid var(--teal)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 32,
                  color: "var(--teal)",
                  opacity: 0.4,
                  marginBottom: 14,
                }}
              >
                {t.num}
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 500, marginBottom: 10 }}>
                {t.title}
              </h4>
              <p
                style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.65 }}
              >
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="sec-label">Detailed Services</div>
        <h2 className="sec-title">What we deliver</h2>
        <div className="services-list">
          {SERVICES.map((s, i) => (
            <div className="svc-row" key={s.title}>
              <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="svc-detail">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-tags">
                  {s.tags.map((t) => (
                    <span className="svc-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Objects */}
      <section className="section alt">
        <div className="sec-label">Statutory Business Objects</div>
        <h2 className="sec-title">Our registered objects of business</h2>
        <p className="sec-intro">
          The following are the registered business objects of Him Setu
          Infrastructure Private Limited as per the Memorandum of Association
          filed with the Registrar of Companies.
        </p>
        <div className="objects-list">
          {BUSINESS_OBJECTS.map((obj, i) => (
            <div className="obj-item" key={i}>
              <div className="obj-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="obj-text">{obj}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Lifecycle */}
      <section className="section">
        <div className="sec-label">How We Work</div>
        <h2 className="sec-title">Project service lifecycle</h2>
        <p className="sec-intro">
          Every Him Setu project follows a structured five-phase lifecycle
          ensuring quality, compliance, and client satisfaction from brief to
          handover.
        </p>
        <div className="lifecycle-row">
          {LIFECYCLE.map((l) => (
            <div className="lifecycle-step" key={l.num}>
              <div className="lc-num">{l.num}</div>
              <div className="lc-phase">{l.phase}</div>
              <div className="lc-desc">{l.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Categories */}
      <section className="section alt">
        <div className="sec-label">Who We Serve</div>
        <h2 className="sec-title">Client & stakeholder categories</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {CLIENTS.map((c) => (
            <div
              key={c.title}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                padding: "28px 24px",
                borderLeft: "3px solid var(--teal)",
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 500, marginBottom: 10 }}>
                {c.title}
              </h4>
              <p
                style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.65 }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ ABOUT ═══════════════ */
export function AboutPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / About Us</div>
          <h1>About Him Setu Infrastructure</h1>
          <p>
            A government-authorized civil engineering contractor built on 15+
            years of trust, expertise, and on-ground execution excellence.
          </p>
        </div>
      </div>

      {/* Company Introduction */}
      <section className="section">
        <div className="about-split">
          <div className="about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80"
              alt="Infrastructure work"
            />
          </div>
          <div className="about-text">
            <div className="sec-label">Company Profile</div>
            <h2 className="sec-title" style={{ marginBottom: 24 }}>
              Core identity & foundation
            </h2>
            <p>
              Him Setu Infrastructure Private Limited specializes in civil
              engineering and infrastructure development with government
              contractor authorization. We are incorporated as a Private Limited
              Company under the Companies Act, registered on 19 March 2026.
            </p>
            <p>
              The company is led by its two director-founders — Ankush Parmar
              and Rohit Kapil — who collectively bring over 15 years of
              continuous government contracting expertise in infrastructure,
              road construction, and allied civil works across Himachal Pradesh.
            </p>
            <p>
              We are an authorized service provider to the PWD and NHAI
              Department, ensuring compliance with public sector infrastructure
              standards, government procurement guidelines, and all applicable
              statutory requirements.
            </p>
            <div
              style={{
                marginTop: 28,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {[
                ["Incorporated", "19 March 2026"],
                ["Entity Type", "Private Limited Company"],
                ["Authorization", "PWD & NHAI Department"],
                ["Experience", "15+ Combined Years"],
              ].map(([l, v]) => (
                <div
                  key={l}
                  style={{
                    borderLeft: "3px solid var(--teal)",
                    paddingLeft: 14,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--mid)",
                      marginBottom: 4,
                    }}
                  >
                    {l}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="section alt">
        <div className="sec-label">Why Choose Us</div>
        <h2 className="sec-title">Competitive positioning</h2>
        <p className="sec-intro">
          Six core pillars that set Him Setu apart from general civil
          contractors in the Himalayan infrastructure market.
        </p>
        <div className="advantages-grid">
          {ADVANTAGES.map((a) => (
            <div className="adv-card" key={a.num}>
              <div className="adv-num">{a.num}</div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Registration */}
      <section className="section">
        <div className="sec-label">Legal Entity & Registration</div>
        <h2 className="sec-title">Business mandate & registration</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {[
            [
              "Legal Entity & Credentials",
              "Private Limited Company with Government Contractor credentials, fully authorized for infrastructure projects and public works.",
            ],
            [
              "Regulatory Compliance",
              "Fully aligned with civil engineering standards and government procurement guidelines for infrastructure sector operations.",
            ],
            [
              "Incorporation & Registration",
              "Officially registered on 19.03.2026, ensuring current compliance with all statutory and regulatory requirements.",
            ],
            [
              "Operational Status",
              "Active and operational with complete statutory compliance, meeting all legal and administrative requirements.",
            ],
            [
              "Experience & Leadership",
              "Recently incorporated company led by directors with 15+ years collective experience in the infrastructure sector.",
            ],
            [
              "Authorized Departments",
              "Approved vendor for PWD and NHAI Department contracts, enabling execution of government-sanctioned projects.",
            ],
          ].map(([title, desc]) => (
            <div key={title} className="info-card">
              <div className="ic-label">Registration</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SWOT / Positioning */}
      <section className="section alt">
        <div className="sec-label">Strategic Analysis</div>
        <h2 className="sec-title">Competitive advantages & positioning</h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          {[
            {
              label: "Core Strengths",
              color: "var(--teal)",
              items: [
                "15+ years of proven government contracting experience",
                "Director-led hands-on management approach",
                "Government department approvals (PWD/NHAI)",
                "Comprehensive service portfolio covering multiple infrastructure domains",
                "Proven track record in road and infrastructure construction projects",
              ],
            },
            {
              label: "Growth Opportunities",
              color: "#1a5fa8",
              items: [
                "Government infrastructure spending expansion initiatives",
                "Growing private sector infrastructure demand in HP",
                "PPP (Public-Private Partnership) project opportunities",
                "Infrastructure maintenance contract expansion potential",
                "Consultancy service scaling and diversification possibilities",
              ],
            },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderTop: `4px solid ${s.color}`,
                padding: "32px 28px",
              }}
            >
              <h4
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  marginBottom: 18,
                  color: s.color,
                }}
              >
                {s.label}
              </h4>
              {s.items.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    marginBottom: 10,
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ color: s.color, fontSize: 16, lineHeight: 1 }}>
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--mid)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* <Placeholder
          label="Full SWOT Analysis"
          hint="Add Current Limitations and Industry Threats sections below the two cards above, using the same card styling. Reference the Competitive Advantages & Differentiation slide from the company PDF."
        /> */}
      </section>

      {/* Value Proposition */}
      <section className="section dark">
        <div className="sec-label">Our Promise</div>
        <h2 className="sec-title">Market positioning & value proposition</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 28,
            marginTop: 20,
          }}
        >
          {[
            [
              "Core Positioning",
              "Trusted government infrastructure contractor with 15+ years proven execution excellence and demonstrated project delivery success.",
            ],
            [
              "Unique Value Proposition",
              "Director-led management, government credibility, and comprehensive services from planning through maintenance ensure superior outcomes.",
            ],
            [
              "Client Promise",
              "Reliable, experienced partner delivering transparent execution, quality assurance, and stakeholder confidence in infrastructure projects.",
            ],
            [
              "Competitive Edge",
              "Government approval credentials combined with senior expertise guarantees project success and institutional trust.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.15)",
                paddingTop: 24,
              }}
            >
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--teal-lt)",
                  marginBottom: 12,
                }}
              >
                {t}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {d}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ DIRECTORS ═══════════════ */
export function DirectorsPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / Directors</div>
          <h1>Directors & Leadership</h1>
          <p>
            Him Setu is founded and led by two experienced civil engineering
            professionals with a combined 15+ years of government contracting
            expertise.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="sec-label">Founders</div>
        <h2 className="sec-title">The directors behind Him Setu</h2>
        <p className="sec-intro">
          Both directors serve as primary promoters — ensuring aligned vision,
          strategic oversight, and hands-on project management across every
          assignment the firm undertakes.
        </p>

        <div className="directors-grid">
          {DIRECTORS.map((d) => (
            <div className="director-card" key={d.id}>
              <div className="director-photo">
                {/* Dummy photo — replace with real headshot */}
                <img src={d.img} alt={d.name} />
              </div>
              <div className="director-info">
                <h3>{d.name}</h3>
                <div className="director-role">{d.role}</div>
                <p>{d.bio}</p>
                <p>{d.bio2}</p>
                {/* <Placeholder
                  label={`${d.name} — Real Photo`}
                  hint={`Replace the dummy photo above with an actual headshot of ${d.name}. Save as public/images/${d.id}.jpg (recommended: 400×530px, professional background).`}
                /> */}
                <div className="director-quals">
                  {d.quals.map(([l, v]) => (
                    <div className="director-qual" key={l}>
                      <span className="ql">{l}</span>
                      <span className="qv">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="director-contact">
                  <a href={`mailto:${d.email}`}>{d.email}</a>
                  <a href={`tel:${d.phone}`}>{d.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promoter model */}
      <section className="section alt">
        <div className="sec-label">Leadership Model</div>
        <h2 className="sec-title">Director-promoter model</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {[
            [
              "Promoter Model",
              "Directors serve as primary promoters ensuring aligned vision, strategic oversight, and hands-on project management throughout execution.",
            ],
            [
              "Collective Expertise",
              "Combined 15+ years in government contracting, road construction, and infrastructure project execution with proven track record.",
            ],
            [
              "Track Record",
              "Demonstrated capability delivering projects for government authorities and institutional clients with consistent quality and timeline adherence.",
            ],
            [
              "Director Leadership",
              "Hands-on management by experienced founders ensures quality, accountability, and operational excellence on every project.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="adv-card">
              <h4 style={{ marginBottom: 10 }}>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ PROJECTS ═══════════════ */
export function ProjectsPage() {
  const categories = [
    "All",
    ...Array.from(new Set(PROJECTS.map((p) => p.category))),
  ];
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / Projects</div>
          <h1>Our Projects</h1>
          <p>
            Government and private infrastructure projects delivered across
            Himachal Pradesh with quality and compliance.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="sec-label">Portfolio</div>
        <h2 className="sec-title">Selected works</h2>
        <div className="proj-filter">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="proj-grid">
          {filtered.map((p) => (
            <div key={p.name}>
              <div className="proj-item">
                <div
                  className="proj-bg-full"
                  style={{ backgroundImage: `url('${p.img}')` }}
                />
                <div className="proj-overlay" />
                <div className="proj-info">
                  <span>{p.services}</span>
                  <h4>{p.name}</h4>
                </div>
              </div>
              <div className="proj-detail">
                <h4>{p.name}</h4>
                <div className="meta">
                  {p.type} · {p.location} · {p.year}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Placeholder
          label="Real Project Data"
          hint="Replace sample projects in src/data/index.js → PROJECTS array with actual completed projects. Each entry needs: name, type, location, year, services, img (upload to public/images/projects/), category."
        /> */}
      </section>

      <section className="section alt">
        <div className="sec-label">Growth Roadmap</div>
        <h2 className="sec-title">2026 strategic plan</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {[
            [
              "Q1 — Strategic Focus",
              "Market positioning strengthening through enhanced brand visibility. Government department relationship deepening via stakeholder engagement. Service portfolio documentation for service clarity.",
            ],
            [
              "Q2 — Expansion Plan",
              "Private sector expansion initiation to diversify client base. Consultancy service marketing to increase market awareness. Infrastructure project pipeline development for growth opportunities.",
            ],
            [
              "Q3 — Development Goals",
              "PPP project opportunity pursuit for revenue generation. Specialized service line development including maintenance and advisory services. Geographic expansion to new territories.",
            ],
            [
              "Q4 — Strategic Review",
              "Annual performance consolidation and results evaluation. Next-year planning with strategic roadmap development. Strategic partnership exploration to support 2027 growth objectives.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              style={{ background: "var(--white)", padding: "36px 28px" }}
            >
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  marginBottom: 12,
                  color: "var(--teal)",
                }}
              >
                {t}
              </h4>
              <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7 }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ CONTACT ═══════════════ */
export function ContactPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / Contact</div>
          <h1>Get in Touch</h1>
          <p>
            Reach out to either director directly — we respond to all project
            enquiries promptly.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="contact-page-grid">
          <div>
            <div className="contact-info-cards">
              {[
                {
                  label: "Director — Ankush Parmar",
                  title: COMPANY.phone,
                  detail: `${COMPANY.email}\nSpecialization: Infrastructure Planning & Project Execution`,
                },
                {
                  label: "Director — Rohit Kapil",
                  title: COMPANY.phone2,
                  detail: `${COMPANY.email}\nSpecialization: Construction Operations & Quality Management`,
                },
                {
                  label: "Company Email",
                  title: COMPANY.email,
                  detail:
                    "For project enquiries, tenders, and partnership opportunities",
                },
                {
                  label: "Headquarters",
                  title: "Himachal Pradesh, India",
                  detail:
                    "Incorporated 19.03.2026 as Private Limited entity\nPWD & NHAI Authorized Contractor",
                },
              ].map((c) => (
                <div className="info-card" key={c.label}>
                  <div className="ic-label">{c.label}</div>
                  <h4>{c.title}</h4>
                  <p>{c.detail}</p>
                </div>
              ))}
            </div>
            <div className="map-placeholder">
              <p>📍 Himachal Pradesh, India</p>
              <p style={{ fontSize: 11, marginTop: 6 }}>
                Replace with Google Maps iframe
              </p>
            </div>
            {/* <Placeholder
              label="Office Address & Map"
              hint="Add the exact registered office address and replace the map placeholder with a Google Maps iframe. The registered address should be available on your Certificate of Incorporation."
            /> */}
          </div>

          <div className="contact-page-form">
            <h3>Send us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ APPLY MODAL ═══════════════ */
let APP_COUNTER = 1000;

function ApplyModal({ job, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    exp: "",
    cover: "",
    file: null,
    fileName: "",
  });
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [appId, setAppId] = useState(null);
  const fileRef = useRef();
  const handle = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (f) {
      handle("file", f);
      handle("fileName", f.name);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with real API — see README
    // const fd = new FormData()
    // Object.entries({jobId:job.id,name:form.name,email:form.email,phone:form.phone,experience:form.exp,cover:form.cover}).forEach(([k,v])=>fd.append(k,v))
    // if (form.file) fd.append('resume', form.file)
    // await fetch('/api/applications', { method:'POST', body: fd })
    await new Promise((r) => setTimeout(r, 1300));
    const id = ++APP_COUNTER;
    setAppId(id);
    setLoading(false);
    setStep("success");
    onSubmit({
      id,
      jobTitle: job.title,
      name: form.name,
      email: form.email,
      appliedAt: new Date().toLocaleString("en-IN"),
      status: "pending",
    });
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        {step === "form" ? (
          <>
            <h3>Apply — {job.title}</h3>
            <p className="modal-sub">
              {job.dept} · {job.location} · {job.experience}
            </p>
            <form onSubmit={submit} className="form-light">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => handle("name", e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
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
                  <label>Phone *</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => handle("phone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="form-group">
                  <label>Years of Experience *</label>
                  <input
                    required
                    value={form.exp}
                    onChange={(e) => handle("exp", e.target.value)}
                    placeholder="e.g. 4"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Resume / CV</label>
                <input
                  type="file"
                  ref={fileRef}
                  style={{ display: "none" }}
                  accept=".pdf,.doc,.docx"
                  onChange={handleFile}
                />
                <div
                  className="file-upload"
                  onClick={() => fileRef.current.click()}
                >
                  <div className="upload-icon">📎</div>
                  <strong>
                    {form.fileName || "Click to upload Resume / CV"}
                  </strong>
                  <p>PDF, DOC or DOCX · max 5 MB</p>
                </div>
              </div>
              <div className="form-group">
                <label>Cover Note (optional)</label>
                <textarea
                  value={form.cover}
                  onChange={(e) => handle("cover", e.target.value)}
                  placeholder="Tell us why you're a great fit for this role…"
                  style={{ minHeight: 90 }}
                />
              </div>
              <button
                className="btn-primary"
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Submitting…" : "Submit Application"}
              </button>
            </form>
          </>
        ) : (
          <div className="success-box">
            <div className="s-icon">✅</div>
            <h4>Application Submitted!</h4>
            <p>
              Thank you, <strong>{form.name}</strong>! We've received your
              application for <strong>{job.title}</strong>.<br />
              We'll be in touch within 7–10 business days.
            </p>
            <p style={{ marginTop: 12, fontSize: 12, color: "var(--mid)" }}>
              Application ID: HSI-{appId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════ CAREERS ═══════════════ */
export function CareersPage() {
  const [activeJob, setActiveJob] = useState(null);
  const [toast, setToast] = useState("");
  const [apps, setApps] = useState([]);

  const handleSubmit = (app) => {
    setApps((a) => [...a, app]);
    setTimeout(() => setToast(`Application submitted — ID HSI-${app.id}`), 800);
  };

  return (
    <div className="page">
      {activeJob && (
        <ApplyModal
          job={activeJob}
          onClose={() => setActiveJob(null)}
          onSubmit={handleSubmit}
        />
      )}
      {toast && <Toast msg={toast} onDone={() => setToast("")} />}

      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / Careers</div>
          <h1>Join Him Setu</h1>
          <p>
            We are looking for civil engineers and infrastructure professionals
            ready to work on meaningful government projects across Himachal
            Pradesh.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="careers-intro">
          <div>
            <div className="sec-label">Why Join Us</div>
            <h2 className="sec-title" style={{ marginBottom: 20 }}>
              Build a career in infrastructure
            </h2>
            <p>
              At Him Setu, you work directly alongside the founding directors on
              government infrastructure contracts. There are no layers of
              bureaucracy — you get real project responsibility from day one.
            </p>
          </div>
          <div>
            <p>
              We are a young, growing company with big ambitions. Joining early
              means growing with us as we expand our project portfolio across
              PWD, NHAI, and private sector contracts in Himachal Pradesh and
              beyond.
            </p>
            <p style={{ marginTop: 16 }}>
              We value field readiness, technical accuracy, and a commitment to
              quality that reflects our directors' own standards.
            </p>
          </div>
        </div>

        <div className="perks-grid">
          {[
            [
              "🏗️",
              "Real Projects",
              "Work on active government PWD and NHAI infrastructure contracts.",
            ],
            [
              "📋",
              "Early Responsibility",
              "Direct exposure to project execution, supervision, and client interaction.",
            ],
            [
              "🌄",
              "HP Locations",
              "Work in the beautiful Himalayan terrain of Himachal Pradesh.",
            ],
            [
              "📈",
              "Growth Opportunity",
              "Join a young firm — grow as the company grows.",
            ],
            [
              "👷",
              "Field Experience",
              "Hands-on site experience with senior director mentorship.",
            ],
            [
              "⚖️",
              "Stable Employment",
              "Government contracts provide consistent, long-term work.",
            ],
          ].map(([icon, title, desc]) => (
            <div className="perk-card" key={title}>
              <div className="perk-icon">{icon}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 28,
            fontWeight: 400,
            marginBottom: 24,
          }}
        >
          Current Openings
        </h3>
        <div className="jobs-list">
          {JOBS.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-info">
                <h4>{job.title}</h4>
                <div className="job-meta">
                  <span className="job-badge">{job.dept}</span>
                  <span className="job-badge">{job.location}</span>
                  <span className="job-badge">{job.type}</span>
                  <span className="job-badge">{job.experience}</span>
                  <span className="job-badge open">Open</span>
                </div>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 13,
                    color: "var(--mid)",
                    maxWidth: 560,
                  }}
                >
                  {job.desc}
                </p>
              </div>
              <button className="apply-btn" onClick={() => setActiveJob(job)}>
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {apps.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 24,
                fontWeight: 400,
                marginBottom: 18,
              }}
            >
              Submitted Applications
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                background: "var(--border)",
                border: "1px solid var(--border)",
              }}
            >
              {apps.map((a) => (
                <div
                  key={a.id}
                  style={{
                    background: "var(--white)",
                    padding: "16px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <div>
                    <strong style={{ fontSize: 14 }}>{a.name}</strong>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--mid)",
                        marginLeft: 10,
                      }}
                    >
                      → {a.jobTitle}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "var(--mid)",
                        marginLeft: 10,
                      }}
                    >
                      {a.appliedAt}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span className={`status-chip ${a.status}`}>
                      {a.status}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--mid)" }}>
                      HSI-{a.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* <Placeholder
          label="Backend — Applications"
          hint="To persist applications: POST form data to /api/applications using FormData (include resume file). Backend needs Node.js + Express + Multer. See README for full setup. Or use Formspree for a no-backend option."
        /> */}

        <div style={{ marginTop: 50 }}>
          <div className="sec-label">No suitable opening?</div>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 400,
              marginBottom: 16,
            }}
          >
            Send a speculative application
          </h3>
          <p style={{ color: "var(--mid)", marginBottom: 24, maxWidth: 520 }}>
            We're always open to hearing from capable civil engineers, even when
            we have no specific vacancy listed.
          </p>
          <button
            className="btn-outline"
            onClick={() =>
              setActiveJob({
                id: 0,
                title: "Speculative Application",
                dept: "General",
                location: "Himachal Pradesh",
                type: "Open",
                experience: "Any",
              })
            }
          >
            Submit CV Speculatively
          </button>
        </div>
      </section>
    </div>
  );
}
