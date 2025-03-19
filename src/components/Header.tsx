
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, Home } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 
        'bg-white dark:bg-gray-900 shadow-md py-3' : 
        'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/72c67fe1-d55b-4cd8-8fce-84f332abd070.png" 
              alt="AgenticNex Logo" 
              className="h-24 md:h-28 transition-transform duration-300 hover:scale-105" 
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors relative hover-gradient-underline flex items-center gap-2">
                <Home className="h-4 w-4" /> Home
              </Link>
              <Link to="/platform" className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors relative hover-gradient-underline">Platform</Link>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors relative hover-gradient-underline">Services</button>
              <Link to="/case-studies" className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors relative hover-gradient-underline">Case Studies</Link>
              <Link to="/blog" className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors relative hover-gradient-underline">Blog</Link>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors relative hover-gradient-underline">About Us</button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 text-white transition-all hover-gradient-border">
                Schedule a Demo
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-800 dark:text-white"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <button 
              className="text-gray-800 dark:text-white"
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
            <Link to="/" className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors py-2 flex items-center gap-2">
              <Home className="h-4 w-4" /> Home
            </Link>
            <Link to="/platform" className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors py-2">Platform</Link>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-left text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors py-2">Services</button>
            <Link to="/case-studies" className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors py-2">Case Studies</Link>
            <Link to="/blog" className="text-sm font-medium text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors py-2">Blog</Link>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-left text-gray-800 dark:text-white hover:text-brand-lightBlue transition-colors py-2">About Us</button>
            <Button className="bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:opacity-90 text-white w-full mt-2 hover-gradient-border">
              Schedule a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
