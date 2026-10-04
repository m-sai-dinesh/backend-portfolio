# Backend Portfolio API

A pure RESTful backend portfolio built with Node.js and Express. It serves structured resume, project, and experience data via clean JSON endpoints with automatic pretty-printing.

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API overview and list of available routes |
| `GET` | `/about` | Summary and bio |
| `GET` | `/education` | Academic background and qualifications |
| `GET` | `/skills` | Technical skill sets categorized |
| `GET` | `/experience` | Work history and internship experiences |
| `GET` | `/projects` | Featured projects with tech stack and details |
| `GET` | `/achievements` | Ratings, contests, and hackathon highlights |
| `GET` | `/contact` | Contact links and handles |

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/m-sai-dinesh/backend-portfolio.git
   cd backend-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm run dev
   ```
   The API will be live at `http://localhost:3000`.
