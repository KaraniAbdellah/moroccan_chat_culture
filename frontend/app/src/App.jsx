import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gift from "./components/Gift";
import AtlasCommunity from "./components/AtlasCommunity";
import AtlasDatasetTable from "./components/AtlasDatasetTable";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <Router>
      <div
        className={`${isLightMode ? "light" : "dark"} relative min-h-screen overflow-hidden selection:bg-blue-100 transition-colors duration-500 ${
          isLightMode ? "text-slate-900" : "text-slate-100"
        }`}
        style={{ fontFamily: '"Playpen Sans Arabic", cursive' }}
      >
        {/* Dynamic Background Blur Gradients */}
        <div
          className={`fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none transition-all duration-500 ${
            isLightMode ? "bg-blue-100/50" : "bg-blue-950/20"
          }`}
        />
        <div
          className={`fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none transition-all duration-500 ${
            isLightMode ? "bg-cyan-100/40" : "bg-cyan-950/20"
          }`}
        />

        {/* Theme Toggle Button - Moved to bottom-right to protect the header layout */}
        <button
          onClick={() => setIsLightMode(!isLightMode)}
          className={`fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md border shadow-lg cursor-pointer hover:scale-105 transition-all duration-500 ${
            isLightMode
              ? "bg-white/80 border-slate-200 text-slate-800 shadow-slate-200/40"
              : "bg-slate-900/80 border-white/10 text-slate-200 shadow-black/50"
          }`}
        >
          {isLightMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        <Header isLightMode={isLightMode} />

        <main className="relative z-10 pt-20 pb-8">
          <Routes>
            <Route path="/" element={<Hero isLightMode={isLightMode} />} />
            <Route
              path="/community"
              element={<AtlasCommunity isLightMode={isLightMode} />}
            />
            <Route
              path="/dataset"
              element={<AtlasDatasetTable isLightMode={isLightMode} />}
            />
          </Routes>
        </main>

        <Gift isLightMode={isLightMode} />
      </div>
    </Router>
  );
}