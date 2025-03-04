
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden dark:bg-gray-900 relative">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-200/30 to-purple-300/20 dark:from-blue-900/20 dark:to-purple-800/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-indigo-200/30 to-cyan-300/20 dark:from-indigo-900/20 dark:to-cyan-800/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
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
              <Button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 text-white px-8 py-6 text-base transition-all duration-300 transform hover:scale-105">
                Explore Our Platform
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-6 text-base transition-all duration-300 transform hover:scale-105">
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
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30">
              <img 
                src="/lovable-uploads/0f3ba3b0-7e71-47f7-b700-a7b148e87b4f.png"
                alt="AI-Driven Technology" 
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
