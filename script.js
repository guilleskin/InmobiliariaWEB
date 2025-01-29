/*document.getElementById('form-inmueble').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const imagenes = document.getElementById('imagenes').files;

    // Crear un objeto para el inmueble
    const inmueble = {
        nombre,
        descripcion,
        precio,
        imagenes: Array.from(imagenes).map(file => URL.createObjectURL(file)) // Crear URLs para las imágenes
    };

    // Mostrar el inmueble en la lista
    mostrarInmueble(inmueble);

    // Limpiar el formulario
    this.reset();
});

function mostrarInmueble(inmueble) {
    const listaInmuebles = document.getElementById('lista-inmuebles');
    const inmuebleDiv = document.createElement('div');
    inmuebleDiv.classList.add('inmueble');

    inmuebleDiv.innerHTML = `
        <h3>${inmueble.nombre}</h3>
        <p>${inmueble.descripcion}</p>
        <p>Precio: $${inmueble.precio}</p>
        <div class="imagenes">
            ${inmueble.imagenes.map(img => `<img src="${img}" alt="${inmueble.nombre}" width="100">`).join('')}
        </div>
    `;
    listaInmuebles.appendChild(inmuebleDiv);







}






/* Contáctanos 


document.getElementById('form-inmueble').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    console.log('Datos enviados:', { nombre, email, telefono, mensaje });

    // Puedes usar fetch o XMLHttpRequest para enviar los datos a tu servidor
});