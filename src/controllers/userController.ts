import type { Request, Response } from "express";
import { registerUser } from "../services/userService.js";

export async function register(req: Request, res: Response) {
  try {
    const { name, email, password, isCuidador } = req.body;
    const user = await registerUser(name, email, password, isCuidador);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}