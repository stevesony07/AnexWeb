
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="font-bold text-xl mb-4">AgenticNex</h2>
            <p className="text-gray-400 text-sm">
              Delivering innovative AI-driven software development solutions for businesses.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AI Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Data Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 AgenticNex. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p>Designed with precision. Built with innovation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
