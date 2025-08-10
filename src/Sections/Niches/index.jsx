export default function Niches() {
    return (
       <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Áreas de especialización
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Aquí puedes mapear tus nichos */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Calibración de Instrumentos</h4>
              <p className="text-gray-600">Calibramos una amplia gama de instrumentos para asegurar su precisión y confiabilidad.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Ensayos de Materiales</h4>
              <p className="text-gray-600">Realizamos ensayos destructivos y no destructivos para evaluar las propiedades de los materiales.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Consultoría Técnica</h4>
              <p className="text-gray-600">Ofrecemos asesoramiento experto en metrología y control de calidad para optimizar tus procesos.</p>
            </div>
            {/* Agrega más nichos según sea necesario */}
          </div>
        </div>
    );
}   