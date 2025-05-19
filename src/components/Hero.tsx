
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  // Placeholder image URL, replace with a suitable one for a job portal
  const heroBackgroundImage = "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80')";

  return (
    <section 
      className="py-20 md:py-40 text-white relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: heroBackgroundImage }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative inline-block">
            {/* Decorative green accent line - using a pseudo-element might be better or a div */}
            <span className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1.5 bg-green-500 rounded-full hidden sm:block"></span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Find The Perfect Job That You Deserved
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover thousands of job opportunities across multiple industries. Your dream career awaits with competitive salaries and benefits from top employers.
          </p>
          <Button size="lg" className="py-3 px-8 text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Search A Job
          </Button>
        </div>
      </div>
      {/* Carousel arrows - skipping for now as per plan */}
      {/* 
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white">
        &lt;
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white">
        &gt;
      </button> 
      */}
    </section>
  );
};

export default Hero;
