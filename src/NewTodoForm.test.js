import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

// Snapshot Test for NewTodoForm component
test("NewTodoForm component snapshot", () => {
  const { container } = render(<NewTodoForm addTodo={() => {}} />);
  expect(container).toMatchSnapshot();
});

// Smoke Test for NewTodoForm component
test("NewTodoForm component renders without errors and adds a new todo", () => {
  const addTodoMock = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <NewTodoForm addTodo={addTodoMock} />
  );

  // Assert that the component renders without errors
  expect(getByPlaceholderText("Todo")).toBeInTheDocument();
  expect(getByText("Add")).toBeInTheDocument();

  // Simulate user input and form submission
  fireEvent.change(getByPlaceholderText("Todo"), {
    target: { value: "Example Todo" },
  });
  fireEvent.click(getByText("Add"));

  // Check if the addTodo function was called with the correct todo
  expect(addTodoMock).toHaveBeenCalledWith("Example Todo");
});
