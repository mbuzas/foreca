import mongoose from "mongoose";

const { Schema } = mongoose;

const selectedConditionSchema = new Schema({
    details: {
        type: Object,
    },

}, { timestamps: true });

export default mongoose.model("selectedCondition", selectedConditionSchema);