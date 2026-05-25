import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../assets/footer-opt.webp';
import BrandLogo from './BrandLogo';
import { homeSectionPath } from '../constants/navSections';
import { useInView } from '../hooks/useInView';
import OptimizedImage from './OptimizedImage';
import { getWhatsAppHref } from '../utils/whatsapp';

function revealClass(inView, animation, delay = '') {
  return inView ? `${animation} ${delay}`.trim() : 'opacity-0';
}

const FOOTER_COLUMNS = [
  {
    key: 'brand',
    delay: 'exp-delay-1',
    content: (footerInView) => (
      <div className={`flex flex-col items-start space-y-6 ${revealClass(footerInView, 'cf-footer-col', 'exp-delay-1')}`}>
        <div className="flex items-center space-x-4">
          <BrandLogo variant="footer" className="pointer-events-auto" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-wider text-[#e85c0d]">PADEL</span>
            <span className="text-xs font-light text-white/70">Join The Elite</span>
          </div>
        </div>
        <a
          href={getWhatsAppHref('bookCourt')}
          target="_blank"
          rel="noopener noreferrer"
          className="court-btn-motion hero-btn-shine h-12 px-10 inline-flex items-center justify-center rounded-xl border border-[#e85c0d] text-sm font-medium tracking-wide bg-transparent text-[#e85c0d] hover:bg-[#e85c0d]/10 transition-all duration-300"
        >
          Book Now
        </a>
      </div>
    ),
  },
  {
    key: 'nav',
    delay: 'exp-delay-2',
    title: 'Navigation',
    links: [
      { to: homeSectionPath('home'), label: 'Home' },
      { to: homeSectionPath('about'), label: 'About' },
      { to: homeSectionPath('gallery'), label: 'Gallery' },
      { to: homeSectionPath('contact'), label: 'Services' },
    ],
  },
  {
    key: 'quick',
    delay: 'exp-delay-3',
    title: 'Quick Link',
    links: [
      { to: homeSectionPath('contact'), label: 'Contact us', isLink: true },
      // { href: '#faq', label: 'FAQs' },
      // { href: '#booking', label: 'Booking' },
      // { href: '#pages', label: 'Pages' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [footerRef, footerInView] = useInView('200px');

  return (
    <footer
      ref={footerRef}
      className="perf-section relative w-full font-sans tracking-wide text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {footerInView && (
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <OptimizedImage
            src={footer}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center exp-bg-motion"
          />
        </div>
      )}

      {!footerInView && (
        <div
          className="absolute inset-0 -z-20"
          style={{ background: 'linear-gradient(180deg, #1c0f06 0%, #120804 100%)' }}
        />
      )}

      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent ${footerInView ? 'exp-overlay-motion' : ''}`}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
        {FOOTER_COLUMNS[0].content(footerInView)}

        {FOOTER_COLUMNS.slice(1).map((col) => (
          <div
            key={col.key}
            className={`flex flex-col items-start space-y-4 ${revealClass(footerInView, 'cf-footer-col', col.delay)}`}
          >
            <h4 className="text-lg font-medium text-[#e85c0d]">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.isLink ? (
                    <Link
                      to={link.to}
                      className="cf-footer-link text-xs text-white/60 hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  ) : link.to ? (
                    <Link
                      to={link.to}
                      className="cf-footer-link text-xs text-white/60 hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="cf-footer-link text-xs text-white/60 hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div
          className={`flex flex-col items-start space-y-4 ${revealClass(footerInView, 'cf-footer-col', 'exp-delay-4')}`}
        >
          <h4 className="text-lg font-medium text-[#e85c0d]">Get In Touch</h4>
          <ul className="space-y-3 text-xs text-white/60">
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-[#e85c0d] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+971 58 586 9190</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-[#e85c0d] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Nadd Al Hamar, Dubai</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-[#e85c0d] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="break-all">info@s7padel.ae</span>
            </li>
          </ul>
        </div>

        <div
          className={`flex flex-col items-start space-y-4 ${revealClass(footerInView, 'cf-footer-col', 'exp-delay-5')}`}
        >
          <h4 className="text-lg font-medium text-[#e85c0d]">Social Media</h4>
          <p className="text-xs text-white/60 max-w-xs">
            Connect with us and be part of the S7 padel experience
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="cf-social-icon text-[#e85c0d]" aria-label="Instagram">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="cf-social-icon text-[#e85c0d]" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H8v-3h2.4V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 3h-2.4v7C18.3 21.1 22 17 22 12z" />
              </svg>
            </a>
            <a href="#" className="cf-social-icon text-[#e85c0d]" aria-label="Phone">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.112-3.758-6.582-6.582l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.75A2.25 2.25 0 001.5 4.5v2.25z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 ${revealClass(footerInView, 'cf-footer-col', 'exp-delay-6')}`}
      >
        <span>© {currentYear} S7 Padel Club. All rights reserved.</span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#privacy" className="cf-footer-link hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="cf-footer-link hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
