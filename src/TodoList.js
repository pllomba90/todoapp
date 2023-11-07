import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {

    const [todos, setTodo] = useState([]);
    const [nextId, setNextId] = useState(1); 

    const addTodo = (todo) => {
        setTodo(todos => [...todos, {id: nextId, todo}]);
        setNextId(nextId + 1);
    }

    const removeTodo = (id) => {
        setTodo((todos) => todos.filter((todo) => todo.id !== id));
      };

    return (
        <div>
            <h1>Todo List</h1>
            <NewTodoForm addTodo={addTodo}/>
            <div>
                {todos.map(({id, todo}) =>
                <Todo
                id={id}
                todo={todo}
                removeTodo={removeTodo}
                />)}
            </div>
        </div>
    )
}

export default TodoList;