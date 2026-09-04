let menuDataGlobal = {}; // Variable global para guardar los datos del JSON
let idiomaActual = 'es';

// ============================================================
// DICCIONARIO DE TRADUCCIONES (textos fijos de la interfaz)
// ============================================================
const translations = {
    es: {
        subtitle: "Monumento Gastronómico",
        follow_us: "Síguenos",
        note_label: "Nota:",
        note_text: "Sándwiches y vienesas servidos exclusivamente en pan amasado frica artesanal del día.",

        nav_promociones: "Promociones",
        nav_lomitos: "Lomitos",
        nav_churrascos: "Churrascos",
        nav_vienesas: "Vienesas",
        nav_fricandelas: "Fricandelas",
        nav_gordas: "Gordas",
        nav_rumanos: "Rumanos",
        nav_agregados: "Agregados",
        nav_platos: "Platos",
        nav_aderezos: "Aderezos",
        nav_bebidas: "Bebidas",
        nav_te_helado: "Té Helado",
        nav_jugos_naturales: "Jugos Nat.",
        nav_jugos_botella: "Jugos Bot.",
        nav_cafeteria: "Cafetería",
        nav_cervezas_botella: "Cervezas",
        nav_shops: "Schops",
        nav_bebidas_maquina: "Bebida Máquina",

        cat_promociones_title: "PROMOCIONES",
        cat_promociones_desc: "Aprovecha nuestras ofertas y combos especiales.",
        cat_lomitos_title: "LOMITOS",
        cat_lomitos_desc: "Exquisitas y finas láminas de lomo de cerdo cocinadas en su propio jugo.",
        cat_churrascos_title: "CHURRASCOS",
        cat_churrascos_desc: "Finos cortes de tierna carne de vacuno de primera selección, cocinados a la plancha.",
        cat_vienesas_title: "VIENESAS",
        cat_vienesas_desc: "Tradicionales vienesas en pan fresco con tus ingredientes favoritos.",
        cat_fricandelas_title: "FRICANDELAS",
        cat_fricandelas_desc: "Hamburguesas artesanales preparadas con la receta exclusiva de la casa.",
        cat_gordas_title: "GORDA",
        cat_gordas_desc: "Nuestra tradicional y sabrosa salchicha gruesa de gran calibre, asada a la plancha.",
        cat_rumanos_title: "RUMANO ARTESANAL",
        cat_rumanos_desc: "Deliciosa preparación artesanal de carne molida de vacuno y cerdo, aliñada con un toque de ajo y asada a la plancha.",
        cat_agregados_title: "AGREGADOS",
        cat_agregados_desc: "Acompaña tus sándwiches con nuestros ingredientes adicionales.",
        cat_platos_title: "PLATOS",
        cat_platos_desc: "Exquisitas preparaciones al plato servidas en porciones generosas.",
        cat_aderezos_title: "ADEREZOS",
        cat_aderezos_desc: "Nuestros aderezos artesanales para acompañar tu mesa.",
        cat_bebidas_title: "BEBIDAS",
        cat_bebidas_desc: "Refrescantes bebidas en lata de 350cc.",
        cat_te_helado_title: "TÉ HELADO",
        cat_te_helado_desc: "Lipton Ice Tea de 600ml.",
        cat_jugos_naturales_title: "JUGOS NATURALES",
        cat_jugos_naturales_desc: "Pulpas naturales seleccionadas.",
        cat_jugos_botella_title: "JUGOS EN BOTELLA",
        cat_jugos_botella_desc: "Formatos individuales de 300ml.",
        cat_cafeteria_title: "CAFETERÍA Y TÉ",
        cat_cafeteria_desc: "Bebidas calientes para acompañar.",
        cat_cervezas_botella_title: "CERVEZAS EN BOTELLA",
        cat_cervezas_botella_desc: "Selección de cervezas nacionales e importadas en formato 330ml y 500ml.",
        cat_shops_title: "SCHOPS",
        cat_shops_desc: "Cerveza de barril bien fría en jarra o copón.",
        cat_bebidas_maquina_title: "BEBIDAS DE MÁQUINA",
        cat_bebidas_maquina_desc: "Refrescante combinación a base de jarabe concentrado y agua carbonatada (soda), servida al instante.",

        footer_legal_link: "Condiciones y Protección al Consumidor",
        footer_dev: "Desarrollador",

        legal_title: "Términos, Condiciones y Derechos",
        tab_btn_1: "Exclusividad & Precios",
        tab_btn_2: "Derecho de Retracto",
        tab_btn_3: "Alergias e Intolerancias",
        tab_btn_4: "Protección al Consumidor",

        tab1_h3: "Exclusividad de Carta y Precios",
        tab1_p: "Los precios, promociones, productos y combinaciones de esta carta digital son exclusivos para el consumo presencial en el local. Los precios expuestos en plataformas de reparto a domicilio (delivery) pueden diferir debido a costos operacionales de terceros.",

        tab2_h3: "Derecho de Retracto (Ley N° 19.496)",
        tab2_p: "De conformidad con el Art. 3° bis de la Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, no aplica el derecho de retracto en la compra de productos perecibles o preparaciones alimentarias de consumo inmediato una vez confirmada e ingresada la comanda a cocina.",

        tab3_h3: "Alergias e Ingredientes",
        tab3_p_html: 'Todas nuestras preparaciones son artesanales y se elaboran a diario en el local. La palta se lava y se muele en el momento, el tomate se lava y se corta en láminas frescas, y tanto nuestra salsa de tomate como la mayonesa casera (Preparada con huevos pasteurizados) se elaboran internamente.',

        tab4_h3: "Derechos del Consumidor & Pagos",
        tab4_li1_html: '<strong>Propina Voluntaria:</strong> La propina sugerida (10%) es strictly voluntaria conforme a la Ley N° 20.729.',
        tab4_li2_html: '<strong>Comprobante de Pago:</strong> Se emitirá boleta electrónica por cada consumo realizado en el establecimiento.',
        tab4_li3_html: '<strong>Medios de Pago:</strong> Se aceptan pagos en efectivo, tarjetas de débito y crédito bancarias sin recargos adicionales.'
    },

    en: {
        subtitle: "Gastronomic Monument",
        follow_us: "Follow us",
        note_label: "Note:",
        note_text: "Sandwiches and hot dogs are served exclusively on our artisanal, freshly baked bread of the day.",

        nav_promociones: "Promotions",
        nav_lomitos: "Lomitos",
        nav_churrascos: "Churrascos",
        nav_vienesas: "Hot Dogs",
        nav_fricandelas: "Fricandelas",
        nav_gordas: "Gordas",
        nav_rumanos: "Rumanos",
        nav_agregados: "Extras",
        nav_platos: "Plates",
        nav_aderezos: "Condiments",
        nav_bebidas: "Drinks",
        nav_te_helado: "Iced Tea",
        nav_jugos_naturales: "Fresh Juice",
        nav_jugos_botella: "Bottled Juice",
        nav_cafeteria: "Coffee",
        nav_cervezas_botella: "Beers",
        nav_shops: "Draft Beer",
        nav_bebidas_maquina: "Fountain Drinks",

        cat_promociones_title: "PROMOTIONS",
        cat_promociones_desc: "Take advantage of our special offers and combos.",
        cat_lomitos_title: "LOMITOS",
        cat_lomitos_desc: "Thinly sliced pork loin, warm and cooked in its own juices, served in our homemade bread",
        cat_churrascos_title: "CHURRASCOS",
        cat_churrascos_desc: "Sliced beef cooked on a black top, served in our homemade bread",
        cat_vienesas_title: "HOT DOGS (VIENESAS)",
        cat_vienesas_desc: "Traditional Chilean hot dogs on fresh bread with your favorite toppings.",
        cat_fricandelas_title: "FRICANDELAS",
        cat_fricandelas_desc: "A traditional meatball made with a blend of pork and beef, warm and simmered in its own rich gravy",
        cat_gordas_title: "GORDA",
        cat_gordas_desc: "Is a jumbo-sized sausage served in our homemade bread",
        cat_rumanos_title: "ARTISANAL RUMANO",
        cat_rumanos_desc: "Its a type of burger made with a blend of pork and beef, seasoned with red chili cream and garlic. It has a spicy kick",
        cat_agregados_title: "EXTRAS",
        cat_agregados_desc: "Top off your sandwich with our extra ingredients.",
        cat_platos_title: "PLATES",
        cat_platos_desc: "Exquisite plated dishes served in generous portions.",
        cat_aderezos_title: "CONDIMENTS",
        cat_aderezos_desc: "Our artisanal condiments to round out your meal.",
        cat_bebidas_title: "DRINKS",
        cat_bebidas_desc: "Refreshing 350cc canned soft drinks.",
        cat_te_helado_title: "ICED TEA",
        cat_te_helado_desc: "600ml Lipton Iced Tea.",
        cat_jugos_naturales_title: "FRESH JUICES",
        cat_jugos_naturales_desc: "Selected natural fruit pulps.",
        cat_jugos_botella_title: "BOTTLED JUICE",
        cat_jugos_botella_desc: "Individual 300ml bottles.",
        cat_cafeteria_title: "COFFEE & TEA",
        cat_cafeteria_desc: "Hot beverages to accompany your meal.",
        cat_cervezas_botella_title: "BOTTLED BEER",
        cat_cervezas_botella_desc: "A selection of national and imported beers in 330ml and 500ml formats.",
        cat_shops_title: "DRAFT BEER",
        cat_shops_desc: "Ice-cold draft beer served in a mug or large goblet.",
        cat_bebidas_maquina_title: "FOUNTAIN DRINKS",
        cat_bebidas_maquina_desc: "A refreshing blend of concentrated syrup and carbonated water, served fresh from the fountain.",

        footer_legal_link: "Terms & Consumer Protection",
        footer_dev: "Developer",

        legal_title: "Terms, Conditions & Rights",
        tab_btn_1: "Exclusivity & Pricing",
        tab_btn_2: "Right of Withdrawal",
        tab_btn_3: "Allergies & Intolerances",
        tab_btn_4: "Consumer Protection",

        tab1_h3: "Menu & Pricing Exclusivity",
        tab1_p: "The prices, promotions, products and combinations shown in this digital menu apply exclusively to in-house dining. Prices shown on third-party delivery platforms may differ due to their own operational costs.",

        tab2_h3: "Right of Withdrawal (Chilean Law No. 19,496)",
        tab2_p: "In accordance with Article 3 bis of Chilean Law No. 19,496 on Consumer Rights Protection, the right of withdrawal does not apply to the purchase of perishable goods or ready-to-eat food preparations once the order has been confirmed and sent to the kitchen.",

        tab3_h3: "Allergies & Ingredients",
        tab3_p_html: 'Everything we serve is handcrafted and prepared daily in-house. Our avocados are washed and freshly mashed to order, tomatoes are washed and sliced fresh, and both our house tomato sauce and homemade mayonnaise (prepared with pasteurized eggs) are crafted right here.',

        tab4_h3: "Consumer Rights & Payments",
        tab4_li1_html: '<strong>Voluntary Tip:</strong> The suggested tip (10%) is strictly voluntary, in accordance with Chilean Law No. 20,729.',
        tab4_li2_html: '<strong>Proof of Payment:</strong> An electronic receipt will be issued for every purchase made at the establishment.',
        tab4_li3_html: '<strong>Payment Methods:</strong> Cash, debit and credit cards are accepted with no additional surcharges.'
    },

    pt: {
        subtitle: "Monumento Gastronômico",
        follow_us: "Siga-nos",
        note_label: "Nota:",
        note_text: "Sanduíches e cachorros-quentes são servidos exclusivamente em pão amassado artesanal do dia.",

        nav_promociones: "Promoções",
        nav_lomitos: "Lomitos",
        nav_churrascos: "Churrascos",
        nav_vienesas: "Vienesas",
        nav_fricandelas: "Fricandelas",
        nav_gordas: "Gordas",
        nav_rumanos: "Rumanos",
        nav_agregados: "Adicionais",
        nav_platos: "Pratos",
        nav_aderezos: "Molhos",
        nav_bebidas: "Bebidas",
        nav_te_helado: "Chá Gelado",
        nav_jugos_naturales: "Sucos Nat.",
        nav_jugos_botella: "Sucos Gar.",
        nav_cafeteria: "Cafeteria",
        nav_cervezas_botella: "Cervejas",
        nav_shops: "Chopp",
        nav_bebidas_maquina: "Bebida Máquina",

        cat_promociones_title: "PROMOÇÕES",
        cat_promociones_desc: "Aproveite nossas ofertas e combos especiais.",
        cat_lomitos_title: "LOMITOS",
        cat_lomitos_desc: "Finas e deliciosas fatias de lombo de porco cozidas em seu próprio suco.",
        cat_churrascos_title: "CHURRASCOS",
        cat_churrascos_desc: "Finos cortes de carne bovina macia e de primeira seleção, grelhados na chapa.",
        cat_vienesas_title: "VIENESAS",
        cat_vienesas_desc: "Tradicionais salsichas (vienesas) em pão fresco com seus ingredientes favoritos.",
        cat_fricandelas_title: "FRICANDELAS",
        cat_fricandelas_desc: "Hambúrgueres artesanais preparados com a receita exclusiva da casa.",
        cat_gordas_title: "GORDA",
        cat_gordas_desc: "Nossa tradicional e saborosa linguiça grossa e defumada, grelhada na chapa.",
        cat_rumanos_title: "RUMANO ARTESANAL",
        cat_rumanos_desc: "Deliciosa preparação artesanal de carne moída de boi e porco, temperada com um toque de alho e grelhada na chapa.",
        cat_agregados_title: "ADICIONAIS",
        cat_agregados_desc: "Complemente seu sanduíche com nossos ingredientes adicionais.",
        cat_platos_title: "PRATOS",
        cat_platos_desc: "Deliciosas preparações servidas no prato, em porções generosas.",
        cat_aderezos_title: "MOLHOS",
        cat_aderezos_desc: "Nossos molhos artesanais para completar sua refeição.",
        cat_bebidas_title: "BEBIDAS",
        cat_bebidas_desc: "Refrescantes bebidas em lata de 350cc.",
        cat_te_helado_title: "CHÁ GELADO",
        cat_te_helado_desc: "Lipton Ice Tea de 600ml.",
        cat_jugos_naturales_title: "SUCOS NATURAIS",
        cat_jugos_naturales_desc: "Polpas naturais selecionadas.",
        cat_jugos_botella_title: "SUCOS EM GARRAFA",
        cat_jugos_botella_desc: "Formatos individuais de 300ml.",
        cat_cafeteria_title: "CAFETERIA E CHÁ",
        cat_cafeteria_desc: "Bebidas quentes para acompanhar.",
        cat_cervezas_botella_title: "CERVEJAS EM GARRAFA",
        cat_cervezas_botella_desc: "Seleção de cervejas nacionais e importadas nos formatos 330ml e 500ml.",
        cat_shops_title: "CHOPP",
        cat_shops_desc: "Chopp bem gelado, servido em caneca ou taça grande.",
        cat_bebidas_maquina_title: "BEBIDAS DE MÁQUINA",
        cat_bebidas_maquina_desc: "Refrescante combinação de xarope concentrado e água gaseificada (soda), servida na hora.",

        footer_legal_link: "Condições e Proteção ao Consumidor",
        footer_dev: "Desenvolvedor",

        legal_title: "Termos, Condições e Direitos",
        tab_btn_1: "Exclusividade & Preços",
        tab_btn_2: "Direito de Arrependimento",
        tab_btn_3: "Alergias e Intolerâncias",
        tab_btn_4: "Proteção ao Consumidor",

        tab1_h3: "Exclusividade de Cardápio e Preços",
        tab1_p: "Os preços, promoções, produtos e combinações deste cardápio digital são exclusivos para o consumo presencial no estabelecimento. Os preços exibidos em plataformas de delivery de terceiros podem variar devido a custos operacionais próprios.",

        tab2_h3: "Direito de Arrependimento (Lei chilena N° 19.496)",
        tab2_p: "De acordo com o Art. 3° bis da Lei chilena N° 19.496 de Proteção aos Direitos do Consumidor, o direito de arrependimento não se aplica à compra de produtos perecíveis ou preparações alimentícias de consumo imediato, uma vez confirmado e enviado o pedido à cozinha.",

        tab3_h3: "Alergias e Ingredientes",
        tab3_p_html: 'Todas as nossas preparações são artesanais e feitas diariamente no local. O abacate é lavado e amassado na hora, o tomate é lavado e fatiado na hora, e tanto o nosso molho de tomate quanto a maionese caseira (preparada com ovos pasteurizados) são produzidos internamente.',

        tab4_h3: "Direitos do Consumidor e Pagamentos",
        tab4_li1_html: '<strong>Gorjeta Voluntária:</strong> A gorjeta sugerida (10%) é estritamente voluntária, conforme a Lei chilena N° 20.729.',
        tab4_li2_html: '<strong>Comprovante de Pagamento:</strong> Será emitida nota fiscal eletrônica para cada consumo realizado no estabelecimento.',
        tab4_li3_html: '<strong>Formas de Pagamento:</strong> Aceitamos pagamento em dinheiro, cartões de débito e crédito, sem taxas adicionais.'
    }
};

