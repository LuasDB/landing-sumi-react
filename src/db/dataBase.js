export const equipmentDatabase = [
  // Equipos Eléctricos
  {
    id: 1,
    marca: "Fluke",
    modelo: "87V",
    categoria: "Multímetro",
    tipo: "Eléctrico",
    imagen: "/images/fluke-87v.jpg",
    calibrable: true,
    tiempoEstimado: "3-5 días",
    precioAproximado: "$2,500 - $3,500",
    magnitudes: ["Voltaje DC/AC", "Corriente DC/AC", "Resistencia", "Frecuencia"]
  },
  {
    id: 2,
    marca: "Fluke",
    modelo: "117",
    categoria: "Multímetro",
    tipo: "Eléctrico",
    imagen: "/images/fluke-117.jpg",
    calibrable: true,
    tiempoEstimado: "3-5 días",
    precioAproximado: "$2,000 - $2,800",
    magnitudes: ["Voltaje DC/AC", "Corriente DC/AC", "Resistencia"]
  },
  {
    id: 3,
    marca: "Keysight",
    modelo: "34461A",
    categoria: "Multímetro Digital",
    tipo: "Eléctrico",
    imagen: "/images/keysight-34461a.jpg",
    calibrable: true,
    tiempoEstimado: "5-7 días",
    precioAproximado: "$3,500 - $4,500",
    magnitudes: ["Voltaje DC/AC", "Corriente DC/AC", "Resistencia", "Frecuencia", "Temperatura"]
  },
  // Equipos Dimensionales
  {
    id: 4,
    marca: "Mitutoyo",
    modelo: "500-196-30",
    categoria: "Calibrador Vernier",
    tipo: "Dimensional",
    imagen: "/images/mitutoyo-vernier.jpg",
    calibrable: true,
    tiempoEstimado: "2-3 días",
    precioAproximado: "$1,500 - $2,000",
    magnitudes: ["Longitud", "Diámetro interno", "Diámetro externo", "Profundidad"]
  },
  {
    id: 5,
    marca: "Starrett",
    modelo: "798A-6/150",
    categoria: "Calibrador Digital",
    tipo: "Dimensional",
    imagen: "/images/starrett-798a.jpg",
    calibrable: true,
    tiempoEstimado: "2-3 días",
    precioAproximado: "$1,200 - $1,800",
    magnitudes: ["Longitud", "Diámetro interno", "Diámetro externo"]
  },
  // Equipos de Masa
  {
    id: 6,
    marca: "Ohaus",
    modelo: "Explorer EX124",
    categoria: "Balanza Analítica",
    tipo: "Masa",
    imagen: "/images/ohaus-ex124.jpg",
    calibrable: true,
    tiempoEstimado: "1-2 días",
    precioAproximado: "$1,800 - $2,500",
    magnitudes: ["Masa"]
  },
  {
    id: 7,
    marca: "Mettler Toledo",
    modelo: "XS205",
    categoria: "Balanza Analítica",
    tipo: "Masa",
    imagen: "/images/mettler-xs205.jpg",
    calibrable: true,
    tiempoEstimado: "1-2 días",
    precioAproximado: "$2,200 - $3,000",
    magnitudes: ["Masa"]
  },
  // Equipos de Temperatura
  {
    id: 8,
    marca: "Fluke",
    modelo: "1524",
    categoria: "Termómetro de Referencia",
    tipo: "Temperatura",
    imagen: "/images/fluke-1524.jpg",
    calibrable: true,
    tiempoEstimado: "3-4 días",
    precioAproximado: "$3,000 - $4,000",
    magnitudes: ["Temperatura"]
  },
  {
    id: 9,
    marca: "Omega",
    modelo: "HH506RA",
    categoria: "Termómetro Digital",
    tipo: "Temperatura",
    imagen: "/images/omega-hh506ra.jpg",
    calibrable: false,
    tiempoEstimado: "2-3 días",
    precioAproximado: "$1,500 - $2,200",
    magnitudes: ["Temperatura"]
  },
  // Equipos de Presión
  {
    id: 10,
    marca: "Fluke",
    modelo: "719Pro",
    categoria: "Calibrador de Presión",
    tipo: "Presión",
    imagen: "/images/fluke-719pro.jpg",
    calibrable: true,
    tiempoEstimado: "4-6 días",
    precioAproximado: "$4,000 - $5,500",
    magnitudes: ["Presión"]
  }
];

export const marcasPopulares = [
  // { nombre: "Fluke", logo: "/logos/fluke.png", equipos: 4 },
  // { nombre: "Keysight", logo: "/logos/keysight.png", equipos: 1 },
  // { nombre: "Mitutoyo", logo: "/logos/mitutoyo.png", equipos: 1 },
  // { nombre: "Ohaus", logo: "/logos/ohaus.png", equipos: 1 },
  // { nombre: "Mettler Toledo", logo: "/logos/mettler.png", equipos: 1 },
  // { nombre: "Starrett", logo: "/logos/starrett.png", equipos: 1 },
  // { nombre: "Omega", logo: "/logos/omega.png", equipos: 1 }
];

export const categorias = [
  { nombre: "Masa", icono: "⚖️", equipos: 2, color: "bg-green-100 text-green-800" },
  { nombre: "Temperatura", icono: "🌡️", equipos: 2, color: "bg-red-100 text-red-800" },
  { nombre: "Presión", icono: "🔧", equipos: 1, color: "bg-purple-100 text-purple-800" }
];

// Función para buscar equipos
export const searchEquipment = (query) => {
  if (!query || query.length < 2) return [];
  
  const searchTerm = query.toLowerCase();
  
  return equipmentDatabase.filter(equipo => 
    equipo.marca.toLowerCase().includes(searchTerm) ||
    equipo.modelo.toLowerCase().includes(searchTerm) ||
    equipo.categoria.toLowerCase().includes(searchTerm) ||
    equipo.tipo.toLowerCase().includes(searchTerm)
  );
};

// Función para obtener equipos por categoría
export const getEquipmentByCategory = (categoria) => {
  return equipmentDatabase.filter(equipo => equipo.tipo === categoria);
};