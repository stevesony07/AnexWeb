
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
  const fullText = "Enterprise AI & LLM Solutions";
  
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
    <section className="pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8 backdrop-blur-sm bg-black/20 dark:bg-black/30 p-8 rounded-xl border border-gray-800/50"
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
              <span className="text-sm font-mono text-blue-400 tracking-wider">AGENTIC.AI</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600"
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
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Elevate your business with our advanced AI solutions. We transform enterprise intelligence by breaking down data silos, enhancing decision-making, and enabling seamless collaboration across your organization.
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
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 px-6 py-6 text-base w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* AI visualization placeholder */}
            <div className="h-[500px] relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 animate-gradient-x rounded-xl"></div>
              <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Animated circles representing AI nodes */}
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute rounded-full border border-blue-500/70"
                      style={{
                        width: `${100 + i * 40}px`,
                        height: `${100 + i * 40}px`,
                        left: `${50 - (100 + i * 40) / 2}px`,
                        top: `${50 - (100 + i * 40) / 2}px`,
                        borderWidth: '1px',
                        opacity: 0.7 - i * 0.1,
                        animation: `pulse ${2 + i * 0.5}s infinite alternate ease-in-out`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                  
                  {/* Central node */}
                  <div className="absolute w-16 h-16 bg-blue-500/30 backdrop-blur-md rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500/70 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Tech indicators */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden h-6 opacity-40">
        <div className="flex space-x-8 animate-[slideLeft_30s_linear_infinite]">
          {['Neural Networks', 'GPT Models', 'Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Reinforcement Learning', 'Deep Learning', 'Data Analytics'].map((tech, i) => (
            <div key={i} className="text-xs text-blue-400/70 font-mono whitespace-nowrap">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
