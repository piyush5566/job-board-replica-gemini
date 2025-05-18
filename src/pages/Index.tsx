
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JobCategories from "@/components/JobCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <JobCategories />
        {/* Placeholder for other sections like Featured Jobs, Testimonials, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
