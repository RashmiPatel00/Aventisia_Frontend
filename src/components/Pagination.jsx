import { useState } from "react";
import "./Pagination.css";

export default function Pagination({ totalRows = 6 }) {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
  const currentPage = 1;

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span className="rows-count">{totalRows} rows</span>
      </div>

      <div className="pagination-controls">
        <div className="rows-per-page">
          <label>Rows per page</label>
          <select 
            className="rows-select"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="pagination-buttons">
          <span className="page-info">page {currentPage} of {totalPages}</span>
          <button className="pagination-btn" disabled={currentPage === 1}>
            ⟨
          </button>
          <button className="pagination-btn" disabled={currentPage === totalPages}>
            ⟩
          </button>
        </div>
      </div>
    </div>
  );
}
