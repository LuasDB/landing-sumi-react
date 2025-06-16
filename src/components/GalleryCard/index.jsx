import { ZoomIn } from 'lucide-react';

const GalleryCard = ({ equipo, onImageClick }) => {
  const handleImageError = (e) => {
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f3f4f6'/%3E%3Ctext x='150' y='100' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle'%3E${equipo.nombre}%3C/text%3E%3C/svg%3E`;
  };

  const getCategoryColor = (categoria) => {
    const colors = {
      'Eléctrico': 'bg-yellow-100 text-yellow-800',
      'Dimensional': 'bg-blue-100 text-blue-800',
      'Masa': 'bg-green-100 text-green-800',
      'Temperatura': 'bg-red-100 text-red-800',
      'Presión': 'bg-purple-100 text-purple-800',
      'Radiación': 'bg-orange-100 text-orange-800'
    };
    return colors[categoria] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={equipo.imagen}
          alt={equipo.nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={handleImageError}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => onImageClick(equipo)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 hover:bg-gray-100"
          >
            <ZoomIn className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Categoría badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(equipo.categoria)}`}>
            {equipo.categoria}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {equipo.nombre}
        </h3>
        <p className="text-sm text-gray-600">
          {equipo.descripcion}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;