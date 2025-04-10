
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from '@/components/ThemeProvider';
import { useEffect, useState } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Next-Gen Agentic AI, LLM & RAG-Based Solutions Provider";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Enhanced background gradients */}
      <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-gradient-to-br from-blue-600/20 to-purple-600/10 dark:from-blue-600/10 dark:to-purple-600/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-indigo-600/20 to-cyan-600/10 dark:from-indigo-600/10 dark:to-cyan-600/5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-gray-800/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="relative">
                <span className="absolute -top-10 left-0 text-sm font-mono text-blue-400 animate-pulse">
                  AgenticNex
                </span>
                {animatedText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming Enterprise Intelligence with Cutting-Edge AI. Our AI-driven platforms break down data silos, enhance decision-making, and enable seamless cross-functional collaboration for industries such as oil & gas, healthcare, finance, and manufacturing.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/platform">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-8 py-6 text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30 w-full sm:w-auto relative group overflow-hidden">
                  <span className="relative z-10">Explore Our Platform</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 px-8 py-6 text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Get a Free Consultation
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* This div is intentionally left empty as the Spline animation will be behind it */}
            <div className="h-[500px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
