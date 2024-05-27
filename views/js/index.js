let optionUser = document.querySelector(".usersOption");
let content = document.querySelector(".contentDelete");
let optionProduct = document.querySelector(".productsOption");
let htmlProduct = `
<div class="content">
<!-- Barra de búsqueda -->
<div class="container mt-4">
<div class="row">
  <span class="col-10 title-user">Lista de Productos</span>
  <div class="col-2 p-1 sidebar-item"><i class="sidebar-icon bi bi-person-circle"></i> <span style="margin-left: 10px;">Emmanuel</span></div>
</div>

<div class="search-and-add">
<!-- Barra de búsqueda -->
<div class="search-bar">
  <div class="input-group">
  <input type="search" class="form-control rounded-pill alert-dark" aria-label="Buscar usuario"><i class="bi bi-search"></i>
  </div>
</div>

<!-- Botón de agregar usuario -->
<button class="btn btn-warning add-user-btn" style="color:#fff" type="button" data-bs-toggle="modal" data-bs-target="#exampleAddUserModal""><i class="bi bi-plus"></i></button>
</div>
</div>

<!-- Modal Añadir Producto-->
<div class="modal fade" id="exampleAddUserModal" tabindex="-1" aria-labelledby="exampleEditUserModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
  <h4 class="modal-title fs-5" id="exampleEditUserModalLabel">Editar Producto</h4>
  <button type="button" class="btn btn-outline-dark bi-x btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body" style="padding-top: 0;">
  <form>
    <div class="container">
      <div class="row align-items-start">
      <div class="col" style="margin-top: 15px;">
        <div style="text-align: center;position:relative;" class="mb-3 rounded">
          <div class="rounded" style="width:200px;height:200px;border:1px solid #ccc;">
            <button class="btn edit-user-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleAddUserModal"><i class="sidebar-icon bi bi-card-image"></i></button>
          </div>
          </div>
          <div class="mb-3">
          <label for="recipient-name" class="col-form-label">Marca</label>
          <input type="text" class="form-control  marca alert-dark rounded" id="recipient-name">
          <label for="recipient-name" class="col-form-label">Proveedor</label>
          <input type="number" class="form-control proveedor alert-dark rounded" id="recipient-name">
          <label for="recipient-name" class="col-form-label">calificacion</label>
          <input type="number" class="form-control calificacion alert-dark rounded" id="recipient-name">
          </div>
      </div>
      <div class="col">
        <div class="mb-1">
        <label for="recipient-name" class="col-form-label">Nombre</label>
        <input type="text" class="form-control nombre alert-dark rounded" id="recipient-name" placeholder="Nombre">
        </div>
        <div class="mb-1">
        <label for="recipient-name" class="col-form-label">Descripción</label>
        <textarea class="form-control alert-dark descripcion rounded" id="exampleFormControlTextarea1" rows="3" ></textarea>
        </div>
        <div class="mb-1">
        <label for="recipient-name" class="col-form-label">Precio</label>
        <input type="number" class="form-control precio alert-dark rounded" id="recipient-name" placeholder="$">
        </div>
        <div class="mb-2">
        <label for="recipient-name" class="col-form-label">categoria</label>
        <input type="number" class="form-control categoria alert-dark rounded" id="recipient-name" placeholder="0">
        </div>
      </div>
      </div>
    </div>
  </form>
  <div style="text-align: center;">
    <button type="button" class="btn btn-warning btn-save" data-bs-dismiss="modal">Guardar</button>
  </div>
  </div>
</div>
</div>
</div>

<!-- Lista de usuarios -->
<div class="user-list">
  <!-- Elemento de la lista de usuario -->
  <!-- Repetir el elemento de la lista para cada usuario -->
</div>
<!-- Modal Editar Usuario -->
<div class="modal fade" id="exampleEditUserModal" tabindex="-1" aria-labelledby="exampleEditUserModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
  <h4 class="modal-title fs-5" id="exampleEditUserModalLabel">Agregar Producto</h4>
  <button type="button" class="btn btn-outline-dark bi-x btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body" style="padding-top: 0;">
  <form>
    <div class="container">
      <div class="row align-items-start">
      <div class="col" style="margin-top: 15px;">
        <div style="text-align: center;position:relative;" class="mb-3 rounded">
          <div class="rounded" style="width:200px;height:200px;border:1px solid #ccc;">
            <button class="btn edit-user-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleAddUserModal"><i class="sidebar-icon bi bi-card-image"></i></button>
          </div>
          </div>
          <div class="mb-3">
          <label for="recipient-name" class="col-form-label">Marca</label>
          <input type="text" class="form-control  marcaEdit alert-dark rounded" id="recipient-name">
          <label for="recipient-name" class="col-form-label">Proveedor</label>
          <input type="number" class="form-control proveedorEdit alert-dark rounded" id="recipient-name">
          <label for="recipient-name" class="col-form-label">calificacion</label>
          <input type="number" class="form-control calificacionEdit alert-dark rounded" id="recipient-name">
          </div>
      </div>
      <div class="col">
        <div class="mb-1">
        <label for="recipient-name" class="col-form-label">Nombre</label>
        <input type="text" class="form-control nombreEdit alert-dark rounded" id="recipient-name" placeholder="Nombre">
        </div>
        <div class="mb-1">
        <label for="recipient-name" class="col-form-label">Descripción</label>
        <textarea class="form-control alert-dark descripcionEdit rounded" id="exampleFormControlTextarea1" rows="3" ></textarea>
        </div>
        <div class="mb-1">
        <label for="recipient-name" class="col-form-label">Precio</label>
        <input type="number" class="form-control precioEdit alert-dark rounded" id="recipient-name" placeholder="$">
        </div>
        <div class="mb-2">
        <label for="recipient-name" class="col-form-label">categoria</label>
        <input type="number" class="form-control categoriaEdit alert-dark rounded" id="recipient-name" placeholder="0">
        </div>
      </div>
      </div>
    </div>
  </form>
  <div style="text-align: center;">
    <button type="button" class="btn btn-warning btn-save-edit" data-bs-dismiss="modal">Guardar</button>
  </div>
  </div>
</div>
</div>
</div>
<!-- Modal Eliminar Usuario -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
  <div class="modal-header" style="align-self: center;padding-bottom:20px">
  <h5 class="modal-title fs-5" id="staticBackdropLabel">¿Deseas eliminar "Lomo de res"?</h5>
  </div>
  <div style="text-align: center;padding-bottom: 20px;">
  <button type="button" class="btn btn-warning accept" data-bs-dismiss="modal" style="color:white">Aceptar</button>
  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Rechazar</button>
  </div>
</div>
</div>
</div>
</div>`
let html = `
<div class="content">
  <!-- Barra de búsqueda -->
  <div class="container mt-4">
    <div class="row">
      <span class="col-10 title-user">Lista de Usuarios</span>
      <div class="col-2 p-1 sidebar-item"><i class="sidebar-icon bi bi-person-circle"></i> <span style="margin-left: 10px;">Emmanuel</span></div>
    </div>
    <div class="search-and-add">
      <!-- Barra de búsqueda -->
      <div class="search-bar">
        <div class="input-group">
          <input type="search" class="form-control rounded-pill alert-dark" aria-label="Buscar usuario"><i class="bi bi-search"></i>
        </div>
      </div>
      <!-- Botón de agregar usuario -->
      <button class="btn btn-warning add-user-btn" style="color:#fff;" type="button" data-bs-toggle="modal" data-bs-target="#exampleAddUserModal"><i class="bi bi-plus"></i></button>
    </div>
  </div>
  <div class="modal fade" id="exampleAddUserModal" tabindex="-1" aria-labelledby="exampleEditUserModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="exampleEditUserModalLabel">Agregar Usuarios</h3>
          <button type="button" class="btn btn-outline-dark bi-x btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>
            <div class="mb-3">
                <label for="nombre" class="col-form-label">Nombre</label>
                <input type="text" class="form-control alert-dark rounded nombre" id="nombre">
            </div>
            <div class="mb-3">
                <label for="celular" class="col-form-label">Celular</label>
                <input type="text" class="form-control alert-dark rounded celular" id="celular">
            </div>
            <div class="mb-3">
                <label for="cedula" class="col-form-label">Cedula</label>
                <input type="text" class="form-control alert-dark rounded cedula" id="cedula">
            </div>
            <div class="mb-3">
                <label for="direccion" class="col-form-label">Direccion</label>
                <input type="text" class="form-control alert-dark rounded direccion" id="direccion">
            </div>
            <div class="mb-3">
                <label for="correo" class="col-form-label">Correo</label>
                <input type="text" class="form-control alert-dark rounded correo" id="correo">
            </div>
            <div class="mb-3">
                <label for="contrasena" class="col-form-label">Contraseña</label>
                <input type="text" class="form-control alert-dark rounded contrasena" id="contrasena">
            </div>
        </form>
        <div style="text-align: center;">
            <button type="button" class="btn btn-warning btn-save">Guardar</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Lista de usuarios -->
  <div class="user-list">
    <!-- Elemento de la lista de usuario -->
    <!-- Repetir el elemento de la lista para cada usuario -->
  </div>
  <!-- Modal Editar Usuario -->
  <div class="modal fade" id="exampleEditUserModal" tabindex="-1" aria-labelledby="exampleEditUserModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="exampleEditUserModalLabel">Editar Usuarios</h3>
          <button type="button" class="btn btn-outline-dark bi-x btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>
        <div class="mb-3">
            <label for="nombreEdit" class="col-form-label">Nombre</label>
            <input type="text" class="form-control alert-dark rounded nombreEdit" id="nombreEdit">
        </div>
        <div class="mb-3">
            <label for="celularEdit" class="col-form-label">Celular</label>
            <input type="text" class="form-control alert-dark rounded celularEdit" id="celularEdit">
        </div>
        <div class="mb-3">
            <label for="cedulaEdit" class="col-form-label">Cedula</label>
            <input type="text" class="form-control alert-dark rounded cedulaEdit" id="cedulaEdit">
        </div>
        <div class="mb-3">
            <label for="direccionEdit" class="col-form-label">Direccion</label>
            <input type="text" class="form-control alert-dark rounded direccionEdit" id="direccionEdit">
        </div>
        <div class="mb-3">
            <label for="correoEdit" class="col-form-label">Correo</label>
            <input type="text" class="form-control alert-dark rounded correoEdit" id="correoEdit">
        </div>
        <div class="mb-3">
            <label for="contrasenaEdit" class="col-form-label">Contraseña</label>
            <input type="text" class="form-control alert-dark rounded contrasenaEdit" id="contrasenaEdit">
        </div>
    </form>
          <div style="text-align: center;">
            <button type="button" class="btn btn-warning btn-save-edit" data-bs-dismiss="modal">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal Eliminar Usuario -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header" style="align-self: center;padding-bottom:20px">
          <h5 class="modal-title fs-5" id="staticBackdropLabel">¿Deseas eliminar a "Esneider"?</h5>
        </div>
        <div style="text-align: center;padding-bottom: 20px;">
          <button type="button" class="btn btn-warning accept" data-bs-dismiss="modal" style="color:white">Aceptar</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Rechazar</button>
        </div>
      </div>
    </div>
  </div>
</div>
`;

