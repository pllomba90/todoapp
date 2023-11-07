import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

// Smoke Test for Todo component
test("Todo component renders without errors and removes a todo", () => {
  const removeTodoMock = jest.fn();
  const { getByText } = render(
    <Todo id={1} todo="Example Todo" removeTodo={removeTodoMock} />
  );

  // Assert that the component renders without errors
  expect(getByText("Example Todo")).toBeInTheDocument();

  // Simulate removing the todo
  fireEvent.click(getByText("X"));

  // Check if the removeTodo function was called with the correct id
  expect(removeTodoMock).toHaveBeenCalledWith(1);
});
