import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { getWhatsAppHref } from '../utils/whatsapp';

const COURT_FEATURES = [
  { col: 0, items: ['4 Indoor Professional Courts', 'Premium Playing Surface'] },
  { col: 1, items: ['Private Court', 'Highest Sealing'] },
];

function revealClass(inView, animation, delay = '') {
  return inView ? `${animation} ${delay}`.trim() : 'opacity-0';
}

function FeatureCell({ children, inView, delay, roundedTop, roundedBottom }) {
  return (
    <div
      className={`court-feature-cell min-h-12 py-3 flex items-center justify-center border border-white/30 bg-black/40 text-xs sm:text-sm px-2 text-center ${roundedTop ? 'rounded-t-xl' : ''} ${roundedBottom ? 'rounded-b-xl border-t-0' : ''} ${revealClass(inView, 'court-feature-in', delay)}`}
    >
      {children}
    </div>
  );
}

export default function CourtsSection() {
  const [sectionRef, sectionInView] = useInView('150px');
  const [courtsRef, courtsInView] = useInView('120px');
  const [partnerRef, partnerInView] = useInView('120px');
  const [ctaRef, ctaInView] = useInView('100px');

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="perf-section relative w-full flex flex-col items-center gap-10 py-10 px-5 sm:px-6 md:min-h-screen md:justify-between md:gap-0 md:p-12 font-sans tracking-wide text-white overflow-hidden"
    >
      {sectionInView ? (
        <>
          <div
            className={`absolute inset-0 -z-[5] court-gradient-breathe ${sectionInView ? 'exp-overlay-motion' : ''}`}
            style={{
              background: `
                radial-gradient(circle at 75% 50%,
                  rgba(255, 200, 90, 0.22) 0%,
                  rgba(255, 160, 50, 0.12) 35%,
                  transparent 70%)
              `,
            }}
          />
          <div
            className={`absolute inset-0 -z-[5] bg-gradient-to-l from-black/70 via-black/50 to-black/30 ${sectionInView ? 'exp-overlay-motion exp-delay-1' : ''}`}
          />
        </>
      ) : (
        <div
          className="absolute inset-0 -z-20"
          style={{ background: 'linear-gradient(180deg, #1c0f06 0%, #120804 100%)' }}
        />
      )}

      <div
        ref={courtsRef}
        className="w-full max-w-5xl min-w-0 flex flex-col items-center text-center relative z-10"
      >
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-medium text-[#e85c0d] mb-3 ${revealClass(courtsInView, 'exp-reveal-up', 'exp-delay-1')}`}
        >
          Our Courts
        </h2>
        <p
          className={`text-lg md:text-xl font-light text-white/90 mb-4 ${revealClass(courtsInView, 'exp-reveal-up', 'exp-delay-2')}`}
        >
          Designed for comfort, built for perfomance
        </p>
        <span
          className={`mx-auto mb-8 block h-0.5 w-16 rounded-full bg-[#e85c0d] ${courtsInView ? 'exp-line-left exp-delay-2' : 'opacity-0 scale-x-0'}`}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 w-full max-w-3xl min-w-0">
          {COURT_FEATURES.map((group, colIdx) => (
            <div
              key={group.items[0]}
              className={`flex flex-col min-w-0 ${colIdx === 1 ? 'mt-4 md:mt-0' : ''}`}
            >
              {group.items.map((label, rowIdx) => (
                <FeatureCell
                  key={label}
                  inView={courtsInView}
                  delay={`court-delay-${colIdx * 2 + rowIdx + 3}`}
                  roundedTop={rowIdx === 0}
                  roundedBottom={rowIdx === 1}
                >
                  {label}
                </FeatureCell>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={partnerRef}
        className="w-full max-w-5xl min-w-0 flex flex-col items-center text-center py-4 md:py-16 relative z-10"
      >
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-medium text-[#e85c0d] mb-3 ${revealClass(partnerInView, 'exp-reveal-up', 'exp-delay-1')}`}
        >
          Partner With S7
        </h2>
        <p
          className={`text-lg md:text-xl font-light text-white/90 mb-8 max-w-2xl ${revealClass(partnerInView, 'exp-reveal-up', 'exp-delay-2')}`}
        >
          Connect your brand with Dubai&apos;s premium indoor padel community.
        </p>
        <Link
          to="/partnership"
          onClick={() => window.scrollTo(0, 0)}
          className={`court-link-shine court-btn-motion px-5 sm:px-8 py-2.5 rounded-full border border-[#e85c0d] text-white text-xs sm:text-sm tracking-wide bg-transparent hover:bg-[#e85c0d]/10 text-center max-w-full ${revealClass(partnerInView, 'exp-reveal-up', 'exp-delay-4')}`}
        >
          View Sponsorship Opportunities
        </Link>
      </div>

      <div ref={ctaRef} className="w-full max-w-6xl min-w-0 mb-8 md:mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-end">
          <div
            className={`flex flex-col items-start text-left w-full min-w-0 ${revealClass(ctaInView, 'court-col-in-left', 'exp-delay-1')}`}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-[#e85c0d] mb-3">Ready to Play?</h3>
            <p className="text-white/80 text-sm max-w-full sm:max-w-sm leading-relaxed">
              Text Reserve your court and experience padel at a higher standard.
            </p>
            <a
              href={getWhatsAppHref('bookCoaching')}
              target="_blank"
              rel="noopener noreferrer"
              className="court-btn-motion hero-btn-shine mt-6 inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full border border-[#e85c0d] text-[#e85c0d] text-xs sm:text-sm tracking-wide bg-transparent hover:bg-[#e85c0d]/10 max-w-full"
            >
              Book Your Coaching Now
            </a>
          </div>

          <div
            className={`flex flex-col items-end text-right w-full min-w-0 self-end pt-8 md:pt-0 border-t border-white/10 md:border-0 ${revealClass(ctaInView, 'court-col-in-right', 'exp-delay-3')}`}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-[#e85c0d] leading-tight">
              More Then <br /> Just a Game
            </h3>
            <p className="text-white/80 text-sm mt-2 max-w-full sm:max-w-sm ml-auto">
              Every detail created for your comfort.
            </p>

            <a
              href={getWhatsAppHref('getInTouch')}
              target="_blank"
              rel="noopener noreferrer"
              className="court-btn-motion mt-6 inline-flex items-center justify-center gap-2 border border-[#e85c0d] text-[#e85c0d] px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-wide bg-transparent hover:bg-[#e85c0d]/10 shrink-0 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M20.52 3.48A11.77 11.77 0 0012.05 0C5.46 0 .09 5.37.09 11.96c0 2.1.55 4.16 1.6 5.97L0 24l6.22-1.63a11.9 11.9 0 005.83 1.48h.01c6.59 0 11.96-5.37 11.96-11.96 0-3.2-1.25-6.2-3.5-8.41z" />
              </svg>
              Get in touch Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
