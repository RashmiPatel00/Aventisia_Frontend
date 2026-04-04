import { useState } from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, onCreateCard }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (name.trim()) {
      onCreateCard({
        name: name,
        description: description || "No description provided"
      });
      setName("");
      setDescription("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <div className="modal-header">
          <h2 className="modal-title">Create New Knowledge Base</h2>
          <button onClick={onClose} className="modal-close-button">✕</button>
        </div>

        <input
          placeholder="Name"
          className="modal-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="modal-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select className="modal-select">
          <option>Vector Store</option>
        </select>

        <select className="modal-select">
          <option>LLM Embading Model</option>
        </select>

        <button className="modal-create-button" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}