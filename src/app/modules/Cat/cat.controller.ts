import { Request, Response } from "express";
import { catServices } from "./cat.server";

const createCat = async (req: Request, res: Response) => {
    try {
        const { ...data } = req.body;
        const result = await catServices.createCat(data);
        res.status(200).json({
            success: true,
            message: "Cat is created successfully",
            data: result
        })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error
        })
    }
}

export const catControllers = {
    createCat,
}