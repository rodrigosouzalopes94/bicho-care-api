import { Router } from "express";
import { login } from "../controllers/authController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = Router();

// Rota de login
router.post("/login", login);

// Exemplo de rota protegida. Só pode ser acessada com um token válido.
router.get("/protected", authenticateToken, (req, res) => {
  res.status(200).json({ message: "Rota protegida acessada com sucesso!", user: (req as any).user });
});

export default router;