import { useState } from 'react';
import SearchBar from './SearchBar';
import EquipmentCard from './EquipmentCard';
import NoResults from './NoResults';
import { marcasPopulares, categorias } from '@/db/dataBase';
import { Shield, Award, Users, Clock } from 'lucide-react';
import Modal from '../Modal';
import FormQuote from '../FormQuote';

const SearchSection = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [modalOpen,setModalOpen] = useState(false)
  const [selectedDevice,setSelectedDevice] = useState(null)
  const [selectedModalContent,setSelectedModalContent] = useState(null)


  const handleSearchResults = (results) => {
    setSearchResults(results);
    setHasSearched(true);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (!query) {
      setHasSearched(false);
    }
  };

  const handleRequestQuote = (equipment) => {
   
   
    setSelectedDevice(equipment)
    setSelectedModalContent('deviceSelected')
    setModalOpen(true)
    
  };

  const handleRequestInfo = (query) => {
    setSelectedDevice(query)
    setSelectedModalContent('deviceNotFound')
    setModalOpen(true)
  };

  const handleModalOnClose = ()=>{
    setModalOpen(false)
    setSelectedDevice(null)
    setSelectedModalContent(null)

  }

  const modalContent={
    deviceSelected:<FormQuote isDeviceFound={true} device={selectedDevice}/>,
    deviceNotFound:<FormQuote isDeviceFound={false} device={selectedDevice} />
  }

  return (
    <section id="cotizar" className="py-16 lg:py-24 bg-gradient-to-b from-green-100 via-white to-blue-100">
      <Modal open={modalOpen} onClose={handleModalOnClose} modalContent={modalContent[selectedModalContent]} />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Necesitas calibrar tu equipo?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre en 30 segundos si calibramos tu equipo. Busca por marca, modelo o tipo de instrumento.
          </p>
          
          {/* Elementos de confianza */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-5 h-5 mr-2 text-blue-600" />
              <span><strong>Acreditado</strong> ISO/IEC 17025:2018</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Award className="w-5 h-5 mr-2 text-green-600" />
              <span><strong>15 años</strong> de experiencia</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-5 h-5 mr-2 text-purple-600" />
              <span><strong>500+</strong> equipos calibrados</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-5 h-5 mr-2 text-orange-600" />
              <span><strong>Respuesta</strong> en 2 horas</span>
            </div>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <div className="mb-12">
          <SearchBar 
            onResults={handleSearchResults}
            onSearchChange={handleSearchChange}
          />
        </div>

        {/* Resultados de búsqueda */}
        {hasSearched && (
          <div className="mb-12">
            {searchResults.length > 0 ? (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Encontramos {searchResults.length} equipo{searchResults.length !== 1 ? 's' : ''} para "{searchQuery}"
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((equipment) => (
                    <EquipmentCard
                      key={equipment.id}
                      equipment={equipment}
                      onRequestQuote={()=>handleRequestQuote(equipment)}


                    />
                  ))}
                </div>
              </div>
            ) : (
              <NoResults 
                searchQuery={searchQuery}
                onRequestInfo={handleRequestInfo}
              />
            )}
          </div>
        )}

        {/* Marcas populares */}
        {!hasSearched && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Marcas que calibramos frecuentemente
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {marcasPopulares.map((marca) => (
                <div
                  key={marca.nombre}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <img
                        src={marca.logo}
                        alt={marca.nombre}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%236b7280'/%3E%3Ctext x='16' y='20' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E${marca.nombre.charAt(0)}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                      {marca.nombre}
                    </h4>
                    <p className="text-xs text-gray-500">{marca.equipos} equipos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categorías */}
        {!hasSearched && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Busca por categoría
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categorias.map((categoria) => (
                <button
                  key={categoria.nombre}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 group hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3">{categoria.icono}</div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {categoria.nombre}
                    </h4>
                    <p className="text-sm text-gray-500">{categoria.equipos} equipos</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;