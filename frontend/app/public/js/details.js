let options = document.querySelector("#inputState");
options.addEventListener("change", () => {
    window.location.href = `https://frontt-ig4n.onrender.com/dashboard/detailsOrders?provider=${options.value}`;
});