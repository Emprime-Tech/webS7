import React from 'react';
import { ACCENT, packages } from './constants';
import SectionTitle from './SectionTitle';
import OutlineButton from './OutlineButton';
import TierCircle from './TierCircle';

export default function SponsorshipPackagesSection() {
  return (
    <section className="perf-section px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <SectionTitle>Sponsorship Packages</SectionTitle>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 md:items-start">
        {packages.map((pkg) => (
          <div key={pkg.label} className="flex flex-col items-center w-full">
            <TierCircle src={pkg.badge} alt={pkg.label} />

            <div
              className="w-full mt-10 rounded-md overflow-hidden flex-1"
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
              <OutlineButton className="mt-10 px-10 py-2.5">
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
