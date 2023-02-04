import mongoose, { mongo, Schema } from "mongoose";
import modelOptions from "./model.options.js";

export default mongoose.model (
    "Daily",
    mongoose.Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        dailyGoal: {
            type: String,
            required: true
        },
        todoList: {
            type: Object,
            required: false
        },
        waterGlasses: {
            type: Number,
            required: false
        },
        mood: {
            type: String,
            required: false
        },
        reminder: {
            type: String,
            required: false
        }
    })
)