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
    <div className="search-bar-container d-flex border border-black my-2">
      <input
        className="bg-white"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch(searchTerm);
          }
        }}
        data-testid="searchbar-input-field"
      />
      <Button
        className="bg-white border-0"
        onClick={(e) => handleSearch(searchTerm)}
        data-testid="searchbar-button"
      >
        <SearchIcon className="d-flex align-self-center" />
      </Button>
    </div>
  );
}

export default SearchBar;
