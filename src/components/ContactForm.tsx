
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission with a delay
      console.log("Form submitted:", formData);
      
      // In a real application, you would send this data to your backend or email service
      // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We've received your message and will get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4">
            Get in Touch
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm dark:shadow-blue-900/5 dark:border dark:border-gray-800">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 text-white w-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8 animate-fade-in-right">
            <div className="mb-8 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm dark:shadow-blue-900/5 dark:border dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start group">
                  <Mail className="h-5 w-5 text-brand-blue dark:text-brand-lightBlue mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Email</p>
                    <a href="mailto:info@agenticnex.ai" className="text-gray-900 dark:text-white font-medium hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors">
                      info@agenticnex.ai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <Phone className="h-5 w-5 text-brand-blue dark:text-brand-lightBlue mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Phone</p>
                    <a href="tel:+1-800-555-0000" className="text-gray-900 dark:text-white font-medium hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors">
                      +1 (800) 555-0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 text-brand-blue dark:text-brand-lightBlue mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      123 Tech Park, Silicon Valley, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm dark:shadow-blue-900/5 dark:border dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-full transition-colors transform hover:scale-110 transition-transform">
                  <Twitter className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="#" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-full transition-colors transform hover:scale-110 transition-transform">
                  <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="#" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-full transition-colors transform hover:scale-110 transition-transform">
                  <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
