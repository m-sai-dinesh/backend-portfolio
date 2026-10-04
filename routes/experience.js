import { Router } from "express";
import { experience } from "../data/resume.js";

const router = Router();

router.get("/experience", (req, res) => {
  res.json({ experience });
});

export default router;
