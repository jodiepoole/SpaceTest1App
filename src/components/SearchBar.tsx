import React from "react";
import Button from "react-bootstrap/Button";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import "../styling/searchBar.scss";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  handleSearch: (searchTerm: string) => void;
};

function SearchBar({
  searchTerm,
  setSearchTerm,
  handleSearch,
}: SearchBarProps) {
  return (
    <div className="search-bar-container d-flex border border-black mx-3">
      <input
        className="inner-searchbar bg-white px-2"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value.toLowerCase())}
        data-testid="searchbar-input-field"
      />
      <SearchIcon className="d-flex align-self-center m-2" />
    </div>
  );
}

export default SearchBar;
