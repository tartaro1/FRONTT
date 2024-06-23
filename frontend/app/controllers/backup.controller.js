export class BackupsController {
    static getLatest = async(req, res) => {
        try {
            let datos = {};
            fetch("http://localhost:9200/backup")
            .then(response => response.json())
            .then(data => {
                datos = data;
                res.render("views.backup.ejs", {backup: datos})
            })
        } catch (error) {
            console.error("Error fetching detailsOrder:", error.message);
            res.status(500).send(error.message);
        }
    }
}