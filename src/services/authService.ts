import prisma from "../config/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_secreta_padrao";

export async function authenticateUser(email: string, password_sent: string) {
  // 1. Buscar o usuário pelo e-mail
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("E-mail ou senha incorretos.");
  }

  // 2. Comparar a senha fornecida com a senha do banco de dados
  const passwordMatch = await bcrypt.compare(password_sent, user.password);

  if (!passwordMatch) {
    throw new Error("E-mail ou senha incorretos.");
  }

  // 3. Gerar o token JWT para autenticação
  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET,
    {
      expiresIn: "1h", // Token expira em 1 hora
    }
  );

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  };
}