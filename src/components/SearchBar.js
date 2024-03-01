import React from 'react';
import './SearchBar.css'; // Import the CSS file for SearchBar styles

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search"

      />
      
    </div>
  );
}

export default SearchBar;

