
import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 sm:py-24 relative">
      {/* Placeholder for background image - using a gradient for now */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/lovable-uploads/b5d2859c-2e5d-43c6-82d0-b7f1ae9dff66.png')" }} // Using an existing uploaded image as placeholder
      ></div>
      <div className="absolute inset-0 bg-black opacity-10"></div> {/* Dark overlay */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              About Us
            </h1>
            <div className="absolute -top-2 -left-3 -bottom-2 -right-3 border-2 border-primary opacity-50 rounded-sm"></div>
             <div className="absolute -top-3 -left-4 -bottom-1 -right-2 border-2 border-green-500 opacity-70 rounded-sm"></div>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <a href="/" className="hover:text-primary">HOME</a>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-slate-500">PAGES</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="font-semibold text-primary">ABOUT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
