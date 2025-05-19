
import React from 'react';
import Header from '@/components/Header';
import NewFooter from '@/components/NewFooter';
import JobSearchForm from '@/components/JobSearchForm';
import JobsHero from '@/components/JobsHero';
import JobListings from '@/components/JobListings';

const JobsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow">
        <JobsHero />
        <JobSearchForm />
        <JobListings />
      </main>
      <NewFooter />
    </div>
  );
};

export default JobsPage;
