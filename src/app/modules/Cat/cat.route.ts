import express from "express";
import { catControllers } from "./cat.controller";

const router = express.Router();

router.post('/create-cat', catControllers.createCat)

export const catRoutes = router;