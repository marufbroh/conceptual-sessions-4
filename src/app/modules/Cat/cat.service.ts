import { TCat } from "./cat.interface";
import { Cat } from "./cat.model";

const createCat = async (catData: TCat) => {
    const result = await Cat.create(catData); // instance method builtin
    return result;
}

const getAllCat = async () => {
    const result = await Cat.find({}).exec();
    return result;
}


export const catServices = {
    createCat,
    getAllCat,

}