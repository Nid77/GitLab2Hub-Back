import express from "express";
import { Controller } from "../controllers/controller";
import { cp } from "fs";

const router = express.Router();

const controller = new Controller();

router.get("/",controller.get); 


export default router;
