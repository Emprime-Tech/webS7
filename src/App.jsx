import React, { lazy, Suspense, useState } from "react";
// Imports for route/section lazy loading
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const CourtsSection = lazy(() => import("./components/CourtsSection"));
const Contact = lazy(() => import("./components/Contact"));
const ContactLocation = lazy(() => import("./components/ContactLocation"));
const Footer = lazy(() => import("./components/Footer"));
const About = lazy(() => import("./components/About"));
// import LoadingPage from "./components/LoadingPage";

function App() {
  // const [loading, setLoading] = useState(true);

  // hide the loader once it reports 100%
  // const handleLoaded = () => {
  //   setLoading(false);
  // };

  // if (loading) {
  //   return <LoadingPage onComplete={handleLoaded} />;
  // }

  return (
    // <Suspense fallback={<LoadingPage onComplete={() => {}} />}>
      <div className="font-sans overflow-x-hidden">
        <Navbar />
        <main className="">
          <Hero />
          {/* <About /> */}
          <ExperienceSection />
          <CourtsSection />
          <Contact />
          <ContactLocation />
        </main>
        <Footer />
        {/* <Chatbot /> */}
      </div>
    // </Suspense>
  );
}

export default App;
