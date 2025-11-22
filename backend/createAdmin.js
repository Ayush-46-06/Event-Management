import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

async function createAdmin() {
  const hashedPass = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hashedPass,
  });

  console.log("Admin created!");
  process.exit();
}

createAdmin();
