// Datos de aeropuertos internacionales
export const aeropuertos = [
  {
    id: 1,
    codigo: 'MAD',
    nombre: 'Aeropuerto Adolfo Suárez Madrid-Barajas',
    ciudad: 'Madrid',
    pais: 'España',
    pasajeros: '61.7 millones',
    terminal: 4
  },
  {
    id: 2,
    codigo: 'BCN',
    nombre: 'Aeropuerto Josep Tarradellas Barcelona-El Prat',
    ciudad: 'Barcelona',
    pais: 'España',
    pasajeros: '52.6 millones',
    terminal: 2
  },
  {
    id: 3,
    codigo: 'JFK',
    nombre: 'John F. Kennedy International Airport',
    ciudad: 'Nueva York',
    pais: 'Estados Unidos',
    pasajeros: '62.5 millones',
    terminal: 8
  },
  {
    id: 4,
    codigo: 'LHR',
    nombre: 'London Heathrow Airport',
    ciudad: 'Londres',
    pais: 'Reino Unido',
    pasajeros: '80.9 millones',
    terminal: 5
  },
  {
    id: 5,
    codigo: 'CDG',
    nombre: 'Aéroport Paris-Charles de Gaulle',
    ciudad: 'París',
    pais: 'Francia',
    pasajeros: '76.1 millones',
    terminal: 3
  },
  {
    id: 6,
    codigo: 'NRT',
    nombre: 'Narita International Airport',
    ciudad: 'Tokio',
    pais: 'Japón',
    pasajeros: '33.4 millones',
    terminal: 3
  }
];

// Función helper para buscar aeropuerto por código
export const buscarAeropuerto = (codigo) => {
  return aeropuertos.find(aeropuerto => aeropuerto.codigo === codigo);
};

// Función helper para obtener aeropuertos por país
export const aeropuertosPorPais = (pais) => {
  return aeropuertos.filter(aeropuerto => aeropuerto.pais === pais);
};
