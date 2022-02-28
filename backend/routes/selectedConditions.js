import express from "express";
const router = express.Router();

import SelectedCondition from "../models/selectedCondition.model.js";

router.route("/").post((req, res) => {
    const details = req.body.locationDetails;
    const newSelectedCondition = new SelectedCondition({ details });

    newSelectedCondition.save()
        .then(() => res.json("Selected Location Conditions Added!"))
        .catch(err => res.status(400).json("Error: " + err));
});


export default router;