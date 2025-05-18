
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Briefcase, BarChart, PenTool, Megaphone, DollarSign } from 'lucide-react';

const categories = [
  { name: 'Software Development', icon: <Code className="h-10 w-10 text-primary mb-3" />, jobs: '1,280 jobs' },
  { name: 'Marketing', icon: <Megaphone className="h-10 w-10 text-primary mb-3" />, jobs: '850 jobs' },
  { name: 'Design', icon: <PenTool className="h-10 w-10 text-primary mb-3" />, jobs: '600 jobs' },
  { name: 'Sales', icon: <DollarSign className="h-10 w-10 text-primary mb-3" />, jobs: '920 jobs' },
  { name: 'Business', icon: <Briefcase className="h-10 w-10 text-primary mb-3" />, jobs: '750 jobs' },
  { name: 'Data Science', icon: <BarChart className="h-10 w-10 text-primary mb-3" />, jobs: '430 jobs' },
];

const JobCategories: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
          Explore by <span className="text-primary">Category</span>
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-xl mx-auto">
          Find the perfect job for you by browsing through various categories and industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="items-center">
                {category.icon}
                <CardTitle className="text-xl font-semibold text-slate-800">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">{category.jobs}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
