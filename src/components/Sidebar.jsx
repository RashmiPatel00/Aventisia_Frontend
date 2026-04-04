import "./Sidebar.css";

const myProjects = [
  { name: "Agents", icon: "https://cdn-icons-png.flaticon.com/128/11681/11681328.png" },
  { name: "AI Models", icon: "https://cdn-icons-png.flaticon.com/128/16806/16806607.png" },
  { name: "Library", icon: "https://cdn-icons-png.flaticon.com/128/149/149345.png" }
];

const description = [
  { name: "Published", icon: "https://cdn-icons-png.flaticon.com/128/11907/11907579.png" },
  { name: "Machines", icon: "https://cdn-icons-png.flaticon.com/128/12032/12032752.png" },
  { name: "Queues", icon: "https://cdn-icons-png.flaticon.com/128/11220/11220153.png" },
  { name: "Triggers", icon: "https://cdn-icons-png.flaticon.com/128/165/165776.png" },
  { name: "Jobs", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135680.png" },
  { name: "Executions", icon: "https://cdn-icons-png.flaticon.com/128/9640/9640682.png" },
  { name: "Vault", icon: "https://cdn-icons-png.flaticon.com/128/2488/2488702.png" },
  { name: "Knowledge Base", icon: "https://cdn-icons-png.flaticon.com/128/1945/1945958.png" },
  { name: "Key Store", icon: "https://cdn-icons-png.flaticon.com/128/18510/18510871.png" }
];

const admin = [
  { name: "Tonant", icon: "https://cdn-icons-png.flaticon.com/128/1322/1322241.png" },
  { name: "Integration", icon: "https://cdn-icons-png.flaticon.com/128/12198/12198445.png" }
];

export default function Sidebar({ activeItem, setActiveItem }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-section">
        <h2 className="sidebar-title">MY PROJECTS</h2>
        <div className="sidebar-menu">
          {myProjects.map((item) => (
            <div
              key={item.name}
              className={`sidebar-menu-item${activeItem === item.name ? " active" : ""}`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.icon.startsWith('http') ? (
                <img src={item.icon} alt={item.name} className="sidebar-icon" />
              ) : (
                <span className="sidebar-icon">{item.icon}</span>
              )}
              <span className="sidebar-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title">DESCRIPTION</h2>
        <div className="sidebar-menu">
          {description.map((item) => (
            <div
              key={item.name}
              className={`sidebar-menu-item${activeItem === item.name ? " active" : ""}`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.icon.startsWith('http') ? (
                <img src={item.icon} alt={item.name} className="sidebar-icon" />
              ) : (
                <span className="sidebar-icon">{item.icon}</span>
              )}
              <span className="sidebar-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title">ADMIN</h2>
        <div className="sidebar-menu">
          {admin.map((item) => (
            <div
              key={item.name}
              className={`sidebar-menu-item${activeItem === item.name ? " active" : ""}`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.icon.startsWith('http') ? (
                <img src={item.icon} alt={item.name} className="sidebar-icon" />
              ) : (
                <span className="sidebar-icon">{item.icon}</span>
              )}
              <span className="sidebar-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}