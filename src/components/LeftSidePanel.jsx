import React from "react";
import {
  FiGrid,
  FiBarChart2,
  FiHome,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";

const LeftSidePanel= () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FiGrid />,
      active: true,
    },
    {
      name: "Analytics",
      icon: <FiBarChart2 />,
    },
    {
      name: "Properties",
      icon: <FiHome />,
    },
    {
      name: "AI Assistant",
      icon: <FiMessageSquare />,
    },
    {
      name: "Settings",
      icon: <FiSettings />,
    },
  ];

  return (
    <div className="w-[260px] min-h-screen bg-[#222222] border-r border-white/10 p-4">

      {/* Navigation */}
      <div className="mt-6 flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 text-left
              
              ${
                item.active
                  ? "bg-[#2d2d2d] text-white shadow-lg"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            <span className="text-xl">{item.icon}</span>

            <span className="font-medium text-[16px]">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};


export default LeftSidePanel;