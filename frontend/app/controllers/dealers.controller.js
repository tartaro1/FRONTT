export class DealersController {
    static getAll = async (req, res) => {
        try {
            const {email} = req.query;
            if (email) {
                let datos = {};
                fetch(`https://ms-backend-tartaro.onrender.com/dealers?email=${email}`)
                .then(response => response.json())
                .then(data => {
                    datos = data;
                    res.render("views.resultDealer.ejs", {dealers: datos})
                })
            }else {
                let datos = {};
                fetch("https://ms-backend-tartaro.onrender.com/dealers")
                .then(response => response.json())
                .then(data => {
                    datos = data;
                    // res.render("views.dealers.ejs", {dealers: datos})
                    res.render("pages/admin/dealers",{
                        layout:"layouts/main-admin",
                        title: 'Dashboard dealers',
                        dealers: datos
                    });
                })
            }
        } catch (error) {
            console.error("Error fetching detailsOrder:", error.message);
            res.status(500).send(error.message);
        }
    }
    
}