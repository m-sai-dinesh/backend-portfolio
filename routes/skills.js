import { Router } from "express";
import { skills } from "../data/resume.js";

const router = Router();

router.get("/skills", (req, res) => {
  res.json({ skills });
});

export default router;
