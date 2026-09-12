
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // never return password by default in queries
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    role: {
      type: String,
      enum: ["customer", "restaurant", "rider", "admin"],
      default: "customer",
    },
    avatar: {
      type: String, // Cloudinary URL, added later
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true, // admin can deactivate accounts later
    },
  },
  { timestamps: true } // adds createdAt, updatedAt automatically
);

const User = mongoose.model("User", userSchema);

export default User;