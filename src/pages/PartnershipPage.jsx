import React from 'react';
import { PAGE_BG } from '../components/partnership/constants';
import PartnershipHero from '../components/partnership/PartnershipHero';
import WhyPartnerSection from '../components/partnership/WhyPartnerSection';
import SponsorshipPackagesSection from '../components/partnership/SponsorshipPackagesSection';
import PartnershipCtaSection from '../components/partnership/PartnershipCtaSection';

export default function PartnershipPage() {
  return (
    <div
      className="w-full font-sans tracking-wide text-white"
      style={{ backgroundColor: PAGE_BG }}
    >
      <PartnershipHero />
      <WhyPartnerSection />
      <SponsorshipPackagesSection />
      <PartnershipCtaSection />
    </div>
  );
}
