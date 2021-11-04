const express = require("express");
const app = express(); //invokes
const tasks = require("./routes/tasks");
const connectDB = require("../starter/db/connect");
require("dotenv").config();

//routes
app.get("/hello", (req, res) => {
  res.send("hello");
});

//middlewares
app.use(express.json());
app.use("/api/v1/tasks", tasks);

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
