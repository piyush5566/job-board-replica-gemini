
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JobSearchForm from "@/components/JobSearchForm";
import JobCategories from "@/components/JobCategories";
import TalentSection from "@/components/TalentSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import SuccessStories from "@/components/SuccessStories"; // Import SuccessStories
import NewFooter from "@/components/NewFooter"; // Import NewFooter

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
        <SuccessStories /> {/* Add SuccessStories section */}
      </main>
      <NewFooter /> {/* Replace Footer with NewFooter */}
    </div>
  );
};

export default Index;
