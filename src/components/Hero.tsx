
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from '@/components/ThemeProvider';

const Hero = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Enhanced background gradients */}
      <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-gradient-to-br from-blue-600/10 to-purple-600/5 dark:from-blue-600/20 dark:to-purple-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-indigo-600/10 to-cyan-600/5 dark:from-indigo-600/20 dark:to-cyan-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }}>
              Next-Gen Agentic AI, LLM & RAG-Based Solutions Provider
            </motion.h1>
            <motion.p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }}>
              Transforming Enterprise Intelligence with Cutting-Edge AI. Our AI-driven platforms break down data silos, enhance decision-making, and enable seamless cross-functional collaboration for industries such as oil & gas, healthcare, finance, and manufacturing.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-2" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }}>
              <Link to="/platform">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 text-white px-8 py-6 text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30 w-full sm:w-auto relative group overflow-hidden hover-gradient-border">
                  <span className="relative z-10">Explore Our Platform</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-700 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-6 text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto hover-gradient-border">
                Get a Free Consultation
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div className="relative" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="relative">
                {isDarkMode ? (
                  <img 
                    src="/lovable-uploads/d3c8570e-25fe-40bb-bfd5-ee3ede171a1d.png"
                    alt="AgenticNex Logo Light" 
                    className="w-full h-auto rounded-xl" 
                  />
                ) : (
                  <img 
                    src="/lovable-uploads/b49ef56e-c238-4934-af77-de9f62063d94.png"
                    alt="AgenticNex Logo Dark" 
                    className="w-full h-auto rounded-xl" 
                  />
                )}
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
