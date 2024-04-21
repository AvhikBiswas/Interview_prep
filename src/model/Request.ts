import mongoose, { Document, Schema } from 'mongoose';

enum RequestType {
  PEER = 'peer',
  INTERVIEW = 'interview',
}

interface Request extends Document {
  sender: mongoose.Types.ObjectId;
  recipient: mongoose.Types.ObjectId;
  type: RequestType; 
}

const requestSchema: Schema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: Object.values(RequestType), required: true },
});

const Request = mongoose.model<Request>('Request', requestSchema);

export { Request, RequestType };
