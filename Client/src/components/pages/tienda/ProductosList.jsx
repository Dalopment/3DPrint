import { useEffect, useState } from "react";

// Componente para cada tarjeta de producto
const ProductCard = ({ producto }) => {
  const [varianteSeleccionada, setVarianteSeleccionada] = useState(
    producto.variantes[0] || null
  );
  const [cantidad, setCantidad] = useState(1);

  if (!varianteSeleccionada) return null;

  const handleAgregarCarrito = () => {
    console.log("Añadiendo al carrito:", {
      producto: producto.nombre,
      variante: varianteSeleccionada.nombre_variante,
      cantidad,
      precio: varianteSeleccionada.precio,
      total: (varianteSeleccionada.precio * cantidad).toFixed(2)
    });
    alert(
      `✅ ${cantidad}x ${producto.nombre} - ${varianteSeleccionada.nombre_variante}\nTotal: ${(varianteSeleccionada.precio * cantidad).toFixed(2)} €`
    );
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        width: "320px",
        padding: "20px",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      {/* Badge de categoría */}
      <div
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "5px 12px",
          borderRadius: "6px",
          fontSize: "12px",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {producto.categoria}
      </div>

      {/* Título y Marca */}
      <h3 style={{ textAlign: "center", marginBottom: "5px", fontSize: "20px" }}>
        {producto.nombre}
      </h3>
      <p
        style={{
          textAlign: "center",
          color: "#999",
          fontSize: "13px",
          marginBottom: "10px",
        }}
      >
        {producto.marca}
      </p>

      {/* Descripción */}
      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "14px",
          marginBottom: "15px",
          minHeight: "40px",
        }}
      >
        {producto.descripcion}
      </p>

      {/* Imagen */}
      <div style={{ position: "relative", marginBottom: "15px" }}>
        <img
          src={varianteSeleccionada.imagen_url}
          alt={varianteSeleccionada.nombre_variante}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/320x200?text=Sin+Imagen";
          }}
        />
        {varianteSeleccionada.stock === 0 && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              SIN STOCK
            </span>
          </div>
        )}
      </div>

      {/* Selector de Variantes (Colores) */}
      <div style={{ marginBottom: "15px" }}>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          Variante: {varianteSeleccionada.nombre_variante}
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {producto.variantes.map((variante) => (
            <button
              key={variante.id}
              onClick={() => {
                setVarianteSeleccionada(variante);
                setCantidad(1); // Reset cantidad al cambiar variante
              }}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: variante.color_hex,
                border:
                  varianteSeleccionada.id === variante.id
                    ? "3px solid #3b82f6"
                    : "2px solid #ccc",
                cursor: "pointer",
                transition: "all 0.2s",
                transform:
                  varianteSeleccionada.id === variante.id
                    ? "scale(1.15)"
                    : "scale(1)",
                boxShadow:
                  varianteSeleccionada.id === variante.id
                    ? "0 0 0 3px rgba(59, 130, 246, 0.2)"
                    : "none",
              }}
              title={variante.nombre_variante}
            />
          ))}
        </div>
      </div>

      {/* Precio y Stock */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
          padding: "10px",
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
        }}
      >
        <div>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
            {varianteSeleccionada.precio.toFixed(2)} €
          </p>
          <p style={{ fontSize: "11px", color: "#999" }}>
            SKU: {varianteSeleccionada.sku}
          </p>
        </div>
        <p
          style={{
            fontSize: "14px",
            color: varianteSeleccionada.stock > 0 ? "#22c55e" : "#ef4444",
            fontWeight: "600",
          }}
        >
          {varianteSeleccionada.stock > 0
            ? `${varianteSeleccionada.stock} disponibles`
            : "Sin stock"}
        </p>
      </div>

      {/* Selector de Cantidad */}
      {varianteSeleccionada.stock > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "15px",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: "600", color: "#666" }}>
            Cantidad:
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setCantidad(Math.max(1, cantidad - 1))}
              style={{
                padding: "8px 15px",
                backgroundColor: "#f3f4f6",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              -
            </button>
            <span
              style={{
                padding: "8px 20px",
                fontWeight: "600",
                minWidth: "50px",
                textAlign: "center",
              }}
            >
              {cantidad}
            </span>
            <button
              onClick={() =>
                setCantidad(Math.min(varianteSeleccionada.stock, cantidad + 1))
              }
              style={{
                padding: "8px 15px",
                backgroundColor: "#f3f4f6",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* Botón Añadir al Carrito */}
      <button
        onClick={handleAgregarCarrito}
        disabled={varianteSeleccionada.stock === 0}
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: varianteSeleccionada.stock > 0 ? "#3b82f6" : "#9ca3af",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "15px",
          cursor: varianteSeleccionada.stock > 0 ? "pointer" : "not-allowed",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => {
          if (varianteSeleccionada.stock > 0) {
            e.target.style.backgroundColor = "#2563eb";
          }
        }}
        onMouseLeave={(e) => {
          if (varianteSeleccionada.stock > 0) {
            e.target.style.backgroundColor = "#3b82f6";
          }
        }}
      >
        {varianteSeleccionada.stock > 0 ? "🛒 Añadir al carrito" : "Sin stock"}
      </button>
    </div>
  );
};

// Componente principal
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
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p style={{ fontSize: "18px", color: "#666" }}>Cargando productos...</p>
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p style={{ fontSize: "18px", color: "#ef4444" }}>Error: {error}</p>
      </div>
    );

  return (
    <div style={{ padding: "40px", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "32px",
          fontWeight: "bold",
          color: "#1f2937",
        }}
      >
        📦 Catálogo de Productos
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};