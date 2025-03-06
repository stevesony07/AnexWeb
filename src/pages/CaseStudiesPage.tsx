
import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Financial Analytics Platform",
    client: "Global Investment Firm",
    description: "Developed a cutting-edge analytics platform that leverages machine learning to predict market trends and optimize investment strategies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    results: [
      "Increased prediction accuracy by 37%",
      "Reduced analysis time by 82%",
      "Helped generate 15% higher returns"
    ],
    category: "Financial Services"
  },
  {
    id: 2,
    title: "Intelligent Manufacturing Optimization System",
    client: "Multinational Manufacturing Corp",
    description: "Created an end-to-end system that uses IoT data and AI to optimize manufacturing processes, reduce waste, and improve quality control.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    results: [
      "Reduced manufacturing defects by 42%",
      "Lowered operational costs by 23%",
      "Increased production capacity by 18%"
    ],
    category: "Manufacturing"
  },
  {
    id: 3,
    title: "Healthcare Patient Outcome Prediction System",
    client: "Regional Healthcare Network",
    description: "Engineered a predictive analytics platform that helps healthcare providers anticipate patient needs and optimize treatment plans.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    results: [
      "Improved patient outcomes by 29%",
      "Reduced readmission rates by 34%",
      "Optimized resource allocation, saving $3.2M annually"
    ],
    category: "Healthcare"
  },
  {
    id: 4,
    title: "Smart Retail Inventory Management",
    client: "National Retail Chain",
    description: "Developed an AI-driven inventory management system that predicts demand, optimizes stock levels, and automates reordering processes.",
    image: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?auto=format&fit=crop&q=80&w=800",
    results: [
      "Reduced inventory costs by 21%",
      "Decreased out-of-stock incidents by 64%",
      "Improved inventory turnover by 17%"
    ],
    category: "Retail"
  }
];

const CaseStudyCard = ({ study, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
          {study.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-blue dark:group-hover:text-brand-lightBlue transition-colors">
          {study.title}
        </h3>
        <p className="text-sm text-brand-blue dark:text-brand-lightBlue font-medium mb-3">
          {study.client}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {study.description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
          <ul className="space-y-1">
            {study.results.map((result, idx) => (
              <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                <span className="text-brand-blue dark:text-brand-lightBlue mr-2">•</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
        <button className="flex items-center text-brand-blue dark:text-brand-lightBlue font-medium text-sm group-hover:underline">
          View Full Case Study <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <section className="py-16 relative overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-br from-blue-200/20 to-purple-300/10 dark:from-blue-800/20 dark:to-purple-700/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-indigo-200/20 to-cyan-300/10 dark:from-indigo-800/20 dark:to-cyan-700/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                Our Success Stories
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover how we've helped organizations transform their operations and achieve breakthrough results with our AI-driven solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.id} study={study} index={index} />
              ))}
            </div>
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI solutions can help you solve your most challenging business problems and unlock new opportunities for growth.
              </p>
              <button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all transform hover:scale-105">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
