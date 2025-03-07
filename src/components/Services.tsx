
import { Code, BrainCircuit, Database, Settings } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* Animated gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
      
      <div className="relative flex flex-col md:flex-row gap-6 p-6 bg-gray-800 dark:bg-gray-800 rounded-lg transition-all duration-300">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-900/30 rounded-md flex items-center justify-center">
            <Icon className="h-6 w-6 text-brand-lightBlue" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <a href="#" className="text-brand-lightBlue font-medium hover:underline inline-flex items-center group">
            Learn more <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const serviceItems = [
    {
      icon: Code,
      title: 'AI-Powered Software Development',
      description: 'Rapidly deploy quality code with automated codebase creation, bug detection, and optimization.'
    },
    {
      icon: BrainCircuit,
      title: 'Intelligent Automation & DevOps',
      description: 'Streamline your production cycle and deployments with AI-based automation.'
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'Leverage AI for insights, processing data and unlocking the full value of your information.'
    },
    {
      icon: Settings,
      title: 'Custom AI Model Development',
      description: 'Fine-tuned AI models built specifically for your business and industry needs.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-animation">
          {serviceItems.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
