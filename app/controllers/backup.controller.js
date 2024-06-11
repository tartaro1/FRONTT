import { BackupsModel } from "../models/database/backup.js";

export class BackupsController {
    static getLatest = async(req, res) => {
        try {
            const [backup] = await BackupsModel.getLatest();
            res.render("views.backup.ejs", {backup})
        } catch (error) {
            res.json(error);
        }
    }
    static create = async(req, res) => {
        try {
            const input = req.body
            const [backup] = await BackupsModel.create({input});
            res.status(201).json(backup)
        } catch (error) {
            
        }
    }
}