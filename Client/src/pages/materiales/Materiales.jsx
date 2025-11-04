import { BannerMateriales } from "../../components/pages/materiales/BannerMateriales";
import { MaterialCard } from "../../components/pages/materiales/MaterialCard";
import { YoutubeVideo } from "../../components/pages/materiales/YoutubeVideo";
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
                    imagen="/images/petg.jpg" 
                    titulo="PETG" 
                    descripcion="Combina la facilidad de impresión del PLA con la resistencia del ABS. El PETG es fuerte, flexible y resistente a la humedad, ideal para piezas funcionales y prototipos duraderos."
                    info={'PETG (Polietileno Tereftalato Glicol) es un material muy popular en la impresión 3D por ofrecer un equilibrio perfecto entre resistencia, durabilidad y facilidad de uso. \n\nSe considera una mezcla entre PLA y ABS, ya que combina la facilidad de impresión del PLA con la resistencia mecánica y térmica del ABS. El PETG es resistente a los impactos, tiene buena flexibilidad y soporta temperaturas moderadamente altas sin deformarse. Además, es resistente a productos químicos y a la humedad, lo que lo hace ideal para piezas expuestas al exterior o al contacto con líquidos. \n\nUna de sus mayores ventajas es que apenas presenta warping (deformación), por lo que no requiere cámara cerrada y se imprime fácilmente en la mayoría de impresoras 3D con cama caliente. Su acabado es brillante y liso, con una excelente adherencia entre capas. \n\nEl PETG es perfecto para crear piezas funcionales, carcasas, utensilios, soportes o componentes sometidos a cierta flexión o esfuerzo. Es una gran elección para quienes buscan un material versátil, resistente y fácil de imprimir sin las complicaciones del ABS.'}
                />

                <MaterialCard 
                    imagen="/images/asa.jpg" 
                    titulo="ASA" 
                    descripcion="Similar al ABS pero con mejor resistencia a la intemperie y a los rayos UV. El ASA es ideal para piezas exteriores, duraderas y con un excelente acabado superficial."
                    info={'ASA (Acrilonitrilo Estireno Acrilato) es un material técnico muy similar al ABS, pero con una ventaja clave: su alta resistencia a la intemperie, los rayos UV y la decoloración. \n\nGracias a estas propiedades, el ASA se utiliza ampliamente en aplicaciones exteriores, automoción, señalización o cualquier entorno donde las piezas estén expuestas al sol y a las condiciones ambientales. Mantiene su color, forma y resistencia incluso después de largos periodos al aire libre. \n\nMecánicamente, el ASA ofrece una gran resistencia al impacto, buena rigidez y estabilidad dimensional. Soporta temperaturas elevadas y conserva la durabilidad típica del ABS, pero con una menor tendencia a deformarse por contracción térmica durante la impresión. \n\nRequiere cama caliente y, preferiblemente, una impresora cerrada para evitar grietas por cambios bruscos de temperatura. Su acabado es suave y se puede lijar o pintar fácilmente, además de poder tratarse con vapor de acetona para obtener una superficie brillante. \n\nEn resumen, el ASA es una excelente alternativa al ABS cuando se necesitan piezas resistentes, duraderas y especialmente adecuadas para uso en exteriores o bajo exposición solar.'}
                />

                <MaterialCard 
                    imagen="/images/tpu.jpg" 
                    titulo="TPU" 
                    descripcion="Flexible, elástico y resistente al desgaste. El TPU es ideal para piezas que requieren flexibilidad, absorción de impactos o resistencia al rozamiento."
                    info={'TPU (Poliuretano Termoplástico) es un material flexible y resistente, muy valorado por su capacidad de combinar elasticidad con durabilidad. \n\nA diferencia de los filamentos rígidos como el PLA o el ABS, el TPU permite imprimir piezas elásticas que pueden doblarse, comprimirse o estirarse sin romperse. Es ideal para fabricar componentes que necesiten absorber impactos o soportar deformaciones repetidas, como juntas, fundas, correas, protectores o piezas antivibración. \n\nEl TPU presenta una excelente resistencia a la abrasión, al desgaste y a la mayoría de los productos químicos, además de soportar bien temperaturas moderadas. También es resistente al agua y tiene buena adherencia entre capas, lo que garantiza piezas sólidas y duraderas. \n\nPara obtener buenos resultados, se recomienda imprimirlo a baja velocidad y con un extrusor de tipo directo, ya que su flexibilidad puede dificultar la alimentación en extrusores Bowden. \n\nEn resumen, el TPU es la opción perfecta para quienes buscan crear piezas flexibles, resistentes y duraderas, combinando elasticidad con un alto rendimiento mecánico.'}
                />

                <MaterialCard 
                    imagen="/images/nylonpa12.jpg" 
                    titulo="NYLON PA12" 
                    descripcion="Altamente resistente, duradero y con gran tenacidad. El Nylon PA12 es ideal para piezas técnicas, engranajes y componentes sometidos a fricción o esfuerzo mecánico."
                    info={'Nylon PA12 (Poliamida 12) es un material técnico de alto rendimiento utilizado en impresión 3D por su excelente combinación de resistencia, flexibilidad y durabilidad. \n\nSe caracteriza por su alta tenacidad, gran resistencia al impacto y capacidad para soportar esfuerzos mecánicos prolongados sin deformarse ni romperse. Además, presenta una baja absorción de humedad en comparación con otros nylons, lo que mejora su estabilidad dimensional y rendimiento en ambientes húmedos. \n\nEl Nylon PA12 es ideal para fabricar engranajes, bisagras, conectores, piezas funcionales o componentes que estén sometidos a fricción o movimiento constante. Su resistencia a la abrasión, a productos químicos y a temperaturas moderadamente altas lo convierten en un material muy versátil para aplicaciones industriales. \n\nAunque es un material exigente de imprimir, requiere cama caliente, buena adhesión y preferiblemente un entorno cerrado para evitar deformaciones. Ofrece un acabado suave y se puede mecanizar, lijar o teñir fácilmente tras la impresión. \n\nEn resumen, el Nylon PA12 es una opción profesional para piezas técnicas de alta resistencia, precisas y duraderas, diseñadas para soportar condiciones mecánicas y ambientales exigentes.'}
                />

                <MaterialCard 
                    imagen="/images/resinatpu.jpg" 
                    titulo="RESINA TPU" 
                    descripcion="Flexible, elástica y resistente al desgaste. La resina TPU combina la precisión de la impresión SLA/DLP con la elasticidad y durabilidad del TPU."
                    info={'La resina TPU es un material flexible y duradero diseñado para impresión 3D en tecnologías SLA o DLP, que permite crear piezas elásticas con gran detalle y acabado superficial. \n\nOfrece una combinación única de flexibilidad, resistencia a impactos y capacidad de deformación sin romperse, ideal para fabricar juntas, fundas, prototipos flexibles, piezas amortiguadoras o componentes que requieran absorción de vibraciones. \n\nA diferencia de los filamentos TPU, la resina TPU permite lograr alta resolución y superficies suaves, conservando las propiedades elásticas típicas del TPU. También presenta buena resistencia a productos químicos y al desgaste, aunque puede ser más sensible a la exposición prolongada a la luz UV. \n\nSe imprime en impresoras de resina estándar con los ajustes adecuados para materiales flexibles, prestando especial atención a tiempos de exposición y soporte de las piezas. \n\nEn resumen, la resina TPU es perfecta para quienes necesitan piezas flexibles, precisas y resistentes, combinando la elasticidad del TPU con la calidad de impresión de la tecnología de resina.'}
                />

                <MaterialCard 
                    imagen="/images/resinahightemp.jpg" 
                    titulo="RESINA HIGH TEMP" 
                    descripcion="Altamente resistente al calor y a la deformación. La resina High Temp es ideal para moldes, prototipos funcionales y piezas sometidas a altas temperaturas."
                    info={'La resina High Temp es un material técnico para impresión 3D en tecnologías SLA o DLP, diseñado para soportar temperaturas elevadas sin deformarse. \n\nOfrece gran estabilidad dimensional y resistencia al calor, lo que la hace perfecta para prototipos funcionales, moldes, componentes sometidos a altas temperaturas o piezas que necesiten mantener su forma bajo condiciones térmicas exigentes. \n\nEsta resina combina rigidez y precisión, proporcionando superficies lisas y detalladas, ideales para aplicaciones profesionales y técnicas. Además, es resistente al envejecimiento y al estrés mecánico moderado, aunque puede ser más frágil que resinas flexibles. \n\nSe imprime en impresoras de resina estándar ajustando tiempos de exposición y soportes según las recomendaciones del fabricante para materiales de alta temperatura. \n\nEn resumen, la resina High Temp es la elección perfecta para quienes necesitan piezas precisas, estables y resistentes al calor, aptas para prototipos técnicos, moldes y aplicaciones exigentes.'}
                />

                <MaterialCard 
                    imagen="/images/plamadera.jpg" 
                    titulo="PLA MADERA" 
                    descripcion="PLA con apariencia y textura de madera. Ideal para piezas decorativas, maquetas y objetos estéticos que imitan madera natural."
                    info={'El PLA Madera es un filamento compuesto que combina la facilidad de impresión del PLA con partículas de madera natural, ofreciendo un acabado visual y táctil similar a la madera. \n\nSe utiliza principalmente para crear piezas decorativas, maquetas, adornos, prototipos estéticos y objetos que necesiten un acabado cálido y natural. Dependiendo de la proporción de partículas de madera y del post-procesado, las piezas pueden lijarse, teñirse, pulirse o barnizarse, logrando un efecto muy realista. \n\nEl PLA Madera se imprime con la misma facilidad que un PLA estándar, aunque es recomendable usar boquillas de mayor diámetro (≥0,4 mm) para evitar atascos por las partículas de madera. Su adhesión a la cama y entre capas es buena, y no requiere cama caliente estrictamente, aunque ayuda a mejorar la estabilidad de impresión. \n\nEn resumen, el PLA Madera es ideal para quienes buscan combinar la simplicidad de impresión del PLA con un acabado estético natural, perfecto para objetos decorativos, maquetas y piezas creativas con efecto madera.'}
                />

                <MaterialCard 
                    imagen="/images/petgesd.jpg" 
                    titulo="PETG ESD" 
                    descripcion="PETG con protección contra descargas electrostáticas. Ideal para piezas técnicas y componentes electrónicos sensibles."
                    info={'El PETG ESD (Electrostatic Discharge) es un filamento técnico que combina la facilidad de impresión y durabilidad del PETG con propiedades antiestáticas, lo que lo hace perfecto para aplicaciones electrónicas. \n\nEs ideal para fabricar carcasas, soportes, bandejas, conectores u otros componentes que puedan estar en contacto con dispositivos sensibles a descargas electrostáticas. Gracias a su conductividad controlada, el PETG ESD previene daños por acumulación de cargas eléctricas. \n\nMantiene las ventajas del PETG estándar: buena resistencia mecánica, flexibilidad, resistencia a la humedad y facilidad de impresión sin warping significativo. También permite obtener un acabado liso y brillante, con excelente adherencia entre capas. \n\nSe imprime con las mismas recomendaciones que el PETG normal: cama caliente, velocidad moderada y, preferiblemente, entorno estable para piezas precisas. \n\nEn resumen, el PETG ESD es la opción ideal para piezas técnicas y electrónicas que requieren resistencia, durabilidad y protección frente a descargas electrostáticas, combinando funcionalidad y facilidad de impresión.'}
                />
            </div>

            <h2 className="texto-guiadefinitiva-h2">GUIA DEFINITIVA DE MATERIALES 3D</h2>

            <div className="video-section">
                <YoutubeVideo url="https://www.youtube.com/embed/qiYNsbXgvXQ" />
            </div>
        </div>
    )
};

export default Materiales;
