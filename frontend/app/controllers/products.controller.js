export class ProductController {
    static getAll = (req, res) => {
        try {
            const {category} = req.query;
            if (category) {
                let datos = {}
                fetch(`http://localhost:9200/products?category=${category}`)
                .then(response => response.json())
                .then(data => {
                    datos = data;
                    res.render("views.resultsProduct.ejs", {products: datos})
                })
            } else {
                let datos = {};
                fetch("http://localhost:9200/products")
                .then(response => response.json())
                .then(data => {
                    datos = data;
                    res.render("views.products.ejs", {products: datos})
                })
            }
        } catch (error) {
            console.error("Error fetching products:", error.message);
            res.status(500).send(error.message);
        }
    }
}