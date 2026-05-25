import React from 'react';
import { ACCENT } from './constants';

export default function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`text-center text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase mb-14 md:mb-20 ${className}`}
      style={{ color: ACCENT }}
    >
      {children}
    </h2>
  );
}
