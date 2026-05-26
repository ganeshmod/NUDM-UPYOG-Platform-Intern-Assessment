import { FiHome, FiCheckCircle, FiXCircle, FiDollarSign } from "react-icons/fi";

const KPICards = ({ data, selectedCity }) => {
  const filtered = selectedCity === "All Cities"
    ? data
    : data.filter((p) => p.tenant === selectedCity);

  const total = filtered.length;
  const approved = filtered.filter((p) => p.status === "Approved").length;
  const rejected = filtered.filter((p) => p.status === "Rejected").length;
  const collection = filtered.reduce((sum, p) => sum + p.collection_inr, 0);

  const cards = [
    { label: "Total Properties", value: total, icon: <FiHome />, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Approved", value: approved, icon: <FiCheckCircle />, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Rejected", value: rejected, icon: <FiXCircle />, color: "text-red-400", bg: "bg-red-500/10" },
    { label: "Total Collection", value: `₹${(collection / 100000).toFixed(1)}L`, icon: <FiDollarSign />, color: "text-amber-400", bg: "bg-amber-500/10" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <div key={i} className="bg-[#222222] border border-white/10 rounded-2xl p-5">
          <div className="flex justify-between items-start mb-4">
            <p className="text-gray-400 text-sm">{card.label}</p>
            <div className={`${card.bg} ${card.color} p-2 rounded-xl text-xl`}>
              {card.icon}
            </div>
          </div>
          <p className="text-white text-3xl font-semibold">{card.value}</p>
          <p className="text-gray-500 text-xs mt-1">
            {selectedCity === "All Cities" ? "All cities" : selectedCity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default KPICards;