import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { IoBriefcase, IoClose } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-md text-sm ${
        isActive ? 'text-primary bg-primary/10' : ''
      }`}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/90">
              <IoBriefcase className="h-8 w-8 mr-2" />
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
            <Link to="/register">
              <Button variant="ghost" size="sm">REGISTER</Button>
            </Link>
            <Link to="/login">
              <Button variant="default" size="sm">LOGIN</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-2">
            <NavLink to="/" onClick={closeMobileMenu}>HOME</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>ABOUT</NavLink>
            <NavLink to="/jobs" onClick={closeMobileMenu}>JOBS</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>CONTACT</NavLink>
            <div className="flex space-x-2 pt-2">
              <Link to="/register" onClick={closeMobileMenu}>
                <Button variant="ghost" size="sm">REGISTER</Button>
              </Link>
              <Link to="/login" onClick={closeMobileMenu}>
                <Button variant="default" size="sm">LOGIN</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;