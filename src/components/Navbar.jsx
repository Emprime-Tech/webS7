import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { NAV_ITEMS, homeSectionPath } from '../constants/navSections';
import { getWhatsAppHref } from '../utils/whatsapp';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
      <div className="h-16 flex items-center justify-between px-8 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center">
          <BrandLogo onClick={closeMenu} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={homeSectionPath(item.section)}
              className="text-sm text-white font-light tracking-wider hover:text-[#e85c0d] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <a
            href={getWhatsAppHref('bookCourt')}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-6 inline-flex items-center justify-center rounded-xl border border-white/30 text-xs tracking-widest bg-black/40 text-[#e85c0d] hover:bg-black/60 transition"
          >
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center h-9 w-9 border border-white/20 rounded-lg bg-black/30"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-4 bg-white transition ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`h-0.5 w-4 bg-white my-0.5 transition ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-4 bg-white transition ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full rounded-2xl border border-white/20 bg-black/95 flex flex-col items-center space-y-6 py-8 transition-all ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={homeSectionPath(item.section)}
            onClick={closeMenu}
            className="text-sm text-white hover:text-[#e85c0d]"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={getWhatsAppHref('bookCourt')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="h-10 px-8 inline-flex items-center justify-center rounded-xl border border-white/30 text-xs tracking-widest text-[#e85c0d] hover:bg-black/60"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
