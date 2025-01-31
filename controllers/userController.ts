import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: "User registered" });
};




export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ message: "Invalid credentials" });
    return; // Don't return res, just return to end the function.
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).json({ message: "Invalid credentials" });
    return; // Don't return res, just return to end the function.
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: "1d" });
  res.cookie("jwt", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
  res.json({ message: "Login successful" });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name });
  res.json({ message: "User updated" });
};

export const deleteUser = async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};


export const logout = (req: Request, res: Response): void => {
    // Clear the JWT cookie
    res.clearCookie("jwt", { httpOnly: true, secure: process.env.NODE_ENV === "production" });
  
    // Send a response confirming logout
    res.json({ message: "Logged out successfully" });
  };