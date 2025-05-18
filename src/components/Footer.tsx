
import React from 'react';
import { Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="/" className="flex items-center text-white hover:text-slate-200 mb-4">
              <Briefcase className="h-7 w-7 mr-2" />
              <span className="font-bold text-xl">JobPortal</span>
            </a>
            <p className="text-sm text-slate-400">
              Connecting talent with opportunity. Find your next career move with us.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">For Job Seekers</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-primary">Salary Tools</a></li>
              <li><a href="#" className="hover:text-primary">Career Advice</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">For Employers</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">Post a Job</a></li>
              <li><a href="#" className="hover:text-primary">Search Resumes</a></li>
              <li><a href="#" className="hover:text-primary">Employer Login</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} JobPortal. All rights reserved. Built with Lovable AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
