import React from 'react';
import { Link } from 'react-router-dom';

const AboutHero: React.FC = () => {
  return (
    <div className="container-xxl py-5 bg-dark page-header mb-5">
      <div className="container mx-auto my-5 pt-5 pb-4 header-container">
        <h1 className="display-3 text-white mb-3 animate-slideInDown">About Us</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link to="/" className="text-white hover:text-[#00B074]">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#" className="text-white hover:text-[#00B074]">Pages</Link>
            </li>
            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default AboutHero;