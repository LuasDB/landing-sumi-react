import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterForm = ({ beneficios }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Por favor ingresa un email válido');
      return;
    }

    setStatus('loading');
    
    // Simular envío
    setTimeout(() => {
      setStatus('success');
      setMessage('¡Te has suscrito exitosamente!');
      setEmail('');
      
      // Reset después de 3 segundos
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 mr-2" />
        <h3 className="text-lg font-semibold">Newsletter Técnico</h3>
      </div>
      
      <p className="text-blue-100 mb-4 text-sm">
        Mantente actualizado con las últimas novedades en metrología y calibración.
      </p>

      {/* Beneficios */}
      <ul className="text-sm text-blue-100 mb-6 space-y-1">
        {beneficios.map((beneficio, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
            {beneficio}
          </li>
        ))}
      </ul>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            disabled={status === 'loading'}
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent mr-2"></div>
              Suscribiendo...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              ¡Suscrito!
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Suscribirse
            </>
          )}
        </button>

        {/* Mensaje de estado */}
        {message && (
          <div className={`flex items-center text-sm ${
            status === 'error' ? 'text-red-200' : 'text-green-200'
          }`}>
            {status === 'error' ? (
              <AlertCircle className="w-4 h-4 mr-2" />
            ) : (
              <CheckCircle className="w-4 h-4 mr-2" />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;