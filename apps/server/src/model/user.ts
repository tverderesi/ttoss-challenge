import { Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt";
export interface User {
  username: string;
  password: string;
  role: "user" | "admin";
}

export interface UserModel extends User, Document {}

const UserSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre<UserModel>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
  }
  next();
});

export const UserModel = model<UserModel>("User", UserSchema);
