import React from 'react';
import './Footer.css';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { BotonPersonalizado } from './BotonPersonalizado';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        
        {/* Primera columna */}
        <div className='footer-column'>
          <div className='contact-item'>
            <MdEmail className='icono-mail'/>
            <a href="mailto:info@3dprint.com">info@3dprint.com</a>
          </div>
          <div className='contact-item'>
            <MdPhone className='icono-phone'/>
            <a href="tel:+34680557451">+34 680557451</a>
          </div>
          <div className='contact-item'>
            <NavLink to="/contacto" className="info-location">
              <div className="icon-text">
                <MdLocationOn className='icono-location'/>
                <span>Avenida Colón, 22</span>
              </div>
              <div>46185 La Pobla de Vallbona (Valencia)</div>
            </NavLink>
          </div>
          <BotonPersonalizado texto="CONTACTAR" ruta="/contacto"/>
        </div>

        {/* Segunda columna */}
        <div className="footer-column">
          <div className="info-image">
            <img src="/images/logo3dprint.jpg" alt="logo 3dprint" />
          </div>
          <div className="info-description">
            <p>
              Imprimakers nace de la idea de un grupo de jóvenes ingenieros 
              que empezaron a explorar esta nueva tecnología, y de un hobbie 
              pasó a ser un trabajo soñado. Hoy en día ofrecemos este servicio 
              de impresión 3D en toda Europa.
            </p>
          </div>
        </div>

        {/* Tercera columna */}
        <div className='footer-column'>
          <p>Síguenos en:</p>
          <div className='social-icons'>
            {/* Ejemplo con react-icons */}
          </div>
        </div>

      </div>
    </footer>
  );
};