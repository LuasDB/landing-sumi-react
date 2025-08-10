import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const Hero = ({ backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
  };

  return (
    <section
      id="inicio"
      className={`${styles.hero} ${styles.parallaxbackground} flex items-center justify-center`}
      style={heroStyle}
    >
      <motion.div
        className="max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration:2, ease: 'easeOut' }}
      >

        <h1 className="text-white font-bold text-3xl md:text-5xl drop-shadow-lg mb-8 uppercase tracking-widest">
          Nuestra Filosofía: 
        </h1>
        <h1 className="text-white font-bold text-3xl md:text-5xl drop-shadow-lg mb-8 uppercase tracking-widest">
           <span className="text-blue-500">Ética y Calidad</span>
        </h1>

        <h2 className="text-white font-semibold text-2xl md:text-4xl drop-shadow-md mb-8 uppercase tracking-wide">
          Nuestra Técnica: 
        </h2>
        <h2 className="text-white font-semibold text-2xl md:text-4xl drop-shadow-md mb-8 uppercase tracking-wide">
          <span className="text-blue-500 uppercase">Precisión certificada</span>
        </h2>

        <p className="text-white text-2xl md:text-3xl font-medium max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          Patrones trazables y cumplimiento metrológico bajo normatividad nacional e internacional
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
