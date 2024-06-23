let options = document.querySelector("#inputState");
options.addEventListener("change", () => {
    window.location.href = `http://localhost:3000/dashboard/detailsOrders?provider=${options.value}`;
});