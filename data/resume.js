export const profile = {
  name: "Sai Dinesh",
  location: "Hyderabad, India",
  phone: "+91 9704951643",
  email: "saidineshm24@gmail.com",
  linkedin: "https://linkedin.com/in/m-sai-dinesh",
  github: "https://github.com/m-sai-dinesh"
}

export const education = [
  {
    institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
    location: "Hyderabad, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    cgpa: "9.15 / 10",
    duration: "2024 – 2028"
  }
]

export const skills = {
  languages: ["Java", "C++", "JavaScript", "Python", "C", "SQL"],
  backendAndDatabases: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Firebase Cloud Functions",
    "MongoDB",
    "PostgreSQL",
    "Mongoose ODM"
  ],
  frontendDevelopment: [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS"
  ],
  cloudAndTools: [
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Vercel",
    "Render",
    "Firebase",
    "Cloudinary",
    "Linux"
  ],
  csFundamentals: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS"
  ]
}

export const experience = [
  {
    role: "Machine Learning Intern",
    company: "DRDO",
    type: "Remote",
    duration: "July 2026 – August 2026",
    highlights: [
      "Designed and developed the UI for video upload and the end-to-end processing pipeline of an ML-based video de-weathering system, partially removing rain, smog, and smoke effects.",
      "Performed hyperparameter and architecture-level optimization (blend-strength tuning, residual blocks, channel width) to balance de-weathering quality against inference speed.",
      "Optimized the trained model for deployment via quantization, pruning, and knowledge distillation techniques, reducing server-side computational load."
    ]
  },
  {
    role: "Software Development Intern",
    company: "Smart Resume Tailor",
    type: "Remote",
    duration: "March 2026 – July 2026",
    highlights: [
      "Architected a serverless resume tailoring platform using Firebase Cloud Functions and Gemini AI API.",
      "Engineered a Chrome Extension with a multi-step agent pipeline (regex extraction to LLM batch mapping) to auto-fill job application forms.",
      "Built secure backend proxying with JWT-based authentication and configured CORS support across multiple deployment origins."
    ]
  }
]

export const projects = [
  {
    title: "BranchIQ – Bank Branch Load & Queue Optimization",
    technologies: ["Python", "Sarvam AI", "Gemini AI API"],
    context: "TCS Hackathon",
    highlights: [
      "Built an AI system to forecast branch footfall and service demand, identifying peak periods from queue and service data.",
      "Analyzed queue data, service types, staff availability, and wait times with Gemini AI to detect operational bottlenecks.",
      "Integrated Sarvam AI for voice interaction and Gemini AI for decision-making to improve service quality."
    ]
  },
  {
    title: "GymBuddy AI Platform",
    technologies: ["Python", "React", "MediaPipe", "OpenCV", "GitHub Actions"],
    highlights: [
      "Developed a full-stack fitness application integrated with a computer vision pipeline (MediaPipe, OpenCV) for real-time form validation and rep tracking.",
      "Built RESTful APIs in Python and React for user authentication, workout analytics, and progress tracking.",
      "Set up CI/CD automation pipelines via GitHub Actions, reducing release cycle duration by 40%."
    ]
  }
]

export const achievements = [
  {
    title: "Competitive Programming",
    detail: "LeetCode Max Rating: 1744 | CodeChef Rating: 1446 | 350+ Algorithmic Problems Solved"
  },
  {
    title: "Innovathon Finalist",
    detail: "Reached national finals by architecting and delivering a fully functional web prototype in 24 hours."
  },
  {
    title: "Smart India Hackathon (SIH)",
    detail: "College Level Qualifier – Selected among top teams for national problem-solving challenge."
  },
  {
    title: "TCS Tech Fest",
    detail: "Winner."
  }
]
