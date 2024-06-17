// Elementos del menú y otros elementos
let menu = document.querySelectorAll(".menu");
let ad = document.querySelector(".anuncio");
let recommended = document.querySelector(".produ_recomendados");
let backBtn = document.querySelector(".back");

// Evento de clic para el menú
menu.forEach(item => {
    item.addEventListener("click", (e) => {
        const clickedButton = e.target;
        let text = clickedButton.textContent.trim();
        
        // Guardar el estado del botón seleccionado en localStorage
        localStorage.setItem('selectedCategory', text);

        // Cambiar la URL
        window.location.href = `http://localhost:9200/index/products?category=${text}`;
    });
});

// Recuperar el estado del botón seleccionado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const selectedCategory = localStorage.getItem('selectedCategory');
    if (selectedCategory) {
        menu.forEach(item => {
            if (item.textContent.trim() === selectedCategory) {
                item.classList.add("clicked");
                item.classList.remove("menu");
            } else {
                item.classList.add("menu");
                item.classList.remove("clicked");
            }
        });
    }
});

// Evento de clic para el botón "back"
backBtn.addEventListener("click", () => {
    localStorage.clear();
});

function getSiblings(elem) {
    const nodes = Array.from(elem.parentNode.childNodes);
    const siblings = {
        previous: null,
        next: null
    };
    for (const node of nodes) {
        if (node === elem) {
            const index = nodes.indexOf(node);
            if (index > 0) {
                siblings.previous = nodes[index - 1];
            }
            if (index < nodes.length - 1) {
                siblings.next = nodes[index + 1];
            }
            break;
        }
    }
    return siblings;
}

// Funciones para incrementar y decrementar la cantidad
function incrementarCantidad(card) {
    const cantidadSpan = card.querySelector("span");
    let cantidad = parseInt(cantidadSpan.textContent);
    cantidad++;
    cantidadSpan.textContent = cantidad + " unidades";
}

function decrementarCantidad(card) {
    const cantidadSpan = card.querySelector("span");
    let cantidad = parseInt(cantidadSpan.textContent);
    if (cantidad === 1) {
        cantidadSpan.textContent = cantidad + " unidad";
    } else if (cantidad > 1) {
        cantidad--;
        cantidadSpan.textContent = cantidad + " unidad";
    }
}
