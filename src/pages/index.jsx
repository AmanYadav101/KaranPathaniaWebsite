import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SERVICES, KEY_PERSONS, PROJECTS, JOBS, NEWSLETTERS } from "../data";
import { Placeholder, Toast, ContactForm } from "../components";

/* ═══════════════ SERVICES ═══════════════ */
export function ServicesPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / Services</div>
          <h1>Our Engineering Services</h1>
          <p>
            From structural design to sustainability advisory — we bring
            multi-disciplinary expertise under one roof.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="sec-label">What We Do</div>
        <h2 className="sec-title">
          Six practice areas, one integrated approach
        </h2>
        <p className="sec-intro">
          Each practice is led by a dedicated specialist and supported by a team
          that collaborates across disciplines.
        </p>
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

      <section className="section alt">
        <div className="sec-label">Case Studies</div>
        <h2 className="sec-title">See our services in action</h2>
        <Placeholder
          label="Case Studies"
          hint="Add 3–4 featured case study cards here — one per major service, each with a project photo, brief outcome summary, and a link to the Projects page."
        />
      </section>

      <section className="section">
        <div className="sec-label">Process</div>
        <h2 className="sec-title">How we work with you</h2>
        <Placeholder
          label="Process / Methodology"
          hint="Add a step-by-step visual: Brief → Concept → Design Development → Documentation → Supervision → Handover. Each step should have a short description and icon."
        />
      </section>
    </div>
  );
}

