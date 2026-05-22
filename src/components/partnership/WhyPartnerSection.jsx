import React from 'react';
import { ACCENT, whyPartner } from './constants';
import SectionTitle from './SectionTitle';

export default function WhyPartnerSection() {
  return (
    <section className="perf-section px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <SectionTitle>Why Partner With S7</SectionTitle>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 lg:gap-16">
        {whyPartner.map((item) => (
          <div key={item.title} className="flex gap-5 items-start">
            <div
              className="w-[3px] shrink-0 rounded-full self-stretch min-h-[5.5rem]"
              style={{ backgroundColor: ACCENT }}
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm md:text-[15px] text-white/60 leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
