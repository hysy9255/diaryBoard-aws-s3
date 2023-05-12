const express = require("express");
const { upload } = require("../middlewares/upload");
const {
  uploadImage,
  postDiary,
  getDiary,
  getDiaries,
  editDiary,
  deleteDiary,
} = require("../controllers/diary.controller");

const diaryRouter = express.Router();

diaryRouter.post("/image/upload", upload.array("file"), uploadImage);
diaryRouter.post("", postDiary);
diaryRouter.get("", getDiary);
diaryRouter.get("/list", getDiaries);
diaryRouter.patch("", editDiary);
diaryRouter.delete("", deleteDiary);

module.exports = diaryRouter;
