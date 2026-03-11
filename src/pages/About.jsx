import useTypewriter from '../hooks/useTypewriter';
import SectionBadge from '../components/ui/SectionBadge';
import SectionTitle from '../components/ui/SectionTitle';
import Cursor from '../components/ui/Cursor';
import { ABOUT_CARDS } from '../constants/data';

const INFO_ITEMS = [
  ['🎓', 'Education', 'B.Tech, Gujarat, India (2015)'],
  ['📍', 'Location', 'Capelle aan den IJssel, Zuid-Holland'],
  ['💼', 'Role', 'Software Engineer'],
  ['🌐', 'Languages', 'English, Hindi, Gujarati, Dutch (learning)'],
];

export default function About() {
  const typed = useTypewriter(['I Am', 'I Do', 'I Build', 'I Create']);

  return (
    <div style={{ background: 'var(--cb-bg)', paddingTop: 80 }}>
      <section className="py-5">
        <div className="mx-auto" style={{ maxWidth: 1100, padding: '2rem' }}>

          {/* Header */}
          <div className="text-center mb-5">
            <SectionBadge>About Me</SectionBadge>
            <SectionTitle>
              Know Who <span style={{ color: 'var(--cb-purple)' }}>{typed}</span><Cursor />
            </SectionTitle>
            <p
              className="fw-light mx-auto mt-3"
              style={{ color: 'var(--cb-muted)', maxWidth: 560, fontSize: '0.95rem', lineHeight: 1.7 }}
            >
              I'm a Software Engineer passionate about creating clean web solutions through WordPress & React development.
            </p>
          </div>

          {/* Photo + Bio – Bootstrap 2-col */}
          <div className="row g-5 align-items-center justify-content-center mb-5">

            {/* Photo card */}
            <div className="col-md-5 col-lg-4 d-flex justify-content-center">
              <div
                className="rounded-4 overflow-hidden p-4"
                style={{ background: 'var(--cb-surface)', border: '1px solid var(--cb-border)' }}
              >
                <div
                  className="rounded-3 mb-3 w-100 overflow-hidden"
                  style={{ aspectRatio: '4/5' }}
                >
                  <img
                    src="/images/chetna.jpg"
                    alt="Chetna Bhootaka"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  {['📍 Netherlands', '💼 Open to Work'].map(t => (
                    <span
                      key={t}
                      className="rounded-pill fw-semibold"
                      style={{
                        padding: '4px 12px',
                        background: 'var(--cb-teal-bg)',
                        border: '1px solid rgba(0,201,167,0.25)',
                        color: 'var(--cb-teal)',
                        fontSize: '0.72rem',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="col-md-12">
              <h3 className="fw-bold mb-3" style={{ fontSize: '1.4rem', color: 'var(--cb-white)' }}>Who am I?</h3>
              <p className="fw-light mb-3" style={{ color: 'var(--cb-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                Hi, I'm <span className="fw-semibold" style={{ color: 'var(--cb-purple)' }}>Chetna Bhootaka</span>, My journey in tech didn't start with building applications from scratch — it started with fixing them when they broke.
              </p>
              <p className="fw-light mb-3" style={{ color: 'var(--cb-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                After earning my Bachelor's in Computer Engineering, I spent nearly a decade working as a Technical Customer Support Specialist for the WordPress and Shopify ecosystems along with SaaS product. For 9 years, I was the bridge between frustrated users and complex codebases.
              </p>
              <p className="fw-light mb-4" style={{ color: 'var(--cb-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                I loved the detective work of finding a bug - there's something deeply satisfying about that moment a frustrated user goes from "nothing works" to "oh my god, thank you." But more importantly, I learned exactly how users interact with software — and what frustrates them most.
              </p>

              <p className="fw-light mb-4" style={{ color: 'var(--cb-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                In 2022, I moved to the Netherlands. Because I deeply value loyalty and stability, I stayed committed to my employer and continued my technical support role remotely for another three years. However, by 2025, I decided it was time to fully integrate into the Dutch tech market.
                To upskill myself, enrolled in an intensive Full-Stack Web Development Traineeship at Matrix Master in Rotterdam. There, I upgraded my tech stack with modern frameworks like ReactJS, Python, and Django.
              </p>
              <p className="fw-light mb-4" style={{ color: 'var(--cb-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                Outside of work, slowly but seriously learning Dutch (A2 and climbing 📈) — because for me, it's about actually belonging here, not just getting by. Moving countries is its own kind of debugging, and I'm genuinely enjoying figuring out where I fit. When I need to decompress, you'll find me in the kitchen or elbow-deep in a DIY project — I'm happiest when I'm making something.
              </p>

              {/* Info grid – Bootstrap 2-col */}
              <div className="row g-2">
                {INFO_ITEMS.map(([icon, label, value]) => (
                  <div key={label} className="col-6">
                    <div
                      className="rounded-3 p-3"
                      style={{ background: 'var(--cb-surface)', border: '1px solid var(--cb-border)' }}
                    >
                      <div
                        className="text-uppercase mb-1"
                        style={{ fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--cb-dim)' }}
                      >
                        {icon} {label}
                      </div>
                      <div className="fw-semibold" style={{ fontSize: '0.83rem', color: 'var(--cb-white)' }}>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* More About Me cards */}
          <h3 className="fw-bold text-center mb-4" style={{ fontSize: '1.6rem', color: 'var(--cb-white)' }}>
            More About Me
          </h3>
          <div className="row g-3">
            {ABOUT_CARDS.map(c => (
              <div key={c.title} className="col-md-6">
                <div
                  className="about-card rounded-4 p-4 h-100"
                  style={{ background: 'var(--cb-surface)', border: '1px solid var(--cb-border)' }}
                >
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: 42, height: 42, fontSize: '1.2rem',
                        background: 'var(--cb-purple-bg)',
                        border: '1px solid rgba(124,111,205,0.3)',
                      }}
                    >
                      {c.icon}
                    </div>
                    <span className="fw-bold" style={{ color: 'var(--cb-white)', fontSize: '0.95rem' }}>{c.title}</span>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {c.items.map(item => (
                      <div key={item} className="d-flex align-items-center gap-2" style={{ fontSize: '0.83rem', color: 'var(--cb-muted)' }}>
                        <span style={{ color: 'var(--cb-purple)', fontSize: '0.7rem' }}>♥</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
