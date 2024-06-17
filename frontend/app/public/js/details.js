let options = document.querySelector("#inputState");
options.addEventListener("change", () => {
    window.location.href = `http://localhost:9200/dashboard/detailsOrders?provider=${options.value}`;
});