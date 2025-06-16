import { useState } from "react";
import { Info, Thermometer, Weight, Download,GaugeCircle} from 'lucide-react';
import Modal from "../Modal";
import PDFImageRenderer from "../PDFImageRender";


// ✅ Componente debe iniciar en mayúscula
function InfoMagnitud({ selectedMagnitude, onClose }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold">{selectedMagnitude?.title}</h3>
       
      </div>
      <div className="mb-4">
        <PDFImageRenderer pdfUrl={'@/assets/Acreditación.pdf'}/>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedMagnitude.description}</p>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Alcance de la acreditación</h4>
        <p className="text-gray-600 dark:text-gray-300">{selectedMagnitude.scope}</p>
      </div>
    </div>
  );
}

export default function AcreditedMagnitudes() {
  const [selectedMagnitude, setSelectedMagnitude] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const magnitudes = [
    {
      id: 1,
      title: "Temperatura",
      icon: <Thermometer className="text-4xl text-blue-500" />,
      description: "Alta presición en servicio de calibración de temperatura...",
      accreditationDoc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d...",
      scope: "Rango: -80°C a 1200°C"
    },
    {
      id: 2,
      title: "Masa",
      icon: <Weight className="text-4xl text-blue-500" />,
      description: "Calibración de masa de precisión...",
      accreditationDoc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d...",
      scope: "Rango: 1mg a 50kg"
    },
    {
      id: 3,
      title: "Presión",
      icon: <GaugeCircle className="text-4xl text-blue-500" />,
      description: "Calibración de masa de precisión...",
      accreditationDoc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d...",
      scope: "Rango: 1PSI a 100PSI"
    }
  ];

  return (
    <>
      <section className="pt-[80px] py-12 bg-gradient-to-b from-green-50 via-white to-blue-50" id="acreditaciones">
        <div className="container px-[10%]">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-8">
            Magnitudes acreditadas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {magnitudes.map((magnitude) => (
              <div
                key={magnitude.id}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 cursor-pointer"
              >
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900">
                  {magnitude.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{magnitude.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{magnitude.description}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedMagnitude(magnitude);
                      setShowModal(true); // ✅ Aquí se abre el modal
                    }}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    <Info className="mr-1" /> Detalles
                  </button>
                  <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                    <Download className="mr-1" /> Acreditación
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)} // ✅ correcto
          modalContent={<InfoMagnitud selectedMagnitude={selectedMagnitude} onClose={() => setShowModal(false)} />}
        />
      )}
    </>
  );
}
