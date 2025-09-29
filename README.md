# 3DPrint 🚀

[![Estado](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)](https://github.com/Dalopment/3DPrint.git)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)

---

## 📖 Sobre el proyecto

**3DPrint** es una aplicación web de **final de curso DAW** que permite a los usuarios:

- Subir sus propios modelos 3D para impresión.
- Comprar filamentos y modelos 3D.
- Gestionar su cuenta, carrito y pedidos.

El objetivo del proyecto es combinar **interactividad web** con **funcionalidades de e-commerce** y servicios de impresión 3D, utilizando **React en el frontend** y **PHP + MySQL en el backend**.

---

## 🎨 Capturas de pantalla

![Home](./screenshots/home.png)
![Tienda](./screenshots/tienda.png)
![Carrito](./screenshots/carrito.png)

> Añade capturas reales de tu aplicación en la carpeta `screenshots`.

---

## ⚙️ Tecnologías utilizadas

- **Frontend:** React, React Router, React Icons, Bootstrap
- **Backend:** PHP
- **Base de datos:** MySQL
- **Estilos:** CSS personalizado

---

## 🛠️ Instalación y ejecución

### Backend

1. Configura un servidor PHP (XAMPP, WAMP o similar).
2. Importa la base de datos MySQL desde el archivo `database.sql`.
3. Configura la conexión a la base de datos en el backend PHP.

### Frontend

1. Clonar el repositorio:

```bash
git clone https://github.com/Dalopment/3DPrint.git
Entrar en la carpeta del proyecto:

bash
Copiar código
cd 3DPrint
Instalar dependencias:

bash
Copiar código
npm install
Ejecutar la aplicación en modo desarrollo:

bash
Copiar código
npm start
Abrir en el navegador: http://localhost:5173

🧩 Estructura del proyecto
csharp
Copiar código
3DPrint/
│
├── backend/           # Archivos PHP
├── database.sql       # Script de MySQL
├── public/
│   └── images/        # Logos y assets
├── src/
│   ├── components/    # Componentes React (Navbar, Cards...)
│   ├── pages/         # Páginas (Home, Tienda, Carrito...)
│   ├── App.jsx        # Componente principal
│   └── index.jsx      # Punto de entrada
├── package.json
└── README.md
🚀 Funcionalidades principales
Navbar con rutas a todas las secciones.

Carrito de compras con icono y total.

Páginas de productos y detalles.

Subida de modelos 3D por usuarios.

Gestión de usuario y sesión.

Integración con backend PHP y base de datos MySQL.

📝 Licencia
Este proyecto está bajo la licencia MIT - mira el archivo LICENSE para más detalles.