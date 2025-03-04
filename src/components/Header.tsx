
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-brand-blue font-bold text-xl md:text-2xl">AgenticNex</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors">Platform</a>
              <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors">Services</a>
              <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors">Case Studies</a>
              <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors">Blog</a>
              <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors">About Us</a>
            </nav>
            
            <Button className="bg-brand-blue hover:bg-brand-lightBlue text-white">
              Contact Us
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col py-4 px-6 space-y-3">
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors py-2">Platform</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors py-2">Services</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors py-2">Case Studies</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors py-2">Blog</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors py-2">About Us</a>
            <Button className="bg-brand-blue hover:bg-brand-lightBlue text-white w-full mt-2">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
