// Obtener el formulario y agregar un evento de escucha para el envío
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe normalmente

    // Obtener los valores de los campos del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Procesar los valores (en este caso, simplemente mostrarlos en una ventana emergente)
    alert("Nombre de Usuario: " + username + "\nContraseña: " + password);
});
