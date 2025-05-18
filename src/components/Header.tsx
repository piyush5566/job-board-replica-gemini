
import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase, LogIn, UserPlus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center text-primary hover:text-primary/90">
              <Briefcase className="h-8 w-8 mr-2" />
              <span className="font-bold text-2xl">JobPortal</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-600 hover:text-primary font-medium">Find Jobs</a>
            <a href="#" className="text-gray-600 hover:text-primary font-medium">Company Reviews</a>
            <a href="#" className="text-gray-600 hover:text-primary font-medium">Salary Guide</a>
            <Button variant="outline" size="sm">Post a Job</Button>
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Button>
            <Button size="sm">
              <UserPlus className="mr-2 h-4 w-4" /> Sign Up
            </Button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - can be implemented later */}
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
