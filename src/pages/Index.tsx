
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FeaturedItems from "../components/FeaturedItems";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Hero />
      <AboutSection />
      <FeaturedItems />
    </div>
  );
};

export default Index;
