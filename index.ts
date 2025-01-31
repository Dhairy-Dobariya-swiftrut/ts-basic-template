import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import connectDB from "./db/db";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));