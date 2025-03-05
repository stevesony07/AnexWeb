
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/72c67fe1-d55b-4cd8-8fce-84f332abd070.png" 
              alt="AgenticNex Logo" 
              className="h-16 md:h-20 transition-transform duration-300 hover:scale-105" 
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors">Platform</Link>
              <Link to="/" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors">Services</Link>
              <Link to="/" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors">Case Studies</Link>
              <Link to="/blog" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors">Blog</Link>
              <Link to="/" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors">About Us</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 text-white transition-all">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-700 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <button 
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <nav className="flex flex-col py-4 px-6 space-y-3">
            <Link to="/" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors py-2">Platform</Link>
            <Link to="/" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors py-2">Services</Link>
            <Link to="/" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors py-2">Case Studies</Link>
            <Link to="/blog" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors py-2">Blog</Link>
            <Link to="/" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors py-2">About Us</Link>
            <Button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 text-white w-full mt-2">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
