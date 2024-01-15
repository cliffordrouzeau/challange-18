const { Schema, model } = require('mongoose');

// Schema to create reactions model
const reactionSchema = new Schema(
  {
    reactionId: {
      default: new Schema.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);



const reaction = model('reaction', reactionSchema);

module.exports = reaction;
