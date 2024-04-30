// Script para el panel de administración

// Datos de autenticación
const adminUsername = "MartinaVallone";
const adminPassword = "Martu34835lgg*";

// Elementos del formulario y mensaje
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const messageDiv = document.getElementById("message");

// Manejador del evento submit del formulario
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener los valores de usuario y contraseña
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verificar si las credenciales son válidas
    if (username === adminUsername && password === adminPassword) {
        // Credenciales válidas, redirigir al panel de administración
        window.location.href = "./admin_panel.html";
    } else {
        // Credenciales inválidas, mostrar mensaje de error
        messageDiv.textContent = "Usuario o contraseña incorrectos";
    }
});