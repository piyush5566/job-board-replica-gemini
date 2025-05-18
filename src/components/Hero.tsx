
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-32 animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Find Your <span className="text-primary">Dream Job</span> Now
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Thousands of jobs in computer, engineering and technology sectors are waiting for you.
        </p>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="relative md:col-span-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Job title, keywords, or company"
                className="pl-10 w-full"
              />
            </div>
            <div className="relative md:col-span-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="City, state or zip code"
                className="pl-10 w-full"
              />
            </div>
            <Button type="submit" className="w-full md:col-span-1 py-3 text-base">
              Find Jobs
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
