

export class LogOutController {
    static logout = async(req, res) => {
        try {
            res.render("views.index.ejs");
        } catch (error) {
            res.json(error);
        }
    }
}