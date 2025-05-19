
import React from 'react';

interface ContactInfoCardProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, text, href }) => {
  const content = href ? (
    <a href={href} className="text-slate-600 hover:text-primary transition-colors break-words">
      {text}
    </a>
  ) : (
    <span className="text-slate-600 break-words">{text}</span>
  );

  return (
    <div className="flex items-start p-6 bg-slate-100 rounded-lg shadow-sm h-full">
      <div className="flex-shrink-0 mr-4 mt-1">{icon}</div>
      <div className="text-sm">{content}</div>
    </div>
  );
};

export default ContactInfoCard;

