import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// Snapshot Test for TodoList component
test("TodoList component snapshot", () => {
  const { container } = render(<TodoList />);
  expect(container).toMatchSnapshot();
});

// Smoke Test for TodoList component
test("TodoList component renders without errors, adds/removes todos", () => {
  const { getByText, getByPlaceholderText, queryByText } = render(
    <TodoList />
  );

  // Assert that the component renders without errors
  expect(getByText("Todo List")).toBeInTheDocument();

  // Simulate user input and form submission
  fireEvent.change(getByPlaceholderText("Todo"), {
    target: { value: "Example Todo" },
  });
  fireEvent.click(getByText("Add"));

  // Check if the todo is added
  expect(getByText("Example Todo")).toBeInTheDocument();

  // Simulate removing the todo
  fireEvent.click(getByText("X"));

  // Check if the todo is removed
  expect(queryByText("Example Todo")).toBeNull();
});
