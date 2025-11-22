// Referencias al DOM
const galeria = document.getElementById('galeria');
const modal = document.getElementById('modal-producto');
const btnCerrar = document.querySelector('.cerrar');

// Cargar productos al inicio
window.onload = () => {
    mostrarProductos(productos);
};

// Función para dibujar los productos en el Grid
function mostrarProductos(lista) {
    galeria.innerHTML = ''; // Limpiar
    lista.forEach(prod => {
        const div = document.createElement('div');
        div.classList.add('producto-card');
        // Al hacer click, abrimos el modal con este producto
        div.onclick = () => abrirModal(prod);
        
        div.innerHTML = `
            <img src="${prod.fotos[0]}" alt="${prod.nombre}">
        `;
        galeria.appendChild(div);
    });
}

// Filtrado
function filtrar(categoria) {
    // Actualizar botones visualmente
    document.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('activo'));
    event.target.classList.add('activo');

    if (categoria === 'todo') {
        mostrarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === categoria);
        mostrarProductos(filtrados);
    }
}

// Lógica del Modal
function abrirModal(producto) {
    // Llenar datos
    document.getElementById('modal-titulo').innerText = producto.nombre;
    document.getElementById('modal-cat').innerText = producto.categoria.toUpperCase();
    document.getElementById('modal-desc').innerText = producto.descripcion;
    
    // Fotos
    document.getElementById('modal-img-principal').src = producto.fotos[0];
    document.getElementById('modal-thumb-1').src = producto.fotos[1];
    document.getElementById('modal-thumb-2').src = producto.fotos[2];
    document.getElementById('modal-thumb-3').src = producto.fotos[3];

    // Tallas
    const divTallas = document.getElementById('modal-tallas');
    divTallas.innerHTML = '';
    producto.tallas.forEach(talla => {
        divTallas.innerHTML += `<span>${talla}</span>`;
    });

    // Configurar Botón de WhatsApp
    const mensaje = `Hola, me interesa la *${producto.nombre}*. ¿Me podrías dar más información y precio?`;
    const link = `https://wa.me/${MI_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
    document.getElementById('btn-whatsapp').href = link;

    // Mostrar modal
    modal.style.display = 'block';
}

// Cambiar foto principal al hacer click en las pequeñas
function cambiarFoto(imgPeque) {
    document.getElementById('modal-img-principal').src = imgPeque.src;
}

// Cerrar Modal
btnCerrar.onclick = () => modal.style.display = 'none';
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}