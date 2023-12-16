import { TCat } from "./cat.interface";
import { Cat } from "./cat.model";

const createCat = async (catData: TCat) => {
    const result = await Cat.create(catData); // instance method builtin
    return result;
}

export const catServices = {
    createCat,

}