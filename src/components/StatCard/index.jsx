import { useEffect, useState } from 'react';

const StatCard = ({ stat, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Función para animar números
  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(stat.numero.replace(/\D/g, ''));
    if (isNaN(target)) return;

    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.numero]);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }else{setIsVisible(false)}
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${stat.descripcion}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [delay, stat.descripcion]);

  const formatNumber = (num) => {
    const suffix = stat.numero.replace(/\d/g, '');
    return num + suffix;
  };

  return (
    <div 
      id={`stat-${stat.descripcion}`}
      className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      {/* Icono */}
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {stat.icono}
      </div>
      
      {/* Número */}
      <div className={`text-3xl lg:text-4xl font-bold mb-2 ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
        {isVisible ? formatNumber(count) : stat.numero}
      </div>
      
      {/* Descripción */}
      <p className="text-gray-600 font-medium text-sm lg:text-base">
        {stat.descripcion}
      </p>
    </div>
  );
};

export default StatCard;