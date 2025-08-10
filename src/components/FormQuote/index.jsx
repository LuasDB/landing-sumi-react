import { useEffect, useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2";


export default function FormQuote({isDeviceFound,device,onClose}){
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL + '/api/v1/sumi/quote';

    const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    instrument: "",
    details: ""
  });

  useEffect(()=>{
    let message=''
    if(isDeviceFound){
      message=`Solicito una cotización para la calibración del equipo ${device.marca} ${device.modelo},...`
    }else{
      message=`Solicito información para saber si el laboratorio puede calibrar el siguiente equipo:${device} ...`

    }
    setQuoteForm(prev=>({...prev,details:message}))
  },[])

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;
  setIsSubmitting(true);
  try {
    const { data } = await axios.post(apiUrl, quoteForm);
    if (data.success) {
      Swal.fire('Solicitud enviada', 'Te enviaremos un correo. Nos pondremos en contacto contigo a la brevedad.', 'success')
      onClose()
    }
  } catch (error) {
    alert(error.message);
  } finally {
    setIsSubmitting(false);
  }
};
    return(
        <form  className="space-y-6 bg-white dark:bg-gray-700 p-8 rounded-xl ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  👤 Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={quoteForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                 📧 Correo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={quoteForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  📱 Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={quoteForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="company">
                  🏭 Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={quoteForm.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="details">
                📝 Agrega detalles adicionales o dudas (Puntos de calibración, etc)

              </label>
              <textarea
                id="details"
                name="details"
                value={quoteForm.details}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="cursor-pointer px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-60"
                >
                  {isSubmitting ? "Estamos enviando tu información..." : "Enviar Información"}
                </button>
            </div>
          </form>
    )
     
}