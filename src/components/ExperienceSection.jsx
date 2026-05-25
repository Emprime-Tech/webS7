import React, { useMemo } from 'react';
import { useInView } from '../hooks/useInView';
import OptimizedImage from './OptimizedImage';
import c1 from '../assets/c1-opt.webp';
import c2 from '../assets/c2-opt.webp';
import c3 from '../assets/c3-opt.webp';
import c4 from '../assets/c4-opt.webp';
import c5 from '../assets/c5-opt.webp';
import c6 from '../assets/c6-opt.webp';
import c7 from '../assets/c7-opt.webp';
import c8 from '../assets/c8-opt.webp';
import c9 from '../assets/c9-opt.webp';
import c10 from '../assets/c10-opt.webp';

const cards = [
  { title: '', img: c1 },
  { title: '', img: c2 },
  { title: '', img: c3 },
  { title: '', img: c4 },
  { title: '', img: c5 },
  { title: '', img: c6 },
  { title: '', img: c7 },
  { title: '', img: c8 },
  { title: ' ', img: c9 },
  { title: '', img: c10 },
];

function revealClass(inView, animation, delay = '') {
  return inView ? `${animation} ${delay}`.trim() : 'opacity-0';
}

function MarqueeCard({ card, loadImage }) {
  return (
    <div className="exp-card-hover flex flex-col items-center gap-3 w-[260px] sm:w-72 shrink-0">
      <div className="group relative h-64 w-full sm:h-72 sm:w-72 rounded-2xl overflow-hidden border border-white/20 bg-black/30">
        {loadImage ? (
          <OptimizedImage
            src={card.img}
            alt={card.title}
            width={288}
            height={288}
            sizes="(max-width: 640px) 260px, 288px"
            className="exp-card-image absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 bg-[#1a1008]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>
      <span className="exp-card-title text-sm font-light text-white/80 tracking-widest">
        {card.title}
      </span>
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
      className="perf-section relative w-full flex flex-col gap-10 md:min-h-screen md:justify-between py-10 md:py-16 lg:py-24 font-sans tracking-wide text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-[#120804]" />
      {sectionInView && (
        <>
          <div
            className={`absolute inset-0 -z-[5] ${sectionInView ? 'exp-overlay-motion court-gradient-breathe' : ''}`}
            style={{
              background: `
                radial-gradient(circle at 75% 50%,
                  rgba(255, 200, 90, 0.22) 0%,
                  rgba(255, 160, 50, 0.12) 35%,
                  transparent 70%)
              `,
            }}
          />
          <div
            className={`absolute inset-0 -z-[5] bg-gradient-to-l from-black/75 via-black/55 to-black/35 ${sectionInView ? 'exp-overlay-motion exp-delay-1' : ''}`}
          />
        </>
      )}

      <div className="w-full min-w-0 px-5 sm:px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 md:gap-x-16 lg:gap-x-20 items-start z-10">
        <div className="flex flex-col space-y-1 max-w-2xl min-w-0">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-medium text-[#e85c0d] ${revealClass(sectionInView, 'exp-reveal-left', 'exp-delay-1')}`}
          >
            Experience
          </h2>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-light text-white/90 ${revealClass(sectionInView, 'exp-reveal-left', 'exp-delay-2')}`}
          >
            The Atmosphere
          </h3>
          <span
            className={`mt-3 block h-0.5 w-14 sm:w-16 rounded-full bg-[#e85c0d] ${sectionInView ? 'exp-line-left exp-delay-3' : 'opacity-0 scale-x-0'}`}
            aria-hidden
          />
          <p
            className={`pt-4 text-base font-light text-white/80 max-w-md leading-relaxed ${revealClass(sectionInView, 'exp-reveal-left', 'exp-delay-4')}`}
          >
            Clean spaces. Premium courts. Pure focus.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end md:justify-self-end text-left md:text-right space-y-8 md:space-y-12 max-w-lg w-full min-w-0 pt-6 md:pt-0 border-t border-white/10 md:border-0">
          <div className="flex flex-col items-start md:items-end space-y-3 w-full min-w-0">
            <h4
              className={`text-2xl sm:text-3xl font-medium text-[#e85c0d] ${revealClass(sectionInView, 'exp-reveal-right', 'exp-delay-2')}`}
            >
              Welcome to S7 Padel
            </h4>
            <span
              className={`hidden md:block h-0.5 w-14 sm:w-16 rounded-full bg-[#e85c0d] ${sectionInView ? 'exp-line-right exp-delay-3' : 'opacity-0 scale-x-0'}`}
              aria-hidden
            />
            <span
              className={`md:hidden h-0.5 w-14 rounded-full bg-[#e85c0d] ${sectionInView ? 'exp-line-left exp-delay-3' : 'opacity-0 scale-x-0'}`}
              aria-hidden
            />
            <p
              className={`text-sm font-light text-white/70 leading-relaxed ${revealClass(sectionInView, 'exp-reveal-right', 'exp-delay-4')}`}
            >
              S7 is a luxury indoor padel club built for players who value quality, comfort, and a
              professional playing environment. With four world-class courts including a private
              ladies-only court S7 combines sport, wellness, and hospitality under one roof.
            </p>
          </div>

          <div
            className={`flex flex-col items-start md:items-end space-y-1 ${revealClass(sectionInView, 'exp-reveal-right', 'exp-delay-6')}`}
          >
            <span className="text-2xl font-medium text-[#e85c0d]">Opening Hours:</span>
            <span className="text-xl font-light text-white/90 exp-hours-glow">7:00 AM - 12:00 AM</span>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className={`relative w-full overflow-hidden mb-8 mt-4 md:mt-12 min-h-[320px] md:min-h-[340px] ${trackInView ? 'exp-marquee-in exp-delay-5' : 'opacity-0'}`}
      >
        {showMarquee ? (
          <div className="marquee-track flex w-max gap-4 md:gap-6 animate-marquee">
            {loopCards.map((card, idx) => (
              <MarqueeCard key={`${card.title}-${idx}`} card={card} loadImage />
            ))}
          </div>
        ) : (
          <div
            className={`h-64 sm:h-72 rounded-2xl bg-black/20 border border-white/10 mx-5 sm:mx-6 md:mx-16 lg:mx-24 max-w-3xl ${trackInView ? 'animate-pulse' : ''}`}
          />
        )}
      </div>
    </section>
  );
}
