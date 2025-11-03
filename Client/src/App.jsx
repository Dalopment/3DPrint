import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/contacto/Contacto';
import Materiales from './pages/materiales/Materiales';
import MiCuenta from './pages/MiCuenta';
import Modelado3D from './pages/Modelado3D';
import Tienda from './pages/Tienda';
import Carrito from './pages/Carrito';
import { BarraNavegacion } from './components/navbar/BarraNavegacion';
import { Footer } from './components/footer/Footer';
import EnviosYDevoluciones from './pages/EnviosYDevoluciones';
import '../src/styles/App.css';

// Componente principal de la aplicación
function App() {
  return (
    //BrowserRouter envuelve toda la aplicación para habilitar el enrutamiento
    <BrowserRouter>
    
    {/* Header: Barra de navegación */}
      <header className='header-content'>
        <BarraNavegacion/>
      </header>

    {/* Main: Rutas de la app */}
      <main className='main-content'>
        {/* Rutas de Navegación de la página */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/materiales" element={<Materiales />} />
          <Route path="/micuenta" element={<MiCuenta />} />
          <Route path="/modelado3D" element={<Modelado3D />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path='/enviosydevoluciones' element={<EnviosYDevoluciones />} />
        </Routes>
      </main>

    {/* Footer */}
      <footer className='footer-content'>
        <Footer/>
      </footer>

    </BrowserRouter>
  );
}

// Exporta el componente App como predeterminado
export default App;
