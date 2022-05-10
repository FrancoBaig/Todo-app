import React from "react";
import { useTodo } from "../providers/todo-hooks";

function DeleteButton() {
    const [todoList, setTodoList] = useTodo();

    const deleteCompletedHandler = () => {
        setTodoList(todoList.filter((todo) => !todo.completed));
    };

    return (
        <div className="delete-section">
            <button className="delete-button" onClick={deleteCompletedHandler}>
                <i className="fas fa-trash"></i>
                delete all
            </button>
        </div>
    );
}

export default DeleteButton;
