import { BannerMateriales } from "../../components/pages/materiales/BannerMateriales";
import { MaterialCard } from "../../components/pages/materiales/MaterialCard";
import '../../styles/materiales-style/Materiales.css';

const Materiales = () => {
    return(
        <div className="materiales-container">
            <BannerMateriales/>
            <h2 className="explora-materiales">Explora nuestros materiales disponibles</h2>
            <hr />
            <div className="grid-material-card">
                <MaterialCard 
                    imagen="/images/pla.png" 
                    titulo="PLA" 
                    descripcion="Material fácil de imprimir, ecológico y con excelente acabado superficial. Ideal para prototipos, figuras y piezas decorativas."
                    info={'PLA (Ácido Poliláctico) es uno de los materiales más populares y utilizados en la impresión 3D. Fabricado a partir de recursos renovables como el maíz o la caña de azúcar, es un filamento biodegradable, no tóxico y respetuoso con el medio ambiente. Su facilidad de uso lo convierte en la opción ideal tanto para principiantes como para usuarios experimentados, ya que ofrece una excelente adhesión a la cama, baja contracción y resultados con gran detalle y acabado superficial brillante.\n\nEl PLA no requiere cama caliente, aunque puede beneficiarse de una temperatura moderada para mejorar la adherencia. Es perfecto para prototipos, piezas decorativas, maquetas, juguetes y objetos de uso cotidiano, siempre que no estén expuestos a altas temperaturas o esfuerzos mecánicos intensos.\n\nEn resumen, el PLA combina calidad, facilidad de impresión y sostenibilidad, siendo una de las opciones más versátiles y seguras para cualquier impresora 3D.'}
    
                />
                <MaterialCard 
                    imagen="/images/abs.jpg" 
                    titulo="ABS" 
                    descripcion="Resistente y duradero, el ABS soporta altas temperaturas y ofrece gran rigidez. Ideal para piezas funcionales, componentes técnicos y prototipos mecánicos."
                    info={'ABS (Acrilonitrilo Butadieno Estireno) es un material muy utilizado en la impresión 3D por su resistencia, durabilidad y capacidad para soportar temperaturas más altas que otros filamentos. \n\nEs el mismo plástico empleado en productos como piezas de automóviles, electrodomésticos o los famosos bloques de LEGO, lo que demuestra su gran robustez y versatilidad. El ABS destaca por su alta tenacidad y resistencia a los impactos, siendo ideal para crear piezas funcionales, prototipos mecánicos o componentes que requieran soportar esfuerzos o fricción. \n\nA diferencia del PLA, el ABS necesita cama caliente y preferiblemente una impresora cerrada para evitar deformaciones causadas por la contracción térmica durante la impresión. Su acabado es suave y se puede lijar, pulir o pintar con facilidad. Además, las piezas impresas con ABS pueden tratarse con vapor de acetona para lograr un acabado brillante y profesional. \n\nEn resumen, el ABS es una excelente opción para quienes buscan materiales más técnicos y resistentes, perfectos para piezas duraderas, precisas y sometidas a condiciones exigentes.'}    
                />
                
                <MaterialCard 
                    imagen="/images/abs.jpg" 
                    titulo="ABS" 
                    descripcion="Resistente y duradero, el ABS soporta altas temperaturas y ofrece gran rigidez. Ideal para piezas funcionales, componentes técnicos y prototipos mecánicos."
                    info={'ABS (Acrilonitrilo Butadieno Estireno) es un material muy utilizado en la impresión 3D por su resistencia, durabilidad y capacidad para soportar temperaturas más altas que otros filamentos. \n\nEs el mismo plástico empleado en productos como piezas de automóviles, electrodomésticos o los famosos bloques de LEGO, lo que demuestra su gran robustez y versatilidad. El ABS destaca por su alta tenacidad y resistencia a los impactos, siendo ideal para crear piezas funcionales, prototipos mecánicos o componentes que requieran soportar esfuerzos o fricción. \n\nA diferencia del PLA, el ABS necesita cama caliente y preferiblemente una impresora cerrada para evitar deformaciones causadas por la contracción térmica durante la impresión. Su acabado es suave y se puede lijar, pulir o pintar con facilidad. Además, las piezas impresas con ABS pueden tratarse con vapor de acetona para lograr un acabado brillante y profesional. \n\nEn resumen, el ABS es una excelente opción para quienes buscan materiales más técnicos y resistentes, perfectos para piezas duraderas, precisas y sometidas a condiciones exigentes.'}    
                />

                <MaterialCard 
                    imagen="/images/abs.jpg" 
                    titulo="ABS" 
                    descripcion="Resistente y duradero, el ABS soporta altas temperaturas y ofrece gran rigidez. Ideal para piezas funcionales, componentes técnicos y prototipos mecánicos."
                    info={'ABS (Acrilonitrilo Butadieno Estireno) es un material muy utilizado en la impresión 3D por su resistencia, durabilidad y capacidad para soportar temperaturas más altas que otros filamentos. \n\nEs el mismo plástico empleado en productos como piezas de automóviles, electrodomésticos o los famosos bloques de LEGO, lo que demuestra su gran robustez y versatilidad. El ABS destaca por su alta tenacidad y resistencia a los impactos, siendo ideal para crear piezas funcionales, prototipos mecánicos o componentes que requieran soportar esfuerzos o fricción. \n\nA diferencia del PLA, el ABS necesita cama caliente y preferiblemente una impresora cerrada para evitar deformaciones causadas por la contracción térmica durante la impresión. Su acabado es suave y se puede lijar, pulir o pintar con facilidad. Además, las piezas impresas con ABS pueden tratarse con vapor de acetona para lograr un acabado brillante y profesional. \n\nEn resumen, el ABS es una excelente opción para quienes buscan materiales más técnicos y resistentes, perfectos para piezas duraderas, precisas y sometidas a condiciones exigentes.'}    
                />
                        
            </div>
        </div>
    )
};

export default Materiales;
