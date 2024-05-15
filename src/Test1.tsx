import React, { useState, useEffect } from "react";
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

  function applyFilter(items: any[]) {
    return items.filter((o) => o.name.toLowerCase().includes(searchTerm));
  }

  function updateCells() {
    if (filterIndex === "0") setCells(applyFilter(dataByPrice));
    else setCells(applyFilter(data));
  }

  useEffect(() => {
    updateCells();
  }, [filterIndex, searchTerm]);

  async function handleDropdownSelect(eventKey: string | null) {
    if (eventKey === null) {
      //error
      return;
    }
    setFilterIndex(eventKey);
  }

  async function handleSearch(searchTermInput: string) {
    setSearchTerm(searchTermInput);
  }

  return (
    <div className="p-3 p-3">
      <div className="d-flex flex-wrap align-items-center mx-1 my-2">
        <FilterDropdown handleSelect={handleDropdownSelect} />
        <SearchBar handleSearch={handleSearch} />
      </div>
      <Grid cells={cells} />
    </div>
  );
};

export default Test;
