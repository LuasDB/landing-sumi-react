import React from 'react';
import styles from './ServiceCard.module.css';
import AnimatedSection from './../AnimatedSection'; // Importamos el componente de animación

// Ejemplo de imagen, reemplaza con tus importaciones reales
import defaultServiceImage from './../../assets/images/hero.jpg';

const ServiceCard = ({ title, description, imgSrc, altText }) => {
  return (
    // Cada tarjeta se anima individualmente
    <AnimatedSection tag="div" className={`${styles.serviceItem} shadow-sm`} animationClass="fade-in-up">
      <img src={imgSrc || defaultServiceImage} alt={altText || title} className={styles.serviceImg} />
      <h3>{title}</h3>
      <p>{description}</p>
    </AnimatedSection>
  );
};

export default ServiceCard;
