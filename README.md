# 🏠 UPYOG Property Tax Analytics Dashboard

A responsive **Property Tax Analytics Dashboard** built using **React.js** for the **NUDM UPYOG Platform Intern Assessment**.

The dashboard helps analyze property tax data of multiple Indian cities using **KPIs, charts, and an AI assistant**.

---

## ✨ Features

### 📊 KPI Cards
- Total Properties
- Approved Properties
- Rejected Properties
- Total Collection

### 🌆 City Filter
- Filter dashboard city-wise

### 📈 Comparison Chart
- Collection comparison between cities using **Recharts**

### 🤖 AI Chat Assistant
- Ask questions about the dataset in plain English

### 📱 Responsive UI
- Works smoothly on desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- Recharts
- React Icons
- Groq Api

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── Header.jsx
│   ├── KPICards.jsx
│   ├── ChartPage.jsx
│   └── AIAssistant.jsx
│
├
│-─ properties.json
│
├── App.js
└── main.jsx
# ⚙️ Complete Setup Guide

## 1️⃣ Clone Repository

```bash
git clone <your-github-repo-link>
cd project-name
npm install
npm install recharts react-icons
generate key using console.groq.com
## 🚫 Add .env & node_modules in .gitignore
```bash
node_modules
.env
dist
## ▶️ Run The Project
```bash
npm run dev
## 💡 AI Assistant Workflow
```bash
User asks a question
Dataset summary is sent to AI API
AI generates a response
Response appears in chat UI
## 📁 Dataset
```bash
The project uses properties.json containing property tax records of 10 Indian cities.
## 🧑‍💻 Author
```bash
Ganesh Modanwal
Frontend Developer
Tech Stack:
React.js • Next.js • Tailwind CSS • Node.js • MongoDB
