import React from 'react';
import { Link } from 'react-router-dom';
import s7Logo from '../assets/SS7.PNG';
import { homeSectionPath } from '../constants/navSections';

export default function BrandLogo({ variant = 'nav', onClick, className = '' }) {
  const heightClass = variant === 'footer' ? 'h-14 md:h-16' : 'h-9 md:h-10';

  return (
    <Link
      to={homeSectionPath('home')}
      onClick={onClick}
      className={`inline-flex items-center shrink-0 ${className}`}
      aria-label="S7 Padel Club home"
    >
      <img
        src={s7Logo}
        alt="S7 Padel Club"
        className={`${heightClass} w-auto object-contain`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
