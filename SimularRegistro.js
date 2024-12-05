document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const id = document.getElementById('id').value.trim();
    const tipoId = document.getElementById('tipoId').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value.trim();
    const confirmarCorreo = document.getElementById('confirmarCorreo').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const direccion = document.getElementById('direccion').value.trim();

    // Validaciones de campos requeridos
    if (!nombre || !apellido || !id || !tipoId || !fechaNacimiento || !correo || !confirmarCorreo || !ciudad || !pais || !direccion) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Validación de coincidencia de correos electrónicos
    if (correo !== confirmarCorreo) {
        alert('Los correos electrónicos no coinciden.');
        return;
    }
 // Permitir nombres y apellidos complejos
 const regexNombre = /^[a-zA-ZÀ-ÿ\s]+$/;
 if (!regexNombre.test(nombre) || !regexNombre.test(apellido)) {
     alert('El nombre o apellido contiene caracteres inválidos.');
     return;
 }
    // Prevenir la inyección SQL: Escapar caracteres especiales
    const regex = /[`'"]+/g;
    if (regex.test(nombre) || regex.test(apellido) || regex.test(id) || regex.test(correo) || regex.test(ciudad) || regex.test(pais) || regex.test(direccion)) {
        alert('Los datos ingresados contienen caracteres inválidos.');
        return;
    }

   

    // Simulación de registro exitoso
    alert('¡Registro exitoso!');

    // Limpiar el formulario después del registro
    document.getElementById('registrationForm').reset();
});
