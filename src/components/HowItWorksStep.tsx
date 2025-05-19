import React from 'react';
import { IconType } from 'react-icons';

interface HowItWorksStepProps {
  icon: IconType; // Icon component from react-icons
  title: string;
  description: string;
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center md:text-left">
      <div className="flex justify-center md:justify-start mb-4">
        <div className="bg-primary/10 text-primary p-4 rounded-full inline-block">
          <Icon className="h-8 w-8" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default HowItWorksStep;