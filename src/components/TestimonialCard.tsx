
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  avatarUrl?: string;
  highlighted?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorRole,
  avatarUrl,
  highlighted = false,
}) => {
  return (
    <Card className={`w-full ${highlighted ? 'bg-green-600 text-white' : 'bg-white text-slate-700'} shadow-lg rounded-lg overflow-hidden`}>
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="relative mb-4">
            <span className={`absolute -top-3 -left-1 text-6xl font-bold ${highlighted ? 'text-green-400' : 'text-primary'} opacity-50`}>
              “
            </span>
            <p className={`text-sm sm:text-base italic leading-relaxed relative z-10 ${highlighted ? 'text-green-50' : 'text-slate-600'}`}>
              {quote}
            </p>
          </div>
          <div className="mt-auto flex items-center pt-4">
            <Avatar className="h-10 w-10 mr-3">
              {avatarUrl && <AvatarImage src={avatarUrl} alt={authorName} />}
              <AvatarFallback className={`${highlighted ? 'bg-green-500 text-white' : 'bg-slate-200 text-primary'}`}>
                {authorName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className={`font-semibold text-sm ${highlighted ? 'text-white' : 'text-slate-800'}`}>{authorName}</p>
              <p className={`text-xs ${highlighted ? 'text-green-100' : 'text-slate-500'}`}>{authorRole}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
