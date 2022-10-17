import express from "express";
const router = express.Router();
import { getQuote } from "../controllers/quoteController";


// Quote Routes
router.get("/quote", getQuote);

export default router;