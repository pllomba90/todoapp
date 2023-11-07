import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// Snapshot Test for App component
test("App component snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

// Smoke Test for App component
test("App component renders without errors", () => {
  const { getByText } = render(<App />);

  // Assert that the component renders without errors
  expect(getByText("Todo List")).toBeInTheDocument(); // This assumes "Todo List" is present in TodoList
});
