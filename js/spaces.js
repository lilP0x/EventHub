// Información de los espacios
const espacios = {
    hc01: {
        title: "Oficina HC-01",
        image: "/images/escritorio-de-oficina.png",
        direccion: "AK. 45 No. 205 - 59, Autopista Norte.",
        capacidad: "Capacidad: 10 personas.",
        equipamiento: "Equipamiento: Wi-Fi, Proyector, Pizarra.",
        precio: "Precio por hora: $50,000 COP."
    },
    reuniones: {
        title: "Reuniones",
        image: "/images/reunion.png",
        direccion: "Un espacio para disfrutar",
        capacidad: "Capacidad: 20 personas.",
        equipamiento: "Equipamiento: TV, Audio, Pizarra.",
        precio: "Precio por hora: $70,000 COP."
    },
    coworking: {
        title: "Coworking",
        image: "/images/coworking.png",
        direccion: "Espacio para poder trabajar",
        capacidad: "Capacidad: 15 personas.",
        equipamiento: "Equipamiento: Wi-Fi, Cafetería, Impresora.",
        precio: "Precio por hora: $30,000 COP."
    }
};

// Obtener el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const espacioKey = urlParams.get('espacio');

// Cargar la información 
if (espacioKey && espacios[espacioKey]) {
    const espacio = espacios[espacioKey];
    document.getElementById('espacio-title').textContent = espacio.title;
    document.getElementById('espacio-image').src = espacio.image;
    document.getElementById('espacio-direccion').textContent = espacio.direccion;
    document.getElementById('espacio-capacidad').textContent = espacio.capacidad;
    document.getElementById('espacio-equipamiento').textContent = espacio.equipamiento;
    document.getElementById('espacio-precio').textContent = espacio.precio;
} else {
    document.getElementById('espacio-title').textContent = "Espacio no encontrado";
}