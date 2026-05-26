import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const CITIES = ["Delhi","Mumbai","Pune","Bengaluru","Chennai","Hyderabad","Ahmedabad","Kolkata","Jaipur","Lucknow"];

const ChartPage = ({ data }) => {
  const chartData = CITIES.map((city) => {
    const cityData = data.filter((p) => p.tenant === city);
    const collection = cityData.reduce((sum, p) => sum + p.collection_inr, 0);
    return { city: city.slice(0, 3), collection: Math.round(collection / 1000) };
  });

  return (
    <div className="bg-[#222222] border border-white/10 rounded-2xl p-6">
      <h2 className="text-white font-medium text-base mb-6">
        Total collection by city (in ₹ thousands)
      </h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={chartData} barSize={32}>
          <XAxis dataKey="city" stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 12 }} />
          <YAxis stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 12 }} />
          <Tooltip
            contentStyle={{ background: "#2d2d2d", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff" }}
            formatter={(v) => [`₹${v}k`, "Collection"]}
          />
          <Bar dataKey="collection" radius={[6, 6, 0, 0]}>
            {chartData.map((_, i) => (
              <Cell key={i} fill="#10b981" opacity={0.7 + (i % 3) * 0.1} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPage;