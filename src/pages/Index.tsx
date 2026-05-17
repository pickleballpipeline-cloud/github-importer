import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import OriginSection from "@/components/OriginSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <OriginSection />
    <ExpertiseSection />
    <GallerySection />
    <TestimonialsSection />
    <BookingSection />
    <FAQSection />
    <CommunitySection />
    <Footer />
  </div>
);

export default Index;
