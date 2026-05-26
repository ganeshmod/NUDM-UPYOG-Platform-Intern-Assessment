import { useState } from "react";
import { FiSend } from "react-icons/fi";

const CITIES = ["Delhi", "Mumbai", "Pune", "Bengaluru", "Chennai", "Hyderabad", "Ahmedabad", "Kolkata", "Jaipur", "Lucknow"];
const API_KEY = "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";
const buildSummary = (data) => {
    console.log("DATA LENGTH:", data?.length); 
     if (!data || data.length === 0) return "No data available";
    return CITIES.map((city) => {
        const d = data.filter((p) => p.tenant === city);
        const collection = d.reduce((s, p) => s + p.collection_inr, 0);
        return `${city}: total=${d.length}, approved=${d.filter(p => p.status === "Approved").length}, rejected=${d.filter(p => p.status === "Rejected").length}, pending=${d.filter(p => p.status === "Pending").length}, collection=₹${Math.round(collection)}`;
    }).join("\n");
};

const AIAssistant = ({ data, selectedCity }) => {
    const [messages, setMessages] = useState([
        { role: "ai", text: "Hi! Ask me anything about the property data across all 10 cities." }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;
        const userMsg = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
        setLoading(true);

        const summary = buildSummary(data);
        const prompt = `You are a property tax data analyst for the UPYOG platform.
Here is the property data summary per city:
${summary}

Currently selected city filter: ${selectedCity}

Answer this question concisely: ${userMsg}`;

        try {
           const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
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
const json = await res.json();
console.log("Groq response:", json);
const reply = json.choices?.[0]?.message?.content || "Sorry, couldn't get a response.";
            setMessages((prev) => [...prev, { role: "ai", text: reply }]);
        } catch(err) {
                    console.log("CATCH ERROR:", err.message); 
            setMessages((prev) => [...prev, { role: "ai", text: "Error calling AI. Check your API key." }]);
        }
        setLoading(false);
    };

    return (
        <div className="bg-[#222222] border border-white/10 rounded-2xl flex flex-col" style={{ minHeight: 400 }}>
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-white font-medium text-sm">AI Property Assistant</span>
            </div>

            <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto" style={{ maxHeight: 320 }}>
                {messages.map((m, i) => (
                    <div key={i} className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed
            ${m.role === "user"
                            ? "self-end bg-emerald-600 text-white"
                            : "self-start bg-[#2d2d2d] text-gray-200"}`}>
                        {m.text}
                    </div>
                ))}
                {loading && (
                    <div className="self-start bg-[#2d2d2d] text-gray-400 px-4 py-2.5 rounded-2xl text-sm">
                        Thinking...
                    </div>
                )}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-3">
                <input
                    className="flex-1 bg-[#2d2d2d] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-emerald-500/50"
                    placeholder="Ask about the property data..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                    onClick={sendMessage}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl transition-colors"
                >
                    <FiSend />
                </button>
            </div>
        </div>
    );
};

export default AIAssistant;