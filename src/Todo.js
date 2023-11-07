import React from "react";


const Todo = ({id, todo, removeTodo}) => {

    const handleRemoveClick = () => {
        removeTodo(id);
      };
    

    return (
        <div>
            <ul>
                <li>
                    {todo}
                    <button onClick={handleRemoveClick}>X</button>
                </li>
            </ul>
        </div>
    )

}


export default Todo;