const express = require("express");
const diaryRouter = require("./diary.router");

const routes = express.Router();
routes.use("/diary", diaryRouter);

module.exports = routes;
