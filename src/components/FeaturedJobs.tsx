import React, { useEffect } from 'react';
import JobCard from './JobCard';
import { Button } from "@/components/ui/button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const mockJobs = [
  {
    logoUrl: '/lovable-uploads/b5d2859c-2e5d-43c6-82d0-b7f1ae9dff66.png', // Using the uploaded image as a generic placeholder. Ideally specific avatars/logos.
    title: 'Senior Python Developer',
    companyName: 'Tech Solutions Inc.',
    location: 'New Delhi, India',
    employmentType: 'Full Time',
    salary: '₹1,20,00,000 - ₹1,50,00,000',
    postedDate: '2025-04-11',
  },
  {
    // No logoUrl, will use placeholder
    title: 'Senior Software Engineer - Python',
    companyName: 'Innovate Hub',
    location: 'New Delhi, India',
    employmentType: 'Full Time',
    salary: '₹1,20,00,000 - ₹1,50,00,000',
    postedDate: '2025-04-12',
  },
  {
    title: 'Creative Director',
    companyName: 'Creative Minds LLC',
    location: 'Austin, TX',
    employmentType: 'Full Time',
    salary: '$120,000 - $150,000',
    postedDate: '2025-04-12',
  },
  {
    title: 'Product Designer',
    companyName: 'Design Co.',
    location: 'Seattle, WA',
    employmentType: 'Full Time',
    salary: '$85,000 - $110,000',
    postedDate: '2025-04-12',
  },
  {
    title: 'Motion Designer',
    companyName: 'Animators Inc.',
    location: 'Chicago, IL',
    employmentType: 'Full Time',
    salary: '$70,000 - $90,000',
    postedDate: '2025-04-12',
  }
];

const FeaturedJobs: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Featured Jobs
        </h2>
        <div 
          className="space-y-4 sm:space-y-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {mockJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">Browse More Jobs</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;