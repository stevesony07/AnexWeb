
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Enhanced background gradients */}
      <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-gradient-to-br from-blue-300/40 to-purple-400/30 dark:from-blue-700/30 dark:to-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-indigo-300/40 to-cyan-400/30 dark:from-indigo-700/30 dark:to-cyan-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Empowering Innovation with AI-Driven Software Development
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              AgenticNex leverages intelligent agents to accelerate AI-based engineering, automation, and innovation—delivering scalable, secure, and high-performance solutions for businesses worldwide.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/platform">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 text-white px-8 py-6 text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30 w-full sm:w-auto">
                  Explore Our Platform
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 dark:text-gray-300 px-8 py-6 text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30">
              <img 
                src="/lovable-uploads/cc511292-82d3-42da-af65-b707a8c33d40.png" 
                alt="AI Technology" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
