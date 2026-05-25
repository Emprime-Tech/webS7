import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const INPUT_CLASS =
  'cf-input-motion w-full h-12 px-4 rounded-xl border border-white/10 bg-white/[0.05] text-sm text-[#e2d6cd] placeholder-white/30 focus:outline-none focus:border-orange-400 focus:bg-white/[0.08]';

function revealClass(inView, animation, delay = '') {
  return inView ? `${animation} ${delay}`.trim() : 'opacity-0';
}

export default function Contact() {
  const [sectionRef, sectionInView] = useInView('120px');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
    agreeToTalk: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full flex flex-col items-center justify-start px-6 pt-12 pb-20 font-sans tracking-wide text-[#e2d6cd] overflow-hidden"
      style={{
        backgroundColor: '#120804',
        backgroundImage: `
          radial-gradient(circle at 80% 70%, #8a4b14 0%, #5a2e0a 25%, #2b1406 55%, #140904 100%),
          linear-gradient(135deg, #120804 0%, #1c0f06 40%, #2a1608 70%, #120804 100%)
        `,
      }}
    >
      <div className="text-center mb-10">
        <p
          className={`text-xs tracking-[0.3em] text-white/60 uppercase mb-2 ${revealClass(sectionInView, 'exp-reveal-up', 'exp-delay-1')}`}
        >
          CONTACT US
        </p>
        <h1
          className={`text-4xl md:text-5xl font-light text-orange-500 ${revealClass(sectionInView, 'exp-reveal-up', 'exp-delay-2')}`}
        >
          Get in Touch
        </h1>
        <span
          className={`mx-auto mt-4 block h-0.5 w-12 rounded-full bg-orange-500 ${sectionInView ? 'exp-line-left exp-delay-3' : 'opacity-0 scale-x-0'}`}
          aria-hidden
        />
      </div>

      <div
        className={`w-full max-w-5xl border border-white/10 rounded-xl p-8 bg-white/[0.04] ${revealClass(sectionInView, 'cf-form-in', 'exp-delay-4')}`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${revealClass(sectionInView, 'cf-field-in', 'court-delay-3')}`}
          >
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-[#dfd0c5]">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Name"
                required
                className={INPUT_CLASS}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-[#dfd0c5]">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${revealClass(sectionInView, 'cf-field-in', 'court-delay-4')}`}
          >
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-[#dfd0c5]">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className={INPUT_CLASS}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-[#dfd0c5]">Enquiry Type *</label>
              <input
                type="text"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                placeholder="Enquiry"
                required
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div
            className={`flex flex-col space-y-2 ${revealClass(sectionInView, 'cf-field-in', 'court-delay-5')}`}
          >
            <label className="text-sm font-light text-[#dfd0c5]">Message *</label>
            <div className="rounded-xl p-[1px] bg-[radial-gradient(circle_at_75%_60%,rgba(255,190,90,0.18),rgba(255,140,0,0.08),transparent_70%)]">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                required
                className="cf-input-motion w-full p-4 rounded-xl border border-white/10 bg-white/5 text-sm text-[#e2d6cd] placeholder-white/30 focus:outline-none focus:border-orange-300 resize-none"
              />
            </div>
          </div>

          <div
            className={`flex flex-col space-y-6 items-center ${revealClass(sectionInView, 'cf-field-in', 'court-delay-6')}`}
          >
            <div className="flex items-center space-x-3 self-start">
              <input
                type="checkbox"
                id="agreeToTalk"
                name="agreeToTalk"
                checked={formData.agreeToTalk}
                onChange={handleChange}
                className="h-4 w-4 rounded border-white/30 bg-transparent text-orange-400 focus:ring-0"
              />
              <label htmlFor="agreeToTalk" className="text-xs font-light text-[#bcaea4]">
                I agree to talk about my project with smart by tolabs
              </label>
            </div>

            <button
              type="submit"
              className="court-btn-motion hero-btn-shine group flex items-center space-x-2 px-10 py-3 rounded-full border border-white/30 text-xs text-[#dfd0c5] tracking-widest hover:bg-white/10"
            >
              <span>Send Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
