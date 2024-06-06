import { DetailsModel } from "../models/database/detailsOrder.js";
export class DetailsController {
    static getAll = async(req, res) =>{ 
        try {
            const detailsOrders = await DetailsModel.getAll();
            res.render("views.detailsOrder.ejs", {detailsOrders});
        } catch (error) {
            res.status(500).json(error);
        }
    }
}