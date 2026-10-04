import express from "express"
import { config } from "dotenv"
import homeRouter from "./routes/home.js"
import aboutRouter from "./routes/about.js"
import skillsRouter from "./routes/skills.js"
import experienceRouter from "./routes/experience.js"
import projectsRouter from "./routes/projects.js"
import achievementsRouter from "./routes/achievements.js"
import contactRouter from "./routes/contact.js"

config()
const app = express()
const PORT = process.env.PORT || 3000

app.set("json spaces", 2)
app.use(express.json())

app.use("/", homeRouter)
app.use("/", aboutRouter)
app.use("/", skillsRouter)
app.use("/", experienceRouter)
app.use("/", projectsRouter)
app.use("/", achievementsRouter)
app.use("/", contactRouter)

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.path,
    availableRoutes: [
      "/",
      "/about",
      "/education",
      "/skills",
      "/experience",
      "/projects",
      "/achievements",
      "/contact"
    ]
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
