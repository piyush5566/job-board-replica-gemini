
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const JobSearchForm: React.FC = () => {
  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-1">
            <label htmlFor="companyName" className="block text-sm font-medium text-primary-foreground mb-1">Company Name</label>
            <Input
              id="companyName"
              type="text"
              placeholder="Enter company name"
              className="bg-white text-slate-900 placeholder:text-slate-400 text-base md:text-sm" /* Ensured text size from input.tsx */
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="category" className="block text-sm font-medium text-primary-foreground mb-1">Category</label>
            <Input
              id="category"
              type="text"
              placeholder="Enter category"
              className="bg-white text-slate-900 placeholder:text-slate-400 text-base md:text-sm"
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="location" className="block text-sm font-medium text-primary-foreground mb-1">Location</label>
            <Input
              id="location"
              type="text"
              placeholder="Enter location"
              className="bg-white text-slate-900 placeholder:text-slate-400 text-base md:text-sm"
            />
          </div>
          <Button
            type="submit"
            className="w-full md:col-span-1 bg-slate-800 hover:bg-slate-700 text-white py-2.5 h-10 text-sm font-medium" /* Matched h-10 from input */
          >
            Search
          </Button>
        </form>
      </div>
    </section>
  );
};

export default JobSearchForm;
