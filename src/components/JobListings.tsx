
import React from 'react';
import JobCard from './JobCard';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"; // Assuming pagination might be added later

const mockJobsData = [
  {
    logoUrl: '/lovable-uploads/b5d2859c-2e5d-43c6-82d0-b7f1ae9dff66.png', // Placeholder logo
    title: 'Senior Software Engineer - Python',
    companyName: 'Tech Innovators Inc.',
    location: 'New Delhi, India',
    employmentType: 'Full Time', // Not explicitly in screenshot card, but useful data
    salary: '₹1,20,00,000 - ₹1,50,00,000',
    postedDate: '2025-04-12',
  },
  {
    // No logoUrl, will use placeholder
    title: 'Senior Python Developer',
    companyName: 'Tech Solutions Ltd.',
    location: 'New Delhi, India',
    employmentType: 'Full Time',
    salary: '₹1,20,00,000 - ₹1,50,00,000',
    postedDate: '2025-04-13',
  },
  // Add more mock jobs if needed to test pagination or layout
];

const JobListings: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {mockJobsData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        {/* Basic Pagination Example (can be enhanced later) */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default JobListings;
