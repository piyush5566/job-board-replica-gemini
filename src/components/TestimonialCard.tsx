import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  avatarUrl: string;
  highlighted?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorRole,
  avatarUrl,
}) => {
  return (
    <div className="rounded-lg p-6 h-full bg-slate-100 text-slate-800">
      <FaQuoteLeft className="text-3xl mb-4 text-primary" />
      <p className="mb-4">{quote}</p>
      <div className="flex items-center">
        <img 
          src={avatarUrl} 
          alt={authorName}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h5 className="font-semibold mb-1">{authorName}</h5>
          <p className="text-sm text-slate-500">{authorRole}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;