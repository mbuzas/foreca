import express from "express";
const router = express.Router();

import SearchKeyword from "../models/searchKeyword.model.js";

router.route("/").post((req, res) => {
    const keyword = req.body.searchQuery;
    const newSearchKeyword = new SearchKeyword({ keyword });

    newSearchKeyword.save()
        .then(() => res.json("Keyword Added!"))
        .catch(err => res.status(400).json("Error: " + err));
});


export default router;