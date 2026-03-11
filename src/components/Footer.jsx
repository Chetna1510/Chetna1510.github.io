import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
const SOCIALS = [
  { icon: <FaGithub size={18} />, l: 'GitHub', url: 'https://github.com/Chetna1510', color: '#ffffff' },
  { icon: <FaLinkedin size={18} />, l: 'LinkedIn', url: 'https://www.linkedin.com/in/chetnabhootaka/', color: '#0a66c2' },
  { icon: <FaFacebook size={18} />, l: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100007786595749', color: '#1877f2' },
];
export default function Footer({ setPage }) {

  return (
    <footer
      className="py-4"
      style={{ background: 'var(--cb-surface)', borderTop: '1px solid var(--cb-border)' }}
    >
      {/* Main row */}
      <div
        className="d-flex justify-content-between align-items-center flex-wrap gap-4 mx-auto"
        style={{ maxWidth: 1100, padding: '0 2rem' }}
      >
        {/* Brand */}
        <div>
          <div
            className="fw-bold mb-1"
            onClick={() => setPage('Home')}
            style={{ fontSize: '1.3rem', color: 'var(--cb-purple)', cursor: 'pointer' }}
          >
            CB.
          </div>
          <p
            className="mb-0 fw-light"
            style={{ fontSize: '0.78rem', color: 'var(--cb-muted)', maxWidth: 280, lineHeight: 1.6 }}
          >
            Building clean, accessible web solutions — one thoughtful line of code at a time.
          </p>
        </div>

        {/* Socials */}
        <div className="text-end">
          <div className="mb-2 fw-semibold" style={{ fontSize: '0.78rem', color: 'var(--cb-muted)' }}>
            Connect with me
          </div>

          <div className="d-flex gap-2">
            {SOCIALS.map(s => (
              <a
                key={s.l}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.l}
                className="d-flex align-items-center justify-content-center rounded-3 text-decoration-none"
                style={{
                  width: 38, height: 38,
                  background: 'var(--cb-card)',
                  border: '1px solid var(--cb-border)',
                  cursor: 'pointer',
                  color: s.color,
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="text-center mt-4 pt-3 mx-auto"
        style={{
          maxWidth: 1100,
          padding: '0 2rem',
          borderTop: '1px solid var(--cb-border)',
          fontSize: '0.75rem',
          color: 'var(--cb-dim)',
        }}
      >
        © 2026 Chetna Bhootaka. All rights reserved.
      </div>
    </footer>
  );
}
