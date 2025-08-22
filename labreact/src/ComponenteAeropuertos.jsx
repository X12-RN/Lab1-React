import React, { useState } from 'react';
import { aeropuertos, buscarAeropuerto, aeropuertosPorPais } from './airports.js';

const ComponenteAeropuertos = () => {
  const [codigoBusqueda, setCodigoBusqueda] = useState('');
  const [paisSeleccionado, setPaisSeleccionado] = useState('');
  const [aeropuertoEncontrado, setAeropuertoEncontrado] = useState(null);

  // Obtener países únicos
  const paisesUnicos = [...new Set(aeropuertos.map(a => a.pais))];

  const handleBusqueda = () => {
    const resultado = buscarAeropuerto(codigoBusqueda.toUpperCase());
    setAeropuertoEncontrado(resultado);
  };

  const aeropuertosFiltrados = paisSeleccionado 
    ? aeropuertosPorPais(paisSeleccionado) 
    : aeropuertos;

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#ffffff', 
      borderRadius: '8px',
      margin: '10px 0',
      border: '2px solid #007bff'
    }}>
      <h2 style={{ color: '#007bff' }}>Directorio de Aeropuertos Internacionales</h2>
      
      {/* Sección de búsqueda */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        <h3>Buscar Aeropuerto por Código</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Ej: MAD, BCN, JFK..."
            value={codigoBusqueda}
            onChange={(e) => setCodigoBusqueda(e.target.value)}
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              minWidth: '150px'
            }}
          />
          <button 
            onClick={handleBusqueda}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Buscar
          </button>
        </div>
        
        {aeropuertoEncontrado && (
          <div style={{ 
            marginTop: '10px', 
            padding: '10px', 
            backgroundColor: '#d4edda',
            borderRadius: '4px'
          }}>
            <strong>Encontrado:</strong> {aeropuertoEncontrado.nombre} ({aeropuertoEncontrado.codigo})
            <br />
            <strong>Ciudad:</strong> {aeropuertoEncontrado.ciudad}, {aeropuertoEncontrado.pais}
          </div>
        )}
        
        {codigoBusqueda && !aeropuertoEncontrado && (
          <div style={{ 
            marginTop: '10px', 
            padding: '10px', 
            backgroundColor: '#f8d7da',
            borderRadius: '4px'
          }}>
            No se encontró ningún aeropuerto con el código "{codigoBusqueda}"
          </div>
        )}
      </div>

      {/* Filtro por país */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Filtrar por País</h3>
        <select 
          value={paisSeleccionado}
          onChange={(e) => setPaisSeleccionado(e.target.value)}
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            minWidth: '200px'
          }}
        >
          <option value="">Todos los países</option>
          {paisesUnicos.map(pais => (
            <option key={pais} value={pais}>{pais}</option>
          ))}
        </select>
      </div>

      {/* Lista de aeropuertos */}
      <div>
        <h3>Lista de Aeropuertos {paisSeleccionado && `en ${paisSeleccionado}`}</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '15px'
        }}>
          {aeropuertosFiltrados.map(aeropuerto => (
            <div key={aeropuerto.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#f9f9f9'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <h4 style={{ margin: '0', color: '#007bff' }}>{aeropuerto.codigo}</h4>
                <span style={{ 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  padding: '2px 8px', 
                  borderRadius: '12px',
                  fontSize: '12px'
                }}>
                  {aeropuerto.terminal} terminal{aeropuerto.terminal > 1 ? 'es' : ''}
                </span>
              </div>
              
              <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{aeropuerto.nombre}</p>
              <p style={{ margin: '5px 0' }}>
                📍 {aeropuerto.ciudad}, {aeropuerto.pais}
              </p>
              <p style={{ margin: '5px 0' }}>
                ✈️ {aeropuerto.pasajeros} pasajeros/año
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponenteAeropuertos;
