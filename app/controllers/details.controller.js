import { DetailsModel } from "../models/database/detailsOrder.js";
export class DetailsController {
    static getAll = async(req, res) =>{ 
        try {
            const detailsOrders = await DetailsModel.getAll();
            // res.json(detailsOrders);
            res.render("views.detailsOrder.ejs", {detailsOrders});
        } catch (error) {
            res.status(500).json(error);
        }
    }
    static getByProvider = async(req, res) => {
        try {
            const {provider} = req.params;
            const detailsOrdersFiltred = await DetailsModel.getByProvider({provider})
            res.render("views.filtred.ejs", { detailsOrdersFiltred });

        } catch (error) {
            res.status(500).json(error);
        }
    }
}