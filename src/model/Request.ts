import mongoose, { Schema } from "mongoose";

interface Request extends Document {
    sender: mongoose.Types.ObjectId;
    recipient: mongoose.Types.ObjectId;
    type: string;
  }
  
  const requestSchema: Schema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
  });
  
  const Request = mongoose.model<Request>('Request', requestSchema);