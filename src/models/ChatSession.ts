import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage {
  role: 'user' | 'bot' | 'support';
  content: string;
  timestamp: Date;
}

export interface IChatSession extends Document {
  sessionId: string;
  status: 'active' | 'closed';
  messages: IMessage[];
  updatedAt: Date;
}

const MessageSchema = new Schema({
  role: { type: String, enum: ['user', 'bot', 'support'], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
}, { _id: false });

const ChatSessionSchema: Schema = new Schema({
  sessionId: { type: String, required: true, unique: true },
  status: { type: String, enum: ['active', 'closed'], default: 'active' },
  messages: [MessageSchema]
}, { timestamps: true });

export default mongoose.models.ChatSession || mongoose.model<IChatSession>('ChatSession', ChatSessionSchema);
