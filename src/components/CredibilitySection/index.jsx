import { useState } from 'react';
import AccreditationCard from '../AccreditationCard';
import StatCard from '../StatCard';
import TestimonialCard from '../TestimonialCard';
import GalleryCard from '../GalleryCard';
import { 
  acreditaciones, 
  estadisticas, 
  testimonios, 
  galeriaEquipos, 
  clientesDestacados 
} from '@/db/credibilityData';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const CredibilitySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleImageClick = (equipo) => {
    setSelectedImage(equipo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonios.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-gradient-to-b from-blue-100 via-green-50 to-green-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Confianza y Experiencia Comprobada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
          Para <span className='font-bold'>Suministros de Importación,S.A. de C.V.</span> , nuestro compromiso es garantizar la confiabilidad de las mediciones de nuestros clientes, ofreciendo soluciones técnicas precisas, tiempos de entrega competitivos y atención personalizada. Contamos con personal altamente capacitado y equipos de referencia trazables a patrones nacionales e internacionales, lo que nos permite asegurar resultados técnicamente válidos en cada servicio de calibración.
        </p>

        </div>

        {/* Estadísticas */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Números que nos respaldan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {estadisticas.map((stat, index) => (
              <StatCard 
                key={stat.descripcion} 
                stat={stat} 
                delay={index * 200}
              />
            ))}
          </div>
        </div>

       
        <section className="pt-[80px] py-12 " id="acreditaciones">
          <div className="mb-20 " >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Acreditaciones y Certificaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acreditaciones.map((acreditacion) => (
              <AccreditationCard 
                key={acreditacion.id} 
                acreditacion={acreditacion} 
              />
            ))}
          </div>
        </div>
        </section>
       

        
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Lo que dicen nuestros clientes
          </h3>
          
          {/* Testimonios carousel para móvil, grid para desktop */}
          <div className="relative">
            {/* Mobile carousel */}
            <div className="md:hidden">
              <TestimonialCard testimonio={testimonios[currentTestimonial]} />
              
              {/* Controles del carousel */}
              <div className="flex justify-center items-center mt-6 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonios.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonios.map((testimonio) => (
                <TestimonialCard 
                  key={testimonio.id} 
                  testimonio={testimonio} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Clientes destacados */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Clientes que confían en nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientesDestacados.map((cliente, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <img
                  src={cliente.logo}
                  alt={cliente.nombre}
                  className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Crect width='80' height='40' fill='%23e5e7eb'/%3E%3Ctext x='40' y='25' font-family='Arial' font-size='10' fill='%236b7280' text-anchor='middle'%3E${cliente.nombre}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.imagen}
              alt={selectedImage.nombre}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold mb-1">{selectedImage.nombre}</h3>
              <p className="text-gray-300">{selectedImage.descripcion}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CredibilitySection;