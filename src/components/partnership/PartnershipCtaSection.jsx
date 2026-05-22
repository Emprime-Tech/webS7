import React from 'react';
import { Link } from 'react-router-dom';
import partnerCtaBg from '../../assets/partner-cta-bg-opt.webp';
import { useInView } from '../../hooks/useInView';
import OptimizedImage from '../OptimizedImage';
import { ACCENT } from './constants';

export default function PartnershipCtaSection() {
  const [ref, inView] = useInView('120px');

  return (
    <section
      ref={ref}
      className="perf-section relative px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden"
    >
      {inView && (
        <OptimizedImage
          src={partnerCtaBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
      )}

      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(18,8,4,0.88)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-lg">
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
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-6 lg:pb-1">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center h-11 px-8 rounded-full border text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#e85c0d]/10"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Contact Us
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-12 rounded-full border text-sm md:text-base font-medium text-white tracking-wide hover:bg-[#e85c0d]/10"
              style={{ borderColor: ACCENT }}
            >
              Request Sponsorship Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
