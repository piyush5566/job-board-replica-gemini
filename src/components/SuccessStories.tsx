
import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "As an employer, this platform has helped us find exceptional talent quickly. The quality of candidates and the user-friendly interface make recruitment a breeze.",
    authorName: "Michael Chen",
    authorRole: "HR Director",
    avatarUrl: "https://i.pravatar.cc/48?u=michaelchen", // Placeholder avatar
  },
  {
    quote: "Thanks to this platform, I found my dream job in just two weeks! The process was smooth, and the job matching was spot-on with my skills and experience.",
    authorName: "Sarah Johnson",
    authorRole: "Software Developer",
    avatarUrl: "https://i.pravatar.cc/48?u=sarahjohnson", // Placeholder avatar
    highlighted: true,
  },
  {
    quote: "The job search was overwhelming until I found this portal. The categorization and filters made it easy to find relevant roles. Highly recommended!",
    authorName: "David Lee",
    authorRole: "Marketing Manager",
    avatarUrl: "https://i.pravatar.cc/48?u=davidlee", // Placeholder avatar
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              authorName={testimonial.authorName}
              authorRole={testimonial.authorRole}
              avatarUrl={testimonial.avatarUrl}
              highlighted={testimonial.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
