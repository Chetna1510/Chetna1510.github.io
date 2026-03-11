import { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import SectionBadge from '../components/ui/SectionBadge';
import SectionTitle from '../components/ui/SectionTitle';

const CONTACT_INFO = [
  { icon: '✉️', label: 'Email', val: 'chetnab.work8@gmail.com' },
  { icon: '📍', label: 'Location', val: 'Capelle aan de IJssel, Netherlands' },
];

const SOCIALS = [
  { icon: <FaGithub size={18} />, l: 'GitHub', url: 'https://github.com/Chetna1510', color: '#ffffff' },
  { icon: <FaLinkedin size={18} />, l: 'LinkedIn', url: 'https://www.linkedin.com/in/chetnabhootaka/', color: '#0a66c2' },
  { icon: <FaFacebook size={18} />, l: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100007786595749', color: '#1877f2' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errMsg, setErrMsg] = useState('');

  const update = key => e => setForm(prev => ({ ...prev, [key]: e.target.value }));

  const handleSend = () => {
    const { name, email, subject, message } = form;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrMsg('Please fill in all fields before sending.');
      return;
    }

    setErrMsg('');

    const body = `Hi Chetna,\n\nMy name is ${name} and my email is ${email}.\n\n${message}`;

    window.location.href =
      `mailto:chetnab.work8@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <div style={{ background: 'var(--cb-bg)', paddingTop: 80 }}>
      <section className="py-5">
        <div className="mx-auto" style={{ maxWidth: 1100, padding: '2rem' }}>

          {/* Header */}
          <div className="text-center mb-5">
            <SectionBadge>Contact</SectionBadge>
            <SectionTitle>Let's <span style={{ color: 'var(--cb-purple)' }}>Connect</span></SectionTitle>
            <p className="fw-light mt-2" style={{ color: 'var(--cb-muted)', fontSize: '0.95rem' }}>
              Got a project in mind? Drop me a message and let's create something amazing together!
            </p>
          </div>

          {/* 2-col layout */}
          <div className="row g-4 align-items-start">

            {/* Left – contact info */}
            <div className="col-md-4 d-flex flex-column gap-3">
              <div
                className="rounded-4 p-4"
                style={{ background: 'var(--cb-surface)', border: '1px solid var(--cb-border)' }}
              >
                <div className="fw-bold mb-3" style={{ color: 'var(--cb-purple)', fontSize: '0.88rem', letterSpacing: '0.05em' }}>
                  Contact Information
                </div>
                {CONTACT_INFO.map(c => (
                  <div
                    key={c.label}
                    className="d-flex align-items-center gap-3 py-2"
                    style={{ borderBottom: '1px solid var(--cb-border)' }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                      style={{ width: 36, height: 36, background: 'var(--cb-purple-bg)', fontSize: '1rem' }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <div
                        className="text-uppercase"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--cb-dim)' }}
                      >
                        {c.label}
                      </div>
                      <div className="fw-medium" style={{ fontSize: '0.83rem', color: 'var(--cb-white)' }}>{c.val}</div>
                    </div>
                  </div>
                ))}

                {/* Socials */}
                <div className="mt-3">
                  <div className="fw-bold mb-2" style={{ color: 'var(--cb-purple)', fontSize: '0.82rem' }}>Social Media</div>
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

              {/* Response time card */}
              <div
                className="rounded-4 p-4"
                style={{ background: 'var(--cb-surface)', border: '1px solid rgba(0,201,167,0.2)' }}
              >
                <div className="fw-bold mb-1" style={{ color: 'var(--cb-teal)', fontSize: '0.88rem' }}>Response Time</div>
                <p className="fw-light mb-0" style={{ fontSize: '0.83rem', color: 'var(--cb-muted)', lineHeight: 1.6 }}>
                  I typically reply within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Right – form */}
            <div className="col-md-8">
              <div
                className="rounded-4 p-4"
                style={{ background: 'var(--cb-surface)', border: '1px solid var(--cb-border)' }}
              >

                {/* Error banner */}
                {errMsg && (
                  <div
                    className="rounded-3 p-3 mb-4 text-center"
                    style={{ background: 'rgba(220,53,69,0.1)', border: '1px solid rgba(220,53,69,0.35)', color: '#f87171', fontSize: '0.88rem' }}
                  >
                    ⚠️ {errMsg}
                  </div>
                )}

                {/* Name + Email row */}
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label className="d-block mb-1 fw-light" style={{ fontSize: '0.78rem', color: 'var(--cb-muted)' }}>
                      Your Name
                    </label>
                    <input
                      className="cb-input"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Chetna B."
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="d-block mb-1 fw-light" style={{ fontSize: '0.78rem', color: 'var(--cb-muted)' }}>
                      Email
                    </label>
                    <input
                      className="cb-input"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label className="d-block mb-1 fw-light" style={{ fontSize: '0.78rem', color: 'var(--cb-muted)' }}>
                    Subject
                  </label>
                  <input
                    className="cb-input"
                    value={form.subject}
                    onChange={update('subject')}
                    placeholder="Project inquiry / Job opportunity / Collaboration..."
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="d-block mb-1 fw-light" style={{ fontSize: '0.78rem', color: 'var(--cb-muted)' }}>
                    Message
                  </label>
                  <textarea
                    className="cb-input"
                    value={form.message}
                    onChange={update('message')}
                    rows={6}
                    placeholder="Tell me more about your project, your timeline, and what you're looking to achieve..."
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {/* Submit */}
                <button
                  className="btn-purple w-100 justify-content-center"
                  style={{ padding: '13px', fontSize: '0.9rem' }}
                  onClick={handleSend}
                >
                  ✉️ Send Message
                </button>

                <p
                  className="text-center mt-3 mb-0"
                  style={{ fontSize: '0.72rem', color: 'var(--cb-dim)' }}
                >
                  Clicking "Send Message" will open your default email app with the form pre-filled.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}