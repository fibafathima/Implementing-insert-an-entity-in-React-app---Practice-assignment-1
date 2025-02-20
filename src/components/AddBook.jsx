import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" required />

        <label>Author:</label>
        <input type="text" required />

        <label>Description:</label>
        <textarea required></textarea>

        <label>Cover Image URL:</label>
        <input type="url" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;