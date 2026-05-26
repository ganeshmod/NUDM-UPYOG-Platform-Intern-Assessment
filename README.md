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

### 1️⃣ Clone The Repository

```bash
git clone <your-github-repo-link>
```

### 2️⃣ Open Project Folder

```bash
cd project-name
```

### 3️⃣ Install Dependencies

```bash
npm install
```

---

# 📦 Install Required Packages

```bash
npm install recharts react-icons
```

---

# 🔑 Generate AI API Key

Generate your API key from:

```bash
https://console.groq.com
```

---

# 🔐 Create `.env` File

Create a `.env` file in the root directory and add:

```env
VITE_GROQ_API_KEY=your_api_key
```

---

# 🚫 Add These In `.gitignore`

```gitignore
node_modules
.env
dist
```

---

# ▶️ Run The Project

```bash
npm run dev
```

Project will start on:

```bash
http://localhost:5173
```

---

# 💡 AI Assistant Workflow

- User asks a question
- Dataset summary is processed
- AI API generates a response
- Response is displayed in chat UI

---

# 📁 Dataset

The project uses `properties.json` containing property tax records of 10 Indian cities.

---

# 🧑‍💻 Author

## Ganesh Modanwal

Frontend Developer

### Tech Stack
- React.js
- Next.js
- Tailwind CSS
- Node.js
- MongoDB

---
