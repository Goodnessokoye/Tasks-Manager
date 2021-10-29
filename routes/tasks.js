const express = require("express");
const router = express.Router();

router.route("/").post((req, res) => {
  console.log("shaaaa");
});

router.get("/", (req, res) => {
  res.send("Helllllo");
});





module.exports = router;
