import { Router } from "express";
import { register } from "../controllers/userController";
import { validateUser } from "../middlewares/validateUser";

const router = Router();

router.post("/register", validateUser, register);

export default router;
