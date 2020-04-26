const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    techs: {
      type: [String],
      required: false,
    },
    tags: {
      type: [String],
      required: false,
    },
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Repositories', schema);
