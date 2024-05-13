import React from "react";
import userEvent from "@testing-library/user-event";
import { render, act, fireEvent } from "@testing-library/react";
import App from "../test1";

test("Test search should just show item b", async () => {
  const wrapper = render(<App />);
  const input = wrapper.getByTestId("searchbar-input-field");
  const searchButton = wrapper.getByTestId("searchbar-button");
  const grid = wrapper.getByTestId("grid");
  fireEvent.change(input, { target: { value: "B" } });
  fireEvent.click(searchButton);
  expect(grid.children.length).toBe(1);
});

test("Test search is not case sensitive", async () => {
  const wrapper = render(<App />);
  const input = wrapper.getByTestId("searchbar-input-field");
  const searchButton = wrapper.getByTestId("searchbar-button");
  const grid = wrapper.getByTestId("grid");
  fireEvent.change(input, { target: { value: "b" } });
  fireEvent.click(searchButton);
  expect(grid.children.length).toBe(1);
});

test("No items should be shown when searching 'show nothing'", async () => {
  const wrapper = render(<App />);
  const input = wrapper.getByTestId("searchbar-input-field");
  const searchButton = wrapper.getByTestId("searchbar-button");
  const grid = wrapper.getByTestId("grid");
  fireEvent.change(input, { target: { value: "show nothing" } });
  fireEvent.click(searchButton);
  expect(grid.children.length).toBe(0);
});

test("All items should be shown when searching 'item'", async () => {
  const wrapper = render(<App />);
  const input = wrapper.getByTestId("searchbar-input-field");
  const searchButton = wrapper.getByTestId("searchbar-button");
  const grid = wrapper.getByTestId("grid");
  fireEvent.change(input, { target: { value: "Item" } });
  fireEvent.click(searchButton);
  expect(grid.children.length).toBe(5);
});

test("Dropdown filter options should change number of entries shown", async () => {
  const wrapper = render(<App />);
  const grid = wrapper.getByTestId("grid");
  const input = wrapper.getByTestId("dropdown-toggle");
  await act(async () => {
    fireEvent.click(input);
  });
  const option0 = wrapper.getByTestId("dropdown-option-0");
  const option1 = wrapper.getByTestId("dropdown-option-1");
  await userEvent.click(option1);
  expect(grid.childElementCount).toBe(8);
  await userEvent.click(option0);
  expect(grid.childElementCount).toBe(5);
});

test("Dropdown filter options and search should change number of entries shown", async () => {
  const wrapper = render(<App />);
  const grid = wrapper.getByTestId("grid");
  const input = wrapper.getByTestId("dropdown-toggle");
  await act(async () => {
    fireEvent.click(input);
  });
  const option1 = wrapper.getByTestId("dropdown-option-1");
  await userEvent.click(option1);
  expect(grid.childElementCount).toBe(8);
  const searchInput = wrapper.getByTestId("searchbar-input-field");
  const searchButton = wrapper.getByTestId("searchbar-button");
  fireEvent.change(searchInput, { target: { value: "H" } });
  fireEvent.click(searchButton);
  expect(grid.childElementCount).toBe(1);
});
