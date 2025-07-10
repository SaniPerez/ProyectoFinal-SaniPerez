function validateForm() {
  //Se extrae el valor ingresado por el usuario, en cada campo del formulario
  //y se guarda en variables (una variable por cada valor extraído). 
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  //Se crea una variable de estado, para indicar luego si es incorrecto
  //el ingreso de cada valor en los campor del formulario.
  let isValid = true;

  //Nombre no puede estar vacío, tener más de 3 caracteres y ser sólo letras.
  if (nombre === '' || nombre.length < 3 || !/^[a-zA-Z\s]+$/.test(nombre)) {
    showError('name', 'El nombre ingresado debe ser mayor a 3 caracteres y sólo letras.');
    isValid = false;
  } else if (nombre.charAt(0).toLowerCase() === 'z') {
    showError('name', 'El nombre no puede comenzar con la letra Z.');
    isValid = false;
  } else {
    hideError('name');
  }

  //Se crea una constante, para guardar el ella la validación del email.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    showError('email', 'El mail ingresado no es válido (nombre.de.usuario@dominio.com).');
    isValid = false;
  } else {
    hideError('email');
  }
  
  //Se crea una constante, para guardar el ella la validación del número telefónico.
  const phoneRegex = /^[0-9]{7,}$/;
  if (!phoneRegex.test(telefono)) {
    showError('phone', 'Ingrese un teléfono válido (ej:   15 2345-6789).');
    isValid = false;
  } else {
    hideError('phone');
  }

  //La valida la cantidad de caracteres mínimo a ingresar.
  if (mensaje.length < 10) {
    showError('message', 'El mensaje debe tener al menos 10 caracteres.');
    isValid = false;
  } else {
    hideError('message');
  }

  return isValid;
}

//Función para mostrar por pantalla el error, si algún campo ingresado es inválido.
function showError(fieldId, message) {
  const errorElement = document.getElementById(fieldId + '-error');
  errorElement.textContent = '💥' + message;
  errorElement.style.display = 'block';
}

function hideError(fieldId) {
  const errorElement = document.getElementById(fieldId + '-error');
  errorElement.style.display = 'none';
}

//Redireccionamiento a otra página, si el envío del formulario es correcto.
document.getElementById('btnEnviar').addEventListener('click', function (event) {
  event.preventDefault();
  if (validateForm()) {
    window.location.href = '../pages/envio-exitoso.html';
  }
});
