import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

type FilterProps = {
  handleSelect: (evt: string | null) => void;
};

function FilterDropdown({ handleSelect }: FilterProps) {
  return (
    <Dropdown
      onSelect={function (evt) {
        handleSelect(evt);
      }}
      className="py-1"
    >
      <Dropdown.Toggle data-testid="dropdown-toggle">
        Filter By...
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="0" data-testid="dropdown-option-0">
          Show 5 Cheapest
        </Dropdown.Item>
        <Dropdown.Item eventKey="1" data-testid="dropdown-option-1">
          Show all
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterDropdown;
