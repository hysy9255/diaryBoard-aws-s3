// ##
const { asyncWrap } = require("../utils/error");
const { s3Uploadv2 } = require("../services/s3Service");
const DiaryRepository = require("../respositories/DiaryRepo");

const uploadImage = asyncWrap(async (req, res) => {
  const file = req.files[0];
  const result = await s3Uploadv2(file);
  res.status(200).json({ status: "success", imageUrl: result.Location });
});

const postDiary = asyncWrap(async (req, res) => {
  const diaryData = req.body;
  const diaryRepository = new DiaryRepository();
  const diary = await diaryRepository.createDiary(diaryData);
  res.status(200).send({ message: "success", diary });
});

const getDiary = asyncWrap(async (req, res) => {
  const { diaryId } = req.query;
  const diaryRepository = new DiaryRepository();
  const diary = await diaryRepository.readDiary(diaryId);
  res.status(200).send({ message: "success", diary });
});

const getDiaries = asyncWrap(async (req, res) => {
  const diaryRepository = new DiaryRepository();
  const diaries = await diaryRepository.readDiaries();
  res.status(200).send({ message: "success", diaries });
});

const editDiary = asyncWrap(async (req, res) => {
  const { diaryId, newDiaryData } = req.body;
  const diaryRepository = new DiaryRepository();
  const diary = await diaryRepository.updateDiary(diaryId, newDiaryData);
  res.status(200).send({ message: "success", diary });
});

const deleteDiary = asyncWrap(async (req, res) => {
  const { diaryId } = req.body;
  const diaryRepository = new DiaryRepository();
  await diaryRepository.deleteDiary(diaryId);
  res.status(200).send({ message: "success" });
});

module.exports = {
  uploadImage,
  postDiary,
  getDiary,
  getDiaries,
  editDiary,
  deleteDiary,
};
