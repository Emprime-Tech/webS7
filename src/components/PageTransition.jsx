import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import s7Logo from '../assets/ss7-logo-opt.webp';

const ROUTES_WITH_TRANSITION = ['/', '/partnership'];
const DURATION_MS = 420;

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
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 page-transition-overlay pointer-events-none"
      style={{ backgroundColor: 'rgba(18, 8, 4, 0.96)' }}
      aria-hidden
    >
      <div className="page-transition-logo flex flex-col items-center gap-4">
        <img
          src={s7Logo}
          alt=""
          className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_8px_24px_rgba(232,92,13,0.25)]"
          width={160}
          height={64}
          decoding="async"
        />
        <div className="h-0.5 w-20 rounded-full bg-gradient-to-r from-transparent via-[#e85c0d] to-transparent" />
      </div>
    </div>
  );
}
