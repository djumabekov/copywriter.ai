import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  response: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  createDate: { type: Date, default: () => new Date(), immutable: true },
});

export default mongoose.model('Chat', chatSchema);
