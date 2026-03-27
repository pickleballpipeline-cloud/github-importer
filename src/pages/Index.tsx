import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import BookingSection from "@/components/BookingSection";
import OriginSection from "@/components/OriginSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <OriginSection />
    <ExpertiseSection />
    <BookingSection />
    <CommunitySection />
    <Footer />
  </div>
);

export default Index;
