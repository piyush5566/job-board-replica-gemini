import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      image: '/img/carousel-1.jpg',
      title: 'Find The Perfect Job That You Deserved',
      description: 'Discover thousands of job opportunities across multiple industries. Your dream career awaits with competitive salaries and benefits from top employers.'
    },
    {
      image: '/img/carousel-2.jpg',
      title: 'Find The Best Job That Fit You',
      description: 'Whether you\'re starting your career or looking for your next opportunity, we connect skilled professionals with companies that value talent and innovation.'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="container-fluid p-0 relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" 
           style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative">
              <img className="w-full object-cover" src={slide.image} alt="" />
              <div className="absolute inset-0 flex items-center" 
                  style={{ background: "rgba(43, 57, 64, .5)" }}>
                <div className="container mx-auto px-4">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        {slide.title}
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        {slide.description}
                      </p>
                      <Link to="/jobs" 
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                        Search A Job
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Carousel Navigation */}
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 z-20 flex flex-col space-y-2">
        <button 
          onClick={prevSlide}
          className="p-2 bg-transparent hover:bg-[#00B074] border border-white rounded-sm text-white w-[45px] h-[45px] flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={22} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 bg-transparent hover:bg-[#00B074] border border-white rounded-sm text-white w-[45px] h-[45px] flex items-center justify-center transition-colors"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
