
import emailjs from 'emailjs-com';

// EmailJS configuration
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'template_default'; // You'll need to create a template in EmailJS
const USER_ID = 'Vw5X3ep68UEX31HnG';

// Send email using EmailJS
export const sendEmail = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    
    return {
      success: true,
      status: response.status,
      text: response.text
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error
    };
  }
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(USER_ID);
};
