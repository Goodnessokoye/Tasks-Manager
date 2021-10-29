const express = require("express");
const app = express(); //invokes
const tasks = require("./routes/tasks");

const port = 3000;

//routes
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/tasks", tasks);



app.listen(port, console.log(` Server listening on port ${port}...`));
