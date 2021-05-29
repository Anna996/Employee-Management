import React, { useState } from "react";
import "./SearchComponent.css";

function SearchComponent({ searchBtn }) {
  const [select, setSelect] = useState("");
  const [input, setInput] = useState("");

  // The options: ID / First name / Last name.
  const handleSelected = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
  };

  // Tells the 'App.js' that the user wants to see a specific data.
  const handleClicked = (e) => {
    e.preventDefault();
    if (select !== "select" && input !== "") searchBtn({ type: select, input });
  };

  return (
    <form className="searchComponent ">
      <label className="col-form-label">Search By: </label>
      <select class="form-control" onChange={(e) => handleSelected(e)}>
        <option value="select">Select</option>
        <option value="id">ID</option>
        <option value="firstname"> First name</option>
        <option value="lastname">Last name</option>
      </select>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => handleClicked(e)}
      >
        Search
      </button>
    </form>
  );
}

export default SearchComponent;
