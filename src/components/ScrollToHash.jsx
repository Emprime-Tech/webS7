import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Full-page routes (e.g. partnership) always open at the top
    if (pathname === '/partnership') {
      scrollToTop();
      const t = requestAnimationFrame(() => scrollToTop());
      return () => cancelAnimationFrame(t);
    }

    if (pathname !== '/') return;

    if (!hash) {
      scrollToTop();
      return;
    }

    const id = hash.replace('#', '');
    let attempts = 0;
    const maxAttempts = 30;

    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(scrollToSection, 50);
      }
    };

    scrollToSection();
  }, [pathname, hash]);

  return null;
}
