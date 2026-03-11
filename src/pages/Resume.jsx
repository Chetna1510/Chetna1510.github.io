import SectionBadge from '../components/ui/SectionBadge';
import SectionTitle from '../components/ui/SectionTitle';
import { TECH_ICONS, SOFT_SKILLS, WORK_EXPERIENCE } from '../constants/data';

export default function Resume() {
  return (
    <div style={{ background: 'var(--cb-bg)', paddingTop: 80 }}>
      <section className="py-5">
        <div className="mx-auto" style={{ maxWidth: 1100, padding: '2rem' }}>

          {/* Header */}
          <div className="text-center mb-5">
            <SectionBadge>Resume</SectionBadge>
            <SectionTitle>Skills &amp; <span style={{ color: 'var(--cb-purple)' }}>Experience</span></SectionTitle>
          </div>

          {/* ── WORK EXPERIENCE TIMELINE ─────────────────────────────── */}
          <h3 className="fw-bold mb-4" style={{ fontSize: '1.2rem', color: 'var(--cb-white)' }}>Work Experience</h3>
          <div
            className="rounded-4 p-4 mb-4"
            style={{ background: 'var(--cb-surface)', border: '1px solid var(--cb-border)' }}
          >
            {WORK_EXPERIENCE.map((e, i) => (
              <div
                key={i}
                className="position-relative"
                style={{
                  paddingLeft: '2rem',
                  paddingBottom: i === 0 ? '2.5rem' : 0,
                  borderLeft: `2px solid ${e.active ? 'var(--cb-teal)' : 'var(--cb-dim)'}`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="position-absolute rounded-circle"
                  style={{
                    left: -7, top: 0,
                    width: 12, height: 12,
                    background: e.active ? 'var(--cb-teal)' : 'var(--cb-dim)',
                    border: '2px solid var(--cb-bg)',
                    boxShadow: e.active ? '0 0 10px var(--cb-teal)' : undefined,
                  }}
                />

                {/* Period */}
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span
                    className="text-uppercase fw-semibold"
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      color: e.active ? 'var(--cb-teal)' : 'var(--cb-dim)',
                    }}
                  >
                    {e.period}
                  </span>
                  {e.active && (
                    <span
                      className="fw-bold rounded-2"
                      style={{
                        padding: '2px 8px',
                        background: 'var(--cb-teal-bg)',
                        border: '1px solid rgba(0,201,167,0.25)',
                        fontSize: '0.62rem',
                        color: 'var(--cb-teal)',
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>

                <div className="fw-bold mb-1" style={{ color: 'var(--cb-white)' }}>{e.role}</div>
                <div className="mb-3" style={{ fontSize: '0.82rem', color: 'var(--cb-muted)' }}>{e.company}</div>

                {e.pts.map((pt, j) => (
                  <div key={j} className="d-flex gap-2 mb-1 fw-light" style={{ fontSize: '0.83rem', color: 'var(--cb-muted)' }}>
                    <span className="flex-shrink-0 mt-1" style={{ color: 'var(--cb-purple)' }}>▸</span>
                    {pt}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* ── TECH STACK ───────────────────────────────────────────── */}
          <h3 className="fw-bold mb-3" style={{ fontSize: '1.2rem', color: 'var(--cb-white)' }}>Tech Stack</h3>
          <div
            className="rounded-4 p-4 mb-4"
            style={{ background: 'var(--cb-surface)', border: '1px solid var(--cb-border)' }}
          >
            <div className="row row-cols-3 row-cols-sm-4 row-cols-md-7 g-3">
              {TECH_ICONS.map(t => (
                <div key={t.label} className="col">
                  <div
                    className="tech-icon d-flex flex-column align-items-center gap-2 rounded-3 p-3"
                    style={{ background: 'var(--cb-card)', border: '1px solid var(--cb-border)' }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: 44, height: 44,
                        background: t.bg + '33',
                        border: `1px solid ${t.bg}44`,
                      }}
                    >
                      <i className={t.icon} style={{ fontSize: '1.6rem' }} />
                    </div>
                    <span
                      className="text-center fw-semibold"
                      style={{ fontSize: '0.68rem', color: 'var(--cb-muted)' }}
                    >
                      {t.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SOFT SKILLS ──────────────────────────────────────────── */}
          <h3 className="fw-bold mb-3" style={{ fontSize: '1.2rem', color: 'var(--cb-white)' }}>Soft Skills</h3>
          <div
            className="rounded-4 p-4"
            style={{ background: 'var(--cb-surface)', border: '1px solid var(--cb-border)' }}
          >
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {SOFT_SKILLS.map(s => (
                <div key={s.title} className="col">
                  <div
                    className="soft-card rounded-3 p-3 h-100"
                    style={{ background: 'var(--cb-card)', border: '1px solid var(--cb-border)' }}
                  >
                    <div className="fw-bold mb-1" style={{ color: 'var(--cb-white)', fontSize: '0.88rem' }}>{s.title}</div>
                    <div className="fw-light" style={{ fontSize: '0.78rem', color: 'var(--cb-muted)', lineHeight: 1.55 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
