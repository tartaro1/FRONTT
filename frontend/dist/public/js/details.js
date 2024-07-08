let options = document.querySelector("#inputState");
options.addEventListener("change", () => {
    window.location.href = `/dashboard/detailsOrders?provider=${options.value}`;
});