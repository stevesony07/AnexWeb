
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightCard = ({ category, title, description, imageUrl, readMoreLink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg dark:shadow-blue-900/10">
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img 
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-48 transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="text-sm font-medium text-brand-blue dark:text-brand-lightBlue bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center text-brand-blue dark:text-brand-lightBlue font-medium hover:underline group"
        >
          Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const Insights = () => {
  const insights = [
    {
      category: 'AI Development',
      title: "How AI Agents Are Reshaping Software Development",
      description: "Learn how intelligent AI systems are transforming the industry by automating complex development tasks.",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      readMoreLink: '/blog'
    },
    {
      category: 'DevOps',
      title: "The Future of DevOps: AI-Driven CI/CD Pipelines",
      description: "Explore how AI is revolutionizing the DevOps lifecycle and continuous deployment strategies.",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad979?auto=format&fit=crop&w=800&q=80",
      readMoreLink: '/blog'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our latest thoughts on AI technology, software development, and industry trends
          </p>
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
        
        <div className="mt-12 text-center">
          <Link to="/blog">
            <button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
