import { useState } from 'react';
import SectionBadge from '../components/ui/SectionBadge';
import SectionTitle from '../components/ui/SectionTitle';
import { PROJECTS } from '../constants/data';

const FILTERS = ['All', 'Projects', 'Plugin', 'Demo'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div style={{ background: 'var(--cb-bg)', paddingTop: 80 }}>
      <section className="py-5">
        <div className="mx-auto" style={{ maxWidth: 1100, padding: '2rem' }}>

          {/* Header */}
          <div className="text-center mb-4">
            <SectionBadge>Portfolio</SectionBadge>
            <SectionTitle>My <span style={{ color: 'var(--cb-purple)' }}>Projects</span></SectionTitle>
            <p className="fw-light mt-2" style={{ color: 'var(--cb-muted)', fontSize: '0.95rem' }}>
              A showcase of Projects, Plugins, UI work, and experiments I've built.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="fw-semibold rounded-3"
                style={{
                  padding: '8px 20px',
                  border: `1px solid ${filter === f ? 'var(--cb-purple)' : 'var(--cb-dim)'}`,
                  background: filter === f ? 'var(--cb-purple-bg)' : 'transparent',
                  color: filter === f ? 'var(--cb-purple)' : 'var(--cb-muted)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project grid – Bootstrap 3-col */}
          <div className="row g-3">
            {visible.map(p => (
              <div key={p.id} className="col-sm-6 col-md-4">
                <div
                  className="proj-card rounded-4 overflow-hidden h-100"
                  style={{
                    background: 'var(--cb-surface)',
                    border: '1px solid var(--cb-border)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onClick={() => setSelected(p)}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(124,111,205,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: 180, background: '#0d1117' }}
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-100 h-100"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                      />
                    ) : (
                      <div className="d-flex align-items-center justify-content-center w-100 h-100"
                        style={{ background: 'linear-gradient(135deg,#1a0d2e,#0d1117)' }}>
                        <span style={{ fontSize: '3.5rem', opacity: 0.3 }}>{p.emoji}</span>
                      </div>
                    )}
                    {/* Category badge */}
                    <span
                      className="position-absolute top-0 start-0 m-2 fw-semibold rounded-pill"
                      style={{
                        padding: '3px 10px',
                        background: 'rgba(0,0,0,0.7)',
                        border: '1px solid var(--cb-border)',
                        fontSize: '0.68rem',
                        color: 'var(--cb-teal)',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {p.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-3 d-flex flex-column" style={{ flex: 1 }}>
                    <h4 className="fw-bold mb-2" style={{ color: 'var(--cb-white)', fontSize: '0.95rem' }}>{p.title}</h4>
                    <p className="fw-light mb-3" style={{ fontSize: '0.8rem', color: 'var(--cb-muted)', lineHeight: 1.6 }}>{p.desc}</p>

                    {/* Tags + Year */}
                    <div className="d-flex align-items-center justify-content-between gap-1 mb-3">
                      <div className="d-flex flex-wrap gap-1">
                        {p.tags.map(t => (
                          <span
                            key={t}
                            className="fw-semibold rounded-2"
                            style={{
                              padding: '3px 10px',
                              background: 'var(--cb-purple-bg)',
                              border: '1px solid rgba(124,111,205,0.2)',
                              fontSize: '0.68rem',
                              color: 'var(--cb-purple)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Year badge */}
                      {p.year && (
                        <span
                          className="fw-semibold rounded-2 flex-shrink-0"
                          style={{
                            padding: '3px 10px',
                            background: 'var(--cb-teal-bg)',
                            border: '1px solid rgba(0,201,167,0.2)',
                            fontSize: '0.68rem',
                            color: 'var(--cb-teal)',
                          }}
                        >
                          {p.year}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div
                      className="d-flex align-items-center gap-2 mt-auto pt-2 fw-medium"
                      style={{ borderTop: '1px solid var(--cb-border)', color: 'var(--cb-muted)', fontSize: '0.8rem' }}
                    >
                      {p.link
                        ? <><span>🔗</span> <span style={{ color: 'var(--cb-teal)' }}>Live Demo</span></>
                        : <><span>🔍</span> <span style={{ color: 'var(--cb-purple)' }}>View Details</span></>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ───────────────────────────────────────────────── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="rounded-4 overflow-hidden"
            style={{
              background: 'var(--cb-surface)',
              border: '1px solid var(--cb-border)',
              width: '100%',
              maxWidth: 680,
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Modal image */}
            {selected.image && (
              <div style={{ height: 260, overflow: 'hidden', background: '#0d1117' }}>
                <img
                  src={selected.image}
                  alt={selected.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Modal body */}
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <span
                    className="fw-semibold rounded-pill d-inline-block mb-2"
                    style={{
                      padding: '3px 12px',
                      background: 'var(--cb-teal-bg)',
                      border: '1px solid rgba(0,201,167,0.25)',
                      color: 'var(--cb-teal)',
                      fontSize: '0.72rem',
                    }}
                  >
                    {selected.category}
                  </span>
                  <h3 className="fw-bold mb-0" style={{ color: 'var(--cb-white)', fontSize: '1.2rem' }}>
                    {selected.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--cb-border)',
                    color: 'var(--cb-muted)',
                    borderRadius: '50%',
                    width: 32, height: 32,
                    cursor: 'pointer',
                    fontSize: '1rem',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Tech stack */}
              <p className="mb-3" style={{ fontSize: '0.85rem', color: 'var(--cb-muted)' }}>
                <span style={{ color: 'var(--cb-purple)', fontWeight: 600 }}>Technology Stack: </span>
                {selected.stack}
              </p>

              {/* Description */}
              <p className="mb-3 fw-light" style={{ fontSize: '0.9rem', color: 'var(--cb-muted)', lineHeight: 1.7 }}>
                {selected.desc}
              </p>

              {/* Features */}
              <p className="fw-semibold mb-2" style={{ color: 'var(--cb-white)', fontSize: '0.9rem' }}>Features:</p>
              <ul className="mb-4" style={{ paddingLeft: '1.2rem' }}>
                {selected.features.map((f, i) => (
                  <li key={i} className="fw-light mb-1" style={{ fontSize: '0.85rem', color: 'var(--cb-muted)', lineHeight: 1.6 }}>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Footer actions */}
              <div className="d-flex gap-2 flex-wrap">
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className="fw-semibold rounded-3 text-decoration-none"
                    style={{
                      padding: '8px 20px',
                      background: 'var(--cb-purple)',
                      color: '#fff',
                      fontSize: '0.85rem',
                    }}
                  >
                    🔗 Live Demo
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="fw-semibold rounded-3"
                  style={{
                    padding: '8px 20px',
                    background: 'transparent',
                    border: '1px solid var(--cb-border)',
                    color: 'var(--cb-muted)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
