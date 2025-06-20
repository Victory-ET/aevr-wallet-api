import { model, Schema } from "mongoose";

const userStakeSchema = new Schema({
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
  aprEarned: {
    type: String,
    default: "0"
  },
  amountStaked: {
    type: String,
    default: "0"
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});


// Index for efficient querying
userStakeSchema.index({ userId: 1, stakingPropertyId: 1 });

export default model('UserStake', userStakeSchema);

