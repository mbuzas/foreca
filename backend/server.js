import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.post("/", function (req) {
    console.log(req.body);
});
app.post("/location", function (req) {
    console.log(req.body);
});

app.listen(5000, () => console.log("Example app is listening on port 5000."));