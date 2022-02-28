import mongoose from "mongoose";

const { Schema } = mongoose;

const searchKeywordsSchema = new Schema({
    keyword: { type: String }
});

export default mongoose.model("searchKeyword", searchKeywordsSchema);