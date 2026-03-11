export default function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`fw-bold ${className}`}
      style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        color: 'var(--cb-white)',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
      }}
    >
      {children}
    </h2>
  );
}
