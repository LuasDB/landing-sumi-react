import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import Navigation from '@/components/Header/Navigation';
import MobileMenu from '@/components/Header/MobileMenu';
import ContactButtons from '@/components/Header/ContactButtons';
import styles from '@/components/Header/Header/Header.module.css'
import Logo from '@/components/Logo';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Detectar scroll para cambiar el estado del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? `' bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm' `
            : `bg-white `
        }`}
      >
        
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Logo alt='Logo_Image' onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Crect width='120' height='40' fill='%231e40af'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3ELaboratorio%3C/text%3E%3C/svg%3E";
                }} />
              </div>
              <div className="hidden sm:block">
                {/* <div className="text-sm font-semibold text-gray-900">Laboratorio de Calibración</div>
                <div className="text-xs text-gray-600">Acreditado ante la ema</div> */}
              </div>
            </div>

            {/* Navegación Desktop */}
            <Navigation 
              isServicesOpen={isServicesOpen}
              setIsServicesOpen={setIsServicesOpen}
              className="hidden md:flex"
            />
            

            {/* Botones de contacto y CTA Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <ContactButtons />
              
             
            </div>

            {/* Botones Mobile */}
            <div className="flex md:hidden items-center space-x-2">
              {/* WhatsApp button mobile */}
              <a 
                href="https://wa.me/5551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-secondary-600 hover:text-secondary-700 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>

              {/* CTA Mobile compacto */}
              <button className="btn-accent px-3 py-2 text-xs font-semibold">
                Solicitar
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Abrir menú"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={closeMenu}
      />

      
    </>
  );
};

export default Header;