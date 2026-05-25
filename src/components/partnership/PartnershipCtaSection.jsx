import React from 'react';
import { useInView } from '../../hooks/useInView';
import { ACCENT } from './constants';
import { revealClass } from './reveal';
import { getWhatsAppHref } from '../../utils/whatsapp';

export default function PartnershipCtaSection() {
  const [ref, inView] = useInView('120px');

  return (
    <section
      ref={ref}
      className="perf-section relative px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden"
    >
      <div
        className={`absolute inset-0 ${inView ? 'exp-overlay-motion court-gradient-breathe' : ''}`}
        style={{ backgroundColor: 'rgba(18,8,4,0.88)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto min-w-0">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className={`max-w-lg min-w-0 ${revealClass(inView, 'exp-reveal-left', 'exp-delay-1')}`}>
            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-4"
              style={{ color: ACCENT }}
            >
              Let&apos;s Build a Winning Partnership
            </h2>
            <p className="text-sm md:text-base text-white/75 leading-relaxed font-light">
              We&apos;d love to share our full sponsorship deck and discuss
              collaboration opportunities.
            </p>
            <span
              className={`mt-5 block h-0.5 w-16 rounded-full ${inView ? 'exp-line-left exp-delay-2' : 'opacity-0 scale-x-0'}`}
              style={{ backgroundColor: ACCENT }}
              aria-hidden
            />
          </div>

          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-6 lg:pb-1 ${revealClass(inView, 'exp-reveal-right', 'exp-delay-3')}`}
          >
            <a
              href={getWhatsAppHref('partnershipContact')}
              target="_blank"
              rel="noopener noreferrer"
              className="court-btn-motion inline-flex items-center justify-center h-11 px-8 rounded-full border text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#e85c0d]/10 transition"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Contact Us
            </a>
            <a
              href={getWhatsAppHref('requestSponsorshipDeck')}
              target="_blank"
              rel="noopener noreferrer"
              className="court-btn-motion court-link-shine inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-12 rounded-full border text-sm md:text-base font-medium text-white tracking-wide hover:bg-[#e85c0d]/10 transition"
              style={{ borderColor: ACCENT }}
            >
              Request Sponsorship Deck
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
