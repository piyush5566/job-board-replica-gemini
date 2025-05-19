import React, { useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from 'react-icons/fa';

// Add custom CSS for the center slide
const customStyles = `
.slick-slide.slick-active:not(.slick-center.slick-current) .testimonial-card {
  background-color: #10b981 !important;
  color: white !important;
}
.slick-slide.slick-active:not(.slick-center.slick-current) .quote-icon {
  color: white !important;
}
.slick-slide.slick-active:not(.slick-center.slick-current) .role {
  color: rgba(255, 255, 255, 0.8) !important;
}
`;

const testimonials = [
  {
    quote: "Thanks to this platform, I found my dream job in just two weeks! The process was smooth, and the job matching was spot-on with my skills and experience.",
    authorName: "Sarah Johnson",
    authorRole: "Software Developer",
    avatarUrl: "https://i.pravatar.cc/48?u=sarahjohnson",
  },
  {
    quote: "As an employer, this platform has helped us find exceptional talent quickly. The quality of candidates and the user-friendly interface make recruitment a breeze.",
    authorName: "Michael Chen",
    authorRole: "HR Director",
    avatarUrl: "https://i.pravatar.cc/48?u=michaelchen",
  },
  {
    quote: "The job search was overwhelming until I found this portal. The categorization and filters made it easy to find relevant roles. Highly recommended!",
    authorName: "David Lee",
    authorRole: "Marketing Manager",
    avatarUrl: "https://i.pravatar.cc/48?u=davidlee",
  },
];

const SuccessStories: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    className: "center",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <section 
      className="py-12 sm:py-16 bg-white"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <style>{customStyles}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-12">
          Success Stories
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="testimonial-card rounded-lg p-6 h-full bg-slate-100">
                <FaQuoteLeft className="quote-icon text-3xl mb-4 text-primary" />
                <p className="mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.authorName}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h5 className="font-semibold mb-1">{testimonial.authorName}</h5>
                    <p className="text-sm role text-slate-500">{testimonial.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;