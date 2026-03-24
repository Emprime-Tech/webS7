import React from 'react';
import location from '../assets/location.png'; // 👈 your map background image

export default function ContactLocation() {
  return (
    <div className="relative min-h-screen w-full text-white font-sans p-8 md:p-16 flex flex-col items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={location}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-20"
        loading="lazy"
        decoding="async"
      />

      {/* Light Yellow Golden Gradient on the RIGHT side (as per your image) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 75% 50%, 
              rgba(255, 200, 90, 0.28) 0%, 
              rgba(255, 160, 50, 0.20) 25%, 
              rgba(255, 120, 30, 0.10) 45%, 
              transparent 70%)
          `
        }}
      />

      {/* Subtle dark overlay for better contrast */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-l from-black/60 via-black/40 to-transparent"
      />

      {/* --- Contact Info Section --- */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 relative z-10">

        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-xl border border-[#e85c0d] flex items-center justify-center">
            <svg className="w-6 h-6 text-[#e85c0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="text-sm text-white/80">+971 58 586 9190</span>
        </div>

        <div className="hidden md:block h-12 w-[1px] bg-white/20" />

        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-xl border border-[#e85c0d] flex items-center justify-center">
            <svg className="w-6 h-6 text-[#e85c0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-sm text-white/80">Nadd Al Hamar, Dubai</span>
        </div>

        <div className="hidden md:block h-12 w-[1px] bg-white/20" />

        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-xl border border-[#e85c0d] flex items-center justify-center">
            <svg className="w-6 h-6 text-[#e85c0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-sm text-white/80">info@s7padel.ae</span>
        </div>
      </div>

      {/* --- Map Section --- */}
      <div className="w-full max-w-5xl relative z-10">
        <h2 className="text-3xl text-[#e85c0d] mb-8">Our Location</h2>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.123456!2d55.385!3d25.185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzA2LjAiTiA1NcKwMjMnMDYuMCJF!5e0!3m2!1sen!2sae!4v123456789"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
}