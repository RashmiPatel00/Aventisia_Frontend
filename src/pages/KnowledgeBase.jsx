import { useState } from "react";
import KnowledgeCard from "../components/KnowledgeCard";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import "./KnowledgeBase.css";

export default function KnowledgeBase() {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "14/07/2025" },
    { id: 2, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "14/07/2025" },
    { id: 3, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "14/07/2025" },
    { id: 4, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "14/07/2025" },
    { id: 5, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "14/07/2025" },
    { id: 6, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "14/07/2025" }
  ]);

  const handleCreateCard = (cardData) => {
    const newCard = {
      id: cards.length + 1,
      title: cardData.name,
      description: cardData.description,
      date: new Date().toLocaleDateString('en-GB')
    };
    setCards([...cards, newCard]);
    setOpen(false);
  };

  return (
    <div className="knowledge-base-content">
      <div className="knowledge-base-header">
        <h1 className="knowledge-base-title">Knowledge Base</h1>

        <div className="knowledge-base-header-right">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input type="text" placeholder="Search knowledge base..." className="search-input" />
          </div>

          <Button onClick={() => setOpen(true)}>
            + Create New
          </Button>
        </div>
      </div>

      <div className="knowledge-base-grid">
        {cards.map((card) => (
          <KnowledgeCard key={card.id} card={card} />
        ))}
      </div>

      <Pagination totalRows={cards.length} />

      <Modal isOpen={open} onClose={() => setOpen(false)} onCreateCard={handleCreateCard} />
    </div>
  );
}