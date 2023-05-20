import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: false,
  },
  context: {
    type: Array,
    required: true,
  },
  target: {
    type: String,
    required: false,
  },
  tone: {
    type: String,
    required: true,
  },
  template: {
    type: String,
    required: true,
  },
  dashboard: {
    type: String,
    required: true,
  },
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  createDate: { type: Date, default: () => new Date(), immutable: true },
});

export default mongoose.model('Template', templateSchema);
