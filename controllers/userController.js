const entities = require("../models");
const User = entities.user;

module.exports = {
  // create user
  async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const { picture, pdf, video } = req.files;

      const user = await User.create({
        name,
        email,
        picture: picture ? picture[0].filename : null,
        pdf: pdf ? pdf[0].filename : null,
        video: video ? video[0].filename : null,
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  },

  // upload a picture
  async uploadPicture(req, res) {
    try {
      const { id } = req.parames;
      const { picture } = req.files;

      // find user
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ msg: "User Not Found" });
      }

      user.picture = picture ? picture[0].filename : null;

      // save user file
      await user.save();

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // upload a pdf
  async uploadPdf(req, res) {
    try {
      const { id } = req.parames;
      const { pdf } = req.files;

      // find user
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ msg: "User Not Found" });
      }

      user.pdf = pdf ? pdf[0].filename : null;

      // save user file
      await user.save();

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // upload a video
  async uploadVideo(req, res) {
    try {
      const { id } = req.parames;
      const { video } = req.files;

      // find user
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ msg: "User Not Found" });
      }

      user.video = video ? video[0].filename : null;

      // save user file
      await user.save();

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
