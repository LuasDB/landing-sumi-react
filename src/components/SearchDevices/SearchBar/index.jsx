import { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { searchEquipment } from '@/db/dataBase';

const SearchBar = ({ onResults, onSearchChange }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Sugerencias populares
  const popularSearches = [
    
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    
    // Simular delay de búsqueda para mejor UX
    setTimeout(() => {
      const results = searchEquipment(searchQuery);
      onResults(results);
      onSearchChange(searchQuery);
      setIsLoading(false);
      setShowSuggestions(false);
    }, 500);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length >= 2) {
      const searchResults = searchEquipment(value);
      setSuggestions(searchResults.slice(0, 5)); // Mostrar solo 5 sugerencias
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(query.trim());
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const searchTerm = `${suggestion.marca} ${suggestion.modelo}`;
    setQuery(searchTerm);
    handleSearch(searchTerm);
  };

  const handlePopularSearchClick = (popularSearch) => {
    setQuery(popularSearch);
    handleSearch(popularSearch);
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    onResults([]);
    onSearchChange('');
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      {/* Barra de búsqueda principal */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {isLoading ? (
              <Loader2 className="h-6 w-6 text-gray-400 animate-spin" />
            ) : (
              <Search className="h-6 w-6 text-gray-400" />
            )}
          </div>
          
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(query.length >= 2 || suggestions.length === 0)}
            placeholder="Busca tu equipo por marca, modelo o tipo (ej: Fluke 87V, Multímetro...)"
            className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-lg"
          />
          
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          )}
        </div>
        
        <button
          type="submit"
          disabled={!query.trim() || isLoading}
          className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-semibold"
        >
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {/* Sugerencias y búsquedas populares */}
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto"
        >
          {/* Sugerencias de equipos encontrados */}
          {suggestions.length > 0 && (
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Equipos encontrados</h4>
              <div className="space-y-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-lg">{suggestion.tipo === 'Eléctrico' ? '⚡' : suggestion.tipo === 'Dimensional' ? '📏' : suggestion.tipo === 'Masa' ? '⚖️' : suggestion.tipo === 'Temperatura' ? '🌡️' : '🔧'}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          {suggestion.marca} {suggestion.modelo}
                        </div>
                        <div className="text-sm text-gray-500">{suggestion.categoria}</div>
                      </div>
                      <div className="text-xs text-green-600 font-medium">✓ Calibrable</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Separador */}
          {suggestions.length > 0 && <div className="border-t border-gray-100"></div>}

          {/* Búsquedas populares */}
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Búsquedas populares</h4>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((popularSearch) => (
                <button
                  key={popularSearch}
                  onClick={() => handlePopularSearchClick(popularSearch)}
                  className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {popularSearch}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;