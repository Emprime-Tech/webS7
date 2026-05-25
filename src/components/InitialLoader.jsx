import React, { useEffect, useState } from 'react';
import s7Logo from '../assets/SS7.PNG';

const MIN_VISIBLE_MS = 2200;
const PROGRESS_TICK_MS = 45;
const RING_RADIUS = 54;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export default function InitialLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [status, setStatus] = useState('Welcome to S7 Padel');

  const ringOffset = RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * progress) / 100;

  useEffect(() => {
    const start = Date.now();
    let done = false;

    const tick = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const elapsed = Date.now() - start;
        const timeBoost = elapsed < MIN_VISIBLE_MS ? 0.35 : 1.2;
        const step = Math.max(1, (100 - prev) * 0.08 * timeBoost);
        const next = Math.min(prev + step, 100);

        if (next < 35) setStatus('Welcome to S7 Padel');
        else if (next < 70) setStatus('Loading courts & experience');
        else setStatus('Almost ready');

        return next;
      });
    }, PROGRESS_TICK_MS);

    const finish = setInterval(() => {
      if (done) return;
      const elapsed = Date.now() - start;
      setProgress((prev) => {
        if (prev >= 100 && elapsed >= MIN_VISIBLE_MS) {
          done = true;
          clearInterval(tick);
          clearInterval(finish);
          setExiting(true);
          window.setTimeout(() => onComplete?.(), 520);
          return 100;
        }
        if (elapsed >= MIN_VISIBLE_MS && prev < 100) return 100;
        return prev;
      });
    }, 80);

    return () => {
      clearInterval(tick);
      clearInterval(finish);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[250] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ease-out ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#120804' }}
      aria-live="polite"
      aria-busy={!exiting}
      role="status"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 40%, rgba(232, 92, 13, 0.18) 0%, transparent 55%),
            linear-gradient(180deg, #140904 0%, #120804 50%, #1c0f06 100%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-8">
        <div
          className={`relative mb-8 transition-all duration-700 ${
            exiting ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <svg
            className="absolute -inset-5 w-[calc(100%+40px)] h-[calc(100%+40px)] -rotate-90"
            viewBox="0 0 120 120"
            aria-hidden
          >
            <circle
              cx="60"
              cy="60"
              r={RING_RADIUS}
              fill="transparent"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
            />
            <circle
              cx="60"
              cy="60"
              r={RING_RADIUS}
              fill="transparent"
              stroke="#e85c0d"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={ringOffset}
              className="transition-[stroke-dashoffset] duration-300 ease-out"
            />
          </svg>

          <div className="relative flex flex-col items-center justify-center w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-white/10 bg-[#1a0d07]/80 shadow-[0_0_40px_rgba(232,92,13,0.15)]">
            <img
              src={s7Logo}
              alt="S7 Padel"
              className="h-14 sm:h-16 w-auto object-contain initial-loader-logo-pulse"
              width={160}
              height={64}
              decoding="async"
            />
            <span className="mt-1 text-lg sm:text-xl font-light text-white/70 tabular-nums leading-none">
              {Math.round(progress)}
              <span className="text-[10px] text-white/35 align-top ml-0.5">%</span>
            </span>
          </div>
        </div>

        <p className="text-xs tracking-[0.35em] uppercase text-white/50 min-h-[1rem] text-center">
          {status}
        </p>
      </div>

      <p className="absolute bottom-8 text-[10px] tracking-[0.4em] uppercase text-white/30">
        Premium Indoor Padel
      </p>
    </div>
  );
}
