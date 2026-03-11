import useTypewriter from '../hooks/useTypewriter';
import SectionBadge from '../components/ui/SectionBadge';
import SectionTitle from '../components/ui/SectionTitle';
import Cursor from '../components/ui/Cursor';
import { SKILLS_BARS } from '../constants/data';

const STATS = [['20+', 'Projects'], ['3yr', 'Experience'], ['10+', 'Clients']];
const FLOAT_ICONS = ['⚛️', '🌐', '🎨', '⚡', '🐘'];

export default function Home({ setPage }) {
  const typed = useTypewriter(['Software Engineer', 'React Developer', 'WordPress Expert', 'Python Trainee']);

  return (
    <div style={{ background: 'var(--cb-bg)' }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden"
        style={{ minHeight: '100vh', padding: '120px 2rem 80px' }}
      >
        {/* Floating background icons */}
        {FLOAT_ICONS.map((e, i) => (
          <div
            key={i}
            className="position-absolute float-icon"
            style={{
              fontSize: '2rem', opacity: 0.06, userSelect: 'none',
              top: `${15 + i * 15}%`, left: `${5 + i * 20}%`,
              '--dur': `${3 + i * 0.5}s`, '--delay': `${i * 0.4}s`,
            }}
          >
            {e}
          </div>
        ))}

        {/* Open to Work badge */}
        <div className="fade-up mb-3">
          <span
            className="d-inline-flex align-items-center gap-2 rounded-pill fw-semibold text-uppercase"
            style={{
              padding: '5px 14px',
              background: 'var(--cb-teal-bg)',
              border: '1px solid rgba(0,201,167,0.3)',
              color: 'var(--cb-teal)',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
            }}
          >
            <span
              className="dot-blink rounded-circle d-inline-block"
              style={{ width: 7, height: 7, background: '#22c55e', boxShadow: '0 0 8px #22c55e' }}
            />
            Open to Work
          </span>
        </div>

        {/* Heading */}
        <h1
          className="fw-bold fade-up-1"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            color: 'var(--cb-white)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          Hi, I'm <span style={{ color: 'var(--cb-purple)' }}>Chetna Bhootaka</span>
        </h1>

        {/* Typewriter */}
        <div
          className="fade-up-2 fw-medium"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: 'var(--cb-muted)',
            marginBottom: '1.5rem',
            height: '2rem',
          }}
        >
          I'm a <span style={{ color: 'var(--cb-teal)' }}>{typed}</span><Cursor />
        </div>

        {/* Tagline */}
        <p
          className="fw-light fade-up-3"
          style={{
            fontSize: '1rem', color: 'var(--cb-muted)', maxWidth: 540,
            lineHeight: 1.75, marginBottom: '2.5rem',
          }}
        >
          Based in the Netherlands 🇳🇱 — I love turning complex problems into simple, clean solutions. Whether that's building a WordPress plugin, crafting a React interface, or helping someone navigate a tricky technical issue, I bring the same care and attention to everything I do.
        </p>
        {/* CTA Buttons */}
        <div className="d-flex gap-3 flex-wrap justify-content-center fade-up-4">
          <button className="btn-teal" onClick={() => setPage('Projects')}>View Projects →</button>
          <button className="btn-purple" onClick={() => setPage('Contact')}>Get In Touch</button>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────── */}
      <section className="py-5" style={{ background: 'var(--cb-surface)' }}>
        <div className="mx-auto" style={{ maxWidth: 1100, padding: '2rem' }}>
          <div className="text-center mb-4">
            <SectionBadge>Skills</SectionBadge>
            <SectionTitle>Tech Stack</SectionTitle>
            <p className="fw-light mt-2" style={{ color: 'var(--cb-muted)', fontSize: '0.95rem' }}>
              A collection of technologies I work with to build web applications and solve complex problems.
            </p>
          </div>

          {/* Skill bars – Bootstrap 2-col grid */}
          <div className="row g-3 mx-auto" style={{ maxWidth: 720 }}>
            {SKILLS_BARS.map(s => (
              <div key={s.label} className="col-md-6">
                <div
                  className="skill-row d-flex align-items-center gap-3 rounded-3"
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--cb-card)',
                    border: '1px solid var(--cb-border)',
                  }}
                >
                  <span className="fw-semibold" style={{ color: 'var(--cb-white)', fontSize: '0.88rem', minWidth: 90 }}>
                    {s.label}
                  </span>
                  <div className="flex-grow-1 rounded-3 overflow-hidden" style={{ height: 6, background: 'var(--cb-dim)' }}>
                    <div
                      className="skill-bar-fill h-100 rounded-3"
                      style={{
                        background: `linear-gradient(90deg, ${s.color}, ${s.color}99)`,
                        width: `${s.pct}%`,
                        transition: 'width 1s ease',
                      }}
                    />
                  </div>
                  <span style={{ color: 'var(--cb-muted)', fontSize: '0.8rem', minWidth: 35, textAlign: 'right' }}>
                    {s.pct}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button className="btn-teal" onClick={() => setPage('Projects')}>View All Projects →</button>
          </div>
        </div>
      </section>

      {/* ── LET'S WORK TOGETHER ───────────────────────────────────────── */}
      <section className="py-5" style={{ background: 'var(--cb-bg)' }}>
        <div className="mx-auto" style={{ maxWidth: 1100, padding: '2rem' }}>
          <div
            className="mx-auto text-center rounded-3 p-5"
            style={{
              maxWidth: 640,
              background: 'var(--cb-card)',
              border: '1px solid var(--cb-border)',
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center rounded-3 mx-auto mb-4"
              style={{
                width: 52, height: 52, fontSize: '1.5rem',
                background: 'var(--cb-teal-bg)',
                border: '1px solid rgba(0,201,167,0.3)',
              }}
            >
              ⭐
            </div>
            <h2 className="fw-bold mb-2" style={{ fontSize: '2rem', color: 'var(--cb-white)', letterSpacing: '-0.02em' }}>
              Let's Work Together
            </h2>
            <p className="fw-light mb-4" style={{ color: 'var(--cb-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              I'm currently available for freelance work and open to new opportunities. If you have a project in mind or want to collaborate, let's connect!
            </p>
            <button className="btn-teal" onClick={() => setPage('Contact')}>Get in Touch →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
