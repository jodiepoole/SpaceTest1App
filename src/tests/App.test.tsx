import React from "react";
import userEvent from "@testing-library/user-event";
import { render, act, fireEvent } from "@testing-library/react";
import App from "../Test1";

describe("space tests", () => {
  let wrapper = null;

  function useSearchbar(searchTerm: string) {
    fireEvent.change(wrapper.getByTestId("searchbar-input-field"), {
      target: { value: searchTerm },
    });
    fireEvent.click(wrapper.getByTestId("searchbar-button"));
  }

  async function selectFromDropdown(id: number) {
    await act(async () => {
      fireEvent.click(wrapper.getByTestId("dropdown-toggle"));
    });
    await userEvent.click(wrapper.getByTestId(`dropdown-option-${id}`));
  }

  function expectGridEntries(numberOfEntries: number) {
    expect(wrapper.getByTestId("grid").childElementCount).toBe(numberOfEntries);
  }

  beforeEach(() => {
    wrapper = render(<App />);
  });

  afterAll(() => {
    wrapper = null;
  });

  test("Test search should just show item b", async () => {
    useSearchbar("B");
    expectGridEntries(1);
  });

  test("Test search is not case sensitive", async () => {
    useSearchbar("b");
    expectGridEntries(1);
  });

  test("No items should be shown when searching 'show nothing'", async () => {
    useSearchbar("show nothing");
    expectGridEntries(0);
  });

  test("All items should be shown when searching 'item'", async () => {
    useSearchbar("Item");
    expectGridEntries(5);
  });

  test("Dropdown filter options should change number of entries shown", async () => {
    await selectFromDropdown(1);
    expectGridEntries(8);
    await selectFromDropdown(0);
    expectGridEntries(5);
    expect(wrapper.queryByTestId("cell-item-h")).toBeNull();
    expect(wrapper.getByTestId("cell-item-a")).toBeVisible();
  });

  test("Dropdown filter options and search should change number of entries shown", async () => {
    await selectFromDropdown(1);
    expectGridEntries(8);
    useSearchbar("H");
    expectGridEntries(1);
    expect(wrapper.getByTestId("cell-item-h")).toBeVisible();
    expect(wrapper.queryByTestId("cell-item-a")).toBeNull();
  });

  test("Dropdown filter options and search should show nothing if no items match criteria", async () => {
    await selectFromDropdown(1);
    expectGridEntries(8);
    useSearchbar("H");
    await selectFromDropdown(0);
    expectGridEntries(0);
    expect(wrapper.queryByTestId("cell-item-h")).toBeNull();
    expect(wrapper.queryByTestId("cell-item-a")).toBeNull();
  });
});
