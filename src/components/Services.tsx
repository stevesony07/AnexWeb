
import { Droplet, Stethoscope, LineChart, Factory } from 'lucide-react';

const ServiceCard = ({
  icon: Icon,
  title,
  description
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* Animated gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
      
      <div className="relative flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg transition-colors duration-300">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center">
            <Icon className="h-6 w-6 text-brand-blue dark:text-brand-lightBlue" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">{description}</p>
          <a href="#" className="text-brand-blue dark:text-brand-lightBlue font-medium hover:underline inline-flex items-center group transition-colors duration-300">
            Learn more <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const serviceItems = [{
    icon: Droplet,
    title: 'Oil & Gas AI Solutions',
    description: 'Break down data silos across well planning, drilling, completion, and production to improve efficiency and reduce downtime.'
  }, {
    icon: Stethoscope,
    title: 'Healthcare AI & Predictive Analytics',
    description: 'Enable AI-powered clinical decision support, patient monitoring, and medical data retrieval for superior healthcare outcomes.'
  }, {
    icon: LineChart,
    title: 'Finance & Risk Management AI',
    description: 'Automate fraud detection, risk assessment, and compliance monitoring with AI-driven insights.'
  }, {
    icon: Factory,
    title: 'Manufacturing & Supply Chain AI',
    description: 'Optimize production workflows, predictive maintenance, and logistics with intelligent automation.'
  }];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            AI-Driven Industry Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Tailored artificial intelligence solutions for your specific industry challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-animation">
          {serviceItems.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />)}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Started with Next-Gen AI Today!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
