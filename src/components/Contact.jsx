import React, { useState } from 'react';

export default function Contact() {
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
      id="contact"
      className="min-h-screen w-full flex flex-col items-center justify-start 
      px-6 py-12 font-sans tracking-wide text-[#e2d6cd]"
      style={{
        background: `
          radial-gradient(circle at 80% 70%, #8a4b14 0%, #5a2e0a 25%, #2b1406 55%, #140904 100%),
          linear-gradient(135deg, #120804 0%, #1c0f06 40%, #2a1608 70%, #120804 100%)
        `
      }}
    >

      {/* HEADER */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.3em] text-white/60 uppercase mb-2">
          CONTACT US
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-orange-500">
          Get in Touch
        </h1>
      </div>

      {/* FORM CONTAINER */}
      <div className="w-full max-w-5xl border border-white/10 rounded-xl p-8 bg-white/[0.02] backdrop-blur-md">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-[#dfd0c5]">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/[0.05] 
                text-sm text-[#e2d6cd] placeholder-white/30 
                focus:outline-none focus:border-orange-400 focus:bg-white/[0.08] transition-all"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-[#dfd0c5]">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/[0.05] 
                text-sm text-[#e2d6cd] placeholder-white/30 
                focus:outline-none focus:border-orange-400 focus:bg-white/[0.08] transition-all"
              />
            </div>
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-[#dfd0c5]">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/[0.05] 
                text-sm text-[#e2d6cd] placeholder-white/30 
                focus:outline-none focus:border-orange-400 focus:bg-white/[0.08] transition-all"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-[#dfd0c5]">
                Enquiry Type *
              </label>
              <input
                type="text"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                placeholder="Enquiry"
                required
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/[0.05] 
                text-sm text-[#e2d6cd] placeholder-white/30 
                focus:outline-none focus:border-orange-400 focus:bg-white/[0.08] transition-all"
              />
            </div>
          </div>

          {/* Message with LIGHT YELLOW GLOW */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-light text-[#dfd0c5]">
              Message *
            </label>

            <div className="rounded-xl p-[1px] 
              bg-[radial-gradient(circle_at_75%_60%,rgba(255,190,90,0.18),rgba(255,140,0,0.08),transparent_70%)]">
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                required
                className="w-full p-4 rounded-xl border border-white/10 
                bg-[#ffffff08] 
                text-sm text-[#e2d6cd] placeholder-white/30 
                focus:outline-none focus:border-orange-300 
                transition-all resize-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col space-y-6 items-center">
            <div className="flex items-center space-x-3 self-start">
              <input
                type="checkbox"
                id="agreeToTalk"
                name="agreeToTalk"
                checked={formData.agreeToTalk}
                onChange={handleChange}
                className="h-4 w-4 rounded border-white/30 bg-transparent text-orange-400 focus:ring-0"
              />
              <label className="text-xs font-light text-[#bcaea4]">
                I agree to talk about my project with smart by tolabs
              </label>
            </div>

            <button
              type="submit"
              className="group flex items-center space-x-2 px-10 py-3 rounded-full 
              border border-white/30 text-xs text-[#dfd0c5] tracking-widest 
              hover:bg-white/10 transition-all duration-300"
            >
              <span>Send Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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