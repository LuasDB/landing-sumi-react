import React from 'react';
import ServiceCard from './../ServiceCard';
import styles from './Services.module.css';

// Importa tus imágenes de servicio
import imgSoporteRemoto from './../../assets/images/barriles radiactivos.png';
import imgMantenimiento from './../../assets/images/barriles radiactivos.png';
import imgRedes from './../../assets/images/barriles radiactivos.png';
import imgConsultoria from './../../assets/images/barriles radiactivos.png';

const servicesData = [
  {
    id: 1,
    title: "Soporte Técnico Remoto",
    description: "Asistencia inmediata sin importar dónde te encuentres. Solucionamos problemas de software y configuración a distancia.",
    imgSrc: imgSoporteRemoto,
    altText: "Icono de soporte remoto"
  },
  {
    id: 2,
    title: "Mantenimiento Preventivo",
    description: "Optimizamos tus equipos para asegurar su máximo rendimiento y prolongar su vida útil.",
    imgSrc: imgMantenimiento,
    altText: "Icono de mantenimiento de PC"
  },
  {
    id: 3,
    title: "Redes y Seguridad",
    description: "Diseñamos e implementamos redes seguras y eficientes para tu hogar o empresa.",
    imgSrc: imgRedes,
    altText: "Icono de redes y seguridad"
  },
  {
    id: 4,
    title: "Consultoría IT",
    description: "Te asesoramos para tomar las mejores decisiones tecnológicas y optimizar tu infraestructura.",
    imgSrc: imgConsultoria,
    altText: "Icono de consultoría IT"
  }
];

const Services = () => {
  return (
    <section id="servicios" className={`content-section ${styles.servicesSection}`}>
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className={styles.serviceGrid}>
          {servicesData.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imgSrc={service.imgSrc}
              altText={service.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
