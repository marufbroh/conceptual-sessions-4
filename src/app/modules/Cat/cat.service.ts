import { TCat } from "./cat.interface";
import { Cat } from "./cat.model";

// const createCat = async (catData: TCat) => {
//     // const result = await Cat.create(catData);

//     const cat = new Cat(catData);
//     const catId = await cat.generateId();
//     cat.id = catId;
//     const result = await cat.save();
//     return result;
// }

const createCat = async (catData: TCat) => {
    const catId = await Cat.generateId();
    const data = { ...catData, id: catId };
    // catData.id = catId;

    const result = await Cat.create(data);
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