import React, { useState } from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

function Table() {
  const navigate = useNavigate();
  const [storedEntries, setStoredEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );

  const handleDelete = (indexToDelete) => {
    const updatedEntries = storedEntries.filter(
      (_, index) => index !== indexToDelete
    );
    setStoredEntries(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="table-container">
      <button onClick={() => navigate("/form")} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h2>Stored Entries</h2>
      {storedEntries.length > 0 ? (
        <table className="stored-entries-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {storedEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.date}</td>
                <td>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No Tasks</h2>
      )}
    </div>
  );
}

export default Table;
