import { useEffect, useState } from "react";

export const ProductosList = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost/3dprint/server/get_product.php")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los productos");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Productos obtenidos:", data);
        setProductos(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="tienda-container" style={{ padding: "40px" }}>
      <h2>Catálogo de Productos</h2>

      <div
        className="productos-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {productos.map((producto) => (
          <div
            key={producto.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              width: "280px",
              padding: "20px",
              boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ textAlign: "center" }}>{producto.nombre}</h3>
            <p style={{ textAlign: "center", color: "#666" }}>
              {producto.descripcion}
            </p>

            {producto.variantes.length > 0 && (
              <div>
                <img
                  src={producto.variantes[0].imagen_url}
                  alt={producto.nombre}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
                <p style={{ fontWeight: "bold", textAlign: "center" }}>
                  {producto.variantes[0].precio} €
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
