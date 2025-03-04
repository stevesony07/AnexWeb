
import { ArrowRight } from 'lucide-react';

const CaseStudyCard = ({ industry, title, metric, description, readMoreLink }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full card-hover">
      <div className="mb-4">
        <span className="text-sm font-medium text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
          {industry}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="mb-3">
        <span className="text-4xl font-bold text-brand-blue">{metric}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <a 
        href={readMoreLink} 
        className="inline-flex items-center text-brand-blue font-medium hover:underline"
      >
        Read case study <ArrowRight className="ml-1 h-4 w-4" />
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
