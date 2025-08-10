import { useState,useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import PDFImageRenderer from "@/components/PDFImageRender";

const magnitudesAcreditadas = [
  { 
    nombre: 'Temperatura', 
    numero: 'ACR-001', 
    descripcion: 'Calibración precisa de instrumentos de temperatura con trazabilidad garantizada.', 
    alcance: '-80 °C a 1200 °C', 
    descripcionAmplia: 'Realizamos calibración de termómetros digitales, de líquido en vidrio, bimetálicos, sondas de resistencia (RTD), termopares y sistemas de medición de temperatura para procesos industriales y de laboratorio. Cumplimos con ISO/IEC 17025.' 
  },
  { 
    nombre: 'Masa', 
    numero: 'ACR-002', 
    descripcion: 'Calibración de balanzas y pesas patrón con alta exactitud.', 
    alcance: '1 mg a 50 kg', 
    descripcionAmplia: 'Calibramos pesas patrón clase E2 a M3, balanzas analíticas, semi-analíticas e industriales. Garantizamos exactitud y confiabilidad en procesos de control de calidad.' 
  },
  { 
    nombre: 'Presión', 
    numero: 'ACR-003', 
    descripcion: 'Calibración de manómetros y sensores de presión.', 
    alcance: '0 kPa a 20 000 kPa (200 bar)', 
    descripcionAmplia: 'Calibramos manómetros analógicos y digitales, transductores, barómetros y calibradores de presión. Aplicaciones en procesos industriales y laboratorios.' 
  },
  { 
    nombre: 'Volumen', 
    numero: 'ACR-004', 
    descripcion: 'Calibración de material volumétrico y medidores de flujo.', 
    alcance: '0.1 mL a 20 L', 
    descripcionAmplia: 'Calibramos probetas, pipetas, buretas, matraces aforados y medidores de flujo para laboratorios, industria alimentaria, química y farmacéutica.' 
  },
];

import axios from 'axios'

const useGetAccreditations =()=>{

  const [acreditaciones,setAcreditaciones] = useState([])

  const getAcreditaciones = async ()=>{
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/sumi`)
      if(data.success){
        console.log(data)
        setAcreditaciones(data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

   useEffect(() => {
    getAcreditaciones();
  }, []);


  return {acreditaciones}
}

export default function AcreditacionesSection() {
  const [selected, setSelected] = useState(null);
    const { acreditaciones } = useGetAccreditations()


  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Acreditaciones por Magnitud</h2>
      
      {/* Grid de tarjetas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {acreditaciones.map((item, idx) => (
          <Card 
            key={idx} 
            className="hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <CardHeader>
              <CardTitle className="text-xl">{item.nombre}</CardTitle>
              <CardDescription>{item.descripcion}</CardDescription>
              <p className="mt-2 text-sm font-medium text-gray-600">Alcance: {item.alcance}</p>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Modal de detalles */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg max-h-screen overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.nombre} - {selected.numero}</DialogTitle>
                <DialogDescription>{selected.descripcion}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-gray-700 text-sm leading-relaxed flex flex-col items-center">
                <PDFImageRenderer  pdfUrl={`${import.meta.env.VITE_API_URL}/${selected.fileAcreditation}`}
                  width={200}/>
                {selected.descripcionAmplia}
              </div>
              <div className="mt-4 flex justify-end">
                <button variant="secondary" onClick={() => setSelected(null)}>Cerrar</button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
