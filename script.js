let menuDataGlobal = {}; // Variable global para guardar los datos del JSON

// Inicializador de Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en,pt,fr,zh-CN,zh-TW,ja,ko,ru,it,de,hi',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Abre el modal mostrando foto, título y descripción del producto
function verCombinaciones(categoria, nombreProducto) {
    const modal = document.getElementById("miModal");
    const titulo = document.getElementById("modal-titulo");
    const imgModal = document.getElementById("imgModal");
    const descripcion = document.getElementById("modal-descripcion");

    const productoSeleccionado = menuDataGlobal[categoria]?.find(p => p.nombre === nombreProducto);

    if (!productoSeleccionado || !modal) return;

    if (titulo) titulo.textContent = productoSeleccionado.nombre;
    if (imgModal) imgModal.src = productoSeleccionado.imagen;
    if (descripcion) descripcion.textContent = productoSeleccionado.descripcion;

    modal.style.display = "flex";
}

function cerrarModal() {
    const modal = document.getElementById("miModal");
    if (modal) modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("miModal");
    if (event.target === modal) {
        cerrarModal();
    }
};

// Selección y despliegue de Categorías (Acordeón)
function seleccionarCategoria(idCategoria) {
    const categoriaObjetivo = document.getElementById(idCategoria);
    if (!categoriaObjetivo) return;

    const estaAbierta = categoriaObjetivo.hasAttribute('open');

    // Cierra todas las categorías abiertas
    document.querySelectorAll('details').forEach(detalle => {
        detalle.removeAttribute('open');
    });

    // Abre la categoría seleccionada y hace scroll centrado
    if (!estaAbierta) {
        categoriaObjetivo.setAttribute('open', 'true');
        categoriaObjetivo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// LÓGICA DEL BOTÓN FLOTANTE "VOLVER ARRIBA"
document.addEventListener("DOMContentLoaded", () => {
    cargarMenu();
    inicializarBotonVolverArriba();
});

function inicializarBotonVolverArriba() {
    const btnBackToTop = document.getElementById("btnBackToTop");
    if (!btnBackToTop) return;

    // Controla visibilidad al desplazar la página (>300px)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnBackToTop.classList.add("show");
        } else {
            btnBackToTop.classList.remove("show");
        }
    });

    // Evento de toque o clic con desplazamiento suave
    btnBackToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Carga dinámica del Menú desde el JSON
async function cargarMenu() {
    try {
        const response = await fetch('menu.json');
        menuDataGlobal = await response.json();

        for (const categoria in menuDataGlobal) {
            const contenedor = document.getElementById(`container-${categoria}`);
            if (!contenedor) continue;

            contenedor.innerHTML = '';

            menuDataGlobal[categoria].forEach(producto => {
                // Formatea cualquier texto entre paréntesis (ej: (350cc)) envolviéndolo en la clase .cc-tag
                const nombreFormateado = producto.nombre.replace(/\(([^)]+)\)/, '<span class="cc-tag">($1)</span>');

                const tarjetaHtml = `
                    <div class="menu-item" onclick="verCombinaciones('${categoria}', '${producto.nombre}')" role="button" tabindex="0">
                        <div class="card-img-container">
                            <img src="${producto.imagen}" alt="${producto.nombre}" class="thumb-foto" loading="lazy">
                        </div>
                        <div class="item-info">
                            <strong>${nombreFormateado}</strong>
                            <p>${producto.descripcion}</p>
                        </div>
                        <div class="item-actions">
                            <span class="price">${producto.precio}</span>
                        </div>
                    </div>
                `;
                contenedor.innerHTML += tarjetaHtml;
            });
        }
    } catch (error) {
        console.error('Error al cargar el archivo menu.json:', error);
    }
}

function abrirApp(redSocial) {
    // Detecta si el dispositivo es móvil (Android o iOS)
    const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (redSocial === 'instagram') {
        const webUrl = 'https://www.instagram.com/antiguafuente/';
        const appUrl = 'instagram://user?username=antiguafuente';

        if (esMovil) {
            window.location.href = appUrl;
            // Respaldo: si en 1.2 segundos no abrió la app, redirige al navegador web
            setTimeout(() => {
                window.location.href = webUrl;
            }, 1200);
        } else {
            window.open(webUrl, '_blank');
        }
    } 
    else if (redSocial === 'facebook') {
        const webUrl = 'https://www.facebook.com/MonumentoGastonomico';
        // 'facewebmodal' fuerza la apertura dentro de la App de Facebook en Android y iOS
        const appUrl = 'fb://facewebmodal/f?href=' + encodeURIComponent(webUrl);

        if (esMovil) {
            window.location.href = appUrl;
            // Respaldo a la web si no está instalada la App
            setTimeout(() => {
                window.location.href = webUrl;
            }, 1200);
        } else {
            window.open(webUrl, '_blank');
        }
    }
}