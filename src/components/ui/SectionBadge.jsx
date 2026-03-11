export default function SectionBadge({ children }) {
  return (
    <span
      className="d-inline-block rounded-pill fw-semibold text-uppercase mb-3"
      style={{
        padding: '4px 14px',
        background: 'var(--cb-purple-bg)',
        border: '1px solid rgba(124,111,205,0.3)',
        color: 'var(--cb-purple)',
        fontSize: '0.72rem',
        letterSpacing: '0.08em',
      }}
    >
      {children}
    </span>
  );
}
