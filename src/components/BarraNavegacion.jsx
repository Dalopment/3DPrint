// Importa React para poder usar JSX
import React from 'react';
// Importa NavLink de react-router-dom para navegación entre rutas
import { NavLink } from 'react-router-dom';
// Importa el archivo CSS específico del navbar
import './BarraNavegacion.css';
// Importa el icono de carrito de react-icons
import { BsCartFill } from 'react-icons/bs';
//Importa el componente BotonPersonalizado
import { BotonPersonalizado } from "./BotonPersonalizado";



// Componente BarraNavegacion
export const BarraNavegacion = () => {
  return (
    // Elemento nav con clases de Bootstrap y custom fixed-top
    <nav className="navbar fixed-top">
        {/* Contenedor principal dentro del navbar */}
        <div className="container-fluid">
            {/* Link al home con el logo */}
            <NavLink to="/">
                <img className="imagen" src="/images/logo3dprint.jpg" alt="Logo" />
            </NavLink>
            
            {/* Contenedor de los links de navegación */}
            <div className="nav-links">
                {/* Link a Materiales */}
                <NavLink className="nav-link" to="/materiales">MATERIALES</NavLink>
                
                {/* Link a Modelado 3D */}
                <NavLink className="nav-link" to="/modelado3D">MODELADO 3D</NavLink>
                
                {/* Link a Tienda */}
                <NavLink className="nav-link" to="/tienda">TIENDA</NavLink>
                
                {/* Link a Contacto */}
                <NavLink className="nav-link" to="/contacto">CONTACTO</NavLink>
                
                {/* Link a Mi Cuenta con estilo específico */}
                <NavLink className="nav-micuenta" to="/micuenta">MI CUENTA</NavLink>
                
                {/* Link a Carrito con icono y estilo específico */}
                <BotonPersonalizado 
                    texto="CESTA" 
                    ruta="/contacto" 
                    icono={BsCartFill} 
                    gap="1rem" 
                />
            </div>
        </div>
    </nav>
  );
};
