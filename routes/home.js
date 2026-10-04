import { Router } from "express";
import { profile } from "../data/resume.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Sai Dinesh's Portfolio API",
    owner: profile.name,
    routes: {
      about: "/about",
      education: "/education",
      skills: "/skills",
      experience: "/experience",
      projects: "/projects",
      achievements: "/achievements",
      contact: "/contact",
    },
  });
});

export default router;
