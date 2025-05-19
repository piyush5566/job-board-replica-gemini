
import React from 'react';
import JobCard from './JobCard';

const mockJobs = [
  {
    logoUrl: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/python_logo_icon_147065.png', // Example logo
    title: 'Senior Python Developer',
    companyName: 'Tech Solutions Inc.',
    location: 'New Delhi, India',
    employmentType: 'Full Time',
    salary: '₹1,20,00,000 - ₹1,50,00,000 PA',
    postedDate: '2025-04-10',
  },
  {
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', // Example logo
    title: 'Frontend React Engineer',
    companyName: 'Innovate Hub',
    location: 'Remote',
    employmentType: 'Full Time',
    salary: 'Competitive',
    postedDate: '2025-04-12',
  },
  {
    // No logo for this one to test placeholder
    title: 'UX Designer',
    companyName: 'Creative Minds LLC',
    location: 'Bangalore, India',
    employmentType: 'Contract',
    salary: '₹80,000 - ₹1,20,000 PM',
    postedDate: '2025-04-15',
  }
];

const FeaturedJobs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Featured <span className="text-primary">Jobs</span>
        </h2>
        <div className="space-y-6">
          {mockJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