optionUser.addEventListener('click', () => {
  content.innerHTML = html;
  const userList = document.querySelector(".user-list");
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => {
      const userArray = users.flat();
      const htmlUser = userArray.map(user => {
        return `
        <div class="user-list-item row mt-3 align-items-center" data-id="${user.ID_Usuario}">
          <div class="col-6 col-md-2">
            <i class="sidebar-icon bi bi-person align-middle"></i>
            <span class="user-name">${user.Nombre}</span>
          </div>
          <div class="col-6 col-md-2">
            <span class="user-email">${user.Celular}</span>
          </div>
          <div class="col-6 col-md-2">
            <span class="user-phone">${user.Correo}</span>
          </div>
          <div class="col-6 col-md-2 d-flex">
            <div class="bg-warning rounded icon-button">
              <button class="btn btn-warning edit-user-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleEditUserModal">
                <i class="sidebar-icon bi bi-pencil-fill"></i>
              </button>
            </div>
            <div class="bg-danger rounded icon-button ms-1 remove">
              <button type="button" class="btn btn-danger delete-user-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i class="sidebar-icon bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>
        `;
      }).join('');
      userList.innerHTML = htmlUser;

      const deleteButtons = document.querySelectorAll(".delete-user-btn");
      deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
          const userListItem = e.target.closest('.user-list-item');
          const userName = userListItem.querySelector('.user-name').innerText;
          const modalTitle = document.querySelector("#staticBackdropLabel");
          modalTitle.innerText = `¿Deseas eliminar a "${userName}"?`;
          const id = userListItem.dataset.id;
          const modalAcceptButton = document.querySelector(".accept");
          modalAcceptButton.addEventListener("click", () => {
            fetch(`http://localhost:3000/users/${id}`, {
              method: 'DELETE'
            })
              .then(res => {
                if (res.ok) {
                  userListItem.remove();
                }
              })
              .catch(error => console.error('Error deleting user:', error));
          });
        });
      });

      const savebtn = document.querySelector(".btn-save");
      savebtn.addEventListener("click", () => {
        const nombreElement = document.querySelector(".nombre");
        const celularElement = document.querySelector(".celular");
        const cedulaElement = document.querySelector(".cedula");
        const direccionElement = document.querySelector(".direccion");
        const correoElement = document.querySelector(".correo");
        const contrasenaElement = document.querySelector(".contrasena");

        if (nombreElement && celularElement && cedulaElement && direccionElement && correoElement && contrasenaElement) {
          const nombre = nombreElement.value;
          const celular = celularElement.value;
          const cedula = parseInt(cedulaElement.value);
          const direccion = direccionElement.value;
          const correo = correoElement.value;
          const contrasena = contrasenaElement.value;

          fetch("http://localhost:3000/users", {
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
              Contrasena: contrasena
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
          const id = userListItem.dataset.id;
          const nombreElement = document.querySelector(".nombreEdit");
          const celularElement = document.querySelector(".celularEdit");
          const cedulaElement = document.querySelector(".cedulaEdit");
          const direccionElement = document.querySelector(".direccionEdit");
          const correoElement = document.querySelector(".correoEdit");
          const contrasenaElement = document.querySelector(".contrasenaEdit");

          fetch(`http://localhost:3000/users/${id}`)
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
                      const id = userListItem.dataset.id;
                      fetch(`http://localhost:3000/users/${id}`, {
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
});

optionProduct.addEventListener("click", () => {
  content.innerHTML = htmlProduct;
  const productList = document.querySelector(".user-list");
  fetch("http://localhost:3000/products")
  .then(response => response.json())
  .then(products => {
    const productArray = products.flat();
    const htmlProduct = productArray.map(product => {
      return ` 
      <div class="user-list-item row mt-3 align-items-center" data-id="${product.id}">
          <div class="col-6 col-md-3">
            <span class="product-img">${product.imagen}</span>
            <span class="product-name">${product.NombreProducto}</span>
          </div>
          <div class="col-6 col-md-2">
            <span class="product-disponibilidad">${product.Disponibilidad}</span>
          </div>
          <div class="col-6 col-md-2">
            <span class="product-venta">${product.PrecioVenta}</span>
          </div>
          <div class="col-6 col-md-2 d-flex">
            <div class="bg-warning rounded icon-button">
              <button class="btn btn-warning edit-user-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleEditUserModal">
                <i class="sidebar-icon bi bi-pencil-fill"></i>
              </button>
            </div>
            <div class="bg-danger rounded icon-button ms-1 remove">
              <button type="button" class="btn btn-danger delete-user-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i class="sidebar-icon bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>`
    }).join("")
    productList.innerHTML = htmlProduct;
    const deleteButtons = document.querySelectorAll(".delete-user-btn");
    deleteButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const productListItem = e.target.closest('.user-list-item');
        const productName = productListItem.querySelector('.product-name').innerText;
        const modalTitle = document.querySelector("#staticBackdropLabel");
        modalTitle.innerText = `¿Deseas eliminar el producto: "${productName}"?`;
        const id = productListItem.dataset.id;
        const modalAcceptButton = document.querySelector(".accept");
        modalAcceptButton.addEventListener("click", () => {
          fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
          })
            .then(res => {
              if (res.ok) {
                productListItem.remove();
              }
            })
            .catch(error => console.error('Error deleting product:', error));
        });
      });
    });
    const savebtn = document.querySelector(".btn-save");
      savebtn.addEventListener("click", () => {
        const nombreElement = document.querySelector(".nombre");
        const categoriaElement = document.querySelector(".categoria");
        const marcaElement = document.querySelector(".marca");
        const descripcionElement = document.querySelector(".descripcion");
        const precioElement = document.querySelector(".precio");
        const calificacionElement = document.querySelector(".calificacion");
        const proveedorElement = document.querySelector(".proveedor");

        if (nombreElement && marcaElement && descripcionElement && precioElement && categoriaElement && calificacionElement && proveedorElement) {
          const nombre = nombreElement.value;
          const categoria = parseInt(categoriaElement.value);
          const marca = marcaElement.value;
          const proveedor = parseInt(proveedorElement.value);
          const descripcion = descripcionElement.value;
          const precio = parseInt(precioElement.value);
          const calificacion = parseInt(calificacionElement.value);

          fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              nombre: nombre,
              id_categoria: categoria,
              marca: marca,
              id_proveedor: proveedor,
              descripcion: descripcion,
              precio: precio,
              calificacion: calificacion
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
          const productListItem = e.target.closest('.user-list-item');
          const id = productListItem.dataset.id;
          const nombreElement = document.querySelector(".nombreEdit");
          const categoriaElement = document.querySelector(".categoriaEdit");
          const marcaElement = document.querySelector(".marcaEdit");
          const descripcionElement = document.querySelector(".descripcionEdit");
          const precioElement = document.querySelector(".precioEdit");
          const calificacionElement = document.querySelector(".calificacionEdit");
          const proveedorElement = document.querySelector(".proveedorEdit");

          fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(productArray => {
              if (productArray && productArray.length > 0) {
                const product = productArray[0];
                if (nombreElement && marcaElement && descripcionElement && precioElement && categoriaElement && calificacionElement && proveedorElement) {
                nombreElement.value = product.NombreProducto;
                categoriaElement.value = product.ID_Categoria;
                marcaElement.value = product.Marca;
                proveedorElement.value = product.ID_Proveedor;
                descripcionElement.value = product.Descripcion;
                precioElement.value = product.PrecioVenta;
                calificacionElement.value = product.Calificacion;
      
                  const saveEditButton = document.querySelector(".btn-save-edit");
                  saveEditButton.addEventListener("click", () => {
                    if (nombreElement && marcaElement && descripcionElement && precioElement && categoriaElement && calificacionElement && proveedorElement) {
                      const nombre = nombreElement.value;
                      const categoria = parseInt(categoriaElement.value);
                      const marca = marcaElement.value;
                      const proveedor = parseInt(proveedorElement.value);
                      const descripcion = descripcionElement.value;
                      const precio = parseInt(precioElement.value);
                      const calificacion = parseInt(calificacionElement.value);
                      const id = productListItem.dataset.id;
                      fetch(`http://localhost:3000/products/${id}`, {
                        method: 'PATCH',
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          NombreProducto: nombre,
                          ID_Categoria: categoria,
                          Marca: marca,
                          ID_Proveedor: proveedor,
                          Descripcion: descripcion,
                          PrecioVenta: precio,
                          Calificacion: calificacion
                        })
                      })
                        .then(res => {
                          if (res.ok) {
                            return res.json();
                          } else {
                            throw new Error('Error updating product');
                          }
                        })
                        .then(data => {
                          console.log("produ updated successfully:", data);
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
  })
  .catch(err => {
    console.error("ayuda", err);
  })
});