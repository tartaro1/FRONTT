import { DetailsModel } from "../models/database/detailsOrder.js";
export class DetailsController {
    static getAll = async(req, res) =>{ 
        try {
            const {provider} = req.query;
            if (provider) {
                const detailsOrdersFiltred = await DetailsModel.getByProvider({provider})                
                res.render("views.filtred.ejs", { detailsOrdersFiltred });
            } else {
                const detailsOrders = await DetailsModel.getAll();
                res.render("views.detailsOrder.ejs", {detailsOrders});
            }
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
}