import React, { useMemo } from 'react';
import { useInView } from '../hooks/useInView';
import OptimizedImage from './OptimizedImage';
import p1 from '../assets/p1-opt.webp';
import p2 from '../assets/p2-opt.webp';
import p3 from '../assets/p3-opt.webp';
import p4 from '../assets/p4-opt.webp';
import p5 from '../assets/p5-opt.webp';
import p6 from '../assets/p6-opt.webp';

const cards = [
  { title: 'Courts', img: p1 },
  { title: 'Interior', img: p2 },
  { title: 'Facilities', img: p3 },
  { title: 'Should you visit', img: p4 },
  { title: 'Premium Lounge', img: p5 },
  { title: 'Pro Shop', img: p6 },
];

function MarqueeCard({ card, loadImage }) {
  return (
    <div className="flex flex-col items-center space-y-4 w-72 shrink-0">
      <div className="relative h-72 w-72 rounded-2xl overflow-hidden border border-white/20 bg-black/30">
        {loadImage ? (
          <OptimizedImage
            src={card.img}
            alt={card.title}
            width={288}
            height={288}
            sizes="288px"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 bg-[#1a1008]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>
      <span className="text-sm font-light text-white/80 tracking-widest">{card.title}</span>
    </div>
  );
}

export default function ExperienceSection() {
  const [sectionRef, sectionInView] = useInView('200px');
  const [trackRef, trackInView] = useInView('120px');
  const showMarquee = sectionInView && trackInView;
  const loopCards = useMemo(() => (showMarquee ? [...cards, ...cards] : []), [showMarquee]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="perf-section relative min-h-screen w-full flex flex-col justify-between p-12 font-sans tracking-wide text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-20"
        style={{ background: 'linear-gradient(135deg, #000000 0%, #080604 100%)' }}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 items-start z-10">
        <div className="flex flex-col space-y-1">
          <h2 className="text-4xl md:text-5xl font-medium text-[#e85c0d]">Experience</h2>
          <h3 className="text-2xl md:text-3xl font-light text-white/90">The Atmosphere</h3>
          <p className="pt-6 text-base font-light text-white/80">
            Clean spaces. Premium courts. Pure focus.
          </p>
        </div>

        <div className="flex flex-col items-end text-right space-y-12">
          <div className="flex flex-col items-end space-y-3 max-w-lg">
            <h4 className="text-3xl font-medium text-[#e85c0d]">Welcome to S7 Padel</h4>
            <p className="text-sm font-light text-white/70 leading-relaxed">
              S7 is a luxury indoor padel club built for players who value quality, comfort, and a
              professional playing environment. With four world-class courts including a private
              ladies-only court S7 combines sport, wellness, and hospitality under one roof.
            </p>
          </div>

          <div className="flex flex-col items-end space-y-1">
            <span className="text-2xl font-medium text-[#e85c0d]">Opening Hours:</span>
            <span className="text-xl font-light text-white/90">7:00 AM - 12:00 AM</span>
          </div>
        </div>
      </div>

      <div ref={trackRef} className="relative w-full overflow-hidden mb-8 mt-12 min-h-[340px]">
        {showMarquee ? (
          <div className="marquee-track flex w-max space-x-6 animate-marquee">
            {loopCards.map((card, idx) => (
              <MarqueeCard key={`${card.title}-${idx}`} card={card} loadImage />
            ))}
          </div>
        ) : (
          <div className="h-72 rounded-2xl bg-black/20 border border-white/10 mx-auto max-w-3xl" />
        )}
      </div>
    </section>
  );
}
