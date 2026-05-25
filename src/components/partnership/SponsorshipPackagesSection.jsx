import React from 'react';
import { useInView } from '../../hooks/useInView';
import { ACCENT, packages } from './constants';
import SectionTitle from './SectionTitle';
import OutlineButton from './OutlineButton';
import TierCircle from './TierCircle';
import { revealClass } from './reveal';
import { getWhatsAppHref } from '../../utils/whatsapp';

const PACKAGE_DELAYS = ['exp-delay-2', 'exp-delay-3', 'exp-delay-4'];

export default function SponsorshipPackagesSection() {
  const [ref, inView] = useInView('120px');

  return (
    <section ref={ref} className="perf-section px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <SectionTitle className={revealClass(inView, 'exp-reveal-up', 'exp-delay-1')}>
        Sponsorship Packages
      </SectionTitle>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 md:items-start">
        {packages.map((pkg, index) => (
          <div
            key={pkg.label}
            className={`ptr-card-hover flex flex-col items-center w-full min-w-0 ${revealClass(inView, 'ptr-package-in', PACKAGE_DELAYS[index] || 'exp-delay-4')}`}
          >
            <div className={inView ? 'ptr-tier-in w-full' : 'opacity-0 w-full'}>
              <TierCircle src={pkg.badge} alt={pkg.label} />
            </div>

            <div
              className="w-full mt-10 rounded-md overflow-hidden flex-1 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(232,92,13,0.12)]"
              style={{ border: `1px solid ${ACCENT}` }}
            >
              <div
                className="px-4 py-4 text-center"
                style={{ borderBottom: `1px solid ${ACCENT}` }}
              >
                <p className="text-xs md:text-sm text-white/85 leading-relaxed font-light">
                  {pkg.summary}
                </p>
              </div>

              <ul className="px-5 py-5 space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/80 font-light"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: ACCENT }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {pkg.showCta ? (
              <OutlineButton
                href={getWhatsAppHref('becomePartner')}
                className="court-btn-motion mt-10 px-10 py-2.5"
              >
                Become a Partner
              </OutlineButton>
            ) : (
              <div className="h-11 mt-10" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
