// Evento para el formulario de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

    // Simulación de login exitoso para cualquier valor
    if (email && password) {
        alert('¡Inicio de sesión exitoso!');
        // Cierra el modal después del inicio de sesión
        var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        // Redirige a la página tienda.html después de cerrar el modal
        setTimeout(() => {
            window.location.href = 'tienda.html';
        }, 500);
    } else {
        alert('Por favor, ingresa tu correo y contraseña.');
    }
});

// Evento para mostrar/ocultar la contraseña
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('floatingPassword');
    const passwordFieldType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordFieldType);

    // Cambia el texto del botón
    this.textContent = passwordFieldType === 'password' ? 'Mostrar' : 'Ocultar';
});
