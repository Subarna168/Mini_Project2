// backend/routes/videos.js
const express = require("express");
const router = express.Router();
const Video = require("../models/Videos");

// POST a new video
router.post("/", async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: "Failed to upload video metadata" });
  }
});

// GET all videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find().sort({ uploadedAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

module.exports = router;