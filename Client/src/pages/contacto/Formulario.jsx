import Form from 'react-bootstrap/Form';
import { BotonGenerico } from '../../components/buttons/BotonGenerico';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function Formulario() {
  // Guardar los valores que el usuario escribe en los campos
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: ''
  })

  // Estados para mensajes y cargas
  const [mensaje, setMensaje] = useState({tipo: '', texto: ''});
  const [enviando, setEnviando] = useState(false);

  // Maneja cambios en los input
  const handleChange = (e) => {
    setFormData({
      ...formData,    // Mantiene los valores anteriores
      [e.target.name]:e.target.value    // Actualiza el campo que cambia
    })
  }

  // Maneja el envio del formulario
  const handleSubmit = async (e) =>{
    e.preventDefault();   // Evita que la página se recargue
    setEnviando(true);    // Cambia el estado a "enviando"
    setMensaje({tipo: '', texto: ''});    // Limpia mensajes anteriores

    try{
      const response = await fetch('http://localhost/3dprint/server/guardar_mensaje.php',{    // Peticion HTTP al servidor asíncrona
        method:'POST',    // Tipo de peticion: enviar datos
        headers:{   // Le decimos al servidor que enviamos JSON
          'Content-Type':'application/json'   
        },
        body: JSON.stringify(formData)    // Convertimos el objeto Javascript a texto JSON
      });

      const data = await response.json();   // Esperar la respuesta del servidor

      // Verificar si el status es "success" (Como responde PHP)
      if(data.status === 'success'){
        setMensaje({tipo: 'success', texto: '!Mensaje enviado correctamente'})
        // Limpiar el formulario
        setFormData({nombre:'', correo:'', asunto:''});
      }
      else{
        //Mostrar el mensaje de error que viene de PHP o usa el mensaje por defecto
        setMensaje({tipo: 'danger', texto: data.mensaje || 'Error al enviar el mensaje'});
      }
    }
    catch(error){   // Cuando no se puede conectar al servidor
      setMensaje({tipo: 'danger', texto: 'Error de conexión con el servidor'});
      console.error('Error', error);    // Registra el error en la consola
    } 
    finally{    // Se ejecuta siempre, reactiva el formulario, pasa de "Enviando" a "Enviar"
      setEnviando(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>    {/* Al clicar se dispara el evento onSubmit y ejecuta la funcion {handleSubmit(e)}*/}

      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre </Form.Label>
        <Form.Control   
          type="text"   // Tipo de input
          placeholder="Nombre completo"   // Texto de ayuda
          name="nombre"   // Identificador para handleChange
          value={formData.nombre}   // Vincula input al estado
          onChange={handleChange}   // Actualiza estado al escribir
          required    // Campo obligatorio
          disabled={enviando}   //Deshabilita durante envio
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCorreo">
        <Form.Label>Correo Electrónico </Form.Label>
        <Form.Control 
          type="email" 
          placeholder="nombre@ejemplo.com"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
          disabled={enviando}
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAsunto">
        <Form.Label>Asunto</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} 
        placeholder='¿Cómo podemos ayudarle?'
        name="asunto"
        value={formData.asunto}
        onChange={handleChange}
        required
        disabled={enviando}
        />
      </Form.Group>

      <BotonGenerico 
      texto={enviando ? "Enviando..." : "Enviar"}   // Operador ternario
      type="submit"
      disabled={enviando}/>

      {/*Mostrar mensaje de estado */}
      {mensaje.texto && (
        <Alert variant={mensaje.tipo} dismissible onClose={() => setMensaje({tipo: '', texto: ''})}>
          {mensaje.texto}
        </Alert>
      )}

    </Form>
  );
}

export default Formulario;