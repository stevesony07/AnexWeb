
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Empowering Innovation with AI-Driven Software Development
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              AgenticNex leverages intelligent agents to accelerate AI-based engineering, automation, and innovation—delivering scalable, secure, and high-performance solutions for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-2">
              <Button className="bg-brand-blue hover:bg-brand-lightBlue text-white px-8 py-6 text-base">
                Explore Our Platform
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-6 text-base">
                Schedule a Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <img 
              src="/lovable-uploads/0f3ba3b0-7e71-47f7-b700-a7b148e87b4f.png"
              alt="AI-Driven Software Development" 
              className="w-full h-auto rounded-xl shadow-2xl hero-image"
            />
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
