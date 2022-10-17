import express from "express";
const router = express.Router();
import { usersLogin } from "../controllers/usersController";

// Users Routes
router.post("/login", usersLogin);

export default router;
