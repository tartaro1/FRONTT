const browser = document.querySelector("#browse")
browser.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const dealer = browser.value.trim();
        if (dealer) {
            window.location.href = `https://frontt-ig4n.onrender.com//dashboard/orders?dealer=${dealer}`;
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const userItems = document.querySelectorAll('.user-list-item');
    userItems.forEach(order => {
        const id = order.querySelector('.id').innerText;
        fetch(`https://ms-backend-tartaro.onrender.com/detailsOrders/${id}`)
            .then(response => response.json())
            .then(data => {
                let subtotal = 0;
                data.forEach(producto => {
                    subtotal += producto.PrecioVenta * producto.Cantidad;
                });
                order.querySelector('.precio').innerText = `$${subtotal}`;
            })
            .catch(err => console.log(err));
    });

    const editButtons = document.querySelectorAll(".edit-user-btn");
    editButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let subtotal = 0;
            const order = e.target.closest(".user-list-item");
            const id = order.querySelector(".id").innerText;
            const container = document.querySelector(".detalles");
            const repartidor = document.querySelector(".repartidor").textContent
            let userText = document.querySelector(".usuario");
            let client = order.querySelector(".cliente");
            let dealerText = document.querySelector(".dealer");
            const repartidorSelect = document.querySelector(".rep");
            repartidorSelect.innerHTML = repartidor
            container.innerHTML = "";
            userText.textContent = `Usuario: ${client.textContent}`;
            fetch("https://ms-backend-tartaro.onrender.com/dealers")
            .then(res => res.json())
            .then(data => {
                data.forEach((text, count) => {
                    let option = document.createElement("option");
                    option.classList = "option"
                    option.value = data[count].ID_Usuario
                    option.innerHTML = data[count].Nombre
                    dealerText.appendChild(option);
                })
            })
            fetch(`https://ms-backend-tartaro.onrender.com/detailsOrders/${id}`)
                .then(response => response.json())
                .then(data => {
                    data.forEach(producto => {
                        let alert = `
                            <div class="alert alert-light alert-dismissible fade show" role="alert">
                                <div class="card" style="width: 100%; height: auto;">
                                    <img style="width: 50vh; height: 30vh; margin: auto;" class="img" src="${producto.imagen}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <button type="button" class="btn-close btn-produ" data-bs-dismiss="alert" aria-label="Close"></button>
                                        <form class="row g-3">
                                            <div class="col-md-3">
                                                <label for="inputCity" class="form-label">Nombre</label>
                                                <input type="text" disabled class="form-control nombreEdit" value="${producto.NombreProducto}">
                                            </div>
                                            <div class="col-md-3">
                                                <label for="inputState" class="form-label">Cantidad</label>
                                                <input type="number" class="form-control cantidadEdit" value="${producto.Cantidad}">
                                            </div>
                                            <div class="col-md-3">
                                                <label for="inputZip" class="form-label">Precio</label>
                                                <input type="number" disabled class="form-control precioEdit" value="${producto.PrecioVenta}">
                                            </div>
                                            <div class="col-md-3">
                                                <label for="inputZip" class="form-label">Imagen</label>
                                                <input type="text" disabled class="form-control precioEdit" value="${producto.imagen}">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>`;
                        container.innerHTML += alert;
                        subtotal += (parseInt(producto.PrecioVenta * producto.Cantidad));
                    });

                    let totalesHtml = `
                    <p>Subtotal: $${subtotal}</p>
                    <p>IVA: $${parseInt((subtotal * 0.19))}</p>
                    <p>Total: $${parseInt((subtotal * 0.19)) + subtotal}</p>`;
                    let resultados = document.querySelector(".totales");
                    resultados.innerHTML = totalesHtml;
                    const save = document.querySelector('.save');
                    save.replaceWith(save.cloneNode(true));
                    document.querySelector('.save').addEventListener('click', () => {
                        fetch(`https://ms-backend-tartaro.onrender.com/detailsOrders/${id}`)
                        const cantidadEdit = document.querySelectorAll('.cantidadEdit');
                        cantidadEdit.forEach((input, index) => {
                            const productID = data[index].ID_DetallePedido;
                            const cantidad = input.value;
                            fetch(`https://ms-backend-tartaro.onrender.com/detailsOrders/${productID}`, {
                                headers: { 'Content-Type': 'application/json' },
                                method: "PATCH",
                                body: JSON.stringify({
                                    Cantidad: cantidad
                                })
                            })
                                .then(res => {
                                    if (res.ok) {
                                        return res.json();
                                    } else {
                                        throw new Error("Error updating cantidad");
                                    }
                                })
                                .then(data => {
                                    console.log(data);
                                    const modal = bootstrap.Modal.getInstance(document.querySelector('#exampleEditUserModal'));
                                    modal.hide();
                                    // location.reload();
                                    resultados.innerHTML = "";
                                })
                                .catch(err => console.log(err));
                        });
                    });

                    let btnRemove = document.querySelectorAll(".btn-produ");
                    btnRemove.forEach((btn, index) => {
                        btn.removeEventListener('click', removeProduct);
                        btn.addEventListener('click', (e) => removeProduct(e, data[index]));
                    });

                    const statusSelects = document.querySelectorAll("#inputGroupSelect01");
                    statusSelects.forEach((statusSelect, index) => {
                        statusSelect.replaceWith(statusSelect.cloneNode(true));
                        statusSelect = document.querySelectorAll("#inputGroupSelect01")[index];
                        statusSelect.addEventListener("change", () => {
                            const newStatus = statusSelect.value;
                            fetch(`https://ms-backend-tartaro.onrender.com/orders/state/${id}`, {
                                headers: { 'Content-Type': 'application/json' },
                                method: "PATCH",
                                body: JSON.stringify({
                                    EstadoPedido: newStatus
                                })
                            })
                                .then(res => {
                                    if (res.ok) {
                                        return res.json();
                                    } else {
                                        throw new Error("Error updating order status");
                                    }
                                })
                                .then(data => {
                                    console.log(data);
                                })
                                .catch(err => console.log(err));
                        });
                    });
                    const selectDealer = document.querySelectorAll("#inputGroupSelect02")
                    selectDealer.forEach((dealerSelect, index) => {
                        dealerSelect = document.querySelectorAll(`#inputGroupSelect02`)[index]
                        dealerSelect.addEventListener("change", () => {
                            const newDealer = dealerSelect.value
                            console.log(newDealer);
                            fetch(`https://ms-backend-tartaro.onrender.com/orders/${id}`, {
                                method: "PATCH",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    ID_Repartidor: newDealer
                                })
                            })
                            .then(res => {
                                if (res.ok) {
                                    return res.json();
                                } else {
                                    throw new Error("Error updating order dealer");
                                }
                            })
                            .then(data => {
                                console.log(data);
                            })
                            .catch(err => console.log(err));
                        })
                    })
                });
        });
    });
});

function removeProduct(e, producto) {
    const alertEliminar = e.target.closest(".alert");
    fetch(`https://ms-backend-tartaro.onrender.com/detailsOrders/${producto.ID_DetallePedido}`, {
        method: 'DELETE',
    })
        .then(res => {
            if (res.ok) {
                alertEliminar.remove();
            }
        })
        .catch(err => console.log(err));
}

const deleteButtons = document.querySelectorAll(".delete-user-btn");
deleteButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const orderListItem = e.target.closest('.user-list-item');
        const orderName = orderListItem.querySelector('.cliente').innerText;
        const modalTitle = document.querySelector("#staticBackdropLabel");
        modalTitle.innerText = `¿Deseas eliminar el pedido de: "${orderName}"?`;
        const id = orderListItem.querySelector('.id').innerText;
        const modalAcceptButton = document.querySelector(".accept");
        modalAcceptButton.addEventListener("click", () => {
            fetch(`https://ms-backend-tartaro.onrender.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => {
                    if (res.ok) {
                        orderListItem.remove();
                    }
                })
                .catch(error => console.error('Error deleting order:', error));
        });
    });
});