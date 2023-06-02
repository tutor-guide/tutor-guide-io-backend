import express from "express";
const router = express.Router()

router.get("/user", function (req, res) {
    res.redirect("/admin");
  });

  module.exports = router 