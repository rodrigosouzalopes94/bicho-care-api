import prisma from "../config/database.js"; // Adicione o .js
import bcrypt from "bcrypt";

// Mude o parâmetro 'userType' para 'isCuidador'
export async function registerUser(name: string, email: string, password: string, isCuidador: boolean) { 
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // A lógica de 'userType' não é mais necessária, use 'isCuidador' diretamente
  // const isCuidador = userType === "Cuidador";

  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      isCuidador,
    },
  });
}