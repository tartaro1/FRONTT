export const login = (req, res) => {
    res.render("pages/login",{
        layout:"layouts/main-user",
        title: 'login tartaro'
    });
}
export const signup = (req, res) => {
    res.render("pages/signup",{
        layout:"layouts/main-user",
        title: 'signup tartaro'
    });
}
export const index = (req, res) => {
    res.render("pages/index",{
        layout:"layouts/main",
        title: 'Index tartaro'
    });
}
export const inicio = (req, res) => {
    res.render("pages/user/index",{
        layout:"layouts/main-user",
        title: 'Inicio tartaro /bienvenido'
    });
}
export const search = (req, res) => {
    res.render("pages/user/search",{
        layout:"layouts/main-user",
        title: 'Buscar productos'
    });
}

export const categorias = (req, res) => {
    res.render("views.categories.ejs");
}

export const formulario = (req, res) => {
    res.render("views.form.ejs");
}
export const producto = (req, res) => {
    res.render("views.product.ejs");
}
