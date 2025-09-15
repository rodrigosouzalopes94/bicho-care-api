import { Router } from "express";
import { register } from "../controllers/userController.js"; // Adicione o .js
import { validateUser } from "../middlewares/validateUser.js";

const router = Router();

router.post("/register", validateUser, register);

export default router;
