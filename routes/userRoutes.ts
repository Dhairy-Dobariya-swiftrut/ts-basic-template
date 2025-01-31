import express from "express";
import { register, login,logout, getUsers, updateUser, deleteUser } from "../controllers/userController";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", auth, getUsers);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.post("/logout", auth, logout);

export default router;