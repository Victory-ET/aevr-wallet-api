import { model, Schema } from "mongoose";


const stakingSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  apr: {
    type: String,
    required: true
  },
  sold: {
    type: Number,
    required: true,
    default: 0
  },
  minStake: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  gallery: [{
    type: String
  }],
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Add text index for search functionality
stakingSchema.index({ title: 'text', category: 'text', tags: 'text' });

export default model('Staking', stakingSchema)
