import { Clock, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

const EquipmentCard = ({ equipment, onRequestQuote }) => {
  const handleImageError = (e) => {
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f3f4f6'/%3E%3Ctext x='100' y='75' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle'%3E${equipment.marca}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Imagen del equipo */}
      <div className="relative h-48 bg-gray-50">
        <img
          src={equipment.imagen}
          alt={`${equipment.marca} ${equipment.modelo}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
        />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Calibrable
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {equipment.marca} {equipment.modelo}
          </h3>
          <p className="text-gray-600">{equipment.categoria}</p>
          <div className="mt-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              equipment.tipo === 'Eléctrico' ? 'bg-yellow-100 text-yellow-800' :
              equipment.tipo === 'Dimensional' ? 'bg-blue-100 text-blue-800' :
              equipment.tipo === 'Masa' ? 'bg-green-100 text-green-800' :
              equipment.tipo === 'Temperatura' ? 'bg-red-100 text-red-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {equipment.tipo === 'Eléctrico' ? '⚡' : 
               equipment.tipo === 'Dimensional' ? '📏' : 
               equipment.tipo === 'Masa' ? '⚖️' : 
               equipment.tipo === 'Temperatura' ? '🌡️' : '🔧'} {equipment.tipo}
            </span>
          </div>
        </div>

        {/* Información de calibración */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-blue-500" />
            <span>Tiempo estimado: <strong>{equipment.tiempoEstimado}</strong></span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="w-4 h-4 mr-2 text-green-500" />
            <span>Precio aproximado: <strong>{equipment.precioAproximado}</strong></span>
          </div>
        </div>

        {/* Magnitudes */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Magnitudes que calibramos:</h4>
          <div className="flex flex-wrap gap-1">
            {equipment.magnitudes.map((magnitud, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
              >
                {magnitud}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onRequestQuote(equipment)}
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group"
        >
          Solicitar Cotización
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform " />
        </button>
      </div>
    </div>
  );
};

export default EquipmentCard;