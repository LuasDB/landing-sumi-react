import { Phone, MessageCircle, Mail } from 'lucide-react';

const ContactButtons = () => {
  return (
    <div className="flex items-center space-x-3">
     
      {/* WhatsApp */}
      <a 
        href="https://wa.me/5551234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 transition-colors group"
      >
        <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium hidden lg:block">WhatsApp</span>
      </a>

       {/* Teléfono */}
      <a 
        href="tel:+5551234567" 
        className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors group"
      >
        <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium hidden lg:block">(555) 123-4567</span>
      </a>


     
    </div>
  );
};

export default ContactButtons;