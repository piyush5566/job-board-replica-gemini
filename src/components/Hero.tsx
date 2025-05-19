import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

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
    <div className="container-fluid p-0 relative overflow-hidden h-screen">
      <div className="flex transition-transform duration-500 ease-in-out h-full" 
           style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <div className="relative h-full">
              <img className="w-full h-full object-cover" src={slide.image} alt="" />
              <div className="absolute inset-0 flex items-center" 
                  style={{ background: "rgba(43, 57, 64, .5)" }}>
                <div className="container mx-auto px-4">
                  <div className="flex justify-start">
                    <div className="w-full md:w-10/12 lg:w-8/12 relative">
                      {/* Green border styling */}
                      <div className="header-content relative pl-4 sm:pl-9 py-6 sm:py-11 border-l-[8px] sm:border-l-[15px] border-[#00B074]">
                        {/* Top green bar */}
                        <div className="absolute top-0 left-0 h-[8px] sm:h-[15px] w-[60px] sm:w-[100px] bg-[#00B074]"></div>
                        {/* Bottom green bar */}
                        <div className="absolute bottom-0 left-0 h-[8px] sm:h-[15px] w-[60px] sm:w-[100px] bg-[#00B074]"></div>
                        
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white animate-slideInDown mb-2 sm:mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-sm sm:text-base text-white mb-3 sm:mb-4 pb-1 sm:pb-2 max-w-full sm:max-w-[90%]">
                          {slide.description}
                        </p>
                        <Link to="/jobs" 
                          className="bg-[hsl(221,83%,53%)] text-white py-2 px-4 sm:py-3 sm:px-5 me-3 animate-slideInLeft inline-block rounded font-semibold hover:bg-[hsl(221,83%,48%)] transition-colors text-sm sm:text-base">
                          Search A Job
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Carousel Navigation - positioned on the right side */}
      <div className="absolute top-1/2 right-[5%] sm:right-[8%] -translate-y-1/2 z-20 flex flex-col space-y-2">
        <button 
          onClick={prevSlide}
          className="p-1 sm:p-2 bg-transparent hover:bg-[#00B074] border border-white rounded-sm text-white w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex items-center justify-center transition-colors"
        >
          <IoChevronBack size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-1 sm:p-2 bg-transparent hover:bg-[#00B074] border border-white rounded-sm text-white w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex items-center justify-center transition-colors"
        >
          <IoChevronForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;