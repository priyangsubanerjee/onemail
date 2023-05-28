const mongoose = require("mongoose");
const { Schema } = mongoose;

const credentialsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  flagged: {
    type: Boolean,
    default: false,
  },
  usage: {
    type: Number,
    default: 0,
  },
});

mongoose.models = {};
module.exports =
  mongoose.models.credentials ||
  mongoose.model("credentials", credentialsSchema);
