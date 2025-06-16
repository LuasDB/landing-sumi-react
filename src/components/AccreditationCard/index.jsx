import { useState } from "react";
import Modal from "../Modal";

import { Shield, Calendar, CheckCircle } from 'lucide-react';
import { Info, Thermometer, Weight, Download,GaugeCircle} from 'lucide-react';
import PDFImageRenderer from "../PDFImageRender";

function InfoMagnitud({ selectedMagnitude, onClose }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6  w-full max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold">{selectedMagnitude?.title}</h3>
      </div>

      {/* PDF con margen inferior */}
      <div className="mb-4">
        <PDFImageRenderer pdfUrl="https://catalogo.consultaema.mx:7070/acreditados/calibracion/Acreditados/T-125.pdf" />
      </div>

      {/* Descripción */}
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {selectedMagnitude.description}
      </p>

      {/* Alcance */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Alcance de la acreditación</h4>
        <p className="text-gray-600 dark:text-gray-300">
          {selectedMagnitude.scope}
        </p>
      </div>
    </div>
  );
}


const AccreditationCard = ({ acreditacion }) => {

   const [selectedMagnitude, setSelectedMagnitude] = useState(null);
    const [showModal, setShowModal] = useState(false);

  const handleImageError = (e) => {
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%233b82f6'/%3E%3Ctext x='40' y='45' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3E${acreditacion.nombre.charAt(0)}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
          <img
            src={acreditacion.logo}
            alt={acreditacion.nombre}
            className="w-12 h-12 object-contain"
            onError={handleImageError}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {acreditacion.nombre}
          </h3>
          <p className="text-sm text-gray-600">No. {acreditacion.numero}</p>
        </div>
        <div className="text-green-500">
          <CheckCircle className="w-6 h-6" />
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
        {acreditacion.descripcion}
      </p>

      {/* Alcance */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-1">Alcance:</h4>
        <p className="text-sm text-gray-600">{acreditacion.alcance}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setSelectedMagnitude(acreditacion);
            setShowModal(true); // ✅ Aquí se abre el modal
          }}
          className="cursor-pointer text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
        >
          <Info className="mr-1" /> Detalles
        </button>
        <button className="cursor-pointer flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
          <Download className="mr-1" /> Acreditación
        </button>
      </div>

       {showModal && (
              <Modal
                open={showModal}
                onClose={() => setShowModal(false)} // ✅ correcto
                modalContent={<InfoMagnitud selectedMagnitude={selectedMagnitude} onClose={() => setShowModal(false)} />}
              />
            )}
      
     
    </div>
  );
};

export default AccreditationCard;