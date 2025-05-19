
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from 'lucide-react';

const TalentSection: React.FC = () => {
  const benefits = [
    "Thousands of verified job listings",
    "Smart job matching technology",
    "Direct communication with employers",
    "Career guidance and resources",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Collage Placeholder */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
            <div className="bg-slate-200 h-40 md:h-56 rounded-lg shadow-md" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="bg-slate-200 h-40 md:h-56 rounded-lg shadow-md row-span-2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="bg-slate-200 h-40 md:h-56 rounded-lg shadow-md" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              We Help To Get The Best Job And Find A <span className="text-primary">Talent</span>
            </h2>
            <p className="text-slate-600 mb-6 text-lg">
              At StartWorking, we're dedicated to connecting talented professionals with their dream jobs and helping employers find the perfect candidates to drive their business forward.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button size="lg">Read More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentSection;
