
import React from 'react';
import { Link } from 'react-router-dom';

const ContactHero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-20 md:py-32" 
      style={{ backgroundImage: "url('/lovable-uploads/9d22df95-5e17-42fc-ba09-4e956a406ee8.png')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Darker Overlay */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl">
          <div className="flex items-center mb-4">
            <div className="h-12 md:h-16 w-1.5 bg-green-500 mr-4"></div> {/* Accent line */}
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contact</h1>
          </div>
          <p className="text-sm text-white/90 ml-[22px]"> {/* Aligned with text */}
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">PAGES</span>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">CONTACT</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

