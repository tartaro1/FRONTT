document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".delete-user-btn");
  deleteButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const userListItem = e.target.closest('.user-list-item');
      const userName = userListItem.querySelector('.nombre').innerText;
      const modalTitle = document.querySelector("#staticBackdropLabel");
      modalTitle.innerText = `¿Deseas eliminar a "${userName}"?`;
      const id = userListItem.querySelector('.id').innerText;
      const modalAcceptButton = document.querySelector(".accept");
      modalAcceptButton.addEventListener("click", () => {
        fetch(`http://localhost:9200/users/${id}`, {
          method: 'DELETE'
        })
          .then(res => {
            if (res.ok) {
              userListItem.remove();
            }
          })
          .catch(error => console.error('Error deleting user:', error));
      }, { once: true });
    });
  });

  const browser = document.querySelector(".browse");
  browser.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const email = browser.value.trim();
      if (email) {
        window.location.href = `http://localhost:3000/dashboard/users?email=${email}`;
      }
    }
  });

  const savebtn = document.querySelector(".btn-save");
  savebtn.addEventListener("click", () => {
    const nombreElement = document.querySelector(".nombre");
    const celularElement = document.querySelector(".celular");
    const cedulaElement = document.querySelector(".cedula");
    const direccionElement = document.querySelector(".direccion");
    const correoElement = document.querySelector(".correo");
    const contrasenaElement = document.querySelector(".contrasena");
    const rolElement = document.querySelector(".rol");

    if (nombreElement && celularElement && cedulaElement && direccionElement && correoElement && contrasenaElement && rolElement) {
      const nombre = nombreElement.value;
      const celular = celularElement.value;
      const cedula = parseInt(cedulaElement.value);
      const direccion = direccionElement.value;
      const correo = correoElement.value;
      const contrasena = contrasenaElement.value;
      const rol = parseInt(rolElement.value);

      fetch("http://localhost:9200/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Nombre: nombre,
          Celular: celular,
          Cedula: cedula,
          Direccion: direccion,
          Correo: correo,
          Contrasena: contrasena,
          ID_Rol: rol
        })
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => {
          console.log("Success:", data);
          const modal = bootstrap.Modal.getInstance(document.querySelector('#exampleAddUserModal'));
          modal.hide();
          location.reload();
        })
        .catch(error => {
          console.error("Error:", error);
        });
    } else {
      console.error("One or more input fields are missing");
    }
  });

  const editButtons = document.querySelectorAll(".edit-user-btn");
  editButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const userListItem = e.target.closest('.user-list-item');
      const id = userListItem.querySelector('.id').innerText;
      const nombreElement = document.querySelector(".nombreEdit");
      const celularElement = document.querySelector(".celularEdit");
      const cedulaElement = document.querySelector(".cedulaEdit");
      const direccionElement = document.querySelector(".direccionEdit");
      const correoElement = document.querySelector(".correoEdit");
      const contrasenaElement = document.querySelector(".contrasenaEdit");

      fetch(`http://localhost:9200/users/${id}`)
        .then(res => res.json())
        .then(userArray => {
          if (userArray && userArray.length > 0) {
            const user = userArray[0];
            if (nombreElement && celularElement && cedulaElement && direccionElement && correoElement && contrasenaElement) {
              nombreElement.value = user.Nombre;
              celularElement.value = user.Celular;
              cedulaElement.value = user.Cedula;
              direccionElement.value = user.Direccion;
              correoElement.value = user.Correo;
              contrasenaElement.value = user.Contrasena;

              const saveEditButton = document.querySelector(".btn-save-edit");
              saveEditButton.addEventListener("click", () => {
                if (nombreElement && celularElement && cedulaElement && direccionElement && correoElement && contrasenaElement) {
                  const nombre = nombreElement.value;
                  const celular = celularElement.value;
                  const cedula = parseInt(cedulaElement.value);
                  const direccion = direccionElement.value;
                  const correo = correoElement.value;
                  const contrasena = contrasenaElement.value;

                  fetch(`http://localhost:9200/users/${id}`, {
                    method: 'PATCH',
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      Nombre: nombre,
                      Celular: celular,
                      Cedula: cedula,
                      Direccion: direccion,
                      Correo: correo,
                      Contrasena: contrasena
                    })
                  })
                    .then(res => {
                      if (res.ok) {
                        return res.json();
                      } else {
                        throw new Error('Error updating user');
                      }
                    })
                    .then(data => {
                      console.log("User updated successfully:", data);
                      const modal = bootstrap.Modal.getInstance(document.querySelector('#exampleEditUserModal'));
                      modal.hide();
                      location.reload();
                    })
                    .catch(error => {
                      console.error('Error:', error);
                    });
                }
              }, { once: true });
            }
          } else {
            console.error("No user data found for the provided ID");
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
});
