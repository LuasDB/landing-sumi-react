import Logo from '@/components/Logo';
import AddedValue from '../AddedValue';
import Estadistics from '../Estadistics';
import SatisfactionSurvey from '../SatisfactionSurvey ';
import Niches from '../Niches';
import { motion,useInView  } from 'framer-motion';
import { useRef } from 'react';
import QualityPolicy from '../QualityPolicy';


export default function About() {
    const ref = useRef(null);
    const ref2 = useRef(null);

    const isInView = useInView(ref, { threshold: 0.5, triggerOnce: true });
    const isInView2 = useInView(ref2, { threshold: 0.5, triggerOnce: true });
    return (
        <section id="nosotros" className='container mx-auto px-4 py-12 '>
            <motion.div 
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}    // Empieza pequeño y transparente
            animate={isInView ?{ scale: 1, opacity: 1 }:{}}    // Termina en tamaño normal y opaco
            transition={{ duration: 1, ease: 'easeOut' }} // Duración y suavidad
            className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-2 h-screen'>
                <div className="text-center mb-4 flex flex-col justify-center items-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6">
                    Confianza y Experiencia Comprobada
                </h2>
                {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4 text-justify">
                Para <span className='font-bold'>SUMI</span>, nuestro compromiso es garantizar la confiabilidad de las mediciones de nuestros clientes, ofreciendo soluciones técnicas precisas, tiempos de entrega competitivos y atención personalizada. Contamos con personal altamente capacitado y equipos de referencia trazables a patrones nacionales e internacionales, lo que nos permite asegurar resultados técnicamente válidos en cada servicio de calibración.
                </p> */}
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto text-justify">
                    Con más de 20 años de experiencia, <span className='font-bold'>SUMI</span> se ha consolidado como un referente en el sector de la calibración, ofreciendo servicios de alta calidad y confianza a nuestros clientes. Nuestra misión es proporcionar soluciones técnicas precisas y confiables, adaptadas a las necesidades de cada cliente, garantizando la validez técnica de los resultados de calibración.
                </p>
            </div>
            <div className="text-center mb-4 flex flex-col justify-center items-center" style={{filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.7))'}}>
                <Logo className="mb-4 w-52 lg:w-[350px]" />
            </div>
            </motion.div>
            <motion.div 
            ref={ref2}
            initial={{  opacity: 0,y:50 }}    // Empieza pequeño y transparente
            animate={isInView2 ? { opacity: 1,y:0 }:{}}    // Termina en tamaño normal y opaco
            transition={{ duration: 1.5, ease: 'easeOut'}} // Duración y suavidad
            className="text-center mb-2">
                <AddedValue />
                <Estadistics />
                
            </motion.div>
            
        </section>
    )
}   