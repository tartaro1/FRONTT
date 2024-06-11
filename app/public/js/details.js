let options = document.querySelector("#inputState");
options.addEventListener("change", () => {
    window.location.href = `http://localhost:9200/detailsOrders?provider=${options.value}`;
});