import React from 'react';
import HowItWorksStep from './HowItWorksStep';
import { IoPencil, IoSearch, IoPaperPlane } from 'react-icons/io5';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: IoPencil, // Corresponds to 'create-profile'
      title: 'Create Your Profile',
      description: 'Build your professional profile, upload your resume, and highlight your skills and experience.',
    },
    {
      icon: IoSearch, // Corresponds to 'search'
      title: 'Search Jobs',
      description: 'Browse through thousands of verified job listings and filter by category, location, and company.',
    },
    {
      icon: IoPaperPlane, // Corresponds to 'apply-with-ease'
      title: 'Apply With Ease',
      description: 'Apply to jobs with just one click and track all your applications in one place.',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12 md:mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <HowItWorksStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;