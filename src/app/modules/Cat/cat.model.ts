import { Schema, model } from "mongoose";
import { CatModel, ICatModel, TCat, TCatMethods } from "./cat.interface";

// const catSchema = new Schema<TCat, CatModel, TCatMethods>({
//     id: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         required: true,
//     },
//     color: {
//         type: String,
//     },
//     secret: {
//         type: String
//     }
// })


// // instance method
// catSchema.methods.generateId = async function () {
//     try {
//         const lastCat = await Cat.findOne().sort({ _id: -1 }).exec();
//         if (!lastCat) return 1;
//         return lastCat.id + 1;
//     } catch (error) {
//         throw new Error("Cat't generate unique id")
//     }
// }


// export const Cat = model<TCat, CatModel>('Cat', catSchema)


const catSchema = new Schema<TCat, ICatModel>({
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
});


// static methods
catSchema.statics.generateId = async function () {
    try {
        const lastCat = await Cat.findOne().sort({ _id: -1 }).exec();
        if (!lastCat) return 1;
        return lastCat.id + 1;
    } catch (error) {
        throw new Error("Cat't generate unique id")
    }
}


export const Cat = model<TCat, ICatModel>('Cat', catSchema)