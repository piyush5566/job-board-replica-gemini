
import React from 'react';
import Header from '@/components/Header';
import NewFooter from '@/components/NewFooter';
import AboutHero from '@/components/AboutHero';
import AboutMission from '@/components/AboutMission';
import HowItWorksSection from '@/components/HowItWorksSection';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <AboutMission />
        <HowItWorksSection />
      </main>
      <NewFooter />
    </div>
  );
};

export default AboutPage;
