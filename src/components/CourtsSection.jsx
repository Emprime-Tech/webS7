import React from 'react';
import { Link } from 'react-router-dom';
import court from '../assets/court-opt.webp';
import { useInView } from '../hooks/useInView';
import OptimizedImage from './OptimizedImage';
import LazyWhenVisible from './LazyWhenVisible';

export default function CourtsSection() {
  const [sectionRef, sectionInView] = useInView('150px');

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="perf-section relative min-h-screen w-full flex flex-col items-center justify-between p-12 font-sans tracking-wide text-white overflow-hidden"
    >
      {sectionInView ? (
        <OptimizedImage
          src={court}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center -z-20"
        />
      ) : (
        <div
          className="absolute inset-0 -z-20"
          style={{ background: 'linear-gradient(180deg, #1c0f06 0%, #120804 100%)' }}
        />
      )}

      <div className="w-full max-w-5xl flex flex-col items-center text-center mt-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium text-[#e85c0d] mb-3">Our Courts</h2>
        <p className="text-lg md:text-xl font-light text-white/90 mb-8">
          Designed for comfort, built for perfomance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 w-full max-w-3xl">
          <div className="flex flex-col">
            <div className="h-12 flex items-center justify-center border border-white/30 bg-black/40 rounded-t-xl text-sm">
              4 Indoor Professional Courts
            </div>
            <div className="h-12 flex items-center justify-center border border-t-0 border-white/30 bg-black/40 rounded-b-xl text-sm">
              Premium Playing Surface
            </div>
          </div>

          <div className="flex flex-col mt-4 md:mt-0">
            <div className="h-12 flex items-center justify-center border border-white/30 bg-black/40 rounded-t-xl text-sm">
              Private Ladies Court
            </div>
            <div className="h-12 flex items-center justify-center border border-t-0 border-white/30 bg-black/40 rounded-b-xl text-sm">
              Highest Sealing
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl flex flex-col items-center text-center py-12 md:py-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium text-[#e85c0d] mb-3">Partner With S7</h2>
        <p className="text-lg md:text-xl font-light text-white/90 mb-8 max-w-2xl">
          Connect your brand with Dubai&apos;s premium indoor padel community.
        </p>
        <Link
          to="/partnership"
          onClick={() => window.scrollTo(0, 0)}
          className="px-8 py-2.5 rounded-full border border-[#e85c0d] text-white text-sm tracking-wide bg-transparent hover:bg-[#e85c0d]/10 transition"
        >
          View Sponsorship Opportunities
        </Link>
      </div>

      <LazyWhenVisible className="w-full max-w-6xl mb-16 px-4 relative z-10" minHeight="200px">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h3 className="text-4xl md:text-5xl text-[#e85c0d] mb-3">Ready to Play?</h3>
            <p className="text-white/80 text-sm max-w-sm">
              Text Reserve your court and experience padel at a higher standard.
            </p>
          </div>

          <div className="text-right flex flex-col items-end">
            <h3 className="text-4xl md:text-5xl text-[#e85c0d]">
              More Then <br /> Just a Game
            </h3>
            <p className="text-white/80 text-sm mt-2 max-w-sm">
              Every detail created for your comfort.
            </p>

            <button
              type="button"
              className="mt-6 flex items-center gap-2 border border-orange-500 text-orange-400 px-5 py-2 rounded-full hover:bg-orange-500 hover:text-black transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.52 3.48A11.77 11.77 0 0012.05 0C5.46 0 .09 5.37.09 11.96c0 2.1.55 4.16 1.6 5.97L0 24l6.22-1.63a11.9 11.9 0 005.83 1.48h.01c6.59 0 11.96-5.37 11.96-11.96 0-3.2-1.25-6.2-3.5-8.41z" />
              </svg>
              Get in touch Whatsapp
            </button>
          </div>
        </div>
      </LazyWhenVisible>
    </section>
  );
}
