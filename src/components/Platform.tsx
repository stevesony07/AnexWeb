
import { Code, Beaker, CloudCog, ShieldCheck, BarChart3, Shapes } from 'lucide-react';

const PlatformFeature = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 card-hover dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-brand-blue dark:text-brand-lightBlue" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
};

const Platform = () => {
  const features = [
    {
      icon: Code,
      title: 'AI-Powered Code Generation',
      description: 'Accelerate development with AI-generated code, reducing repetitive work and boosting productivity.'
    },
    {
      icon: Beaker,
      title: 'Autonomous Testing',
      description: 'AI agents that learn testing patterns, building a reliable regression test suite automatically.'
    },
    {
      icon: CloudCog,
      title: 'Cloud Integration',
      description: 'Seamlessly deploy and scale your applications with full integration to cloud providers.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Protect data, APIs, and infrastructure with comprehensive security protocols.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track and analyze your project development metrics in real-time.'
    },
    {
      icon: Shapes,
      title: 'Custom AI Models',
      description: 'Deploy specialized AI models to your specific business needs and industry requirements.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AgenticNex.ai Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Future of AI-Driven Software Development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 staggered-animation">
          {features.map((feature, index) => (
            <PlatformFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
