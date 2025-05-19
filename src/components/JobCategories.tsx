
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, Building, Users, Palette, ClipboardList, MessageSquare, UserCheck, 
  GraduationCap, Code2, PlaySquare, LineChart, FileText, Cpu, Settings2, PieChart, Mic2
} from 'lucide-react'; // Using a broader set of icons

const categories = [
  { name: 'Marketing', icon: <PieChart className="h-8 w-8 text-primary mb-2" />, jobs: '10 Vacancies' },
  { name: 'Customer Service', icon: <Users className="h-8 w-8 text-primary mb-2" />, jobs: '9 Vacancies' },
  { name: 'Design & Creative', icon: <Palette className="h-8 w-8 text-primary mb-2" />, jobs: '7 Vacancies' },
  { name: 'Project Management', icon: <ClipboardList className="h-8 w-8 text-primary mb-2" />, jobs: '7 Vacancies' },
  { name: 'Sales & Communication', icon: <MessageSquare className="h-8 w-8 text-primary mb-2" />, jobs: '7 Vacancies' },
  { name: 'Human Resource', icon: <UserCheck className="h-8 w-8 text-primary mb-2" />, jobs: '6 Vacancies' },
  { name: 'Business Development', icon: <Briefcase className="h-8 w-8 text-primary mb-2" />, jobs: '5 Vacancies' },
  { name: 'Teaching & Education', icon: <GraduationCap className="h-8 w-8 text-primary mb-2" />, jobs: '5 Vacancies' },
  { name: 'Software Development', icon: <Code2 className="h-8 w-8 text-primary mb-2" />, jobs: '4 Vacancies' },
  { name: 'Entertainment', icon: <PlaySquare className="h-8 w-8 text-primary mb-2" />, jobs: '1 Vacancy' },
  { name: 'Data Science', icon: <LineChart className="h-8 w-8 text-primary mb-2" />, jobs: '1 Vacancy' },
  { name: 'Writing/Editing', icon: <FileText className="h-8 w-8 text-primary mb-2" />, jobs: '1 Vacancy' },
  { name: 'Technology', icon: <Cpu className="h-8 w-8 text-primary mb-2" />, jobs: '1 Vacancy' },
  // Adding a few more examples to make it visually balanced if needed, or could map to 12 or 13 if an odd number
];

const JobCategories: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Explore By <span className="text-primary">Category</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up flex flex-col items-center justify-start p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 text-primary group-hover:scale-110 transition-transform">
                {React.cloneElement(category.icon, { size: 40 })}
              </div>
              <CardTitle className="text-lg font-semibold text-slate-800 mb-1">{category.name}</CardTitle>
              <p className="text-sm text-slate-500">{category.jobs}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
