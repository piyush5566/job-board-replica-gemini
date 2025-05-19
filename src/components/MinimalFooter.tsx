import React from 'react';
import { Link } from 'react-router-dom';

const MinimalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-slate-300 py-4 mt-5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-0">
            &copy; <Link to="/" className="text-white hover:text-slate-200 no-underline">StartWorking</Link>, All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;