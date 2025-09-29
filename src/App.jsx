// Importa React para poder usar JSX
import React from 'react';
// Importa componentes de React Router para manejo de rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importa el componente de la barra de navegación
import { BarraNavegacion } from './components/BarraNavegacion';
// Importa el componente del footer
import { Footer } from './components/Footer';
// Importa las páginas de la aplicación
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Materiales from './pages/Materiales';
import MiCuenta from './pages/MiCuenta';
import Modelado3D from './pages/Modelado3D';
import Tienda from './pages/Tienda';
import Carrito from './pages/Carrito';
// Importa el archivo CSS principal
import './App.css';

// Componente principal de la aplicación
function App() {
  return (
    // BrowserRouter envuelve toda la aplicación para habilitar el enrutamiento
    <BrowserRouter>
      {/* Contenedor principal para manejar layout vertical y footer */}
      <div id="root">
        {/* Barra de navegación visible en todas las páginas */}
        <BarraNavegacion />

        {/* Contenedor principal del contenido de cada página */}
        <div className="main-content">
          {/* Wrapper centrado y con max-width */}
          <div className="main-wrapper">
            {/* Definición de rutas */}
            <Routes>
              {/* Ruta de inicio: muestra la página Home */}
              <Route path="/" element={<Home />} />

              {/* Ruta de la página del carrito */}
              <Route path="/carrito" element={<Carrito />} />

              {/* Ruta de la página de Home real */}
              <Route path="/home" element={<Home />} />

              {/* Ruta de la página de Contacto */}
              <Route path="/contacto" element={<Contacto />} />

              {/* Ruta de la página de Materiales */}
              <Route path="/materiales" element={<Materiales />} />

              {/* Ruta de la página Mi Cuenta */}
              <Route path="/micuenta" element={<MiCuenta />} />

              {/* Ruta de la página de Modelado 3D */}
              <Route path="/modelado3D" element={<Modelado3D />} />

              {/* Ruta de la página Tienda */}
              <Route path="/tienda" element={<Tienda />} />
            </Routes>
          </div>
        </div>

        {/* Footer siempre al final */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Exporta el componente App como predeterminado
export default App;
