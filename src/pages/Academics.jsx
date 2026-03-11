import SectionBadge from '../components/ui/SectionBadge';
import SectionTitle from '../components/ui/SectionTitle';
import { CERTIFICATIONS } from '../constants/data';

const EDUCATION = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Gujarat Technological University, Gujarat',
    stream: 'Computer Engineering ',
    period: '2011 - 2015',
    location: 'Gujarat, India',
    points: [
      'Studied on computer fundamentals, programming, and technical concepts.',
      'Key courses include Data Structures, Algorithms, Programing Languages',
    ],
  },
  {
    degree: 'Secondary High School',
    institution: 'N.L Zaveri High School, Gujarat',
    stream: '',
    period: '2006 - 2011',
    location: 'Gujarat, India',
    points: [
      'Studied with standard school curriculum',
      'core subjects like English, Mathematics and Science',
    ],
  },
];

const iconBoxStyle = {
  width: 48,
  height: 48,
  borderRadius: 10,
  background: 'rgba(0,201,167,0.15)',
  border: '1px solid rgba(0,201,167,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.4rem',
  flexShrink: 0,
};

const cardStyle = {
  background: '#1e2235',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 16,
  padding: '1.8rem',
  height: '100%',
};

const metaStyle = {
  fontSize: '0.8rem',
  color: 'var(--cb-muted)',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
};

export default function Academics() {
  return (
    <div style={{ background: 'var(--cb-bg)', paddingTop: 80 }}>
      <section className="py-5">
        <div className="mx-auto" style={{ maxWidth: 1200, padding: '2rem' }}>

          {/* Header */}
          <div className="text-center mb-5">
            <SectionBadge>Education</SectionBadge>
            <SectionTitle>
              Academic <span style={{ color: 'var(--cb-purple)' }}>Background</span>
            </SectionTitle>
            <p className="fw-light mt-2" style={{ color: 'var(--cb-muted)', fontSize: '0.95rem' }}>
              My educational journey and continuous learning path.
            </p>
          </div>

          {/* Education Cards */}
          <div className="row g-4 mb-5">
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="col-md-4">
                <div style={cardStyle}>

                  {/* Icon + Degree */}
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div style={iconBoxStyle}>🎓</div>
                    <h5 className="fw-bold mb-0" style={{ color: 'var(--cb-white)', fontSize: '1rem', lineHeight: 1.3 }}>
                      {edu.degree}
                    </h5>
                  </div>

                  {/* Institution */}
                  <div className="fw-bold mb-1" style={{ color: 'var(--cb-white)', fontSize: '0.95rem' }}>
                    {edu.institution}
                  </div>

                  {/* Stream */}
                  <div className="mb-3" style={{ color: 'var(--cb-muted)', fontSize: '0.83rem' }}>
                    {edu.stream}
                  </div>

                  {/* Period & Location */}
                  <div className="d-flex flex-wrap gap-3 mb-2">
                    <span style={metaStyle}>
                      📅 {edu.period}
                    </span>
                    <span style={metaStyle}>
                      📍 {edu.location}
                    </span>
                  </div>

                  {/* Divider */}
                  <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '1rem 0' }} />

                  {/* Bullet Points */}
                  <ul className="ps-3 mb-0" style={{ color: 'var(--cb-muted)', fontSize: '0.83rem', lineHeight: 1.75 }}>
                    {edu.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <h3 className="fw-bold text-center mb-4" style={{ fontSize: '1.6rem', color: 'var(--cb-white)' }}>
            Certifications
          </h3>
          <div className="row g-3">
            {CERTIFICATIONS.map(c => (
              <div key={c.title} className="col-md-6">
                <div
                  className="d-flex gap-3 rounded-4 p-4 h-100"
                  style={{ background: '#1e2235', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div style={{ ...iconBoxStyle, fontSize: '1.2rem' }}>🏅</div>
                  <div>
                    <div className="fw-bold mb-1" style={{ color: 'var(--cb-white)', fontSize: '0.95rem' }}>{c.title}</div>
                    <div className="d-flex gap-2 mb-2" style={{ fontSize: '0.75rem', color: 'var(--cb-muted)' }}>
                      <span>🏫 {c.platform}</span>
                      <span>•</span>
                      <span>📅 {c.year}</span>
                    </div>
                    <p className="fw-light mb-0" style={{ fontSize: '0.82rem', color: 'var(--cb-muted)', lineHeight: 1.6 }}>
                      {c.desc}
                    </p>
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
