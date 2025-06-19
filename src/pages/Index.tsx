
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { TextVideoSection } from "@/components/TextVideoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VideoSection />
      <TextVideoSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
