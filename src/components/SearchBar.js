import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search-input">Video Search</label>
          <input
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            value={term}
            type="text"
            id="search-input"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
