import React from 'react';
import { useInView } from '../../hooks/useInView';
import { ACCENT } from './constants';
import OutlineButton from './OutlineButton';
import { revealClass } from './reveal';
import { getWhatsAppHref } from '../../utils/whatsapp';

export default function PartnershipHero() {
  const [ref, inView] = useInView('0px');

  return (
    <section
      ref={ref}
      className="perf-section relative min-h-[58vh] md:min-h-[64vh] overflow-hidden"
    >
      <div
        className={`absolute inset-0 ${inView ? 'exp-overlay-motion' : ''}`}
        style={{
          background:
            'linear-gradient(90deg, rgba(18,8,4,0.82) 0%, rgba(18,8,4,0.65) 50%, rgba(18,8,4,0.45) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full min-h-[58vh] md:min-h-[64vh] flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-14 md:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
          <div className="max-w-2xl min-w-0">
            <h1
              className={`text-[2.75rem] md:text-6xl lg:text-[4.25rem] font-semibold leading-[1.05] mb-5 ${revealClass(inView, 'exp-reveal-left', 'exp-delay-1')}`}
            >
              <span className="text-white">Partner </span>
              <span style={{ color: ACCENT }}>With S7</span>
            </h1>
            <p
              className={`text-base md:text-lg text-white/95 leading-relaxed mb-3 max-w-xl font-light ${revealClass(inView, 'exp-reveal-left', 'exp-delay-2')}`}
            >
              We collaborate with brands that value sport, wellness and premium
              experiences.
            </p>
            <p
              className={`text-sm md:text-[15px] text-white/55 max-w-lg font-light ${revealClass(inView, 'exp-reveal-left', 'exp-delay-3')}`}
            >
              Position your brand inside one of Dubai&apos;s fastest-growing sports
              communities.
            </p>
          </div>

          <div
            className={`lg:shrink-0 lg:self-center ${revealClass(inView, 'exp-reveal-right', 'exp-delay-4')}`}
          >
            <OutlineButton
              href={getWhatsAppHref('getSponsorship')}
              className="court-btn-motion court-link-shine h-12 md:h-[3.25rem] px-10 md:px-14 text-sm md:text-base"
            >
              Get Sponsorship
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
