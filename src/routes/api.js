const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `Hello ${req.query.name ?? ""} !, Welcome to my first NodeJs Project`
    );
});

module.exports = router;
