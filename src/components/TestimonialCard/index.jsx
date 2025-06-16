import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonio }) => {
  const handleImageError = (e, type) => {
    if (type === 'foto') {
      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='30' fill='%236b7280'/%3E%3Ctext x='30' y='35' font-family='Arial' font-size='20' fill='white' text-anchor='middle'%3E${testimonio.nombre.charAt(0)}%3C/text%3E%3C/svg%3E`;
    } else {
      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Crect width='80' height='40' fill='%23e5e7eb'/%3E%3Ctext x='40' y='25' font-family='Arial' font-size='10' fill='%236b7280' text-anchor='middle'%3E${testimonio.empresa}%3C/text%3E%3C/svg%3E`;
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 relative">
      {/* Quote icon */}
      <div className="absolute top-4 right-4 text-blue-100">
        <Quote className="w-8 h-8" />
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars(testimonio.rating)}
      </div>

      {/* Testimonio */}
      <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonio.testimonio}"
      </blockquote>

      {/* Información del equipo calibrado */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Equipo calibrado:</span> {testimonio.equipoCalibrado}
        </p>
        <p className="text-sm text-gray-500">
          {testimonio.fechaServicio}
        </p>
      </div>

      {/* Autor */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={testimonio.foto}
            alt={testimonio.nombre}
            className="w-12 h-12 rounded-full object-cover"
            onError={(e) => handleImageError(e, 'foto')}
          />
          <div>
            <h4 className="font-semibold text-gray-900">{testimonio.nombre}</h4>
            <p className="text-sm text-gray-600">{testimonio.cargo}</p>
          </div>
        </div>

        {/* Logo empresa */}
        <div className="flex-shrink-0">
          <img
            src={testimonio.logoEmpresa}
            alt={testimonio.empresa}
            className="h-8 w-auto object-contain opacity-70"
            onError={(e) => handleImageError(e, 'logo')}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;