import React from 'react';
import { useInView } from '../hooks/useInView';
import OptimizedImage from './OptimizedImage';
import location from '../assets/location-opt.webp';

const SECTION_BG = '#120804';

const GOOGLE_MAPS_SHARE_URL = 'https://share.google/gCFnla6m5Pje8CHx0';

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=S7+Padel,+Nadd+Al+Hamar,+Dubai,+United+Arab+Emirates&z=16&hl=en&output=embed';

function revealClass(inView, animation, delay = '') {
  return inView ? `${animation} ${delay}`.trim() : 'opacity-0';
}

function ContactIcon({ children, label, href, inView, delay, isLink }) {
  const inner = (
    <>
      <div className="cf-icon-box w-12 h-12 rounded-xl border border-[#e85c0d] flex items-center justify-center group-hover:bg-[#e85c0d]/10 transition">
        {children}
      </div>
      <span className="text-sm text-white/80 group-hover:text-white transition">{label}</span>
    </>
  );

  const className = `flex flex-col items-center text-center space-y-3 group ${revealClass(inView, 'cf-icon-pop', delay)}`;

  if (isLink && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

export default function ContactLocation() {
  const [sectionRef, sectionInView] = useInView('200px');
  const [mapRef, mapInView] = useInView('100px');

  return (
    <div
      ref={sectionRef}
      className="relative w-full text-white font-sans p-8 md:p-16 pt-0 flex flex-col items-center overflow-hidden -mt-px"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div
        className="absolute inset-0 -z-30"
        style={{
          background: `linear-gradient(180deg, #140904 0%, ${SECTION_BG} 12%, #1c0f06 100%)`,
        }}
      />

      {sectionInView && (
        <>
          <div className="absolute inset-0 -z-20 bg-[#120804]" />
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <OptimizedImage
              src={location}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center exp-bg-motion"
            />
          </div>
        </>
      )}

      <div
        className={`absolute inset-0 -z-[5] ${sectionInView ? 'exp-overlay-motion court-gradient-breathe' : ''}`}
        style={{
          background: `
            radial-gradient(circle at 75% 50%, 
              rgba(255, 200, 90, 0.28) 0%, 
              rgba(255, 160, 50, 0.20) 25%, 
              rgba(255, 120, 30, 0.10) 45%, 
              transparent 70%)
          `,
        }}
      />

      <div
        className={`absolute inset-0 -z-[5] bg-gradient-to-l from-black/60 via-black/40 to-transparent ${sectionInView ? 'exp-overlay-motion exp-delay-1' : ''}`}
      />

      <div className="w-full max-w-5xl flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 pt-12 relative z-10">
        <ContactIcon inView={sectionInView} delay="exp-delay-1" label="+971 58 586 9190">
          <svg className="w-6 h-6 text-[#e85c0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </ContactIcon>

        <div
          className={`hidden md:block h-12 w-px bg-white/20 ${sectionInView ? 'cf-divider-grow exp-delay-3' : 'opacity-0'}`}
          aria-hidden
        />

        <ContactIcon
          inView={sectionInView}
          delay="exp-delay-2"
          label="S7 Padel — Nadd Al Hamar, Dubai"
          href={GOOGLE_MAPS_SHARE_URL}
          isLink
        >
          <svg className="w-6 h-6 text-[#e85c0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </ContactIcon>

        <div
          className={`hidden md:block h-12 w-px bg-white/20 ${sectionInView ? 'cf-divider-grow exp-delay-4' : 'opacity-0'}`}
          aria-hidden
        />

        <ContactIcon inView={sectionInView} delay="exp-delay-3" label="info@s7padel.ae">
          <svg className="w-6 h-6 text-[#e85c0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </ContactIcon>
      </div>

      <div ref={mapRef} className="w-full max-w-5xl min-w-0 relative z-10 pb-8">
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 ${revealClass(mapInView, 'exp-reveal-up', 'exp-delay-1')}`}
        >
          <h2 className="text-3xl text-[#e85c0d]">Our Location</h2>
          <a
            href={GOOGLE_MAPS_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="court-btn-motion inline-flex items-center gap-2 text-sm text-[#e85c0d] border border-[#e85c0d] rounded-full px-5 py-2 hover:bg-[#e85c0d]/10 transition w-fit"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Open in Google Maps
          </a>
        </div>

        <div
          className={`w-full h-[280px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1008] ${revealClass(mapInView, 'cf-map-reveal', 'exp-delay-3')}`}
        >
          {mapInView ? (
            <iframe
              title="S7 Padel location — Nadd Al Hamar, Dubai"
              src={GOOGLE_MAPS_EMBED_URL}
              className="w-full h-full border-0 bg-[#1a1008]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-full animate-pulse bg-black/30" />
          )}
        </div>
      </div>
    </div>
  );
}
