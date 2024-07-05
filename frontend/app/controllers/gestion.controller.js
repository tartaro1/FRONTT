export const gestion = (req, res) => {
    res.render("pages/admin/gestion",{
        layout:"layouts/main-admin",
        title: 'Dashboard gestion'
    });
}