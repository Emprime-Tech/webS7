import React from 'react';
import { ACCENT } from './constants';

export default function OutlineButton({ children, className = '' }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full border bg-transparent text-sm font-medium tracking-wide transition hover:bg-[#e85c0d]/10 ${className}`}
      style={{ borderColor: ACCENT, color: ACCENT }}
    >
      {children}
    </button>
  );
}
