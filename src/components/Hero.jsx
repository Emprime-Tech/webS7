import React from 'react';
// import Navbar from './Navbar';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center p-8 md:p-16 lg:p-24 text-white overflow-hidden mb-[]">

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-20"
        loading="lazy"
        decoding="async"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent -z-10" />

      {/* Hero Content */}
      <div className="w-full max-w-2xl flex flex-col items-start space-y-6 z-10">
        
        <h1 className="text-5xl md:text-6xl font-medium leading-tight">
          <span className="text-[#e85c0d]">Where</span> Padel <br />
          Meet Precision
        </h1>

        <p className="text-sm md:text-base text-white/90 max-w-sm leading-relaxed">
          A premium indoor padel experience designed for performance, comfort, and privacy.
        </p>

        <div className="flex flex-col space-y-4 pt-4">
          <button className="h-12 px-8 rounded-xl border border-white/50 text-sm bg-black/40 text-[#e85c0d] hover:bg-black/60">
            Book The Court
          </button>

          <button className="text-sm text-white/90 hover:text-white">
            Explore S7
          </button>
        </div>

      </div>
    </section>
  );
}