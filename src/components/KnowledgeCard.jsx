import "./KnowledgeCard.css";

export default function KnowledgeCard({ card }) {
  const cardData = card || {
    title: "Test",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "14/07/2025"
  };

  return (
    <div className="knowledge-card">
      <div className="knowledge-card-header">
        <h3 className="knowledge-card-title">{cardData.title}</h3>
        <span className="knowledge-card-menu">⋮</span>
      </div>

      <p className="knowledge-card-description">
        {cardData.description}
      </p>

      <p className="knowledge-card-date">
        Created On: {cardData.date}
      </p>
    </div>
  );
}