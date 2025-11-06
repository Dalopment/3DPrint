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

  if (cargando)
    return <p style={{ textAlign: "center" }}>Cargando productos...</p>;
  if (error)
    return <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>;

  // Aplanar productos y variantes en un solo array
  const productosConVariantes = [];
  productos.forEach((producto) => {
    producto.variantes.forEach((variante) => {
      productosConVariantes.push({
        productoId: producto.id,
        productoNombre: producto.nombre,
        productoDescripcion: producto.descripcion,
        categoria: producto.categoria,
        marca: producto.marca,
        ...variante,
      });
    });
  });

  return (
    <div className="tienda-container" style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Catálogo de Productos
      </h2>

      <div
        className="productos-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {productosConVariantes.map((item) => (
          <div
            key={`${item.productoId}-${item.id}`}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              width: "280px",
              padding: "20px",
              boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Badge de categoría */}
            <div
              style={{
                backgroundColor: "#f3f4f6",
                padding: "5px 10px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "10px",
                color: "#6b7280",
              }}
            >
              {item.categoria}
            </div>

            {/* Título */}
            <h3 style={{ textAlign: "center", marginBottom: "5px" }}>
              {item.productoNombre}
            </h3>

            {/* Variante */}
            <p
              style={{
                textAlign: "center",
                fontWeight: "600",
                color: "#3b82f6",
                marginBottom: "10px",
              }}
            >
              {item.nombre_variante}
            </p>

            {/* Descripción */}
            <p
              style={{
                textAlign: "center",
                color: "#666",
                fontSize: "14px",
                marginBottom: "15px",
              }}
            >
              {item.productoDescripcion}
            </p>

            {/* Imagen */}
            <img
              src={item.imagen_url}
              alt={item.nombre_variante}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/280x180?text=Sin+Imagen";
              }}
            />

            {/* Color */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              <span style={{ fontSize: "13px", color: "#666" }}>Color:</span>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: item.color_hex,
                  border: "2px solid #ccc",
                }}
                title={item.color_hex}
              />
            </div>

            {/* SKU y Marca */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              <span>SKU: {item.sku}</span>
              <span>{item.marca}</span>
            </div>

            {/* Precio y Stock */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "20px", color: "#333" }}>
                {item.precio.toFixed(2)} €
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: item.stock > 0 ? "#22c55e" : "#ef4444",
                  fontWeight: "600",
                }}
              >
                {item.stock > 0 ? `Stock: ${item.stock}` : "Sin stock"}
              </p>
            </div>

            {/* Botón Añadir al Carrito */}
            <button
              onClick={() => {
                alert(
                  `Añadido: ${item.productoNombre} - ${item.nombre_variante}`
                );
              }}
              disabled={item.stock === 0}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: item.stock > 0 ? "#3b82f6" : "#9ca3af",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: item.stock > 0 ? "pointer" : "not-allowed",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (item.stock > 0) {
                  e.target.style.backgroundColor = "#2563eb";
                }
              }}
              onMouseLeave={(e) => {
                if (item.stock > 0) {
                  e.target.style.backgroundColor = "#3b82f6";
                }
              }}
            >
              {item.stock > 0 ? "Añadir al carrito" : "Sin stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};