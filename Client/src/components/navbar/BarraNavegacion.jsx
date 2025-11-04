import { NavLink } from 'react-router-dom';
import { LinkNavegacion } from './LinkNavegacion';
import { BotonMiCuenta } from '../buttons/BotonMiCuenta';
import { BotonCarrito } from '../buttons/BotonCarrito';
import '../../styles/components/navbar-style/BarraNavegacion.css';



// Componente BarraNavegacion
export const BarraNavegacion = () => {
  return (
    <header className='header-container'>
        
        <NavLink to="/">
            <img className="header-img" src="/images/logo3dprint.jpg" alt="Logo" />
        </NavLink>

        {/* Contenedor de los componentes LinkNavegacion */}
        <div className='header-nav'>3
        <LinkNavegacion ruta="/materiales" texto="MATERIALES"/>
        <LinkNavegacion ruta="/tienda" texto="TIENDA"/>
        <LinkNavegacion ruta="/contacto" texto="CONTACTO"/>
        <BotonMiCuenta ruta="/micuenta" texto="MI CUENTA"/>
        <BotonCarrito ruta="/carrito" texto="CARRITO"/>
        </div>

        </header>

  );
};
