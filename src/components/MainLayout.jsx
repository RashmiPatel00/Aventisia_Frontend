import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Agents from "./Agents";
import KnowledgeBaseContent from "../pages/KnowledgeBase";
import "./MainLayout.css";

export default function MainLayout() {
  const [activeItem, setActiveItem] = useState("Knowledge Base");

  const renderContent = () => {
    switch (activeItem) {
      case "Agents":
        return <Agents />;
      case "Knowledge Base":
        return <KnowledgeBaseContent />;
      default:
        return <Agents />;
    }
  };

  return (
    <div className="main-layout">
      <Header />
      <div className="main-content-wrapper">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className="main-content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
