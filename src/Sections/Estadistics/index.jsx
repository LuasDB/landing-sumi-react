
import StatCard from '@/components/StatCard';
import { 
  
  estadisticas
} from '@/db/credibilityData';

export default function Estadistics() {
    return (
       <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
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
    );
}