import React from 'react'
import HolaMundo from './HolaMundo.jsx'
import ComponenteConVariables from './ComponenteConVariables.jsx'
import ComponenteAeropuertos from './ComponenteAeropuertos.jsx'
import './App.css'

function App() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        borderBottom: '2px solid #007bff',
        paddingBottom: '20px'
      }}>
        <h1 style={{ color: '#007bff', fontSize: '2.5rem' }}>
          Lab 1 - Componentes de React
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Tres componentes de ejemplo: Hola Mundo, Variables e Importación de datos
        </p>
      </header>

      <main>
        {/* Primer componente: Hola Mundo */}
        <section>
          <HolaMundo />
        </section>

        {/* Segundo componente: Con variables */}
        <section>
          <ComponenteConVariables />
        </section>

        {/* Tercer componente: Con importación */}
        <section>
          <ComponenteAeropuertos />
        </section>
      </main>

      <footer style={{ 
        textAlign: 'center', 
        marginTop: '40px',
        padding: '20px',
        borderTop: '1px solid #ddd',
        color: '#666'
      }}>
        <p>Laboratorio de React - Componentes básicos</p>
      </footer>
    </div>
  );
}

export default App;
