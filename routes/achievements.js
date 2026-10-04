import { Router } from "express";
import { achievements } from "../data/resume.js";

const router = Router();

router.get("/achievements", (req, res) => {
  res.json({ achievements });
});

export default router;
