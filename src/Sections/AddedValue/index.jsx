import SliderCarousel from "@/components/SliderCarousel";
import SlideItem from "@/components/SlideItemImage";
import SlideItemIcon from "@/components/SlideItemIcon";

const sampleItems = [
  { title: 'Card 1', description: 'Descripción 1', image: 'https://picsum.photos/seed/1/600/400' },
  { title: 'Card 2', description: 'Descripción 2', image: 'https://picsum.photos/seed/2/600/400' },
  { title: 'Card 3', description: 'Descripción 3', image: 'https://picsum.photos/seed/3/600/400' },
  { title: 'Card 4', description: 'Descripción 4', image: 'https://picsum.photos/seed/4/600/400' },
  { title: 'Card 5', description: 'Descripción 5', image: 'https://picsum.photos/seed/5/600/400' },
]

const sampleItemsIcons = [
    { 
        title: 'Calibración de equipos', 
        description: 'Servicio especializado de calibración de equipos de laboratorio y medición, garantizando trazabilidad metrológica, cumplimiento con la ISO/IEC 17025 y resultados precisos en cada verificación.', 
        icon: 'Thermometer' 
    },
    { 
        title: 'Acreditación ante la ema', 
        description: 'Nuestro laboratorio está acreditado ante la Entidad Mexicana de Acreditación (ema), lo que asegura la calidad, confiabilidad y validez de todos nuestros procesos de medición.', 
        icon: 'Medal' 
    },
    { 
        title: 'Acreditación Perry Johnson', 
        description: 'Contamos con acreditación internacional por Perry Johnson, lo que respalda nuestro compromiso con los más altos estándares de calidad a nivel global.', 
        icon: 'Award' 
    },
    { 
        title: 'Mantenimientos', 
        description: 'Mantenimiento preventivo y correctivo de equipos de medición y laboratorio, asegurando un funcionamiento óptimo, reducción de fallos y mayor vida útil.', 
        icon: 'Wrench' 
    },
    { 
        title: 'Capacitación', 
        description: 'Programas de capacitación técnica y certificada en metrología, manejo de equipos, análisis de resultados y cumplimiento normativo, diseñados para potenciar el rendimiento de su personal.', 
        icon: 'BookOpen' 
    },
    { 
        title: 'Asesoría Profesional', 
        description: 'Consultoría experta en metrología, acreditaciones, calidad y normatividad, respaldada por más de 20 años de experiencia en el sector.', 
        icon: 'Handshake' 
    },
    { 
        title: 'Personal Capacitado', 
        description: 'Contamos con un equipo altamente calificado y certificado, preparado para ofrecer soluciones precisas y confiables en cada proyecto que desarrollamos.', 
        icon: 'UserCheck' 
    },
]




export default function AddedValue(){

    return(
        <section  className="h-screen flex items-center" id="valor-agregado">
            <div className="container mx-auto  py-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-6">
                    Nuestro Valor Agregado
                </h2>
                <p className="text-lg text-gray-600 mx-auto mb-6">En <span className='font-bold'>SUMI</span>, nos destacamos por ofrecer un valor agregado a nuestros clientes a través de:</p>
                <SliderCarousel items={sampleItemsIcons} autoPlay={true} interval={3500} SlideItem={SlideItemIcon} />
            </div>
        </section>
    )
}