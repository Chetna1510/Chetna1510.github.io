import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const PAGES = { Home, About, Academics, Projects, Resume, Contact };

export default function App() {
  const [page, setPage] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const PageComponent = PAGES[page] || Home;

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--cb-bg)', color: 'var(--cb-white)', minHeight: '100vh' }}>
      <Nav active={page} setPage={setPage} scrolled={scrolled} />
      <PageComponent setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}
