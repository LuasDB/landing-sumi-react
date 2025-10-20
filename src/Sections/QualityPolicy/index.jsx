import{ motion } from 'framer-motion';
import laboratorioImg from '../../assets/images/calibration-technician.jpg'

export default function QualityPolicy() {
    return (
        // <section id="politica-de-calidad" className='container px-4 h-screen mx-auto py-12 '>
        //     <motion.h2
        //         className="text-4xl lg:text-4xl font-bold text-green-700 mb-6 text-center mt-30"
        //         initial={{ opacity: 0, y: 50 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 1, ease: 'easeOut' }}
        //     >
        //         Política de Calidad
        //     </motion.h2>
        //     <motion.p
        //         className="text-lg text-gray-600 max-w-4xl mx-auto text-justify"
        //         initial={{ opacity: 0, y: 50 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 1, ease: 'easeOut' }}
        //     >
        //         La dirección de <span className='font-bold'>SUMI</span>, establece como <span className='font-bold'>Política de Calidad</span>, el compromiso de servicio al cliente, vía la identificación y atención de sus requerimientos y necesidades de servicios metrológicos, aplicando y conjugando para ello los conceptos de <span className='font-bold'>Ética-Calidad</span>, capacitación actualizada de nuestro personal , basando nuestro <span className='font-bold'>SISTEMA DE GESTIÓN DE LA CALIDAD</span> en la norma <span className='font-bold'>NMX-EC-17025-IMNC-2018</span>, fomentando el trabajo profesional del equipo que nos conforma, y comprometidos con la mejora continua de nuestras actividades.
        //     </motion.p>
        // </section>

          
    <section
      id="politica-de-calidad"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src={laboratorioImg}
        alt="Laboratorio de metrología"
         className="absolute inset-0 w-full h-full object-cover opacity-70"
        style={{ filter: 'brightness(0.8) contrast(1.1)' }}
      />

      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 mix-blend-multiply" />


       {/* 🔸 Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white/90 to-transparent pointer-events-none z-20"></div>

      {/* 🔸 Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/90 to-transparent pointer-events-none z-20"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        <motion.h2
          className="text-5xl lg:text-6xl font-extrabold mb-6 text-[#00C853]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Política de Calidad
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-100 leading-relaxed text-justify"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          La dirección de <span className="font-bold text-[#00C853]">SUMI</span> establece como{' '}
          <span className="font-bold text-[#00C853]">Política de Calidad</span> el compromiso de
          servicio al cliente, mediante la identificación y atención de sus requerimientos y
          necesidades de servicios metrológicos. Aplicando los conceptos de{' '}
          <span className="font-bold text-[#00C853]">Ética</span> y{' '}
          <span className="font-bold text-[#00C853]">Calidad</span>, con capacitación actualizada
          de nuestro personal, basando nuestro{' '}
          <span className="font-bold text-[#00C853]">
            Sistema de Gestión de la Calidad
          </span>{' '}
          en la norma <span className="font-bold">NMX-EC-17025-IMNC-2018</span>, fomentando el
          trabajo profesional en equipo y el compromiso con la mejora continua.
        </motion.p>
      </div>
    </section>
  

    );
}