import Formulario from './Formulario';
import '../../styles/contacto-page/Contacto.css';

const Contacto = () => (
  <div>
    <div className='container-contacto'>
      <div className='c1'>
        <h3 className='h3-contacto'>Contacta con nosotros 3DPrint</h3>
        <span className='text-form'>Para cualquier consulta o incidencia puedes ponerte en contacto con 
          nosotros a través del siguiente formulario:</span>
        <Formulario/>

        <span>Otros contactos</span>
        <hr />
        <span>Donde estamos</span>
        <span>Carrer Font Baixa, 2 </span>
        <span>Alfafar, 46910, Valencia</span>
        <hr />
        <span>Horario de atención</span>
        <span>10:00h - 13:30h / 15:00h - 18:00h</span>
        <hr />
        <span>Telefono</span>
        <span>(+34) 680559528</span>



      </div>
      <div className='c2'>
        <img src="images/imagecontacto.jpeg" alt="imagencontacto" 
          className='image-contact'/>
      </div>
    </div>
  </div>
);

export default Contacto;
