import { useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import CaseStudies from "@/components/CaseStudies";
import Insights from "@/components/Insights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SplineHero from "@/components/SplineHero";
import SplineBackground from "@/components/SplineBackground";
import { Helmet } from "react-helmet";

const Index = () => {
  // Refs for sections
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const featuresRef = useRef(null);
  const platformRef = useRef(null);
  const insightsRef = useRef(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Set up intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add different animation classes based on data attribute
          const animationType = entry.target.dataset.animationType || 'fade-in';
          entry.target.classList.add(`animate-${animationType}`);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Target elements to animate on scroll with different animation types
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Add IDs to the page sections
  useEffect(() => {
    if (servicesRef.current) servicesRef.current.id = 'services';
    if (aboutRef.current) aboutRef.current.id = 'about';
    if (contactRef.current) contactRef.current.id = 'contact';
    if (featuresRef.current) featuresRef.current.id = 'features';
    if (platformRef.current) platformRef.current.id = 'platform';
    if (insightsRef.current) insightsRef.current.id = 'insights';
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Helmet>
        <title>AgenticNex - Next-Gen Agentic AI Solutions</title>
        <meta name="description" content="AgenticNex provides enterprise AI solutions with agentic AI, LLM & RAG technologies for oil & gas, healthcare, finance and manufacturing sectors." />
        <meta name="keywords" content="AgenticNex, Agentic AI, Enterprise AI, LLM, RAG, AI Solutions, Next-Gen AI, Oil and Gas AI, Healthcare AI, Finance AI, Manufacturing AI" />
        <link rel="canonical" href="https://agenticnex.com" />
      </Helmet>
      
      <SplineHero />
      <SplineBackground />
      <Header />
      <main className="flex-grow z-10">
        <div className="pt-24">
          <Hero />
        </div>
        <div ref={featuresRef} className="animate-on-scroll opacity-0 z-10 relative" data-animation-type="fade-in">
          <Features />
        </div>
        <div ref={servicesRef} className="animate-on-scroll opacity-0 z-10 relative" data-animation-type="fade-in-left">
          <Services />
        </div>
        <div ref={platformRef} className="animate-on-scroll opacity-0 z-10 relative" data-animation-type="fade-in-right">
          <Platform />
        </div>
        <div ref={aboutRef} className="animate-on-scroll opacity-0 z-10 relative" data-animation-type="scale-in">
          <CaseStudies />
        </div>
        <div ref={insightsRef} className="animate-on-scroll opacity-0 z-10 relative" data-animation-type="fade-in">
          <Insights />
        </div>
        <div ref={contactRef} className="animate-on-scroll opacity-0 z-10 relative" data-animation-type="fade-in">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
