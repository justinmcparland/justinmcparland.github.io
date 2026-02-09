import {
  profile,
  education,
  projects,
  experience,
  leadership,
  skills,
  extracurriculars,
} from "./data.js";

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <div className="section-header">
      <p className="eyebrow">{title}</p>
      <div className="divider" />
    </div>
    {children}
  </section>
);

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">JM</span>
          <div>
            <p className="brand-name">Justin McParland</p>
            <p className="brand-sub">Biomedical Engineering</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#leadership">Leadership</a>
          <a href="#extracurriculars">Extracurriculars</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-text">
            <p className="kicker">Portfolio</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button" href={`mailto:${profile.email}`}>
                Email Me
              </a>
              <a
                className="button ghost"
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-card">
            <p className="card-title">At a Glance</p>
            <div className="card-row">
              <span>Location</span>
              <span>{profile.locations}</span>
            </div>
            <div className="card-row">
              <span>Phone</span>
              <span>{profile.phone}</span>
            </div>
            <div className="card-row">
              <span>Email</span>
              <span>{profile.email}</span>
            </div>
            <div className="card-row">
              <span>LinkedIn</span>
              <span>{profile.linkedin}</span>
            </div>
          </div>
        </section>

        <Section id="projects" title="Featured Projects">
          <div className="card-grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="timeline">
            {experience.map((item) => (
              <div key={item.company} className="timeline-item">
                <div>
                  <h3>{item.role}</h3>
                  <p className="muted">{item.company}</p>
                </div>
                <div className="timeline-meta">
                  <span>{item.location}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="leadership" title="Leadership">
          <ul className="pill-list">
            {leadership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section id="extracurriculars" title="Extracurriculars">
          <ul className="pill-list">
            {extracurriculars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <ul className="pill-list">
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          <div className="card-grid two">
            {education.map((item) => (
              <article key={item.school} className="card">
                <h3>{item.school}</h3>
                <p className="muted">{item.degree}</p>
                <p>{item.location}</p>
                <p className="muted">{item.date}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contact">
            <p>
              Interested in collaborating on medical device innovation or research
              projects? Let’s connect.
            </p>
            <div className="contact-actions">
              <a className="button" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="button ghost" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>References available upon request.</p>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  );
}
