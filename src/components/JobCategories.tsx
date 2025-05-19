import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  IoBriefcase, IoBusinessOutline, IoPeopleOutline, IoColorPaletteOutline, IoClipboardOutline, 
  IoChatbubbleOutline, IoPersonOutline, IoSchoolOutline, IoCodeSlashOutline, 
  IoPlayCircleOutline, IoStatsChartOutline, IoDocumentTextOutline, IoHardwareChipOutline
} from 'react-icons/io5';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categories = [
  { name: 'Marketing', icon: <IoStatsChartOutline className="h-8 w-8 text-primary mb-2" />, jobs: '10 Vacancies' },
  { name: 'Customer Service', icon: <IoPeopleOutline className="h-8 w-8 text-primary mb-2" />, jobs: '9 Vacancies' },
  { name: 'Design & Creative', icon: <IoColorPaletteOutline className="h-8 w-8 text-primary mb-2" />, jobs: '7 Vacancies' },
  { name: 'Project Management', icon: <IoClipboardOutline className="h-8 w-8 text-primary mb-2" />, jobs: '7 Vacancies' },
  { name: 'Sales & Communication', icon: <IoChatbubbleOutline className="h-8 w-8 text-primary mb-2" />, jobs: '7 Vacancies' },
  { name: 'Human Resource', icon: <IoPersonOutline className="h-8 w-8 text-primary mb-2" />, jobs: '6 Vacancies' },
  { name: 'Business Development', icon: <IoBriefcase className="h-8 w-8 text-primary mb-2" />, jobs: '5 Vacancies' },
  { name: 'Teaching & Education', icon: <IoSchoolOutline className="h-8 w-8 text-primary mb-2" />, jobs: '5 Vacancies' },
  { name: 'Software Development', icon: <IoCodeSlashOutline className="h-8 w-8 text-primary mb-2" />, jobs: '4 Vacancies' },
  { name: 'Entertainment', icon: <IoPlayCircleOutline className="h-8 w-8 text-primary mb-2" />, jobs: '1 Vacancy' },
  { name: 'Data Science', icon: <IoStatsChartOutline className="h-8 w-8 text-primary mb-2" />, jobs: '1 Vacancy' },
  { name: 'Writing/Editing', icon: <IoDocumentTextOutline className="h-8 w-8 text-primary mb-2" />, jobs: '1 Vacancy' },
  { name: 'Technology', icon: <IoHardwareChipOutline className="h-8 w-8 text-primary mb-2" />, jobs: '1 Vacancy' },
  // Adding a few more examples to make it visually balanced if needed, or could map to 12 or 13 if an odd number
];

const AnimatedCard = animated(Card);

const JobCategories: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl font-bold text-center text-slate-900 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore By <span className="text-primary">Category</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
            >
              <Card className="text-center hover:shadow-xl transition-shadow duration-300 group flex flex-col items-center justify-start p-6">
                <div className="mb-3 text-primary group-hover:scale-110 transition-transform">
                  {React.cloneElement(category.icon, { size: 40 })}
                </div>
                <CardTitle className="text-lg font-semibold text-slate-800 mb-1">{category.name}</CardTitle>
                <p className="text-sm text-slate-500">{category.jobs}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;