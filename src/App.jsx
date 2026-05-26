import { useState } from "react";
import data from "./properties.json";
import Header from "./components/Header";
import LeftSidePanel from "./components/LeftSidePanel";
import KPICards from "./components/KPICards";
import ChartPage from "./components/ChartPage";
import AIAssistant from "./components/AIAssistant";

function App() {
  const [selectedCity, setSelectedCity] = useState("All Cities");

  return (
    <div className="flex flex-col h-screen bg-[#1a1a1a]">
      <Header selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidePanel />
        <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <KPICards data={data} selectedCity={selectedCity} />
          <ChartPage data={data} />
         
         <AIAssistant data={data} selectedCity={selectedCity} />
        </main>
      </div>
    </div>
  );
}

export default App;