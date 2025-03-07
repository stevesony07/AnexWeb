import { Code, Cpu, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
const FeatureCard = ({
  icon: Icon,
  title,
  description
}) => {
  return <div className="relative group overflow-hidden rounded-xl hover-gradient-border">
      {/* Animated gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
      
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 h-full">
        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
          <Icon className="h-7 w-7 text-brand-blue dark:text-brand-lightBlue" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>;
};
const Features = () => {
  const features = [{
    icon: Cpu,
    title: "AI-Powered Development",
    description: "Advance your applications with our AI-driven frameworks and development expertise."
  }, {
    icon: Code,
    title: "Next-Gen Engineering",
    description: "Build smarter, faster systems with intelligent software and cutting-edge tech."
  }, {
    icon: Shield,
    title: "Scalability & Security",
    description: "Safeguard your business or enterprise system with our top-tier security."
  }];
  return <section className="py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Next-Generation Software Solutions
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Features;