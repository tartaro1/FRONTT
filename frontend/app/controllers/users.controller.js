export class UsersController {
    static getAll = async (req, res) => {
        try {
            const {email} = req.query;
            if (email) {
                let datos = {}
                await fetch(`https://ms-backend-tartaro.onrender.com/users?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    datos = data
                    res.render("views.resultUser.ejs", {users: datos})
                })
                .catch(error => console.log(error))
            } else {
                let datos = {}
                fetch('https://ms-backend-tartaro.onrender.com/users')
                .then(res => res.json())
                .then(data => {
                    datos = data;
                    res.render("pages/admin/users", {
                        layout:'layouts/main-admin',
                        title:'Dash users',
                        users: datos
                    });
                });
            }
        } catch (error) {
            console.error("Error fetching users:", error.message);
            res.status(500).send(error.message);
        }
    }
}