/* ═══════════════ FOUNDER ═══════════════ */
export function FounderPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / Founder</div>
          <h1>Our Founder</h1>
          <p>
            The vision and values behind three decades of engineering
            excellence.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="founder-layout">
          <div>
            <div className="founder-img">
              {/* TODO: Replace with <img src="/images/founder.jpg" alt="Dr. Vijay Kumar Malhotra" /> */}
              <div className="founder-img-placeholder">VK</div>
            </div>
            {/* <Placeholder
              label="Founder Photo"
              hint="Replace the initials above with an <img> tag. Recommended: 600×800px professional portrait. Save it in public/images/founder.jpg"
            /> */}
          </div>

          <div className="founder-content">
            <div className="sec-label">Founder &amp; Chairman</div>
            <h2>Dr. Karan Pathania</h2>
            <div className="role">
              Founder &amp; Chairman — Parmar Constructions
            </div>

            <p>
              Future Dr. Karan Pathania established Parmar Constructions in 1996
              with a conviction that Indian infrastructure deserved rigorous,
              internationally benchmarked engineering design. What began as a
              two-person structural consultancy in Chandigarh has grown into a
              practice of 80+ engineers across five offices.
            </p>
            <p>
              Over three decades, Dr. Malhotra has personally led the structural
              design of more than 60 landmark projects — from the Bandra Kurla
              Corporate Park in Mumbai to the Ramanujan IT City in Chennai — and
              has been a key voice in shaping engineering education policy in
              Punjab and Haryana.
            </p>
            <p>
              His philosophy is simple:{" "}
              <em>
                "Good engineering is invisible. If people notice the structure,
                we have failed. If a building simply works — for decades,
                quietly, reliably — we have succeeded."
              </em>
            </p>

            {/* <Placeholder
              label="Extended Biography"
              hint="Add 2–3 more paragraphs covering early career, founding story, notable personal milestones, publications or awards, and current interests outside the firm."
            /> */}

            <div className="founder-quals">
              {[
                [
                  "Education",
                  "B.Tech (Civil), IIT Delhi · Ph.D (Structural Engineering), University of Surrey, UK",
                ],
                [
                  "Fellowship",
                  "Fellow, Institution of Engineers (India) · FIStructE (UK)",
                ],
                [
                  "Awards",
                  "ASCE India Section Award 2018 · CII Built Environment Award 2020",
                ],
                [
                  "Publications",
                  "14 peer-reviewed papers · Contributing author, IS 13920 revision committee",
                ],
              ].map(([l, v]) => (
                <div className="founder-qual" key={l}>
                  <span className="label">{l}</span>
                  <span className="val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="sec-label">Message</div>
        <h2 className="sec-title">A word from the founder</h2>
        {/* <Placeholder
          label="Founder's Message / Video"
          hint="Add a founder's message here — a styled letter with pull-quote formatting, or embed a short YouTube/Vimeo video. Recommended video length: 2–3 minutes."
        /> */}
      </section>
    </div>
  );
}

/* ═══════════════ KEY PERSONS ═══════════════ */
export function KeyPersonsPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / Key Persons</div>
          <h1>Our Team of Experts</h1>
          <p>
            80+ engineers, consultants, and specialists — united by a passion
            for precision.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="sec-label">Leadership</div>
        <h2 className="sec-title">The people who lead our practice</h2>
        <p className="sec-intro">
          Each team lead brings deep specialisation and a track record of
          delivering complex, landmark projects.
        </p>
        <div className="team-grid">
          {KEY_PERSONS.map((p) => (
            <div className="team-card" key={p.name}>
              <div className="team-photo">
                {/* TODO: Replace with <img src={`/images/team/${p.id}.jpg`} alt={p.name} /> */}
                <div className="team-photo-placeholder">
                  {p.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <div className="team-info">
                <h3>{p.name}</h3>
                <div className="role">{p.role}</div>
                <p>{p.bio}</p>
                <div className="quals">{p.quals}</div>
              </div>
            </div>
          ))}
        </div>
        {/* <Placeholder
          label="Team Photos"
          hint="Replace each initials placeholder with an <img> tag. Save photos as public/images/team/rajiv-anand.jpg etc. Recommended: 400×530px, consistent background."
        /> */}
      </section>

      <section className="section alt">
        <div className="sec-label">Extended Team</div>
        <h2 className="sec-title">Associates &amp; Collaborators</h2>
        {/* <Placeholder
          label="Associates Section"
          hint="Add a secondary grid showing associate consultants, external collaborators, or advisors. Use a simpler horizontal card layout with name, company, and expertise."
        /> */}
      </section>

      <section className="section">
        <div className="sec-label">Strength by Numbers</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {[
            ["80+", "Engineers & Specialists"],
            ["28", "Avg. Experience (yrs)"],
            ["6", "Practice Disciplines"],
            ["5", "Office Locations"],
          ].map(([n, l]) => (
            <div
              key={l}
              style={{
                background: "var(--white)",
                padding: "36px 28px",
                textAlign: "center",
              }}
            >
              <strong
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 40,
                  fontWeight: 400,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                {n}
              </strong>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mid)",
                }}
              >
                {l}
              </span>
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
            340+ projects delivered across India, the Middle East, and Southeast
            Asia since 1996.
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
          label="More Projects"
          hint="Add more project objects to src/data/index.js → PROJECTS array. Each needs: name, type, location, year, services, img (URL or local path), category."
        /> */}
      </section>

      <section className="section alt">
        <div className="sec-label">Awards &amp; Recognition</div>
        <h2 className="sec-title">Industry recognition</h2>
        {/* <Placeholder
          label="Awards Section"
          hint="Add a grid or timeline of awards: ASCE India, CII Built Environment, CREDAI awards, etc. Each entry: year, award body, project name, category."
        /> */}
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
          <p>We respond to all project enquiries within 2 business days.</p>
        </div>
      </div>

      <section className="section">
        <div className="contact-page-grid">
          <div>
            <div className="contact-info-cards">
              {[
                {
                  label: "Head Office",
                  title: "Chandigarh",
                  detail:
                    "SCO 88–89, Sector 17C\nChandigarh — 160 017\nPunjab, India",
                },
                {
                  label: "Branch",
                  title: "New Delhi",
                  detail:
                    "Unit 14, Okhla Industrial Area Phase III\nNew Delhi — 110 020",
                },
                {
                  label: "Phone",
                  title: "+91 172 270 4400",
                  detail: "Mon – Fri, 9:00 am – 6:30 pm IST",
                },
                {
                  label: "Email",
                  title: "enquiries@parmarconstructions.com",
                  detail: "For general enquiries and project proposals",
                },
              ].map((c) => (
                <div className="info-card" key={c.label}>
                  <div className="ic-label">{c.label}</div>
                  <h4>{c.title}</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{c.detail}</p>
                </div>
              ))}
            </div>

            {/* TODO: Replace with Google Maps embed */}
            <div className="map-placeholder">
              <p>📍 Map Embed — Sector 17C, Chandigarh</p>
              <p style={{ fontSize: 11, marginTop: 6 }}>
                Replace with Google Maps iframe
              </p>
            </div>
            <Placeholder
              label="Google Maps Embed"
              hint={`Replace map above with:\n<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="280" style={{border:0}} allowFullScreen loading="lazy"></iframe>`}
            />
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

    // ── BACKEND HOOK ──────────────────────────────────────────────
    // To connect a real backend, replace the timeout below with:
    //
    // const formData = new FormData()
    // formData.append('jobId', job.id)
    // formData.append('name', form.name)
    // formData.append('email', form.email)
    // formData.append('phone', form.phone)
    // formData.append('experience', form.exp)
    // formData.append('cover', form.cover)
    // if (form.file) formData.append('resume', form.file)
    // const res = await fetch('/api/applications', { method: 'POST', body: formData })
    // const data = await res.json()
    // const id = data.applicationId
    // ─────────────────────────────────────────────────────────────

    await new Promise((r) => setTimeout(r, 1400)); // simulated API delay
    const id = ++APP_COUNTER;
    setAppId(id);
    setLoading(false);
    setStep("success");
    onSubmit({
      id,
      jobId: job.id,
      jobTitle: job.title,
      name: form.name,
      email: form.email,
      phone: form.phone,
      experience: form.exp,
      resume: form.fileName || "No file",
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
                    placeholder="e.g. 5"
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
                  placeholder="Tell us why you're a great fit…"
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
              Our HR team will review it and be in touch within 7–10 business
              days.
            </p>
            <p style={{ marginTop: 12, fontSize: 12, color: "var(--mid)" }}>
              Application ID: VEX-{appId}
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
    setTimeout(() => setToast(`Application submitted — ID VEX-${app.id}`), 800);
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
          <h1>Join Our Team</h1>
          <p>
            We're always looking for talented engineers who want to work on
            meaningful, complex projects.
          </p>
        </div>
      </div>

      <section className="section">
        {/* Intro */}
        <div className="careers-intro">
          <div>
            <div className="sec-label">Why Parmar Constructions</div>
            <h2 className="sec-title" style={{ marginBottom: 20 }}>
              Build a career that matters
            </h2>
            <p>
              At Parmar Constructions, you work alongside India's top
              structural, MEP, and sustainability experts on landmark projects.
              We invest in our people through mentorship, continuous learning,
              and international exposure.
            </p>
          </div>
          <div>
            <p>
              We have a flat, merit-driven culture where junior engineers are
              given real responsibility early. Many of our senior leaders joined
              as freshers and grew within the firm over 10–15 years.
            </p>
            <p style={{ marginTop: 16 }}>
              We are headquartered in Chandigarh with offices in Delhi and
              Mumbai, and regularly deploy team members to project sites across
              India and the Gulf.
            </p>
          </div>
        </div>

        {/* Perks */}
        <div className="perks-grid">
          {[
            [
              "🏗️",
              "Complex Projects",
              "Work on technically challenging, landmark builds from day one.",
            ],
            [
              "📚",
              "Learning & Dev",
              "Structured CPD, sponsored certifications (LEED, PMP), and mentorship.",
            ],
            [
              "🌍",
              "International Exposure",
              "Opportunities to work on projects in UAE, Singapore, and beyond.",
            ],
            [
              "⚖️",
              "Work-Life Balance",
              "Flexible hours, generous leave, and a supportive team culture.",
            ],
            [
              "💡",
              "Ownership",
              "Real responsibility from early career — not just drafting for seniors.",
            ],
            [
              "🏥",
              "Health & Wellness",
              "Comprehensive health insurance for you and your family.",
            ],
          ].map(([icon, title, desc]) => (
            <div className="perk-card" key={title}>
              <div className="perk-icon">{icon}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        {/* Jobs */}
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

        {/* Session Applications Log */}
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
              Submitted Applications (this session)
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
                    padding: "18px 24px",
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
                      VEX-{a.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Placeholder
          label="Backend Integration — Applications"
          hint="See the BACKEND INTEGRATION comment inside ApplyModal in src/pages/index.jsx. Replace the setTimeout mock with a real fetch('/api/applications') call using FormData. Add a Node/Express backend with Multer for resume uploads."
        />

        {/* Speculative */}
        <div style={{ marginTop: 50 }}>
          <div className="sec-label">Can't find the right role?</div>
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
          <p style={{ color: "var(--mid)", marginBottom: 24, maxWidth: 560 }}>
            We're always interested in hearing from exceptional engineers, even
            when there's no specific opening.
          </p>
          <button
            className="btn-outline"
            onClick={() =>
              setActiveJob({
                id: 0,
                title: "Speculative Application",
                dept: "General",
                location: "Any Office",
                type: "Any",
                experience: "Open",
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

/* ═══════════════ NEWSLETTERS ═══════════════ */
export function NewslettersPage() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    // TODO: connect to Mailchimp, ConvertKit, or your own /api/newsletter/subscribe endpoint
    setSubbed(true);
    setEmail("");
  };

  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">Home / Newsletters</div>
          <h1>Technical Newsletters</h1>
          <p>
            Insights on structural engineering, sustainability, and the built
            environment — published twice a year.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="sec-label">Archive</div>
        <h2 className="sec-title">All editions</h2>
        <p className="sec-intro">
          Each newsletter is written by our in-house engineers and reflects real
          challenges from active projects. Free to read and share.
        </p>
        <div className="newsletter-grid">
          {NEWSLETTERS.map((n) => (
            <div className="nl-card" key={n.vol}>
              <div className="nl-cover">
                <div
                  className="nl-cover-bg"
                  style={{ backgroundImage: `url('${n.img}')` }}
                />
                <div className="nl-cover-content">
                  <div className="vol">{n.vol}</div>
                  <h3>{n.title}</h3>
                </div>
              </div>
              <div className="nl-body">
                <div className="nl-date">{n.date}</div>
                <h4>{n.title}</h4>
                <p>{n.summary}</p>
                {/* TODO: replace href with actual PDF link or route e.g. /newsletters/vol-12-2024 */}
                <button className="btn-ghost" style={{ fontSize: 12 }}>
                  Read Edition →
                </button>
              </div>
            </div>
          ))}
        </div>
        <Placeholder
          label="Newsletter PDF Links"
          hint="Each 'Read Edition' button should link to a PDF or a dedicated page. Upload PDFs to /public/newsletters/ and link as: window.open('/newsletters/vol-12-2024.pdf'). Or create a route /newsletters/:slug for web-rendered editions."
        />
      </section>

      <section className="section alt">
        <div className="nl-subscribe">
          <div>
            <div className="sec-label">Stay Updated</div>
            <h3>Subscribe to our newsletter</h3>
            <p>
              Join 2,400+ engineers and developers who receive our bi-annual
              technical newsletter.
            </p>
          </div>
          {subbed ? (
            <div className="success-box">
              <div className="s-icon">✓</div>
              <h4>You're subscribed!</h4>
              <p>
                Thank you — we'll send you the next edition when it's ready.
              </p>
            </div>
          ) : (
            <form onSubmit={subscribe}>
              <div className="nl-form">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
                <button type="submit">Subscribe</button>
              </div>
              <p style={{ fontSize: 12, color: "var(--mid)", marginTop: 10 }}>
                No spam. Unsubscribe anytime. Sent twice a year.
              </p>
            </form>
          )}
        </div>
        <Placeholder
          label="Newsletter Subscription Backend"
          hint="Connect subscribe form to: (1) Mailchimp API POST /lists/{list_id}/members, (2) ConvertKit POST /subscribers, or (3) your own /api/newsletter/subscribe endpoint. Add a GDPR privacy note if serving EU users."
        />
      </section>
    </div>
  );
}
