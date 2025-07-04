import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  ChevronUp,
  Shield,
  Award,
  ExternalLink
} from 'lucide-react';
import SocialIcon from './SocialIcon';
import NewsletterForm from './NewsletterForm';
import AnimatedSection from '@/components/AnimatedSection';
import { footerData, newsletterBeneficios } from '@/db/footerData';
import Logo from '../Logo';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  // Mostrar botón de scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleImageError = (e, type) => {
    if (type === 'logo') {
      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Crect width='150' height='50' fill='%23ffffff'/%3E%3Ctext x='75' y='30' font-family='Arial' font-size='14' fill='%23374151' text-anchor='middle'%3E${footerData.empresa.nombreCorto}%3C/text%3E%3C/svg%3E`;
    } else {
      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%236b7280'/%3E%3Ctext x='30' y='25' font-family='Arial' font-size='8' fill='white' text-anchor='middle'%3ECert%3C/text%3E%3C/svg%3E`;
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Patrón de fondo animado */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Sección principal */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Columna 1: Información de la empresa */}
            <AnimatedSection delay={0} className="lg:col-span-1">
              <div className="space-y-6">
                {/* Logo */}
                <div>
                  <Logo
                    alt={footerData.empresa.nombreCorto}
                    onError={(e) => handleImageError(e, 'logo')}
                  />
                  <h3 className="text-xl font-bold mb-2">{footerData.empresa.nombreCorto}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {footerData.empresa.descripcion}
                  </p>
                </div>

                {/* Acreditaciones */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Acreditaciones
                  </h4>
                  <div className="flex space-x-3">
                    {footerData.acreditaciones.map((acred, index) => (
                      <div 
                        key={index}
                        className="group relative"
                      >
                        <img
                          src={acred.logo}
                          alt={acred.nombre}
                          className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
                          onError={(e) => handleImageError(e, 'acred')}
                        />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          {acred.nombre} - {acred.numero}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Redes sociales */}
                <div>
                  <h4 className="font-semibold mb-3">Síguenos</h4>
                  <div className="flex space-x-3">
                    {footerData.redesSociales.map((social, index) => (
                      <SocialIcon key={social.nombre} social={social} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Columna 2: Servicios y Empresa */}
            <AnimatedSection delay={200} className="lg:col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                {/* Servicios */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Servicios</h4>
                  <ul className="space-y-2">
                    {footerData.servicios.map((servicio, index) => (
                      <li key={index}>
                        <a
                          href={servicio.url}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {servicio.nombre}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Empresa */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Empresa</h4>
                  <ul className="space-y-2">
                    {footerData.empresa_links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.nombre}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Columna 3: Recursos y Legal */}
            <AnimatedSection delay={400} className="lg:col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                {/* Recursos */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Recursos</h4>
                  <ul className="space-y-2">
                    {footerData.recursos.map((recurso, index) => (
                      <li key={index}>
                        <a
                          href={recurso.url}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {recurso.nombre}
                          </span>
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Legal</h4>
                  <ul className="space-y-2">
                    {footerData.legal.map((legal, index) => (
                      <li key={index}>
                        <a
                          href={legal.url}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {legal.nombre}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Columna 4: Contacto y Newsletter */}
            <AnimatedSection delay={600} className="lg:col-span-1">
              <div className="space-y-8">
                {/* Información de contacto */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-300">
                        <p>{footerData.contacto.direccion.calle}</p>
                        <p>{footerData.contacto.direccion.colonia}</p>
                        <p>{footerData.contacto.direccion.ciudad}, {footerData.contacto.direccion.cp}</p>
                        <p>{footerData.contacto.direccion.pais}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <a 
                        href={`tel:${footerData.contacto.telefono}`}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {footerData.contacto.telefono}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <a 
                        href={`https://wa.me/${footerData.contacto.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        WhatsApp: {footerData.contacto.whatsapp}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <a 
                        href={`mailto:${footerData.contacto.email}`}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {footerData.contacto.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">
                        {footerData.contacto.horarios}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <NewsletterForm beneficios={newsletterBeneficios} />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-700"></div>

        {/* Footer bottom */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© {currentYear} {footerData.empresa.nombre}. Todos los derechos reservados.</p>
              <p className="mt-1">Laboratorio acreditado bajo la norma ISO/IEC 17025:2017</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                <span>Acreditado ema</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                <span>ISO/IEC 17025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;