import React, { useState } from "react";
import Grid from "./components/Grid.tsx";
import FilterDropdown from "./components/FilterDropdown.tsx";
import SearchBar from "./components/SearchBar.tsx";

const data = [
  { name: "Item A", price: 125 },
  { name: "Item B", price: 230 },
  { name: "Item C", price: 295 },
  { name: "Item D", price: 245 },
  { name: "Item E", price: 900 },
  { name: "Item F", price: 875 },
  { name: "Item G", price: 235 },
  { name: "Item H", price: 400 },
];

const dataByPrice = data
  .sort(function (firstPrice, secondPrice) {
    return firstPrice.price - secondPrice.price;
  })
  .slice(0, 5);

const Test = () => {
  const [cells, setCells] = useState(dataByPrice);
  const [filterIndex, setFilterIndex] = useState("0");
  const [searchTerm, setSearchTerm] = useState("");

  function applyFilter(items: any[], filter: string) {
    return items.filter((o) => o.name.toLowerCase().includes(filter));
  }

  function updateCells(index: string = filterIndex, filter: string = searchTerm) {
    if (index === "0") setCells(applyFilter(dataByPrice, filter));
    else setCells(applyFilter(data, filter));
  }

  async function handleDropdownSelect(eventKey: string | null) {
    if (eventKey === null) {
      //error
      return;
    }
    updateCells(eventKey);
    setFilterIndex(eventKey);
  }

  async function handleSearch(searchTermInput: string) {
    updateCells(filterIndex, searchTermInput);
    setSearchTerm(searchTermInput);
  }

  return (
    <div className="m-3 p-3">
      <div className="d-flex align-items-center my-2">
        <FilterDropdown
          data-testid="filter-dropdown"
          handleSelect={handleDropdownSelect}
        />
        <SearchBar
          data-testid="search-bar"
          handleSearch={handleSearch}
        />
      </div>
      <Grid cells={cells} />
    </div>
  );
};

export default Test;
