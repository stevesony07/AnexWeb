
import { BrainCircuit, Database, Code, Shield, Bot, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({
  icon: Icon,
  title,
  description
}) => {
  return (
    <div className="relative group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-300">      
      <div className="p-8 h-full">
        <div className="w-14 h-14 flex items-center justify-center mb-6 rounded bg-blue-900/30 text-blue-400">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute inset-0 border border-blue-500/0 rounded-xl group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

const Features = () => {
  const features = [{
    icon: BrainCircuit,
    title: "Neural Network Architecture",
    description: "Our proprietary neural networks analyze complex enterprise data to deliver actionable insights with exceptional accuracy and speed."
  }, {
    icon: Database,
    title: "LLM-Driven Intelligence",
    description: "Our large language models provide computational reasoning capabilities for unstructured data processing across diverse enterprise scenarios."
  }, {
    icon: Code,
    title: "Code Generation & Analysis",
    description: "Advanced AI code generation and analysis that adapts to your existing codebase while maintaining best development practices."
  }, {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Military-grade security protocols protect your sensitive data while enabling seamless AI integration across your organization."
  }, {
    icon: Bot,
    title: "Autonomous Agents",
    description: "Deploy intelligent autonomous agents that handle complex tasks across departments without constant human intervention."
  }, {
    icon: Network,
    title: "Distributed Computing",
    description: "Our distributed architecture allows for maximum computational efficiency across on-premise and cloud environments."
  }];
  
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="services">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-2 block">Core Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Advanced AI Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Leveraging cutting-edge artificial intelligence to drive business transformation and operational excellence
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
