
import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-md text-sm ${
        isActive ? 'text-primary bg-primary/10' : ''
      }`}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/90">
              <Briefcase className="h-8 w-8 mr-2" />
              <span className="font-bold text-2xl">StartWorking</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-1 items-center">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/jobs">JOBS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            {/* Fix: Wrap Link inside Button properly */}
            <Button variant="ghost" size="sm">
              <Link to="/register">REGISTER</Link> 
            </Button>
            <Button variant="default" size="sm">
              <Link to="/login">LOGIN</Link>
            </Button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - functionality not implemented in this step */}
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
