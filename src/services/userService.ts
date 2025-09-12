import prisma from "../config/database";
import bcrypt from "bcrypt";

export async function registerUser(name: string, email: string, password: string, userType: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const isCuidador = userType === "Cuidador";

  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      isCuidador,
    },
  });
}
