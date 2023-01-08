import express from "express";
import Text from "../models/Text.js";
import { createText, getText } from "../controllers/textController.js";

const router = express.Router();


//CREATE
router.post("/", createText);

//GET
router.get("/:id", getText);


export default router;