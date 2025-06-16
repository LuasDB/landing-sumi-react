import { ChevronDown } from 'lucide-react';

const Navigation = ({ isServicesOpen, setIsServicesOpen, className = "" }) => {
  const navigationItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Acreditaciones', href: '#acreditaciones' },
    { name: 'Solicitar Cotización', href: '#cotizar' },

   
  ];

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className={`${className}`}>
      <ul className="flex items-center space-x-8">
        {navigationItems.map((item) => (
          <li key={item.name} className="relative">
            {item.hasDropdown ? (
              <div className="relative">
                <button
                  onClick={handleServicesClick}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  <span>{item.name}</span>
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
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
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;