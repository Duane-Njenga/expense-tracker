import React from "react";

function SearchBar({ search, setSearch }) {
  return (
<div className="search-bar">
  <span className="search-icon">🔍</span>
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search..."
    id="searchBar"
  />
</div>

    
  );
}

export default SearchBar;
