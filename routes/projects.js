import { Router } from "express";
import { projects } from "../data/resume.js";

const router = Router();

router.get("/projects", (req, res) => {
  res.json({ projects });
});

export default router;
