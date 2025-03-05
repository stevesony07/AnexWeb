
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import Footer from "@/components/Footer";

// Mock data for blog posts
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Evolution of AI Development in 2023",
    excerpt: "Explore how artificial intelligence has transformed software development practices and methodologies over the past year.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    category: "Artificial Intelligence",
    author: "Emma Watson",
    date: "Oct 15, 2023",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Implementing MLOps in Enterprise Environments",
    excerpt: "A comprehensive guide to deploying machine learning operations in large-scale enterprise settings.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad979?auto=format&fit=crop&w=800&q=80",
    category: "Machine Learning",
    author: "James Rodriguez",
    date: "Sep 22, 2023",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "The Future of Generative AI Models",
    excerpt: "Discover the latest advancements in generative AI and how they're reshaping content creation across industries.",
    image: "https://images.unsplash.com/photo-1541506618330-7c369fc759b5?auto=format&fit=crop&w=800&q=80",
    category: "Generative AI",
    author: "Sophie Turner",
    date: "Aug 30, 2023",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Ethical Considerations in AI Development",
    excerpt: "An exploration of the ethical challenges and responsibilities when building AI-powered applications.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    category: "AI Ethics",
    author: "David Chen",
    date: "Jul 12, 2023",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Optimizing Neural Networks for Production",
    excerpt: "Technical strategies to optimize neural network performance in real-world production environments.",
    image: "https://images.unsplash.com/photo-1620641622529-77ebe66ef970?auto=format&fit=crop&w=800&q=80",
    category: "Deep Learning",
    author: "Alex Johnson",
    date: "Jun 25, 2023",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "Building Responsible AI Systems",
    excerpt: "Best practices for creating AI systems that are transparent, fair, and accountable.",
    image: "https://images.unsplash.com/photo-1596298176953-7c66feff3a4f?auto=format&fit=crop&w=800&q=80",
    category: "Responsible AI",
    author: "Maria Garcia",
    date: "May 18, 2023",
    readTime: "9 min read"
  }
];

const BlogCard = ({ post }) => {
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:shadow-blue-900/5 dark:border dark:border-gray-700 hover:translate-y-[-5px]">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-brand-blue dark:text-brand-lightBlue text-xs font-semibold px-2.5 py-0.5 rounded">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <a href="#" className="inline-flex items-center text-brand-blue dark:text-brand-lightBlue font-medium hover:underline group">
            Read full article <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-200/30 to-purple-300/20 dark:from-blue-900/20 dark:to-purple-800/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-indigo-200/30 to-cyan-300/20 dark:from-indigo-900/20 dark:to-cyan-800/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-brand-blue to-gray-800 dark:from-white dark:via-brand-lightBlue dark:to-gray-300 mb-4">
              AgenticNex.ai Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, tutorials, and news on AI-driven software development, intelligent automation, and the future of technology
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              <Button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700">
                <Tag className="mr-2 h-4 w-4" />
                Artificial Intelligence
              </Button>
              <Button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700">
                <Tag className="mr-2 h-4 w-4" />
                Machine Learning
              </Button>
              <Button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700">
                <Tag className="mr-2 h-4 w-4" />
                DevOps
              </Button>
              <Button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700">
                <Tag className="mr-2 h-4 w-4" />
                Software Development
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-brand-blue hover:bg-brand-lightBlue text-white px-8 py-2">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
