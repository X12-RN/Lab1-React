import React from 'react';

const ComponenteConVariables = () => {
  // Variables locales
  const nombre = 'Juan Pérez';
  const edad = 25;
  const profesion = 'Desarrollador Frontend';
  const fechaActual = new Date().toLocaleDateString('es-ES');
  const coloresFavoritos = ['Azul', 'Verde', 'Rojo'];
  
  // Variable calculada
  const añoNacimiento = new Date().getFullYear() - edad;

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f5f5f5', 
      borderRadius: '8px',
      margin: '10px 0',
      border: '1px solid #ddd'
    }}>
      <h2>Componente con Variables</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <h3>Información Personal:</h3>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Edad:</strong> {edad} años</p>
        <p><strong>Profesión:</strong> {profesion}</p>
        <p><strong>Año de nacimiento:</strong> {añoNacimiento}</p>
        <p><strong>Fecha actual:</strong> {fechaActual}</p>
      </div>

      <div>
        <h3>Colores favoritos:</h3>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {coloresFavoritos.map((color, index) => (
            <li key={index} style={{ 
              display: 'inline-block', 
              margin: '5px', 
              padding: '5px 10px', 
              backgroundColor: color.toLowerCase(),
              color: 'white',
              borderRadius: '15px',
              fontSize: '14px'
            }}>
              {color}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComponenteConVariables;
