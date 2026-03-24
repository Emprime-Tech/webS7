import React from 'react';

export default function ExperienceSection() {
  const cards = [
    {
      title: 'Courts',
      img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea',
    },
    {
      title: 'Interior',
      img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10',
    },
    {
      title: 'Facilities',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    },
    {
      title: 'Should you visit',
      img: 'https://images.unsplash.com/photo-1599518115520-dfd35e0dc65a',
    },
    // Added 4 new images for variety
    {
      title: 'Premium Lounge',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
      title: 'Pro Shop',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    },
    {
      title: 'Training Zone',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    },
    {
      title: 'Recovery Spa',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
    },
  ];

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-between p-12 font-sans tracking-wide text-white bg-transparent overflow-hidden">
      
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #080604 100%)"
        }}
      />

      {/* --- Top Container --- */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 items-start z-10">
        {/* Left Column: Heading */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-4xl md:text-5xl font-medium text-[#e85c0d]">
            Experience
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-white/90">
            The Atmosphere
          </h3>
          <p className="pt-6 text-base font-light text-white/80">
            Clean spaces. Premium courts. Pure focus.
          </p>
        </div>

        {/* Right Column: Welcome + Opening Hours */}
        <div className="flex flex-col items-end text-right space-y-12">
          <div className="flex flex-col items-end space-y-3 max-w-lg">
            <h4 className="text-3xl font-medium text-[#e85c0d]">
              Welcome to S7 Padel
            </h4>
            <p className="text-sm font-light text-white/70 leading-relaxed">
              S7 is a luxury indoor padel club built for players who value quality, comfort, and a professional playing environment. With four world-class courts including a private ladies-only court S7 combines sport, wellness, and hospitality under one roof.
            </p>
          </div>

          <div className="flex flex-col items-end space-y-1">
            <span className="text-2xl font-medium text-[#e85c0d]">
              Opening Hours:
            </span>
            <span className="text-xl font-light text-white/90">
              7:00 AM - 12:00 AM
            </span>
          </div>
        </div>
      </div>

      {/* --- Infinite Moving Track --- */}
      <div className="relative w-full overflow-hidden mb-8 mt-12">
        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
          
          {/* Track 1 (Original items) */}
          {cards.map((card, idx) => (
            <div key={`orig-${idx}`} className="flex flex-col items-center space-y-4 w-72 flex-shrink-0">
              <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-white/20 bg-black/30">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <span className="text-sm font-light text-white/80 tracking-widest">
                {card.title}
              </span>
            </div>
          ))}

          {/* Track 2 (Duplicate items for seamless looping) */}
          {cards.map((card, idx) => (
            <div key={`dup-${idx}`} className="flex flex-col items-center space-y-4 w-72 flex-shrink-0">
              <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-white/20 bg-black/30">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <span className="text-sm font-light text-white/80 tracking-widest">
                {card.title}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}