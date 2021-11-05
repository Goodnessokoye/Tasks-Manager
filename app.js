const express = require("express");
const app = express(); //invokes
const tasks = require("./routes/tasks");
const connectDB = require("../starter/db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

//middlewares
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(` Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
