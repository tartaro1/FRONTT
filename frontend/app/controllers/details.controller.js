export class DetailsController {
    static getAll = async (req, res) => {
        try {
            const {provider} = req.query;
            if (provider) {
                let datos = {};
                fetch(`https://ms-backend-tartaro.onrender.com/detailsOrders?provider=${provider}`)
                .then(response => response.json())
                .then(data => {
                    datos = data;
                    // res.render("views.detailsOrder.ejs", {detailsOrders: datos})
                    res.render("pages/admin/detailsOrders",{
                        layout:"layouts/main-admin",
                        title: 'Dashboard Details Orders',
                        detailsOrders: datos
                    });
                })
            }else{
                let datos = {};
                fetch("https://ms-backend-tartaro.onrender.com/detailsOrders")
                .then(response => response.json())
                .then(data => {
                    datos = data;
                    // res.render("views.detailsOrder.ejs", {detailsOrders: datos})
                    res.render("pages/admin/detailsOrders",{
                        layout:"layouts/main-admin",
                        title: 'Dashboard Details Orders',
                        detailsOrders: datos
                    });
                })
            }
        } catch (error) {
            console.error("Error fetching detailsOrder:", error.message);
            res.status(500).send(error.message);
        }
    }
}