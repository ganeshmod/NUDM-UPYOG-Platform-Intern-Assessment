import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const API_KEY = "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";

app.post('/api/chat', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [
                    { role: "user", content: prompt }
                ],
                max_tokens: 512
            }),
        });

        const json = await response.json();

        if (!response.ok) {
            console.error("Groq API error:", json);
            return res.status(response.status).json({ error: json.error?.message || 'API Error' });
        }

        res.json(json);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
