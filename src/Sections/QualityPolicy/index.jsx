import{ motion } from 'framer-motion';
export default function QualityPolicy() {
    return (
        <section id="politica-de-calidad" className='container px-4 h-screen mx-auto py-12 '>
            <motion.h2
                className="text-4xl lg:text-4xl font-bold text-green-700 mb-6 text-center mt-30"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                Política de Calidad
            </motion.h2>
            <motion.p
                className="text-lg text-gray-600 max-w-4xl mx-auto text-justify"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                La dirección de <span className='font-bold'>SUMI</span>, establece como <span className='font-bold'>Política de Calidad</span>, el compromiso de servicio al cliente, vía la identificación y atención de sus requerimientos y necesidades de servicios metrológicos, aplicando y conjugando para ello los conceptos de <span className='font-bold'>Ética-Calidad</span>, capacitación actualizada de nuestro personal , basando nuestro <span className='font-bold'>SISTEMA DE GESTIÓN DE LA CALIDAD</span> en la norma <span className='font-bold'>NMX-EC-17025-IMNC-2018</span>, fomentando el trabajo profesional del equipo que nos conforma, y comprometidos con la mejora continua de nuestras actividades.
            </motion.p>
        </section>
    );
}