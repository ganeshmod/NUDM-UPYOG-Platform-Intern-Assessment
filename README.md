🏠 UPYOG Property Tax Analytics Dashboard

A responsive Property Tax Analytics Dashboard built using React.js for the NUDM UPYOG Platform Intern Assessment.

The dashboard helps analyze property tax data of multiple Indian cities using KPIs, charts, and an AI assistant.

✨ Features
📊 KPI Cards
Total Properties
Approved Properties
Rejected Properties
Total Collection
🌆 City Filter
Filter dashboard city-wise
📈 Comparison Chart
Collection comparison between cities using Recharts
🤖 AI Chat Assistant
Ask questions about the dataset in plain English
📱 Fully Responsive UI
🛠️ Tech Stack
React.js
Tailwind CSS
Recharts
React Icons
Gemini / Claude API
📂 Project Structure
src/
│
├── components/
│   ├── Header.jsx
│   ├── KPICards.jsx
│   ├── ChartPage.jsx
│   └── AIAssistant.jsx
│
├
│── properties.json
│
├── App.js
└── main.jsx
⚙️ Setup Instructions
1️⃣ Clone Repository
git clone <your-github-repo-link>
2️⃣ Install Dependencies
npm install
3️⃣ Create .env File
VITE_GEMINI_API_KEY=your_api_key

Add .env inside .gitignore.

4️⃣ Run Project
npm run dev
📦 Required Packages
npm install recharts react-icons
npm install @google/generative-ai
💡 AI Assistant Working
User asks a question
Dataset summary is sent to AI API
AI generates response
Answer is shown in chat UI
📁 Dataset

The project uses properties.json containing property tax records of 10 Indian cities.
🧑‍💻 Author
Ganesh Modanwal
Frontend Developer

Tech Stack:
React.js • Next.js • Tailwind CSS • Node.js • MongoDB
