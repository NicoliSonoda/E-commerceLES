import React from 'react';
import './SearchBar.css'; 
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Pesquise por um nome" />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
