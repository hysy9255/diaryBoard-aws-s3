const { createApp } = require("./app.js");
const mongoose = require("mongoose");
require("dotenv").config();

const startServer = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.DATABASE_URI)
    .then(console.log("Database has been connected"));

  const app = createApp();
  const PORT = 9000;

  app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
};

startServer();
