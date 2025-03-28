
import { initEmailJS } from './emailService';

// Initialize all services
export const initializeServices = () => {
  // Initialize EmailJS
  initEmailJS();
  
  // Add any other service initializations here
  console.log('All services initialized');
};
