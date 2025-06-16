import React from 'react';
import { useState } from 'react';
import styles from './Hero.module.css';
import logo from '@/assets/images/logo.png'


const equiposDisponibles = [
  'Multímetro',
  'Termómetro infrarrojo',
  'Balanza digital',
  'Manómetro',
  'Fuente de poder',
  'Calibrador de presión',
  'Termopar tipo K',
];

const Hero = ({ backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(10, 116, 250, 0.4), rgba(10, 116, 250, 0.4)), url(${backgroundImage})`,
  };

   const [busqueda, setBusqueda] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleBuscar = () => {
    if (!busqueda.trim()) return;

    const encontrado = equiposDisponibles.find(equipo =>
      equipo.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (encontrado) {
      setResultado(`✅ Sí calibramos el equipo: ${encontrado}`);
    } else {
      setResultado('❌ Actualmente no calibramos este equipo, pero puedes contactarnos para evaluarlo.');
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className={`${styles.hero} ${styles.parallaxbackground}`} style={heroStyle}>
      <div className={`flex flex-col`}>
       

        <h1 className='font-bold text-5xl mb-10'>Precisión certificada, confianza garantizada</h1>
        <p className='text-2xl mb-10 md:px-24 '>En <span className='font-bold'>Suministros de Importación</span>, calibramos con exactitud y profesionalismo, respaldando tus mediciones con calidad y cumplimiento normativo.</p>
        
          <p className='text-2xl font-bold text-white shadow-2xl'>Laboratorio de Calibración</p>
          <p className='text-1xl text-white text-2xl shadow-2xl font-extrabold'>Certificado ISO/IEC 17025:2018</p>
        
        
      </div>
    </section>
  );
};

export default Hero;
