
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, Home } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Use try/catch to safely handle location
  let location;
  try {
    location = useLocation();
  } catch (e) {
    // If used outside Router context, provide a default
    location = { pathname: '/' };
  }

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
        'bg-black/80 backdrop-blur-md shadow-md py-3' : 
        'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              AgenticNex
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors relative hover-gradient-underline flex items-center gap-2">
                <Home className="h-4 w-4" /> Home
              </Link>
              <Link to="/platform" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors relative hover-gradient-underline">Platform</Link>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors relative hover-gradient-underline">Services</button>
              <Link to="/case-studies" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors relative hover-gradient-underline">Case Studies</Link>
              <Link to="/blog" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors relative hover-gradient-underline">Blog</Link>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors relative hover-gradient-underline">About Us</button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-300 hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white transition-all">
                Schedule a Demo
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-300"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <button 
              className="text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800">
          <nav className="flex flex-col py-4 px-6 space-y-3">
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors py-2 flex items-center gap-2">
              <Home className="h-4 w-4" /> Home
            </Link>
            <Link to="/platform" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors py-2">Platform</Link>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-left text-gray-300 hover:text-blue-400 transition-colors py-2">Services</button>
            <Link to="/case-studies" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors py-2">Case Studies</Link>
            <Link to="/blog" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors py-2">Blog</Link>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-left text-gray-300 hover:text-blue-400 transition-colors py-2">About Us</button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white w-full mt-2">
              Schedule a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
