import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  mobileNumber?: string;
  role: "admin" | "support";
  password?: string;
  verified: boolean;
  verificationToken?: string;
  inviteToken?: string;
  passwordResetOtp?: string;
  passwordResetOtpExpires?: Date;
  disabled: boolean;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  mobileNumber: { type: String },
  role: { type: String, enum: ["admin", "support"], required: true },
  password: { type: String },
  verified: { type: Boolean, default: false },
  verificationToken: { type: String },
  inviteToken: { type: String },
  passwordResetOtp: { type: String },
  passwordResetOtpExpires: { type: Date },
  disabled: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
