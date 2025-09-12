import { Request, Response } from "express";
import { registerUser } from "../services/userService";

export async function register(req: Request, res: Response) {
  try {
    const { name, email, password, userType } = req.body;
    const user = await registerUser(name, email, password, userType);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}