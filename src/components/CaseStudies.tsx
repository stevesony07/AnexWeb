
import { ArrowRight } from 'lucide-react';

const CaseStudyCard = ({ industry, title, metric, description, readMoreLink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 h-full transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg dark:shadow-blue-900/10">
      <div className="mb-4">
        <span className="text-sm font-medium text-brand-blue dark:text-brand-lightBlue bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
          {industry}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <div className="mb-3">
        <span className="text-4xl font-bold text-brand-blue dark:text-brand-lightBlue">{metric}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <a 
        href={readMoreLink} 
        className="inline-flex items-center text-brand-blue dark:text-brand-lightBlue font-medium hover:underline group"
      >
        Read case study <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      industry: 'FinTech',
      title: 'Fraud Detection Enhancement',
      metric: '60%',
      description: 'Reduction in fraudulent transactions after applying AI-driven analytics',
      readMoreLink: '#'
    },
    {
      industry: 'Healthcare',
      title: 'Smart Diagnostics',
      metric: '45%',
      description: 'Improvement in patient diagnosis accuracy via ML models',
      readMoreLink: '#'
    },
    {
      industry: 'Telecom',
      title: 'Network Optimization',
      metric: '80%',
      description: 'Increased network efficiency with AI monitoring systems',
      readMoreLink: '#'
    }
  ];

  return (
    <section className="py-16 md:py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              industry={study.industry}
              title={study.title}
              metric={study.metric}
              description={study.description}
              readMoreLink={study.readMoreLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
