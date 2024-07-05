export class ProductController {
    static getAll = async(req, res) => {
        try {
            const {category} = req.query;
            let url = "https://ms-backend-tartaro.onrender.com/products";
            if (category) {
                url += `?category=${category}`;
            }

            const response = await fetch(url);
            const data = await response.json();

            // Asegúrate de que products sea un array
            const products = Array.isArray(data) ? data : data.products || [];

            res.render("pages/admin/products", {
                layout: "layouts/main-admin",
                title: 'Dashboard Products',
                products: products
            });
        } catch (error) {
            console.error("Error fetching products:", error.message);
            res.status(500).send(error.message);
        }
    }
}