// Aplica el diccionario de traducciones a todos los elementos estáticos de la interfaz
function aplicarTraducciones(lang) {
    const dict = translations[lang] || translations.es;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.documentElement.lang = lang;
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
    if (descripcion) descripcion.innerHTML = productoSeleccionado.descripcion;

    modal.style.display = "flex";
}

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
    aplicarTraducciones(idiomaActual);
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

// Carga dinámica del Menú desde el JSON según el idioma actual (menu_es.json, menu_en.json, menu_pt.json)
async function cargarMenu() {
    try {
        const response = await fetch(`menu_${idiomaActual}.json`);
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
        console.error('Error al cargar el archivo de menú:', error);
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

// Manejo de Pestañas Internas del Modal
function cambiarSubtema(idTab, btnElemento) {
    const contenidos = document.querySelectorAll('.tab-content');
    contenidos.forEach(panel => panel.classList.remove('active'));

    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active'));

    const tabSeleccionada = document.getElementById(idTab);
    if (tabSeleccionada) tabSeleccionada.classList.add('active');
    if (btnElemento) btnElemento.classList.add('active');
}

// Abrir y Cerrar Modales Generales
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) modal.style.display = "flex";
}

function cerrarModal(idModal) {
    const targetId = (typeof idModal === 'string') ? idModal : 'miModal';
    const modal = document.getElementById(targetId);
    if (modal) modal.style.display = "none";
}

function cerrarModalAfuera(event, idModal) {
    const modal = document.getElementById(idModal);
    if (event.target === modal) {
        cerrarModal(idModal);
    }
}

// Función para cambiar de idioma al presionar los botones
function cambiarIdioma(lang, event) {
    if (idiomaActual === lang) return;

    idiomaActual = lang;

    // Actualiza la clase activa en los botones UI
    document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');

    // Vuelve a renderizar la carta y los textos fijos con el nuevo idioma
    aplicarTraducciones(idiomaActual);
    cargarMenu();
}

document.addEventListener('click', function (e) {
  // Detectar clic en el link dentro de la descripción
  const rusaLink = e.target.closest('.rusa-link');
  if (rusaLink) {
    e.preventDefault();
    e.stopPropagation();
    const modal = document.getElementById('modal-rusa');
    if (modal) modal.style.display = 'flex';
  }

  // Detectar clic para cerrar (en la 'X' o fuera de la tarjeta)
  if (e.target.classList.contains('cerrar') || e.target.id === 'modal-rusa') {
    const modal = document.getElementById('modal-rusa');
    if (modal) modal.style.display = 'none';
  }
});