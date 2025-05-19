
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, DollarSign, CalendarDays, Heart } from 'lucide-react';

interface JobCardProps {
  job: {
    logoUrl?: string; // Making logo optional for now
    title: string;
    companyName: string;
    location: string;
    employmentType: string;
    salary: string;
    postedDate: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 w-full">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          {job.logoUrl ? (
            <img src={job.logoUrl} alt={`${job.companyName} logo`} className="h-16 w-16 rounded-md object-contain border p-1" />
          ) : (
            <div className="h-16 w-16 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
              <Briefcase size={32} />
            </div>
          )}
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-slate-800 mb-1">{job.title}</h3>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-500">
                <Heart size={20} />
              </Button>
            </div>
            <p className="text-primary mb-2">{job.companyName}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600 mb-3">
              <span className="flex items-center"><MapPin size={14} className="mr-1.5" /> {job.location}</span>
              <span className="flex items-center"><Briefcase size={14} className="mr-1.5" /> {job.employmentType}</span>
              <span className="flex items-center"><DollarSign size={14} className="mr-1.5" /> {job.salary}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 flex items-center mb-2 sm:mb-0">
            <CalendarDays size={14} className="mr-1.5" /> Posted: {job.postedDate}
          </p>
          <Button size="sm">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
