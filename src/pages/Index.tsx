
import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import CaseStudies from "@/components/CaseStudies";
import Insights from "@/components/Insights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Services />
        <Platform />
        <CaseStudies />
        <Insights />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
