import express from "express";
const router = express.Router();
import { usersLogin, userRegister} from "../controllers/usersController";

// Users Routes
router.post("/login", usersLogin);
router.post("/register", userRegister);

export default router;
