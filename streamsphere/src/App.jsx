import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Topbar stays at top */}
      <Topbar toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)} />

      {/* Sidebar and Main Content in a row */}
      <div className="flex">
        <Sidebar isExpanded={isSidebarExpanded} />
        <main className="flex-1 transition-all duration-300 p-1 px-4 py-2">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
