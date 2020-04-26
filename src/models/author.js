const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Author', schema);
