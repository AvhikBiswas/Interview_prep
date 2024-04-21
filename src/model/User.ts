import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  password: string;
  profileImage: string;
  requests: mongoose.Types.ObjectId[];
  conversations: mongoose.Types.ObjectId[];
  connectedUsers: mongoose.Types.ObjectId[];
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: '' },
  requests: [{ type: Schema.Types.ObjectId, ref: 'Request' }],
  conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
  connectedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const User = mongoose.model<User>('User', userSchema);

export default User;
