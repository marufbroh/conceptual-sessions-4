/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { catServices } from "./cat.service";

const createCat = async (req: Request, res: Response) => {
    try {
        const { ...data } = req.body;
        const result = await catServices.createCat(data);
        res.status(200).json({
            success: true,
            message: "Cat is created successfully",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error
        })
    }
}

const getAllCat = async (req: Request, res: Response) => {
    try {
        const result = await catServices.getAllCat();
        res.status(200).json({
            success: true,
            message: "Cats are retried successfully",
            data: result
        })
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
    getAllCat,
}