import { useState } from "react";
import Modal from "../Modal";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import { Shield, Calendar, CheckCircle } from 'lucide-react';
import { Info, Thermometer, Weight, Download,GaugeCircle} from 'lucide-react';
import PDFImageRenderer from "../PDFImageRender";

function InfoMagnitud({ selectedMagnitude }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl pb-8 w-full max-h-[95vh] overflow-y-auto">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold">{selectedMagnitude?.title}</h3>
      </div>

      {/* PDF con margen inferior */}
      <div className="flex justify-center">
        <img
        src={`${import.meta.env.VITE_API_URL}/${selectedMagnitude?.fileAcreditation}`}
        alt={selectedMagnitude.nombre}
        className="w-full  object-cover rounded-lg mb-4 cursor-pointer"
        
      />      

      </div>

      {/* Descripción */}
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {selectedMagnitude.acreditacion.description}
      </p>
       


      {/* Alcance */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Alcance de la acreditación</h4>
        <p className="text-gray-600 dark:text-gray-300">
          {selectedMagnitude.acreditacion.descripcion}
        </p>
      </div>
      <div className="flex items-right justify-end mt-4 mb-8">
        <a
          href={`${import.meta.env.VITE_API_URL}/${selectedMagnitude?.acreditacion?.fileCmc}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
        >
          <Download className="mr-1" /> Descargar Capacidad de medición
        </a>
      </div>
    </div>
  );
}


const AccreditationCard = ({ acreditacion }) => {

  const [selectedMagnitude, setSelectedMagnitude] = useState(null);

  const handleImageError = (e) => {
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%233b82f6'/%3E%3Ctext x='40' y='45' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3E${acreditacion.nombre.charAt(0)}%3C/text%3E%3C/svg%3E`;
  };

  return (
   <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group max-w-xs w-full mx-auto">
    {/* Título arriba */}
    <h3 className="text-lg font-bold text-green-900 group-hover:text-blue-600 transition-colors mb-3 text-center break-words">
      {acreditacion.nombre}
    </h3>

    {/* PDF Preview */}
    <div className="flex justify-center">
      <img
        src={`${import.meta.env.VITE_API_URL}/${acreditacion.fileAcreditation}`}
        alt={acreditacion.nombre}
        className="w-full  object-cover rounded-lg mb-4 cursor-pointer"
        onError={handleImageError}
        onClick={() => {
          setSelectedMagnitude(acreditacion);
        }}
      />
    </div>

    {/* Número de acreditación */}
    <p className="text-sm text-gray-900 font-bold text-center mb-2 ">Acreditación No. {acreditacion.numero}</p>

    {/* Descripción */}
    <p className="text-gray-600 mb-4 text-md font-semibold leading-relaxed text-center ">
      {acreditacion.descripcion}
    </p>

   
    {/* Footer */}
    <div className="flex items-center justify-between">
      <button
        onClick={() => {
          setSelectedMagnitude(acreditacion);
        }}
        className="cursor-pointer text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
      >
        <Info className="mr-1" /> Detalles
      </button>
      
    </div>

    
      <Dialog open={!!selectedMagnitude} onOpenChange={() => setSelectedMagnitude(null)}>
        <DialogContent className="max-w-lg max-h-screen overflow-y-auto">
          {selectedMagnitude && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedMagnitude.nombre} - Acreditación {selectedMagnitude.numero}</DialogTitle>
                <DialogDescription>{selectedMagnitude.descripcion}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-gray-700 text-sm leading-relaxed flex flex-col items-center">
                <div className="flex justify-center">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${acreditacion.fileAcreditation}`}
                    alt={acreditacion.nombre}
                    className="w-full  object-cover rounded-lg mb-4 cursor-pointer"
                    onError={handleImageError}
                    onClick={() => {
                      setSelectedMagnitude(acreditacion);
                    }}
                  />
                </div>
                {selectedMagnitude.descripcionAmplia}
              </div>
                    <div className="flex items-right justify-end mt-4 mb-8">
        <a
          href={`${import.meta.env.VITE_API_URL}/${selectedMagnitude?.fileCmc}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
        >
          <Download className="mr-1" /> Descargar Capacidad de medición
        </a>
      </div>
              <div className="mt-4 flex justify-end">
                <button variant="secondary" onClick={() => setSelectedMagnitude(null)}>Cerrar</button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
  </div>
  );
};

export default AccreditationCard;