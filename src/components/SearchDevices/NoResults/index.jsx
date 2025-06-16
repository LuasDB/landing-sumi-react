import { Search, MessageCircle, Phone, Mail } from 'lucide-react';

const NoResults = ({ searchQuery, onRequestInfo }) => {
  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        {/* Icono */}
        <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <Search className="w-10 h-10 text-gray-400" />
        </div>

        {/* Mensaje principal */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          No encontramos "{searchQuery}"
        </h3>
        <p className="text-gray-600 mb-8">
          Pero no te preocupes, calibramos más de 500 tipos de equipos diferentes. 
          Es muy probable que podamos ayudarte con tu equipo.
        </p>

        {/* Opciones de contacto */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            ¿Tu equipo no aparece en la lista?
          </h4>
          <p className="text-gray-600 mb-6">
            Contáctanos y te diremos si podemos calibrarlo. Respondemos en menos de 2 horas.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://wa.me/+525533262860"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
            
            <a
              href="tel:+525569035919"
              className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium md:hidden"
            >
              <Phone className="w-4 h-4 mr-2" />
              Llamar
            </a>
            
            <button
              onClick={() => onRequestInfo(searchQuery)}
              className="flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </button>
          </div>
        </div>

        {/* Sugerencias */}
        <div className="text-left">
          <h5 className="font-semibold text-gray-900 mb-3">Sugerencias para mejorar tu búsqueda:</h5>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Verifica la ortografía de la marca y modelo
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Intenta buscar solo por marca (ej: "Fluke")
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Busca por tipo de equipo (ej: "Multímetro", "Balanza")
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Usa términos más generales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoResults;