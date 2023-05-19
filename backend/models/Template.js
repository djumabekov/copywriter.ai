import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  context: {
    type: Array,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  tone: {
    type: String,
    required: true,
  },
  template: {
    type: String,
    required: true,
  },
  createDate: { type: Date, default: () => new Date(), immutable: true },
});

export default mongoose.model('Template', templateSchema);
