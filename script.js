// Obtener los botones y el mensaje
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');

// Establece el tamaño inicial del botón "Sí"
let yesButtonSize = 1;

// Evento para el botón de "No"
noButton.addEventListener('click', function() {
    // Incrementar el tamaño del botón "Sí" un 50% cada vez que se presione "No"
    yesButtonSize *= 1.2;
    yesButton.style.transform = `scale(${yesButtonSize})`;
});

// Evento para el botón de "Sí"
yesButton.addEventListener('click', function() {
    // Mostrar el mensaje al presionar "Sí"
    message.style.display = 'block';
    // Ocultar los botones
    document.querySelector('.buttons').style.display = 'none';
});
