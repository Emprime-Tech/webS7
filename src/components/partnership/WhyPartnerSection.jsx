import React from 'react';
import { useInView } from '../../hooks/useInView';
import { ACCENT, whyPartner } from './constants';
import SectionTitle from './SectionTitle';
import { revealClass } from './reveal';

const CARD_DELAYS = ['exp-delay-2', 'exp-delay-3', 'exp-delay-4'];

export default function WhyPartnerSection() {
  const [ref, inView] = useInView('120px');

  return (
    <section ref={ref} className="perf-section px-6 md:px-12 lg:px-20 py-20 md:py-28 mt-15">
      <SectionTitle className={revealClass(inView, 'exp-reveal-up', 'exp-delay-1')}>
        Why Partner With S7
      </SectionTitle>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 lg:gap-16">
        {whyPartner.map((item, index) => (
          <div
            key={item.title}
            className={`flex gap-5 items-start min-w-0 ${revealClass(inView, 'exp-reveal-up', CARD_DELAYS[index] || 'exp-delay-4')}`}
          >
            <div
              className={`w-[3px] shrink-0 rounded-full self-stretch min-h-[5.5rem] ptr-line-accent ${inView ? '' : 'opacity-0'}`}
              style={{ backgroundColor: ACCENT, animationDelay: `${0.15 + index * 0.12}s` }}
            />
            <div className="min-w-0">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2.5">{item.title}</h3>
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
