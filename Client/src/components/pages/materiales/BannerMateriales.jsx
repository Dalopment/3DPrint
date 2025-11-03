import '../../../styles/materiales-style/BannerMateriales.css';

export const BannerMateriales = () => {
  return (
    <div className='container-banner'>
      <img 
        src="images/fondo-materiales.jpg"
        alt="fondo materiales" 
        className='fondo-materiales'/>
      <div className='text-content'>
        <h2>Materiales que se adaptan a ti</h2>
        <h3>Innovación y confianza en cada impresión</h3>
      </div>
      <img 
        src="images/benchy.png" 
        alt="benchy" 
        className='benchy'/>
    </div>
  )
}