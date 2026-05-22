import React from 'react';
import partnershipBg from '../../assets/partnership-bg-opt.webp';
import OptimizedImage from '../OptimizedImage';
import { ACCENT } from './constants';
import OutlineButton from './OutlineButton';

export default function PartnershipHero() {
  return (
    <section className="perf-section relative min-h-[52vh] md:min-h-[58vh] overflow-hidden">
      <OptimizedImage
        src={partnershipBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(18,8,4,0.82) 0%, rgba(18,8,4,0.65) 50%, rgba(18,8,4,0.45) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-6">
          <div className="max-w-2xl">
            <h1 className="text-[2.75rem] md:text-6xl lg:text-[4.25rem] font-semibold leading-[1.05] mb-5">
              <span className="text-white">Partner </span>
              <span style={{ color: ACCENT }}>With S7</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 leading-relaxed mb-3 max-w-xl font-light">
              We collaborate with brands that value sport, wellness and premium
              experiences.
            </p>
            <p className="text-sm md:text-[15px] text-white/55 max-w-lg font-light">
              Position your brand inside one of Dubai&apos;s fastest-growing sports
              communities.
            </p>
          </div>

          <div className="lg:shrink-0 lg:pt-4">
            <OutlineButton className="h-12 md:h-[3.25rem] px-10 md:px-14 text-sm md:text-base">
              Get Sponsorship
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
