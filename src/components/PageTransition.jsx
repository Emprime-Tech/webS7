import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTES_WITH_TRANSITION = ['/', '/partnership'];
const DURATION_MS = 380;

export default function PageTransition() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!ROUTES_WITH_TRANSITION.includes(pathname)) return;

    window.scrollTo(0, 0);

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      window.scrollTo(0, 0);
    }, DURATION_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-3 page-transition-overlay pointer-events-none"
      style={{ backgroundColor: 'rgba(18, 8, 4, 0.94)' }}
      aria-hidden
    >
      <span className="text-3xl font-bold tracking-tighter text-white">
        S<span className="text-[#e85c0d]">7</span>
      </span>
      <div className="h-0.5 w-16 rounded-full bg-[#e85c0d]/80" />
    </div>
  );
}
