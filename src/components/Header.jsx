import "./Header.css";
import { useState } from "react";
import logo from "../assets/logo-worcspace.png";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-title-section">
        <div className="header-title">Worcspace</div>
        <div className="workspace-dropdown">
          <button
            className="dropdown-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Workspace 1
            <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Workspace 1</div>
              <div className="dropdown-item">Workspace 2</div>
              <div className="dropdown-item">Workspace 3</div>
            </div>
          )}
        </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="header-search"
      />

      <div className="header-icons">
        <div className="header-notification">
          <svg className="bell-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="notification-badge">2</span>
        </div>

        <div className="header-avatar">
          GK
        </div>
      </div>
    </div>
  );
}
