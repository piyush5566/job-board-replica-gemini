import React from 'react';
import { IoLocationOutline, IoMailOutline, IoCallOutline, IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';

const NewFooter: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/jobs" className="hover:text-white transition-colors">Jobs</a></li>
              <li><a href="/register" className="hover:text-white transition-colors">Register</a></li>
              <li><a href="/login" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <IoLocationOutline size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                <span>Rashtrapati Bhavan, President's Estate, New Delhi, Delhi 110004, India</span>
              </li>
              <li className="flex items-start">
                <IoCallOutline size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                <a href="tel:+917853289122" className="hover:text-white transition-colors">+91 8709032693</a>
              </li>
              <li className="flex items-start">
                <IoMailOutline size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                <a href="mailto:plccodes756@gmail.com" className="hover:text-white transition-colors">pkcodes756@gmail.com</a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-3">
              <a href="https://x.com" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-700 rounded-md">
                <FaXTwitter size={18} />
              </a>
              <a href="https://www.facebook.com" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-700 rounded-md">
                <IoLogoFacebook size={18} />
              </a>
              <a href="https://www.linkedin.com" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-700 rounded-md">
                <IoLogoLinkedin size={18} />
              </a>
              <a href="https://www.youtube.com" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-700 rounded-md">
                <IoLogoYoutube size={18} />
              </a>
              {/* Instagram could be added here if needed:
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-700 rounded-md">
                <IoLogoInstagram size={18} />
              </a>
              */}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} StartWorking. All rights reserved. Designed By HTML Codex.
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;