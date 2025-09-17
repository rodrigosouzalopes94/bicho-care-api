import type { Request, Response } from "express";
import { authenticateUser } from "../services/authService.js";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "E-mail e senha são obrigatórios." });
    }

    const authResult = await authenticateUser(email, password);

    res.status(200).json(authResult);
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
}