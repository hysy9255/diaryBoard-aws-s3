const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  title: { type: String, require: true },
  contents: { type: String, require: true },
  thumbnail: { type: String, require: false },
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
});

const Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;
