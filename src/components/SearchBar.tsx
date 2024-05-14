import React from "react";
import Button from "react-bootstrap/Button";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import "../styling/searchBar.scss";

type SearchBarProps = {
  handleSearch: (searchTerm: string) => void;
};

function SearchBar({
  handleSearch,
}: SearchBarProps) {
  return (
    <div className="search-bar-container d-flex justify-content-evenly bg-white">
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
