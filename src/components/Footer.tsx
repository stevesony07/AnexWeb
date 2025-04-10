
import { BrainCircuit, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <BrainCircuit className="h-6 w-6 mr-2 text-blue-500" />
              <h2 className="font-bold text-white text-xl">AGENTIC.AI</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Delivering enterprise-grade artificial intelligence solutions for data-driven decision making and operational excellence.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">LLM Integration</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">AI Development</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Data Engineering</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">ML Ops</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Team</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} AGENTIC.AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-500">Built with precision for enterprise excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
