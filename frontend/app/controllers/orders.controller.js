export class OrdersController {
    static getAll = async(req, res) => {
        try {
            const {dealer} = req.query;
            if (dealer) {
                let datos = {};
                fetch(`https://ms-backend-tartaro.onrender.com/orders?dealer=${dealer}`)
                .then(response => response.json())
                .then(data => {
                    datos = data;
                    res.render("views.resultsOrdersByDealer.ejs", {orders: datos})
                })
            } else {
                let datos = {};
                fetch("https://ms-backend-tartaro.onrender.com/orders")
                .then(response => response.json())
                .then(data => {
                    datos = data;
                    res.render("views.orders.ejs", {orders: datos})
                })
            }
        } catch (error) {
            console.error("Error fetching detailsOrder:", error.message);
            res.status(500).send(error.message);
        }
    }
    
}