import express from "express";
import { catControllers } from "./cat.controller";

const router = express.Router();

router.post('/create-cat', catControllers.createCat)

router.get('/', catControllers.getAllCat)

export const catRoutes = router;