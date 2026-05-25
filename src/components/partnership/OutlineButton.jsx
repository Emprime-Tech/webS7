import React from 'react';
import { ACCENT } from './constants';

const baseClass =
  'inline-flex items-center justify-center rounded-full border bg-transparent text-sm font-medium tracking-wide transition hover:bg-[#e85c0d]/10';

export default function OutlineButton({ children, className = '', href }) {
  const classNames = `${baseClass} ${className}`.trim();
  const style = { borderColor: ACCENT, color: ACCENT };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} style={style}>
      {children}
    </button>
  );
}
