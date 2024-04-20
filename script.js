// Array de categorías de productos
const categorias = [
    "Bebidas Frías",
    "Bebidas Calientes",
    "Delicatessen",
    "Salado",
    "Tortas"
];

// Array de productos por categoría
const productos = {
    "Bebidas Frías": [
        { nombre: "Coca-Cola", precio: "$2.50" },
        { nombre: "Jugo de Naranja", precio: "$3.00" },
        // Agrega más productos aquí
    ],
    "Bebidas Calientes": [
        { nombre: "Café", precio: "$1.50" },
        { nombre: "Té", precio: "$1.00" },
        // Agrega más productos aquí
    ],
    "Delicatessen": [
        { nombre: "Sandwich de Pollo", precio: "$5.00" },
        { nombre: "Ensalada César", precio: "$4.50" },
        // Agrega más productos aquí
    ],
    "Salado": [
        { nombre: "Pizza de Pepperoni", precio: "$8.00" },
        { nombre: "Hamburguesa Clásica", precio: "$6.50" },
        // Agrega más productos aquí
    ],
    "Tortas": [
        { nombre: "Torta de Chocolate", precio: "$4.00" },
        { nombre: "Torta de Zanahoria", precio: "$3.50" },
        // Agrega más productos aquí
    ],
};

// Función para agregar títulos y productos al DOM
function agregarContenido() {
    const columnaTitulos = document.querySelector(".column:nth-child(2)");

    categorias.forEach(categoria => {
        // Agregar título de la categoría
        const titulo = document.createElement("h2");
        titulo.textContent = categoria;
        columnaTitulos.appendChild(titulo);

        // Agregar productos de la categoría
        const contenedorProductos = document.createElement("div");

        productos[categoria].forEach(producto => {
            const productoDiv = document.createElement("div");
            productoDiv.classList.add("product");

            const nombreProducto = document.createElement("h3");
            nombreProducto.textContent = producto.nombre;

            const precioProducto = document.createElement("span");
            precioProducto.classList.add("price");
            precioProducto.textContent = producto.precio;

            productoDiv.appendChild(nombreProducto);
            productoDiv.appendChild(precioProducto);

            contenedorProductos.appendChild(productoDiv);
        });

        columnaTitulos.appendChild(contenedorProductos);
    });
}

// Llamada a la función para agregar contenido al cargar la página
agregarContenido();