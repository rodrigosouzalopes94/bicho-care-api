// src/app.ts
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // Adicione esta linha
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes); // Adicione esta linha

app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});