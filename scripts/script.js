document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const products = this.parentElement.parentElement.querySelector('.products');
            products.style.display = products.style.display === 'none' ? 'block' : 'none';
            this.textContent = products.style.display === 'none' ? '+' : '-';
        });
    });

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

    function addProducts(categoryId, products) {
        const category = document.getElementById(categoryId.toLowerCase()); // Ajuste aquí
        const productsContainer = category.querySelector('.products');
        products.forEach(product => {
            const productElement = document.createElement('p');
            productElement.innerHTML = `${product.nombre} <span>${product.precio}</span>`;
            productsContainer.appendChild(productElement);
        });
    }

    // Agrega los productos a cada categoría
    for (const category in productos) {
        addProducts(category, productos[category]); // Ajuste aquí
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sliceImages = document.querySelectorAll('.slice-image');
    let currentIndex = 0;

    // Ocultar todas las imágenes excepto la primera al cargar la página
    for (let i = 1; i < sliceImages.length; i++) {
        sliceImages[i].style.display = 'none';
    }

    setInterval(() => {
        sliceImages[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % sliceImages.length;
        sliceImages[currentIndex].style.display = 'block';
    }, 5000); // Cambiar de imagen cada 10 segundos (5000 milisegundos)
});

const slice = document.querySelector('.slice');
const images = slice.querySelectorAll('img');

let currentIndex = 0;

setInterval(() => {
    const nextIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add('left');
    images[nextIndex].classList.add('right');

    setTimeout(() => {
        images[currentIndex].classList.remove('left');
        images[nextIndex].classList.remove('right');
    }, 500);

    currentIndex = nextIndex;
}, 5000);