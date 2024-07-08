document.addEventListener('DOMContentLoaded', () => {
    let generar = document.querySelectorAll(".generar");
    generar.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Obtener el contenedor de la factura correspondiente
            const info = e.target.closest('.user-list-item');
            const id = info.querySelector('.id').innerText.trim();
            const estado = info.querySelector(".estado").innerText
            const direccion = info.querySelector('.direccion').innerText
            const cliente = info.querySelector('.cliente').innerText
            const fecha = info.querySelector('.fecha').innerText


            // Agregar contenido al PDF
            doc.text(estado, 10, 10)
            doc.text(direccion, 10, 20)
            doc.text(cliente, 10, 30)
            doc.text(fecha,10,40)

            // Descargar el PDF con el nombre basado en la ID de la factura
            doc.save(`tartaro_pedido_${id}.pdf`);
        });
    });
});