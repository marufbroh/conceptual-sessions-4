import { Schema, model } from "mongoose";
import { CatModel, ICatModel, TCat, TCatMethods } from "./cat.interface";
import bcrypt from 'bcrypt';
import config from "../../config";

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


// pre middleware hook
catSchema.pre("save", async function (next) {
    this.secret = await bcrypt.hash(this.secret, Number(config.bcrypt_salt_rounds))
    next();
})

// post middleware hook
catSchema.post("save", async function (doc, next) {
    doc.secret = ""
    next();
})


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