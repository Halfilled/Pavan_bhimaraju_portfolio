# Pavan Bhimaraju — Interactive Developer Portfolio

A personal portfolio for **Pavan Bhimaraju** (Computer Science Engineering Student | AI & Software Development | DSA | Web Development), designed as an editorial, creative technology studio website.

---

## 🎨 Visual Identity & Design Tokens

- **Electric Cyan:** `#08A9C2`
- **Cobalt Blue:** `#0877B9`
- **Signal Orange:** `#F17C3B`
- **Graphite (Dark Gutters & Framing):** `#17252D` & `#0E171C`
- **Typography:** *Syne* (Editorial Headings), *Plus Jakarta Sans* (Body), and *JetBrains Mono* (Code & Telemetry)

---

## 🚀 The 6 Sections

1. **AI Personal Agent (Hero & Modal):**
   - Signature feature providing grounded conversational intelligence regarding Pavan's background, repositories, TEKNOV8R internship, and leadership at IIT Bombay NEC finals.
   - Suggested prompts, live status badges, and fast terminal navigation.
2. **Interactive Skill Constellation:**
   - Asymmetric node clusters spanning *AI & Data*, *Programming & CS Foundations*, *Web Development & Backend*, and *Tools/DevOps*.
   - Direct bridges from individual skills to real codebase implementations with zero invented percentages.
3. **Interactive Project Browser:**
   - Creative software product showcase window with omnibar, real-time module status, tabs (*Overview*, *System Architecture*, *Core Implementation*), and authentic repository links:
     - **GitGuardian AI** (`https://github.com/Pavan8930/gitguardian-ai`)
     - **Smart Hospital Queue & Appointment System** (`https://github.com/Pavan8930/hospital-queue-system`)
     - **Healthcare Management System** (Stripe/PayPal, RBAC)
     - **Teen Wellness App** (TEKNOV8R Internship)
     - **Real-Time WebSocket Chat Application** (Django Channels)
4. **Campus Explorer: Beyond Code:**
   - Interactive coordinate grid displaying Pavan's executive leadership:
     - **Vice President, BiZverve** (250+ participant inter-college summit)
     - **IIC Coordinator** (Department of CSE innovation drives)
     - **E-Cell President & National Finalist** (Qualified for Grand Finals at IIT Bombay)
     - **Street Cause NGO** (Divisional President & City Chief Executive Board Member)
5. **Achievements Gallery:**
   - Editorial dark-frame gallery with category filters (*All*, *Certifications*, *Competitions*, *Leadership*) highlighting verified academic distinctions (8.27 CGPA, 96.7% Intermediate merit) and national milestones.
6. **Direct Contact Section:**
   - Direct links for Email (`pavanbhimaraju4@gmail.com` with 1-click clipboard copy), LinkedIn, GitHub, and LeetCode (`leetcode.com/u/pavanbhimaraju/`).

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18+)
- npm or bun

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Create production build
npm run build

# 4. Preview production build
npm run preview
```
The site will be live at `http://localhost:5173/` (dev) or `http://localhost:4173/` (preview).

---

## 🔐 Environment Variables & AI Integration Notes
- The portfolio currently uses a client-side grounded knowledge engine with zero hallucination guarantee based on the resume and provided project data.
- If integrating with a remote cloud LLM (e.g. Google Gemini API or OpenAI API), configure an API proxy server or serverless function with `GEMINI_API_KEY` or `OPENAI_API_KEY` stored in server environment variables. **Never expose secret keys on the frontend.**
