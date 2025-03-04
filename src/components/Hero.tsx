
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Empowering Innovation with AI-Driven Software Development
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              AgenticNex leverages intelligent agents to accelerate AI-based engineering, automation, and innovation—delivering scalable, secure, and high-performance solutions for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-2">
              <Button className="bg-brand-blue hover:bg-brand-lightBlue text-white px-8 py-6 text-base">
                Explore Our Platform
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-6 text-base">
                Schedule a Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <img 
              src="/lovable-uploads/c78b85c8-9316-448c-b078-946f2fb31d90.png"
              alt="AI-Driven Software Development" 
              className="w-full h-auto rounded-xl shadow-2xl hero-image"
            />
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
