
import React from 'react';
import { MapPin } from 'lucide-react'; // Phone and Mail icons are not in the allowed list

const NewFooter: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Register</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                <span>Rashtrapati Bhavan, President's Estate, New Delhi, Delhi 110004, India</span>
              </li>
              <li className="flex items-start">
                {/* No Phone icon */}
                <span className="w-5 mr-2 mt-1 text-primary flex-shrink-0 text-center font-bold">P:</span>
                <span>+91 7853289122</span>
              </li>
              <li className="flex items-start">
                {/* No Mail icon */}
                <span className="w-5 mr-2 mt-1 text-primary flex-shrink-0 text-center font-bold">E:</span>
                <a href="mailto:plccodes756@gmail.com" className="hover:text-white transition-colors">plccodes756@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Your Job Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
