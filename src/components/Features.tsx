
import { Code, Cpu, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next-Generation Software Solutions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow card-hover dark:shadow-blue-900/10">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
              <Cpu className="h-7 w-7 text-brand-blue dark:text-brand-lightBlue" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              AI-Powered Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advance your applications with our AI-driven frameworks and development expertise.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow card-hover dark:shadow-blue-900/10">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
              <Code className="h-7 w-7 text-brand-blue dark:text-brand-lightBlue" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Next-Gen Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Build smarter, faster systems with intelligent software and cutting-edge tech.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow card-hover dark:shadow-blue-900/10">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-7 w-7 text-brand-blue dark:text-brand-lightBlue" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Scalability & Security
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Safeguard your business or enterprise system with our top-tier security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
