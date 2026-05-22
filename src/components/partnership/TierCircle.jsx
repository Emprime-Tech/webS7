import React from 'react';

export default function TierCircle({ src, alt = 'Partner tier' }) {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[240px] mx-auto">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto max-w-[220px] md:max-w-[240px] object-contain select-none"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
