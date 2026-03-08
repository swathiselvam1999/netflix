const express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(express.json());

/* SIGN IN API */

app.post("/signin", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  if (username === "" || password === "") {
    res.json({
      success: false,
      message: "Email and password required",
    });
  } else {
    res.json({
      success: true,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});