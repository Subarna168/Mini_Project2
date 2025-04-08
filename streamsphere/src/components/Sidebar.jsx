import { Link } from "react-router-dom";

const Sidebar = ({ isExpanded }) => {
  const menuItems = [
    { icon: "🏠", label: "Home", path: "/" },
    { icon: "🔥", label: "Shorts", path: "/shorts" },
    { icon: "📺", label: "Subscriptions", path: "/subscriptions" },
    { icon: "📚", label: "Library", path: "/library" },
    { icon: "🕓", label: "History", path: "/history" },
    { icon: "⬆️", label: "Upload", path: "/upload" }, 
  ];

  return (
    <aside
      className={`${
        isExpanded ? "w-60" : "w-20"
      } bg-white border-r p-4 sticky top-[56px] h-[calc(100vh-56px)] transition-all duration-300`}
    >
      <ul className="space-y-4 text-gray-700 font-medium">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center gap-4 hover:text-blue-600 transition"
            >
              <span className="text-lg">{item.icon}</span>
              {isExpanded && <span>{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
