import { useEffect, useState } from "react";
import AccreditationCard from "@/components/AccreditationCard";
import axios from "axios";
import { motion } from "framer-motion";

export default function Accreditations() {
  const [acreditaciones, setAcreditaciones] = useState([]);
  const equipos = [
    "Agitadores",
    "Analizador de tamaño de partículas",
    "Autoclaves",
    "Baño María",
    "Bomba peristáltica",
    "Bomba de vacío",
    "Buretas y dosificadores automáticos",
    "Cabina de bioseguridad",
    "Cámara de ambiente controlado",
    "Campana de extracción",
    "Campana de flujo laminar",
    "Centrífuga",
    "Colorímetro",
    "Conductímetro",
    "Congelador",
    "Contador de colonias",
    "Densímetros",
    "Destilador",
    "Determinador de humedad",
    "Determinador Karl Fischer",
    "Espectrofotómetro",
    "Estereoscopio",
    "Flujometría",
    "Fluorómetro",
    "Fotómetro",
    "Macerador",
    "Matraz volumétrico",
    "Medidor de sólidos disueltos",
    "Mezclador",
    "Micropipeta",
    "Microscopio",
    "Molino",
    "Mufla",
    "Mullen Tester",
    "Osmómetro",
    "Oxímetro",
    "Parrilla con agitación",
    "Penetrómetro",
    "Pipetas",
    "Polarímetro",
    "Potenciómetro",
    "Punto de fusión",
    "Punto flama",
    "Refractómetro",
    "Refrigerador",
    "Rheómetro digital",
    "Rotavapor",
    "Tacómetro",
    "Tamizador",
    "Termobaño",
    "Termo higrómetros",
    "Termómetros",
    "Torquímetros",
    "Turbidímetro",
    "Triturador",
    "Válvula de seguridad",
    "Viscosímetro",
  ];

  const getAcreditaciones = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/sumi`);
      if (data.success) {
        setAcreditaciones(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAcreditaciones();
  }, []);

  return (
    <section className="pt-[80px] py-12" id="acreditaciones">
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-green-900 text-center mb-12">
          Magnitudes acreditadas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {acreditaciones.map((acreditacion) => (
            <AccreditationCard
              key={acreditacion._id}
              acreditacion={acreditacion}
              className="hover:shadow-lg transition cursor-pointer transform hover:scale-105"
            />
          ))}
        </div>
      </div>

      {/* NUEVA SECCIÓN: Equipos que calibramos */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-green-900 text-center mb-6">
          Magnitudes trazables
        </h3>
        <p className="text-center text-gray-600 mb-8 px-4">
          ESPECIALIDADES – EQUIPOS CON TRAZABILIDAD
        </p>

        {/* Carrusel horizontal en mobile */}
        <div className="overflow-x-auto no-scrollbar flex gap-4 px-4 md:hidden">
          {equipos.map((equipo, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[220px] bg-green-100 p-4 rounded-2xl shadow-md text-center text-green-900 font-medium"
            >
              {equipo}
            </motion.div>
          ))}
        </div>

        {/* Grid animado en desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 px-8">
          {equipos.map((equipo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 p-5 rounded-2xl shadow-sm hover:shadow-md text-green-900 text-center font-medium"
            >
              {equipo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
