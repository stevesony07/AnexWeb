
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, BrainCircuit } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  let location;
  try {
    location = useLocation();
  } catch (e) {
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
        'bg-black/90 backdrop-blur-md shadow-md border-b border-gray-800/50 py-3' : 
        'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <BrainCircuit className="h-6 w-6 mr-2 text-blue-500" />
            <span className="text-xl font-bold text-white tracking-tight">AgenticNex</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/platform" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                Platform
              </Link>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                Solutions
              </button>
              <Link to="/case-studies" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                Case Studies
              </Link>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                About
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-300 hover:bg-gray-800/50 transition-colors rounded-full w-9 h-9 flex items-center justify-center"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-300 hover:bg-gray-800/50 rounded-full w-9 h-9"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <button 
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50 animate-fade-in">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors py-2">
              Home
            </Link>
            <Link to="/platform" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors py-2">
              Platform
            </Link>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-left text-gray-300 hover:text-blue-400 transition-colors py-2">
              Solutions
            </button>
            <Link to="/case-studies" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors py-2">
              Case Studies
            </Link>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-left text-gray-300 hover:text-blue-400 transition-colors py-2">
              About
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
