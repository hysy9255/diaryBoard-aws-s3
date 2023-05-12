const Diary = require("../models/Diary");
const { ObjectId } = require("mongodb");

class DiaryRepository {
  async createDiary(diaryData) {
    try {
      const diary = await Diary.create(diaryData);
      const [filtered] = await Diary.aggregate([
        { $match: { _id: diary._id } },
        { $addFields: { diaryId: "$_id" } },
        { $project: { _id: 0, __v: 0 } },
      ]);
      return filtered;
    } catch (error) {
      throw error;
    }
  }

  async readDiary(diaryId) {
    try {
      const [filtered] = await Diary.aggregate([
        { $match: { _id: new ObjectId(diaryId) } },
        { $addFields: { diaryId: "$_id" } },
        { $project: { _id: 0, __v: 0 } },
      ]);
      return filtered;
    } catch (error) {
      throw error;
    }
  }

  async updateDiary(diaryId, newDiaryData) {
    try {
      const diary = await Diary.findByIdAndUpdate(diaryId, newDiaryData, {
        new: true,
      });
      const [filtered] = await Diary.aggregate([
        { $match: { _id: diary._id } },
        { $addFields: { diaryId: "$_id" } },
        { $project: { _id: 0, __v: 0 } },
      ]);
      return filtered;
    } catch (error) {
      throw error;
    }
  }

  async deleteDiary(diaryId) {
    try {
      await Diary.findByIdAndDelete(diaryId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DiaryRepository;
