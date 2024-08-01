import React, { useRef, useState, useEffect, useContext } from "react";
import "./Form.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faList } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const nameRef = useRef("");
  const dateRef = useRef("");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      name: nameRef.current.value,
      date: dateRef.current.value,
    };
    setEntries([...entries, newEntry]);
    nameRef.current.value = "";
    dateRef.current.value = "";
    alert("Task added!");
  };

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entries"));
    if (storedEntries) setEntries(storedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div className={`form-container ${theme}`}>
      <FontAwesomeIcon icon={faToggleOn} size="2x" onClick={toggleTheme} />
      <form onSubmit={handleSubmit} className="form">
        <h1>
          Todo List <FontAwesomeIcon icon={faList} />
        </h1>
        <div className="form-group">
          <label htmlFor="name">Task:</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="form-input"
            placeholder="Task"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            ref={dateRef}
            className="form-input"
            placeholder="Date"
          />
        </div>
        <button type="submit" className="form-button">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
