import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import searchKeywords from "./routes/searchKeywords.js";
import selectedConditions from "./routes/selectedConditions.js";


dotenv.config();
const app = express();
app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// eslint-disable-next-line no-undef
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully");
});


// Log to console
app.post("/", function (req) {
    console.log(req.body);
});
app.post("/location", function (req) {
    console.log(req.body);
});


// Post to MongoDB
app.use("/searchkeywords", searchKeywords);
app.use("/selectedConditions", selectedConditions);


app.listen(5000, () => console.log("Example app is listening on port 5000."));