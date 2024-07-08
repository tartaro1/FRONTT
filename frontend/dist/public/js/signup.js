const signup = document.querySelector(".signup");
signup.addEventListener("click", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    localStorage.setItem("nombre", nombre);
    const celular = document.querySelector("#celular").value;
    const cedula = parseInt(document.querySelector("#cedula").value);
    const direccion = document.querySelector("#direccion").value;
    const correo = document.querySelector("#correo").value;
    const contrasena = document.querySelector("#contrasena").value;
    fetch("https://ms-backend-tartaro.onrender.com/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            Nombre: nombre,
            Celular:  celular,
            Cedula: cedula,
            Direccion: direccion,
            Correo: correo,
            Contrasena: contrasena,
            ID_Rol: 1
        })
    })
    .then(res => res.json())
    .then(data => {
        alertify.success("Registro Exitoso")
        setTimeout(() => {
            window.location.href = "/inicio"
        }, 1000);
    })
    .catch(err => console.error(err))
})