import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IoLocationOutline, IoBriefcase, IoCalendarOutline } from 'react-icons/io5';

interface JobCardProps {
  job: {
    logoUrl?: string;
    title: string;
    companyName: string;
    location: string;
    employmentType: string; // Kept for data structure, though not directly on the line in screenshot
    salary?: string;
    postedDate: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 w-full bg-white">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left Part: Logo and Details */}
          <div className="flex items-start gap-3 sm:gap-4 flex-grow">
            {job.logoUrl ? (
              <img src={job.logoUrl} alt={`${job.companyName} logo`} className="h-12 w-12 sm:h-16 sm:w-16 rounded-md object-contain border p-0.5 flex-shrink-0" />
            ) : (
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-md bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                <IoBriefcase size={24} />
              </div>
            )}
            <div className="flex-grow mt-0.5 sm:mt-0">
              <h3 className="text-base sm:text-lg font-semibold text-slate-800 hover:text-primary transition-colors mb-1.5">
                <a href="#">{job.title}</a> {/* Assuming job title is a link */}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-600 mb-1">
                <span className="flex items-center"><IoBriefcase size={14} className="mr-1 text-slate-500" /> {job.companyName}</span>
                <span className="flex items-center"><IoLocationOutline size={14} className="mr-1 text-slate-500" /> {job.location}</span>
                {job.salary && <span className="flex items-center"><span className="mr-1 text-slate-500 font-semibold">₹</span> {job.salary.replace(/₹/g, '').trim()}</span>}
              </div>
            </div>
          </div>

          {/* Right Part: Actions */}
          <div className="flex flex-col items-start sm:items-end space-y-2 flex-shrink-0 sm:ml-4 mt-2 sm:mt-0 self-stretch justify-between w-full sm:w-auto">
            <Button size="sm" className="px-4 py-2 text-xs sm:text-sm h-9 sm:h-10 w-full sm:w-auto">View Details</Button>
            <p className="text-xs text-slate-500 whitespace-nowrap flex items-center pt-1 sm:pt-0 w-full sm:w-auto justify-start sm:justify-end">
              <IoCalendarOutline size={14} className="mr-1.5 text-slate-500" />
              Posted: {job.postedDate}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;