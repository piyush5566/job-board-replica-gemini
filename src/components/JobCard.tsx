
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from 'lucide-react'; // Briefcase, DollarSign, CalendarDays are not in the allowed list

interface JobCardProps {
  job: {
    logoUrl?: string;
    title: string;
    companyName: string;
    location: string;
    employmentType: string;
    salary?: string; // Make salary optional as per image for some
    postedDate: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 w-full bg-white">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          {/* Left Part: Logo and Details */}
          <div className="flex items-start gap-3 sm:gap-4 flex-grow">
            {job.logoUrl ? (
              <img src={job.logoUrl} alt={`${job.companyName} logo`} className="h-12 w-12 sm:h-16 sm:w-16 rounded-md object-contain border p-0.5" />
            ) : (
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
                {/* Placeholder if Briefcase icon is not allowed */}
                <span className="text-xl font-semibold">{job.companyName.charAt(0)}</span>
              </div>
            )}
            <div className="flex-grow mt-0.5 sm:mt-0">
              <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-0.5">{job.title}</h3>
              <p className="text-sm text-slate-500 mb-1.5 sm:mb-2">{job.companyName}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-600">
                <span className="flex items-center"><MapPin size={14} className="mr-1 text-slate-500" /> {job.location}</span>
                <span className="flex items-center">{job.employmentType}</span> {/* No Briefcase icon */}
                {job.salary && <span className="flex items-center">{job.salary}</span>} {/* No DollarSign icon */}
              </div>
            </div>
          </div>

          {/* Right Part: Actions */}
          <div className="flex flex-col items-end space-y-2 flex-shrink-0 sm:ml-4 mt-2 sm:mt-0 self-stretch justify-between">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-500 h-8 w-8">
              <Heart size={18} />
            </Button>
            <div className="flex flex-col items-end">
              <Button size="sm" className="px-3 py-1.5 text-xs sm:text-sm h-8 sm:h-9 mb-1.5 sm:mb-2">Apply Now</Button>
              <p className="text-xs text-slate-500 whitespace-nowrap">
                {/* No CalendarDays icon */}
                Posted: {job.postedDate}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
