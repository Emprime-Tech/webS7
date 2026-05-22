import React from 'react';
import Hero from '../components/Hero';
import ExperienceSection from '../components/ExperienceSection';
import CourtsSection from '../components/CourtsSection';
import Contact from '../components/Contact';
import ContactLocation from '../components/ContactLocation';

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <CourtsSection />
      <Contact />
      <ContactLocation />
    </>
  );
}
