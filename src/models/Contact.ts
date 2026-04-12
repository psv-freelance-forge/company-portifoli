import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  project: string;
  message: string;
  replied: boolean;
  responses: Array<{
    text: string;
    sentAt: Date;
    senderDetails: string;
  }>;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  project: { type: String, required: true },
  message: { type: String, required: true },
  replied: { type: Boolean, default: false },
  responses: [{
    text: { type: String, required: true },
    sentAt: { type: Date, default: Date.now },
    senderDetails: { type: String, required: true }
  }]
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
