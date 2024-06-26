export class UsersController {
    static getAll = async (req, res) => {
        try {
            const {email} = req.query;
            if (email) {
                let datos = {}
                await fetch(`http://localhost:9200/users?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    datos = data
                    res.render("views.resultUser.ejs", {users: datos})
                })
                .catch(error => console.log(error))
            } else {
                let datos = {}
                fetch('http://localhost:9200/users')
                .then(res => res.json())
                .then(data => {
                    datos = data;
                    res.render("views.users.ejs", {users: datos});
                })
            }
        } catch (error) {
            console.error("Error fetching users:", error.message);
            res.status(500).send(error.message);
        }
    }
}
