import React from 'react';
import { useInView } from '../hooks/useInView';
import OptimizedImage from './OptimizedImage';
import location from '../assets/location-opt.webp';

const SECTION_BG = '#120804';

const GOOGLE_MAPS_SHARE_URL = 'https://share.google/gCFnla6m5Pje8CHx0';

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=S7+Padel,+Nadd+Al+Hamar,+Dubai,+United+Arab+Emirates&z=16&hl=en&output=embed';

const CONTACT_ITEMS = [
  {
    id: 'phone',
    label: '+971 58 586 9190',
    href: 'tel:+971585869190',
    delay: 'exp-delay-1',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#e85c0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'S7 Padel — Nadd Al Hamar, Dubai',
    href: GOOGLE_MAPS_SHARE_URL,
    external: true,
    delay: 'exp-delay-2',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#e85c0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    ),
  },
  {
    id: 'email',
    label: 'info@s7padel.ae',
    href: 'mailto:info@s7padel.ae',
    delay: 'exp-delay-3',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#e85c0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

function revealClass(inView, animation, delay = '') {
  return inView ? `${animation} ${delay}`.trim() : 'opacity-0';
}

function ContactRow({ item, inView }) {
  const rowClass = `group flex items-center gap-3 sm:gap-4 w-full min-w-0 p-4 sm:p-0 sm:flex-col sm:items-center sm:text-center sm:space-y-3 rounded-xl border border-white/10 bg-black/25 sm:border-0 sm:bg-transparent sm:rounded-none transition-colors hover:border-white/20 ${revealClass(inView, 'cf-icon-pop', item.delay)}`;

  const inner = (
    <>
      <div className="cf-icon-box shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-[#e85c0d] flex items-center justify-center group-hover:bg-[#e85c0d]/10 transition">
        {item.icon}
      </div>
      <span className="text-sm sm:text-sm text-white/80 group-hover:text-white transition text-left sm:text-center break-words min-w-0 flex-1 leading-snug">
        {item.label}
      </span>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
        className={rowClass}
      >
        {inner}
      </a>
    );
  }

  return <div className={rowClass}>{inner}</div>;
}

export default function ContactLocation() {
  const [sectionRef, sectionInView] = useInView('200px');
  const [mapRef, mapInView] = useInView('100px');

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-w-0 text-white font-sans px-5 sm:px-6 md:px-16 pt-0 pb-8 md:pb-0 flex flex-col items-center overflow-hidden -mt-px"
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

      <div className="w-full max-w-5xl min-w-0 flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center gap-3 md:gap-8 lg:gap-16 mb-10 md:mb-16 pt-8 md:pt-12 relative z-10">
        {CONTACT_ITEMS.map((item, index) => (
          <React.Fragment key={item.id}>
            {index > 0 && (
              <div
                className={`hidden md:block h-12 w-px bg-white/20 shrink-0 ${sectionInView ? 'cf-divider-grow' : 'opacity-0'}`}
                aria-hidden
              />
            )}
            <div className="w-full md:w-auto md:max-w-[200px] lg:max-w-none">
              <ContactRow item={item} inView={sectionInView} />
            </div>
          </React.Fragment>
        ))}
      </div>

      <div ref={mapRef} className="w-full max-w-5xl min-w-0 relative z-10 pb-6 md:pb-8">
        <div
          className={`flex flex-row items-center justify-between gap-3 sm:gap-4 w-full min-w-0 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-white/10 ${revealClass(mapInView, 'exp-reveal-up', 'exp-delay-1')}`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#e85c0d] shrink-0">
            Our Location
          </h2>
          <a
            href={GOOGLE_MAPS_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="court-btn-motion inline-flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 text-[11px] sm:text-sm text-[#e85c0d] border border-[#e85c0d] rounded-full px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-[#e85c0d]/10 transition whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className={`w-full min-w-0 h-[260px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1008] ${revealClass(mapInView, 'cf-map-reveal', 'exp-delay-3')}`}
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
