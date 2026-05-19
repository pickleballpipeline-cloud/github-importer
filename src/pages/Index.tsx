import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatToExpectSection from "@/components/WhatToExpectSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import OriginSection from "@/components/OriginSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <OriginSection />
    <ExpertiseSection />
    <WhatToExpectSection />
    <GallerySection />
    <TestimonialsSection />
    <BookingSection />
    <FAQSection />
    <CommunitySection />
    <Footer />
    <MobileStickyCTA />
  </div>
);

export default Index;
