const producto = () => {
    let url = "https://ms-backend-tartaro.onrender.com/products/1";
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then(response => {
            console.log(response);

            const product = response[0];
            document.getElementById("producto-nombre").textContent = product['NombreProducto'];
            document.getElementById("producto-precio").textContent = product['PrecioVenta'];
            document.getElementById("producto-img").src = product['imagen'];
            document.getElementById("producto-descripcion").textContent = product['Descripcion'];
            document.getElementById("producto-stock").textContent = product['Stock'];

        })
        .catch(error => {
            console.error("Error fetching response data:", error);
        });
}

producto();
