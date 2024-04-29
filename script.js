// Array de categorías de productos
const categorias = [
    "Bebidas Frías",
    "Bebidas Calientes",
    "Desayuno/Merienda",
    "Salado",
    "Tortas"
];

// Array de productos por categoría
const productos = {
    "Bebidas Frías": [
        { nombre: "Frappuccino de Dulce de leche", precio: "$0" },
        { nombre: "Frappuccino de Oreo", precio: "$0" },
        { nombre: "Frappuccino de Vainilla y Caramelo" , precio: "$0"},
        { nombre: "Frappuccino de Chocolate" , precio: "$0"},
        { nombre: "Frappuccino de Frutilla" , precio: "$0"},
        { nombre: "Gaseosas" , precio: "$0"},
        { nombre: "Agua/Agua con Gas" , precio: "$0"},
        { nombre: "Agua Saborizada" , precio: "$0"},
        { nombre: "Exprimido" , precio: "$0"},
        { nombre: "Limonada" , precio: "$0" },
        { nombre: "Licuado De Banana" , precio: "$0" },
        { nombre: "Licuado con Frutas de Estacion" , precio: "$0" },
        // Agrega más productos aquí
    ],
    "Bebidas Calientes": [
        { nombre: "Expresso Chico/Grande", precio: "$0" },
        { nombre: "Cafe Con Leche", precio: "$0" },
        { nombre: "Te En Saquito/Hebras" , precio: "$0" },
        { nombre: "Cappucchino" , precio: "$0" },
        { nombre: "Cappucchino Con Dulce De Leche" , precio: "$0" },
        { nombre: "Lagrima" , precio: "$0" },
        { nombre: "Cortado" , precio: "$0" },
        { nombre: "Moka" , precio: "$0" },
        { nombre: "Moka De Chocolate" , precio: "$0" },
        { nombre: "Caramel Machiatto: Caramelo/Cafe/Leche y Vainilla" , precio: "$0" },
        { nombre: "Coffie Nut: Cortado Con Nutela" , precio: "$0" },
        { nombre: "Submarino" , precio: "$0" },
        // Agrega más productos aquí
    ],
    "Desayuno/Merienda": [
        { nombre: "Tostadas: Mermelada/Queso/Manteca", precio: "$0" },
        { nombre: "Alfajores", precio: "$0" },
        { nombre: "Muffins", precio: "$0" },
        { nombre: "Cuadrados", precio: "$0" },
        { nombre: "Cookies", precio: "$0" },
        { nombre: "Pepas", precio: "$0" },
        { nombre: "Alfajores De Maicena", precio: "$0" },
        { nombre: "Pastaflora", precio: "$0" },
        { nombre: "MediaLunas", precio: "$0" },
        { nombre: "Opciones Sin Tacc", precio: "$0" },
        { nombre: "Waffles", precio: "$0" },
        { nombre: "Yogurt Con Granola", precio: "$0" },
        { nombre: "Hotcake", precio: "$0" },
        // Agrega más productos aquí
    ],
    "Salado": [
        { nombre: "Tostado(Opcional Papas Fritas)", precio: "$0" },
        { nombre: "Medialuna Rellena", precio: "$0" },
        { nombre: "Focacchia Rellena", precio: "$0" },
        { nombre: "Scones De Queso Relleno", precio: "$0" },
        { nombre: "Trenza Judia", precio: "$0" },
        { nombre: "Tipo Bagels", precio: "$0" },
        { nombre: "Brusquetas", precio: "$0" },
        { nombre: "Fosforitos", precio: "$0" },
        { nombre: "Avocado Con Huevo Revuelto y Palta", precio: "$0" },
        { nombre: "Lomito Completo", precio: "$0" },
        { nombre: "Tartas", precio: "$0" },
        { nombre: "Ensaladas", precio: "$0" },
        { nombre: "Cremona Rellena", precio: "$0" },
        // Agrega más productos aquí
    ],
    "Tortas": [
        { nombre: "Matilda", precio: "$0" },
        { nombre: "Red Velvet", precio: "$0" },
        { nombre: "Tiramisu", precio: "$0" },
        { nombre: "Lemon Pie", precio: "$0" },
        { nombre: "Moka", precio: "$0" },
        { nombre: "Selva Negra", precio: "$0" },
        { nombre: "Rogel", precio: "$0" },
        { nombre: "Torta Bombom", precio: "$0" },
        { nombre: "Manzana(Opcional Bocha de Helado)", precio: "$0" },
        { nombre: "Brownie(Opcional Bocha de Helado)", precio: "$0" },
        { nombre: "Cheesecake", precio: "$0" },
        { nombre: "Carrot Cake", precio: "$0" },
        { nombre: "Banana Split", precio: "$0" },
        { nombre: "Chocotorta", precio: "$0" },

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

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('backButton');

    backButton.addEventListener('click', function() {
        // Aquí maneja la acción según lo que desees hacer
        // Para volver a la página anterior
        window.close();
    });
});