import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  // Adicione esta linha:
  console.log("🚀 Server is running on http://localhost:3000"); 
});