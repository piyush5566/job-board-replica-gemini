
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const AboutMission: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {/* Using placeholder images as per context */}
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
              alt="Team discussing work" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"
            />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
              alt="Woman working on laptop" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square mt-4 md:mt-8"
            />
             <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
              alt="Laptop on desk" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square col-span-2"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              We Help You Find Your Dream Job and Connect with Top Talent
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our platform bridges the gap between talented professionals and leading employers. We're committed to making job searching and recruitment simpler, faster, and more effective.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Access to thousands of verified job listings</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Smart job matching and recommendations</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Direct connection with top employers</span>
              </li>
            </ul>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
