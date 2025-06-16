import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle, Mail } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
     { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Acreditaciones', href: '#acreditaciones' },
    { name: 'Solicitar Cotización', href: '#cotizar' },
  ];

  const handleLinkClick = () => {
    onClose();
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Menu Panel */}
      <div className="fixed top-16 left-0 right-0 bg-white shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="px-4 py-6">
          {/* Navegación */}
          <nav className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={toggleServices}
                      className="flex items-center justify-between w-full text-left text-gray-900 hover:text-primary-600 transition-colors font-medium py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-gray-600 hover:text-primary-600 transition-colors py-1"
                            onClick={handleLinkClick}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-900 hover:text-primary-600 transition-colors font-medium py-2"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Separador */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contacto</h3>
            
            <a 
              href="tel:+5551234567" 
              className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors"
              onClick={handleLinkClick}
            >
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </a>

            <a 
              href="https://wa.me/5551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-secondary-600 hover:text-secondary-700 transition-colors"
              onClick={handleLinkClick}
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>

            <a 
              href="mailto:info@laboratorio.com" 
              className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors"
              onClick={handleLinkClick}
            >
              <Mail className="h-5 w-5" />
              <span>info@laboratorio.com</span>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <button 
              className="w-full btn-accent py-3 text-center font-semibold"
              onClick={handleLinkClick}
            >
              Solicitar Calibración
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;