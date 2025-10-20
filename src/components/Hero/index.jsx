import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const Hero = ({ backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.55), rgba(30, 30, 30, 0.55)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section
      id="inicio"
      className={`${styles.hero} ${styles.parallaxbackground} flex items-center justify-center min-h-screen`}
      style={heroStyle}
    >
      <motion.div
        className="max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        {/* TÍTULO PRINCIPAL */}
        <h1 className="font-extrabold text-4xl md:text-6xl tracking-widest mb-6 text-[#00C03A] uppercase drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
          Precisión que genera confianza
        </h1>

        {/* SUBTÍTULO */}
        <h2 className="text-white font-semibold text-2xl md:text-4xl uppercase mb-8 tracking-wide drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
          Calibraciones con ética y trazabilidad certificada
        </h2>

        {/* TEXTO DESCRIPTIVO */}
        <p className="text-gray-100 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-md">
          Somos especialistas en metrología.  
          Garantizamos resultados trazables y cumplimiento con normativas nacionales e internacionales.
        </p>

        {/* BOTÓN DE ACCIÓN */}
        <motion.a
          href="#cotizar"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#00C03A] hover:bg-[#00992F] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition duration-300 uppercase tracking-wide"
        >
          Solicita tu cotización
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
