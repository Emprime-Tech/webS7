import React from 'react';
import heroDesktop from '../assets/hero-desktop-opt.webp';
import heroMobile from '../assets/hero-mobile-opt.webp';
import OptimizedImage from './OptimizedImage';
import { getWhatsAppHref } from '../utils/whatsapp';
import { useAppReady } from '../context/AppReadyContext';

function heroClass(ready, animation, delay = '') {
  return ready ? `${animation} ${delay}`.trim() : 'opacity-0';
}

export default function Hero() {
  const ready = useAppReady();

  return (
    <section
      id="home"
      className="perf-section relative min-h-[85vh] sm:min-h-screen w-full flex flex-col justify-center px-5 py-10 sm:p-8 md:p-16 lg:p-24 text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <OptimizedImage
          src={heroMobile}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-center md:hidden ${ready ? 'hero-bg-motion' : ''}`}
          priority
          sizes="100vw"
        />
        <OptimizedImage
          src={heroDesktop}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-center hidden md:block ${ready ? 'hero-bg-motion' : ''}`}
          priority
          sizes="100vw"
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent -z-10 ${ready ? 'hero-gradient-motion' : 'opacity-0'}`}
      />

      <div className="w-full max-w-2xl flex flex-col items-start space-y-5 z-10 text-left">
        <div className="w-full">
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.15] break-words">
            <span className="block overflow-hidden">
              <span className={`inline-block ${heroClass(ready, 'hero-reveal', 'hero-reveal-delay-1')}`}>
                <span className={ready ? 'text-[#e85c0d] hero-accent-glow' : 'text-[#e85c0d]'}>Where</span> Padel
              </span>
            </span>
            <span className="block overflow-hidden mt-1">
              <span className={`inline-block ${heroClass(ready, 'hero-reveal', 'hero-reveal-delay-2')}`}>Meet Precision</span>
            </span>
          </h1>
          <span
            className={`mt-4 block h-0.5 w-16 sm:w-20 rounded-full bg-[#e85c0d] ${ready ? 'hero-line-accent' : 'opacity-0 scale-x-0'}`}
            aria-hidden
          />
        </div>

        <p
          className={`text-sm sm:text-base md:text-lg text-white/90 max-w-md leading-relaxed ${heroClass(ready, 'hero-reveal', 'hero-reveal-delay-3')}`}
        >
          A premium indoor padel experience designed for performance, comfort, and privacy.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full max-w-lg ${heroClass(ready, 'hero-reveal', 'hero-reveal-delay-4')}`}
        >
          <a
            href={getWhatsAppHref('bookCourt')}
            target="_blank"
            rel="noopener noreferrer"
            className={`hero-btn-shine group inline-flex items-center justify-center min-h-[48px] sm:min-h-[50px] w-full sm:w-auto px-8 md:px-10 py-3 rounded-full border-2 border-[#e85c0d] text-sm sm:text-base font-medium tracking-wide text-[#e85c0d] bg-black/35 backdrop-blur-sm shadow-lg shadow-black/25 transition-all duration-300 hover:bg-[#e85c0d] hover:text-white hover:shadow-[#e85c0d]/25 hover:scale-[1.03] active:scale-[0.98] ${heroClass(ready, 'hero-btn-in', 'hero-btn-delay-1')}`}
          >
            Book The Court
          </a>

          <a
            href="#about"
            className={`inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[50px] w-full sm:w-auto px-8 md:px-10 py-3 rounded-full border-2 border-white/50 text-sm sm:text-base font-medium tracking-wide text-white bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/15 hover:scale-[1.03] active:scale-[0.98] group ${heroClass(ready, 'hero-btn-in', 'hero-btn-delay-2')}`}
          >
            Explore S7
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
