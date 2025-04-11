
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from '@/components/ThemeProvider';
import { useEffect, useState } from "react";
import { ArrowRight, BrainCircuit } from "lucide-react";

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
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="space-y-8 p-6 md:p-8 rounded-xl border border-gray-800/50 bg-black/20 dark:bg-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <BrainCircuit className="h-6 w-6 text-blue-400" />
              <span className="text-sm font-mono text-blue-400 tracking-wider">AgenticNex</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="relative">
                {animatedText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming Enterprise Intelligence with Cutting-Edge AI. Our AI-driven platforms break down data silos, enhance decision-making, and enable seamless cross-functional collaboration for industries: oil & gas, healthcare, finance, manufacturing.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/platform">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white px-6 py-6 text-base transition-all duration-300 w-full sm:w-auto group">
                  <span className="relative z-10 flex items-center">
                    Explore Our Platform
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800 dark:hover:bg-gray-800 text-gray-300 dark:text-gray-300 light:text-gray-700 px-6 py-6 text-base w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90"></div>
        <div className="absolute inset-0 opacity-20 dark:opacity-10" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}>
        </div>
      </div>
    </section>
  );
};

export default Hero;
