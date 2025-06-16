import React, { useState } from 'react';
import styles from './Contact.module.css';
import AnimatedSection from './../AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario (e.g., a una API, emailjs, etc.)
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado (simulación). Revisa la consola.');
    // Resetear formulario
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contacto" className={`content-section ${styles.contactSection}`}>
      <div className="container">
        <h2>Ponte en Contacto</h2>
        <div className={styles.contactWrapper}>
          <AnimatedSection tag="div" className={styles.contactInfo} animationClass="fade-in-up">
            <h3>Información de Contacto</h3>
            <p><i className="icon">📧</i> Email: contacto@tecnosoluciones.com</p>
            <p><i className="icon">📞</i> Teléfono: +123 456 7890</p>
            <p><i className="icon">📍</i> Dirección: Calle Falsa 123, Ciudad, País</p>
            <p>Estamos listos para ayudarte. ¡No dudes en consultarnos!</p>
          </AnimatedSection>

          <AnimatedSection tag="form" className={styles.contactForm} onSubmit={handleSubmit} animationClass="fade-in-up" style={{transitionDelay: '0.2s'}}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Asunto:</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="cta-button">Enviar Mensaje</button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
