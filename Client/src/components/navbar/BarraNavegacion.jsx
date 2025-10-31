// Importa React para poder usar JSX
import React from 'react';
// Importa NavLink de react-router-dom para navegación entre rutas
import { NavLink } from 'react-router-dom';
// Importa el archivo CSS específico del navbar
import './BarraNavegacion.css';
import { LinkNavegacion } from './LinkNavegacion';
import { BotonMiCuenta } from '../buttons/BotonMiCuenta';
import { BotonCarrito } from '../buttons/BotonCarrito';



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
        <LinkNavegacion ruta="/modelado3D" texto="MODELADO 3D"/>
        <LinkNavegacion ruta="/tienda" texto="TIENDA"/>
        <LinkNavegacion ruta="/contacto" texto="CONTACTO"/>
        <BotonMiCuenta ruta="/micuenta" texto="MI CUENTA"/>
        <BotonCarrito ruta="/carrito" texto="CARRITO"/>
        </div>

        </header>

  );
};
