// 1. PRIMERO: La lista de datos (El Array)
const noticias = [
    {
        id: 1,
        titulo: "Matrícula 2026",
        fecha: "08 de Enero, 2026",
        contenido: "Ya puedes presentarte...", // Resumen para la tarjeta
        descripcionLarga: "El proceso de matrícula iniciará a las 7:00 AM. Los padres deben traer el certificado de conducta y la partida de nacimiento original. Contaremos con personal de apoyo en cada módulo...", 
        imagen: "https://tu-imagen-aqui.jpg", // Puedes usar una URL de internet o el nombre de una foto en tu carpeta
        etiqueta: "Importante",
        color: "#ff5722",
        url: "noticia.html?id=1"
    },
    {
        id: 2,
        titulo: "Nueva Página Web",
        fecha: "09 de Enero, 2026",
        contenido: "Lanzamos nuestra plataforma...",
        descripcionLarga: "Este proyecto fue desarrollado por estudiantes de Informática para mejorar la comunicación. La web incluye secciones de noticias, calendario escolar y más...",
        imagen: "imagenes/web.jpg", 
        etiqueta: "Noticia",
        color: "#4caf50",
        url: "noticia.html?id=2"
    }
];

// 2. SEGUNDO: La función que dibuja las noticias
function cargarNoticias() {
    const contenedor = document.getElementById('contenedor-noticias');
    if (!contenedor) return;

    contenedor.innerHTML = noticias.map(n => `
        <a href="noticia.html?id=${n.id}" class="enlace-noticia">
            <div class="tarjeta-noticia" style="border-left: 5px solid ${n.color}">
                <span class="fecha">${n.fecha}</span>
                <h3>${n.titulo}</h3>
                <p>${n.contenido}</p>
                <span class="badge" style="background: ${n.color}">${n.etiqueta}</span>
            </div>
        </a>
    `).join('');
};
function cargarDetalle() {
    const urlParams = new URLSearchParams(window.location.search);
    const noticiaId = urlParams.get('id');
    const noticia = noticias.find(n => n.id == noticiaId);

    if (noticia) {
        document.getElementById('titulo-noticia').innerText = noticia.titulo;
        document.getElementById('fecha-noticia').innerText = "Publicado el " + noticia.fecha;
        
        // Aquí es donde sucede la magia:
        document.getElementById('contenido-noticia').innerHTML = `
            <img src="${noticia.imagen}" alt="${noticia.titulo}" style="width:100%; border-radius:15px; margin-bottom:20px; max-height:400px; object-fit:cover;">
            
            <div style="border-left: 4px solid ${noticia.color}; padding-left: 20px;">
                <p style="font-size: 1.2rem; font-weight: bold;">${noticia.contenido}</p>
                <p>${noticia.descripcionLarga}</p> 
            </div>
        `;
        document.title = noticia.titulo;
    }
}

// 3. TERCERO: Ejecutar la función (Girar la llave)
cargarNoticias();

// Esto es para confirmar en la consola que todo salió bien
console.log("¡Todo cargado con éxito!");
