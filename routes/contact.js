import { Router } from "express";
import { profile } from "../data/resume.js";

const router = Router();

router.get("/contact", (req, res) => {
  res.json({ contact: profile });
});

export default router;
