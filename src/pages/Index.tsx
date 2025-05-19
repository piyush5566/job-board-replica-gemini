
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JobSearchForm from "@/components/JobSearchForm";
import JobCategories from "@/components/JobCategories";
import TalentSection from "@/components/TalentSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <JobSearchForm />
        <JobCategories />
        <TalentSection />
        <FeaturedJobs />
        {/* Placeholder for other sections like Testimonials, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
