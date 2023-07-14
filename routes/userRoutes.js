const express = require("express");
const userController = require("../controllers/userController");
const upload = require("../config/multer");

const router = express.Router();

router.post(
  "/",
  upload.fields([{ name: "picture" }, { name: "pdf" }, { name: "video" }]),
  userController.createUser
);
router.post(
  "/:id/picture",
  upload.fields([{ name: "picture" }]),
  userController.uploadPicture
);
router.post(
  "/:id/pdf",
  upload.fields([{ name: "pdf" }]),
  userController.uploadPdf
);
router.post(
  "/:id/video",
  upload.fields([{ name: "video" }]),
  userController.uploadVideo
);

module.exports = router;
