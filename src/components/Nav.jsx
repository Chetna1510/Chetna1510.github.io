import { NAV_LINKS } from '../constants/data';

export default function Nav({ active, setPage, scrolled }) {
  return (
    <nav
      className="fixed-top"
      style={{
        background: scrolled ? 'rgba(109, 121, 139, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--cb-border)' : 'none',
        transition: 'all 0.3s',
        zIndex: 200,
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between mx-auto"
        style={{ maxWidth: 1100, padding: '1.1rem 2rem' }}
      >
        {/* Logo */}
        <span
          className="fw-bold"
          onClick={() => setPage('Home')}
          style={{ fontSize: '1.3rem', color: 'var(--cb-purple)', letterSpacing: '-0.02em', cursor: 'pointer' }}
        >
          CB.
        </span>

        {/* Links */}
        <div className="d-flex gap-1">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              className={`cb-nav-link${active === link ? ' active' : ''}`}
              onClick={() => setPage(link)}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
