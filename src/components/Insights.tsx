
import { ArrowRight } from 'lucide-react';

const InsightCard = ({ category, title, description, imageUrl, readMoreLink }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover">
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img 
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="text-sm font-medium text-brand-blue">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <a 
          href={readMoreLink} 
          className="inline-flex items-center text-brand-blue font-medium hover:underline"
        >
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const Insights = () => {
  const insights = [
    {
      category: 'AI Development',
      title: 'How AI Agents Are Reshaping Software Development',
      description: 'Learn how intelligent AI systems are transforming the industry by automating complex development tasks.',
      imageUrl: '/lovable-uploads/0f3ba3b0-7e71-47f7-b700-a7b148e87b4f.png',
      readMoreLink: '#'
    },
    {
      category: 'DevOps',
      title: 'The Future of DevOps: AI-Driven CI/CD Pipelines',
      description: 'Explore how AI is revolutionizing the DevOps lifecycle and continuous deployment strategies.',
      imageUrl: '/lovable-uploads/0f3ba3b0-7e71-47f7-b700-a7b148e87b4f.png',
      readMoreLink: '#'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-animation">
          {insights.map((insight, index) => (
            <InsightCard 
              key={index}
              category={insight.category}
              title={insight.title}
              description={insight.description}
              imageUrl={insight.imageUrl}
              readMoreLink={insight.readMoreLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
