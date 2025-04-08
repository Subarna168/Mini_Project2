
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  channel: String,
  url: String,
  uploader: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Video", videoSchema);
