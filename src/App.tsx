import React, { useState } from 'react';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FocusAreas } from './components/FocusAreas';
import { Events } from './components/Events';
import { WorkGallery } from './components/WorkGallery';
import { Team } from './components/Team';
import { Supporter } from './components/Supporter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export default function App() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#141413] flex flex-col selection:bg-[#0B4ECF] selection:text-white relative overflow-hidden">
      {/* Global Right-Side Sky Blue and Purple Mixed Atmospheric Feature Effect (60% opacity) */}
      <div className="absolute top-0 right-0 w-[550px] h-[1400px] bg-gradient-to-l from-[#0EA5E9]/50 via-[#8B5CF6]/50 to-transparent pointer-events-none blur-[130px] z-0" />

      {/* Scroll Progress Bar Tracker */}
      <ScrollProgressBar />

      {/* Short cinematic wordmark entrance loader */}
      <PageLoader onComplete={() => setLoaderComplete(true)} />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <FocusAreas />
        <Events />
        <WorkGallery />
        <Team />
        <Supporter />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
