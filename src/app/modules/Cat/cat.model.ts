import { Schema, model } from "mongoose";
import { TCat } from "./cat.interface";

const catSchema = new Schema<TCat>({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
    },
    secret: {
        type: String
    }
})


export const Cat = model<TCat>('Cat', catSchema)