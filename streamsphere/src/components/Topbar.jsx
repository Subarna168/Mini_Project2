import { FiMenu } from "react-icons/fi";

const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50 w-full">
      {/* Left Section: Hamburger + Logo + Brand */}
      <div className="flex items-center gap-3">
        {/* Hamburger Button with hover effect */}
        <button
          onClick={toggleSidebar}
          className="text-2xl text-gray-700 mr-2 p-2 rounded-full hover:bg-gray-200 transition duration-200 cursor-pointer focus:outline-none"
        >
          <FiMenu />
        </button>

        {/* Logo and Brand Name */}
        <img
          src="/streamsphere-logo.png"
          alt="StreamSphere Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-xl font-bold text-blue-700">StreamSphere</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-0 w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border px-4 py-1.5 rounded-l-full border-gray-300 text-sm focus:outline-none"
        />
        <button className="px-4 py-1.5 bg-gray-100 border border-l-0 rounded-r-full text-sm">
          🔍
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <button title="Create">➕</button>
        <button title="Notifications">🔔</button>
        <img
          src="https://i.pravatar.cc/30"
          alt="User"
          className="rounded-full w-8 h-8"
        />
      </div>
    </header>
  );
};

export default Topbar;
