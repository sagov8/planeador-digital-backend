import mongoose, { mongo, Schema } from "mongoose";
import modelOptions from "./model.options.js";

export default mongoose.model (
    "Quote",
    mongoose.Schema({
        quoteId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        phrase: {
            type: String,
            required: true
        },
        author: {
            type: Object,
            required: false
        }
    })
)