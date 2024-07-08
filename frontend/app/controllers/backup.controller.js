export class BackupsController {
    static getLatest = async(req, res) => {
        try {
            let datos = {};
            
            fetch("https://ms-backend-tartaro.onrender.com/backup")
            .then(response => response.json())
            .then(data => {
                datos = data;
                // res.render("views.backup.ejs", {backup: datos})
                res.render("pages/admin/backup",{
                    layout:"layouts/main-admin",
                    title: 'Dashboard backup',
                    backup: datos
                });
            })
        } catch (error) {
            console.error("Error fetching detailsOrder:", error.message);
            res.status(500).send(error.message);
        }
    }
}