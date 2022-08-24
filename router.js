const router = require("express").Router();
const feedbackController = require("./controllers/feedbackController");
const cors = require("cors");

router.use(cors());

router.get("/", (req, res) =>
  res.json(
    "Hello, if you see this message that means your backend is up and running successfully."
  )
);

// check token to log out front-end if expired
router.post("/qgfeedback", feedbackController.sendQGfeedback);

module.exports = router;
