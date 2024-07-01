const send = document.querySelector(".send");
send.addEventListener("click", (e) => {
    e.preventDefault();
    const correo = document.getElementById("email").value;
    const contrasena = document.getElementById("password").value;
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
        sessionStorage.setItem("token", data.token);
        if (data.role === 2) {
            alertify.success("Login exitoso");
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 1000);
        } else if (data.role === 1) {
            alertify.success("Login exitoso");
            setTimeout(() => {
                window.location.href = "/inicio";
            }, 1000);
        } else {
            alertify.error("correo o contraseña incorrecta")
            console.error('Invalid role');
        }
    })
    .catch(err => console.error(err))
})
