
import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Platform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <section className="py-16 relative overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-indigo-200/20 to-purple-300/10 dark:from-indigo-800/20 dark:to-purple-700/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-200/20 to-teal-300/10 dark:from-blue-800/20 dark:to-teal-700/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-brand-blue to-indigo-600 dark:from-blue-400 dark:via-brand-lightBlue dark:to-indigo-400"
                variants={itemVariants}
              >
                NexGen AI Platform
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
                variants={itemVariants}
              >
                Our cutting-edge AI platform is currently under development
              </motion.p>

              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="w-full md:w-3/4 mx-auto h-64 md:h-96 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Animated elements */}
                    <div className="absolute w-48 h-48 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full animate-pulse"></div>
                    <div className="absolute w-36 h-36 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                    <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  </div>
                  
                  <div className="z-10 text-center p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Coming Soon</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The next generation of AI-powered software development is launching soon
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-12"
                variants={itemVariants}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Stay Updated
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  We're working hard to bring you the most advanced AI platform for software development. Subscribe to our newsletter to be the first to know when we launch.
                </p>
                
                <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-blue dark:bg-gray-800 dark:text-white"
                  />
                  <button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all">
                    Notify Me
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
