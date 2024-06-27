const send = document.querySelector(".send");
send.addEventListener("click", () => {
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    fetch("http://localhost:9200/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Correo: correo,
            Contrasena: contrasena
        })
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token);
        if (data.role === 2) {
            window.location.href = "/dashboard";
        } else if (data.role === 1) {
            window.location.href = "/index";
        } else {
            console.error('Invalid role');
        }
    })
    .catch(err => console.error(err))
})