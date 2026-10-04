import { Router } from "express";
import { profile, education } from "../data/resume.js";

const router = Router();

router.get("/about", (req, res) => {
  res.json({
    name: profile.name,
    location: profile.location,
    summary:
      "Computer Science undergraduate specializing in full-stack development and machine learning. Experienced in building scalable backend systems, RESTful APIs, and AI-powered applications. Hands-on internship experience at DRDO and Smart Resume Tailor. Active competitive programmer with LeetCode rating of 1744.",
  });
});

router.get("/education", (req, res) => {
  res.json({ education });
});

export default router;
