
import { BrainCircuit, Database, CloudCog, ShieldCheck, BarChart3, Layers } from 'lucide-react';

const PlatformFeature = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-300 card-hover">
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
      icon: BrainCircuit,
      title: 'Agentic AI Orchestration',
      description: 'Deploy AI agents that work together to solve complex business challenges autonomously.'
    },
    {
      icon: Database,
      title: 'Enterprise LLM Integration',
      description: 'Connect our LLMs to your existing systems for immediate AI-powered capabilities.'
    },
    {
      icon: Layers,
      title: 'Model Context Protocol (MCP)',
      description: 'Ensure your AI models have the right context for accurate and relevant responses.'
    },
    {
      icon: CloudCog,
      title: 'RAG Architecture',
      description: 'Enhance your AI with retrieval-augmented generation for more accurate responses based on your data.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Protect sensitive data with comprehensive security protocols for AI systems.'
    },
    {
      icon: BarChart3,
      title: 'AI Performance Analytics',
      description: 'Track and measure the business impact of your AI implementations in real-time.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Our AI Technology Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Cutting-edge technology infrastructure for enterprise AI transformation
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
