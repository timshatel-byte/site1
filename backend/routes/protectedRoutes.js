const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Protected dashboard data",
    userId: req.user.id,
  });
});

module.exports = router;
