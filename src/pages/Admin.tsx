
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Image, Save, File, Plus, Edit, Trash2, Check } from 'lucide-react';

const AdminDashboard = () => {
  const { toast } = useToast();
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "The Evolution of AI Development in 2023",
      excerpt: "Explore how artificial intelligence has transformed software development practices...",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      category: "Artificial Intelligence",
      author: "Emma Watson",
      date: "Oct 15, 2023",
      published: true
    },
    {
      id: 2,
      title: "Implementing MLOps in Enterprise Environments",
      excerpt: "A comprehensive guide to deploying machine learning operations in large-scale enterprise settings.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad979?auto=format&fit=crop&w=800&q=80",
      category: "Machine Learning",
      author: "James Rodriguez",
      date: "Sep 22, 2023",
      published: true
    },
    {
      id: 3,
      title: "Draft: Upcoming AI Trends for 2024",
      excerpt: "A preview of the most anticipated developments in artificial intelligence for next year.",
      image: "https://images.unsplash.com/photo-1541506618330-7c369fc759b5?auto=format&fit=crop&w=800&q=80",
      category: "Future Trends",
      author: "Alex Johnson",
      date: "Oct 30, 2023",
      published: false
    }
  ]);
  
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: '',
    author: '',
    published: false
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const resetForm = () => {
    setFormData({
      id: null,
      title: '',
      excerpt: '',
      content: '',
      image: '',
      category: '',
      author: '',
      published: false
    });
    setIsEditing(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    if (isEditing) {
      // Update existing post
      setBlogPosts(prev => prev.map(post => 
        post.id === formData.id ? { ...formData, date: post.date } : post
      ));
      
      toast({
        title: "Post Updated",
        description: "Your blog post has been successfully updated.",
      });
    } else {
      // Add new post
      const newPost = {
        ...formData,
        id: Date.now(),
        date: formattedDate
      };
      
      setBlogPosts(prev => [...prev, newPost]);
      
      toast({
        title: "Post Created",
        description: "Your new blog post has been successfully created.",
      });
    }
    
    resetForm();
    setShowForm(false);
  };
  
  const handleEdit = (post) => {
    setFormData({
      ...post,
      content: "This is a placeholder for the full content of the blog post." // In a real app, you'd fetch the full content
    });
    setIsEditing(true);
    setShowForm(true);
    window.scrollTo(0, 0);
  };
  
  const handleDelete = (id) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
    
    toast({
      title: "Post Deleted",
      description: "The blog post has been successfully removed.",
      variant: "destructive"
    });
  };
  
  const handleTogglePublish = (id) => {
    setBlogPosts(prev => prev.map(post => 
      post.id === id ? { ...post, published: !post.published } : post
    ));
    
    const post = blogPosts.find(post => post.id === id);
    const action = post.published ? "unpublished" : "published";
    
    toast({
      title: `Post ${action}`,
      description: `The blog post has been ${action}.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Blog Administration
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your blog content, create new posts, and control publication status.
            </p>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {showForm ? (isEditing ? "Edit Blog Post" : "Create New Blog Post") : "Blog Posts"}
            </h2>
            
            {!showForm ? (
              <Button
                onClick={() => {
                  resetForm();
                  setShowForm(true);
                }}
                className="bg-brand-blue hover:bg-brand-lightBlue text-white"
              >
                <Plus className="mr-2 h-4 w-4" /> New Post
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setShowForm(false);
                  resetForm();
                }}
                variant="outline"
                className="border-gray-300 dark:border-gray-700"
              >
                Cancel
              </Button>
            )}
          </div>
          
          {showForm ? (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8 space-y-6 dark:border dark:border-gray-700">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter post title"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Excerpt
                </label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Brief summary of the post"
                  required
                  rows={2}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Content
                </label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Full post content"
                  required
                  rows={10}
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Image URL
                  </label>
                  <div className="flex">
                    <div className="relative flex-grow">
                      <Input
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        required
                        className="w-full"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <Image className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="e.g. Artificial Intelligence"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Author
                  </label>
                  <Input
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Author name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="flex items-center h-full pt-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`relative w-10 h-5 transition-colors duration-200 ease-linear rounded-full ${formData.published ? 'bg-brand-blue' : 'bg-gray-300 dark:bg-gray-600'}`}>
                      <div className={`absolute left-0.5 top-0.5 w-4 h-4 transition-transform duration-200 ease-linear transform bg-white rounded-full ${formData.published ? 'translate-x-5' : ''}`}></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                      {formData.published ? 'Published' : 'Draft'}
                    </span>
                  </label>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                <Button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-lightBlue text-white transition-all"
                >
                  <Save className="mr-2 h-4 w-4" />
                  {isEditing ? 'Update Post' : 'Save Post'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden dark:border dark:border-gray-700">
              <div className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Post
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-md object-cover" src={post.image} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {post.title}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                By {post.author}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                            {post.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {post.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button 
                            onClick={() => handleTogglePublish(post.id)}
                            className={`px-3 py-1 inline-flex items-center text-xs rounded-full ${
                              post.published 
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                                : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
                            }`}
                          >
                            {post.published ? (
                              <>
                                <Eye className="mr-1 h-3 w-3" /> Published
                              </>
                            ) : (
                              <>
                                <EyeOff className="mr-1 h-3 w-3" /> Draft
                              </>
                            )}
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleEdit(post)}
                              className="text-brand-blue dark:text-brand-lightBlue hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleDelete(post.id)}
                              className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
