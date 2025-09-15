import type { Request, Response, NextFunction } from "express";

export function validateUser(req: Request, res: Response, next: NextFunction) {
  const { name, email, password, userType } = req.body;

  if (!name || !email || !password || !userType) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }

  if (userType !== "Cuidador" && userType !== "Pai de Pet") {
    return res.status(400).json({ error: "Tipo de usuário inválido." });
  }

  next();
}