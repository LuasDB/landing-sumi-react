import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENV } from '@/API/api';

const AccreditationForm = ({ initialData, onFormSubmit,isEdit }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        numero: '',
        descripcion: '',
        alcance: '',
        descripcionAmplia: '',
    });
    const [acreditacionFile, setAcreditacionFile] = useState(null);
    const [cmcFile, setCmcFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [id, setId] = useState(null);


     useEffect(() => {
    if (initialData) {
      setFormData({
        nombre: initialData.nombre || '',
        numero: initialData.numero || '',
        descripcion: initialData.descripcion || '',
        alcance: initialData.alcance || '',
        descripcionAmplia: initialData.descripcionAmplia || '',
      });
      setId(initialData._id)
    }
  }, [initialData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (name === 'acreditacion') {
        setAcreditacionFile(files[0]);
        } else if (name === 'cmc') {
        setCmcFile(files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmitMessage('');

        const data = new FormData();
        data.append('nombre', formData.nombre);
        data.append('numero', formData.numero);
        data.append('descripcion', formData.descripcion);
        data.append('alcance', formData.alcance);
        data.append('descripcionAmplia', formData.descripcionAmplia);
        if (acreditacionFile) {
        data.append('acreditacion', acreditacionFile);
        }
        if (cmcFile) {
        data.append('cmc', cmcFile);
        }

        try {
        if(isEdit){
        const response = await axios.patch(`${ENV.apiUrl}/api/v1/sumi/${id}`, data, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Server Response:', response.data);
        }else{
        const response = await axios.post(`${ENV.apiUrl}/api/v1/sumi/create`, data, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Server Response:', response.data);
        }
        
        setSubmitMessage('¡Formulario enviado con éxito!');
        
        // Opcional: Resetear el formulario después de un envío exitoso
        setFormData({
            nombre: '',
            numero: '',
            descripcion: '',
            alcance: '',
            descripcionAmplia: '',
        });
        setAcreditacionFile(null);
        setCmcFile(null);
        e.target.reset(); // Limpia los inputs de archivo
        } catch (error) {
        setSubmitMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        console.error('Error submitting form:', error);
        } finally {
        setIsSubmitting(false);
        }
    };

    const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

    const inputStyles = {
        marginBottom: '1rem',
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const buttonStyles = {
        padding: '0.75rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: isSubmitting ? '#ccc' : '#007bff',
        color: 'white',
        cursor: isSubmitting ? 'not-allowed' : 'pointer',
        fontSize: '1rem',
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
        <label htmlFor="nombre">Nombre:</label>
        <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            style={inputStyles}
            required
        />

        <label htmlFor="numero">Número:</label>
        <input
            type="text"
            id="numero"
            name="numero"
            value={formData.numero}
            onChange={handleInputChange}
            style={inputStyles}
            required
        />

        <label htmlFor="descripcion">Descripción:</label>
        <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            style={inputStyles}
            required
        />

        <label htmlFor="alcance">Alcance:</label>
        <input
            type="text"
            id="alcance"
            name="alcance"
            value={formData.alcance}
            onChange={handleInputChange}
            style={inputStyles}
            required
        />

        <label htmlFor="descripcionAmplia">Descripción Amplia:</label>
        <textarea
            id="descripcionAmplia"
            name="descripcionAmplia"
            value={formData.descripcionAmplia}
            onChange={handleInputChange}
            style={{ ...inputStyles, minHeight: '100px' }}
            required
        />

        <label htmlFor="acreditacion">Acreditación (Imagen):</label>
        <input
            type="file"
            id="acreditacion"
            name="acreditacion"
            accept="image/*"
            onChange={handleFileChange}
            style={inputStyles}
            
        />

        <label htmlFor="cmc">CMC (PDF):</label>
        <input
            type="file"
            id="cmc"
            name="cmc"
            accept="application/pdf"
            onChange={handleFileChange}
            style={inputStyles}
            
        />

        <button type="submit" style={buttonStyles} disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>

        {submitMessage && <p style={{ marginTop: '1rem', textAlign: 'center' }}>{submitMessage}</p>}
        </form>
    );
};

export default AccreditationForm;