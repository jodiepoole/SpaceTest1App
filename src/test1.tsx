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

  function applyFilter(items: any[]) {
    return items.filter((o) => o.name.toLowerCase().includes(searchTerm));
  }

  async function handleDropdownSelect(eventKey: string | null) {
    if (eventKey === null) {
      //error
      return;
    }
    await setFilterIndex(eventKey);
    if (eventKey === "0") setCells(applyFilter(dataByPrice));
    else setCells(applyFilter(data));
  }

  async function handleSearch(searchTerm: string) {
    if (filterIndex === "0") {
      setCells(
        dataByPrice.filter((o) => o.name.toLowerCase().includes(searchTerm)),
      );
    } else {
      setCells(data.filter((o) => o.name.toLowerCase().includes(searchTerm)));
    }
    setSearchTerm(searchTerm);
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
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </div>
      <Grid cells={cells} />
    </div>
  );
};

export default Test;
